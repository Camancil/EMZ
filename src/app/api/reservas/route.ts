import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdmin } from "@/lib/supabase";

const timeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Formato inválido (HH:mm)");

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(6),
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Formato inválido (YYYY-MM-DD)"),
  hora_inicio: timeSchema,
  hora_fin: timeSchema.optional(),
  tipo: z.enum(["arriendo", "personalizado", "grupal"]),
  notas: z.string().optional().nullable(),
});

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map((x) => Number(x));
  return h * 60 + m;
}

function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  // Rango semiabierto [start, end)
  return aStart < bEnd && aEnd > bStart;
}

function isAvailabilityPayload(
  value: unknown,
): value is { verificar_disponibilidad?: boolean; disponible?: boolean } {
  return typeof value === "object" && value !== null;
}

async function checkAvailability({
  supabase,
  fecha,
  hora_inicio,
  hora_fin,
}: {
  supabase: ReturnType<typeof createSupabaseAdmin>;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
}) {
  // Preferimos la función RPC si existe (cumple la especificación).
  try {
    const { data, error } = await supabase.rpc("verificar_disponibilidad", {
      fecha,
      hora_inicio,
      hora_fin,
    });

    if (!error) {
      if (typeof data === "boolean") return data;
      if (isAvailabilityPayload(data) && typeof data.verificar_disponibilidad === "boolean") {
        return data.verificar_disponibilidad;
      }
      if (isAvailabilityPayload(data) && typeof data.disponible === "boolean") {
        return data.disponible;
      }
    }
  } catch {
    // Fallback a cálculo local.
  }

  // Fallback: calcular overlaps contra reservas y bloqueos para la fecha.
  const slotStart = toMinutes(hora_inicio);
  const slotEnd = toMinutes(hora_fin);

  const [{ data: reservas }, { data: bloqueos }] = await Promise.all([
    supabase
      .from("reservas")
      .select("hora_inicio,hora_fin,estado")
      .eq("fecha", fecha)
      .neq("estado", "cancelada"),
    supabase
      .from("bloqueos")
      .select("hora_inicio,hora_fin"),
  ]);

  const reservaRows = (reservas ?? []) as Array<{
    hora_inicio: string;
    hora_fin: string;
    estado: string;
  }>;
  const blockRows = (bloqueos ?? []) as Array<{
    hora_inicio: string;
    hora_fin: string;
  }>;

  const isBusy = reservaRows.some((r) =>
    overlaps(
      slotStart,
      slotEnd,
      toMinutes(r.hora_inicio),
      toMinutes(r.hora_fin),
    ),
  );
  if (isBusy) return false;

  const isBlocked = blockRows.some((b) =>
    overlaps(
      slotStart,
      slotEnd,
      toMinutes(b.hora_inicio),
      toMinutes(b.hora_fin),
    ),
  );
  return !isBlocked;
}

export async function POST(req: Request) {
  const supabase = createSupabaseAdmin();

  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Datos inválidos", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const { fecha, hora_inicio, hora_fin: horaFinOpt, tipo, nombre, email, telefono, notas } =
      parsed.data;

    const hora_fin = horaFinOpt ?? (() => {
      const start = toMinutes(hora_inicio);
      const end = start + 60;
      const hh = String(Math.floor(end / 60)).padStart(2, "0");
      const mm = String(end % 60).padStart(2, "0");
      return `${hh}:${mm}`;
    })();

    const disponible = await checkAvailability({
      supabase,
      fecha,
      hora_inicio,
      hora_fin,
    });

    if (!disponible) {
      return NextResponse.json(
        { message: "Horario no disponible" },
        { status: 409 },
      );
    }

    const { data, error } = await supabase
      .from("reservas")
      .insert({
        nombre,
        email,
        telefono,
        fecha,
        hora_inicio,
        hora_fin,
        tipo,
        notas: notas ?? null,
        estado: "pendiente",
      })
      .select("id")
      .single<{ id: string }>();

    if (error) {
      return NextResponse.json(
        { message: error.message ?? "Error insertando reserva" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Reserva creada", id: data?.id ?? null },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ message: "Error inesperado" }, { status: 500 });
  }
}

