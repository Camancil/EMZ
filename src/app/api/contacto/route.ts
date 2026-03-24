import { z } from "zod";
import { createSupabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  servicio: z.string().min(2),
  mensaje: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Datos inválidos", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdmin();

    const { error } = await supabase.from("contactos").insert({
      nombre: parsed.data.nombre,
      email: parsed.data.email,
      servicio: parsed.data.servicio,
      mensaje: parsed.data.mensaje,
    });

    if (error) {
      return NextResponse.json(
        { message: error.message ?? "Error insertando contacto" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Error inesperado" },
      { status: 500 },
    );
  }
}

