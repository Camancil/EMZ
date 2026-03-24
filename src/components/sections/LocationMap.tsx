import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
  EMZ_ADDRESS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  WAZE_URL,
} from "@/lib/site";

export default function LocationMap() {
  return (
    <section className="relative border-t border-[rgba(255,90,31,0.12)] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 court-grid opacity-15" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-display text-orange text-[13px] tracking-wide">
                UBICACIÓN
              </div>
              <h2 className="mt-2 font-display text-[40px] leading-none md:text-[46px]">
                CÓMO LLEGAR
              </h2>
              <p className="mt-3 max-w-xl font-mono text-sm text-gray-400">{EMZ_ADDRESS}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
              <Link
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,90,31,0.55)] bg-[rgba(255,90,31,0.08)] px-6 py-3 text-sm font-display tracking-wide text-chalk transition-colors hover:border-[rgba(255,90,31,0.85)] hover:bg-[rgba(255,90,31,0.14)]"
              >
                Google Maps
              </Link>
              <Link
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-display tracking-wide text-chalk transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                Waze
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={90} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[rgba(255,90,31,0.2)] bg-black/30 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.06]">
            <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
              <iframe
                title={`Mapa: ${EMZ_ADDRESS}`}
                src={GOOGLE_MAPS_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-gray-500">
            ¿No ves el mapa? Abre la ubicación en{" "}
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange/90 hover:text-orange"
            >
              Google Maps
            </Link>{" "}
            o{" "}
            <Link
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange/90 hover:text-orange"
            >
              Waze
            </Link>
            .
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
