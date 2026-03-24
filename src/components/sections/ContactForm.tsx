"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";

const schema = z.object({
  nombre: z.string().min(2, "Tu nombre es requerido"),
  email: z.string().email("Email inválido"),
  servicio: z.string().min(2, "Selecciona un servicio"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mín. 10 caracteres)"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      servicio: "Cancha 3x3",
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus("loading");
      setServerMessage(null);

      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "No se pudo enviar el mensaje");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerMessage("Error de red. Intenta de nuevo.");
    }
  };

  return (
    <div className="rounded-2xl border border-[rgba(255,90,31,0.25)] bg-[rgba(255,90,31,0.04)] p-6">
      <div className="font-display text-[26px] leading-none">
        HABLEMOS DE TU OBJETIVO
      </div>
      <p className="mt-2 text-sm text-gray-200">
        Respuesta rápida para coordinar tu sesión.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm">
          <div className="font-display text-orange text-[20px]">Mensaje enviado</div>
          <div className="mt-2 text-gray-200">
            Gracias. Te contactaremos pronto para confirmar disponibilidad.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-mono text-gray-400">NOMBRE</label>
            <input
              {...register("nombre")}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-orange/60"
              placeholder="Tu nombre"
            />
            {errors.nombre ? (
              <div className="mt-1 text-xs text-orange">{errors.nombre.message}</div>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-xs font-mono text-gray-400">EMAIL</label>
            <input
              {...register("email")}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-orange/60"
              placeholder="tu@email.com"
            />
            {errors.email ? (
              <div className="mt-1 text-xs text-orange">{errors.email.message}</div>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-xs font-mono text-gray-400">SERVICIO</label>
            <select
              {...register("servicio")}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-orange/60"
            >
              <option>Cancha 3x3</option>
              <option>Reintegro deportivo</option>
              <option>Entrenamiento físico</option>
              <option>Sicología deportiva</option>
              <option>Nutrición deportiva</option>
            </select>
            {errors.servicio ? (
              <div className="mt-1 text-xs text-orange">{errors.servicio.message}</div>
            ) : null}
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-mono text-gray-400">MENSAJE</label>
            <textarea
              {...register("mensaje")}
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-orange/60"
              placeholder="Cuéntanos tu caso y qué necesitas lograr"
            />
            {errors.mensaje ? (
              <div className="mt-1 text-xs text-orange">{errors.mensaje.message}</div>
            ) : null}
          </div>

          {status === "error" && serverMessage ? (
            <div className="md:col-span-2 text-sm text-orange">{serverMessage}</div>
          ) : null}

          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <div className="text-xs font-mono text-gray-400">
              Al enviar, confirmas que deseas ser contactad@.
            </div>
            <Button
              type="submit"
              variant="primary"
              className="min-w-[160px]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "ENVIAR"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

