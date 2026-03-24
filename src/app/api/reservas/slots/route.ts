import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdmin } from "@/lib/supabase";

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map((x) => Number(x));
  return h * 60 + m;
}

function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  return aStart < bEnd && aEnd > bStart;
}

function toHHMM(totalMinutes: number) {
  const hh = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const mm = String(totalMinutes % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

export async function GET(req: Request) {
  const supabase = createSupabaseAdmin();
  const url = new URL(req.url);
  const fechaRaw = url.searchParams.get("fecha");
  const parsed = dateSchema.safeParse(fechaRaw);
  if (!parsed.success) {
    return NextResponse.json({ message: "fecha inválida" }, { status: 400 });
  }

  const fecha = parsed.data;
  const slotStartMinutes = 9 * 60; // 09:00
  const slotEndMinutes = 21 * 60; // 21:00 (como límite de término)

  const reservasPromise = supabase
    .from("reservas")
    .select("hora_inicio,hora_fin,estado")
    .eq("fecha", fecha)
    .neq("estado", "cancelada");

  const bloqueosPromise = supabase
    .from("bloqueos")
    .select("hora_inicio,hora_fin")
    .eq("fecha", fecha);

  const [{ data: reservas }, { data: bloqueos }] = await Promise.all([
    reservasPromise,
    bloqueosPromise,
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

  const slots: Array<{ hora_inicio: string; hora_fin: string; disponible: boolean }> = [];

  for (let start = slotStartMinutes; start < slotEndMinutes; start += 60) {
    const end = start + 60;
    if (end > slotEndMinutes) break;
    const disponible = !reservaRows.some((r) =>
      overlaps(
        start,
        end,
        toMinutes(r.hora_inicio),
        toMinutes(r.hora_fin),
      ),
    ) && !blockRows.some((b) =>
      overlaps(start, end, toMinutes(b.hora_inicio), toMinutes(b.hora_fin)),
    );

    slots.push({
      hora_inicio: toHHMM(start),
      hora_fin: toHHMM(end),
      disponible,
    });
  }

  return NextResponse.json({ fecha, slots }, { status: 200 });
}

