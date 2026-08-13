import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { WHATSAPP_URL } from "@/lib/site";

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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange px-6 py-3 text-black font-display tracking-wide hover:scale-[1.03] transition-transform"
              >
                RESERVAR
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
      </div>
    </section>
  );
}
