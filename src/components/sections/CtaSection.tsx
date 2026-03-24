import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { AGENDAPRO_RESERVAS_URL } from "@/lib/site";
import ContactForm from "@/components/sections/ContactForm";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;

export default function CtaSection() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 court-grid opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-[rgba(255,90,31,0.18)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-display text-orange text-[13px] tracking-wide">
                EMZ MODE
              </div>
              <h2 className="mt-2 font-display text-[46px] leading-none">
                ENTRA. JUEGA. MEJORA.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={AGENDAPRO_RESERVAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange px-6 py-3 text-black font-display tracking-wide hover:scale-[1.03] transition-transform"
              >
                RESERVAR
              </Link>
              <Link
                href={whatsapp ? `https://wa.me/${whatsapp}` : "https://wa.me/"}
                target="_blank"
                className="rounded-full border border-[rgba(255,90,31,0.7)] px-6 py-3 font-display tracking-wide text-chalk hover:bg-[rgba(255,90,31,0.08)] hover:scale-[1.03] transition-transform"
              >
                WHATSAPP →
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={90} className="mt-8">
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite] text-gray-200">
              <span className="font-mono text-xs mr-12">
                🏀 CANCHA 3x3 • REINTEGRO • BOX • MENTE GANADORA • NUTRICIÓN •
              </span>
              <span className="font-mono text-xs mr-12">
                🏀 CANCHA 3x3 • REINTEGRO • BOX • MENTE GANADORA • NUTRICIÓN •
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <RevealOnScroll delayMs={140}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="font-display text-orange text-[24px]">Pregunta sin miedo</div>
              <p className="mt-2 text-sm text-gray-200">
                Reserva tu cancha o consulta por reintegro, entrenamiento, sicología y
                nutrición deportiva. Te orientamos para que tu plan tenga sentido.
              </p>

              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                  <span className="text-gray-200">
                    Confirmación de disponibilidad por API con Supabase.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                  <span className="text-gray-200">
                    Slots con “ocupados” respetando reservas y bloqueos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                  <span className="text-gray-200">
                    Seguimiento y ajuste continuo en tu evolución.
                  </span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={180}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

