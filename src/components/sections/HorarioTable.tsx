import Link from "next/link";
import CourtLines from "@/components/basketball/CourtLines";
import { WHATSAPP_URL } from "@/lib/site";
import BasketballSVG from "@/components/basketball/BasketballSVG";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const days = [
  { label: "LUNES", open: true, hours: "09:00–21:30" },
  { label: "MARTES", open: true, hours: "09:00–21:30" },
  { label: "MIÉRCOLES", open: true, hours: "09:00–21:30" },
  { label: "JUEVES", open: true, hours: "09:00–21:30" },
  { label: "VIERNES", open: true, hours: "09:00–21:30" },
  { label: "SÁBADO", open: true, hours: "09:00–21:30" },
  { label: "DOMINGO", open: false, hours: "Cerrado" },
] as const;

export default function HorarioTable() {
  return (
    <section className="relative py-14 md:py-20">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 court-grid opacity-20" aria-hidden="true" />
      <CourtLines variant="threepoint" />
      <div className="pointer-events-none absolute left-[-120px] top-[-60px] opacity-20 hidden lg:block">
        <BasketballSVG size={360} opacity={0.04} />
      </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-display text-orange text-[13px] tracking-wide">
                HORARIOS
              </div>
              <h2 className="mt-2 font-display text-[40px] leading-none">
                CANCHA EN ACCIÓN
              </h2>
            </div>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-400 hover:text-orange transition-colors"
            >
              Elegir fecha →
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={90} className="mt-10">
          <div className="grid gap-4 md:grid-cols-7">
            {days.map((d) => (
              <div
                key={d.label}
                className={[
                  "relative rounded-2xl border bg-black/20 p-4",
                  d.open
                    ? "border-white/10"
                    : "border-white/5 text-gray-400",
                ].join(" ")}
              >
                <div className="font-mono text-xs uppercase text-gray-400">
                  {d.label}
                </div>
                <div
                  className={[
                    "mt-2 font-display text-[26px] leading-none",
                    d.open ? "text-orange" : "text-gray-600",
                  ].join(" ")}
                >
                  {d.open ? d.hours : "—"}
                </div>
                {!d.open ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="h-[2px] w-[70%] bg-[rgba(255,90,31,0.45)] rotate-[-18deg]"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={160} className="mt-10">
          <div className="rounded-2xl border border-[rgba(255,90,31,0.18)] bg-[rgba(255,90,31,0.04)] p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="font-mono text-sm text-gray-200">
                Lunes a Sábado: 09:00–21:30 · Domingo cerrado
              </div>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display tracking-wide text-orange hover:text-chalk transition-colors"
              >
                RESERVAR →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

