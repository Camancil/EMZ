import Link from "next/link";
import Image from "next/image";
import CourtLines from "@/components/basketball/CourtLines";
import BasketballSVG from "@/components/basketball/BasketballSVG";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { fetchInstagramMedia } from "@/lib/instagram";

export default async function InstagramFeed() {
  const media = await fetchInstagramMedia(9);

  return (
    <section className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 court-grid opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-140px] top-[-80px] opacity-20 hidden lg:block">
        <BasketballSVG size={360} opacity={0.06} />
      </div>
      <CourtLines variant="half" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-display text-orange text-[13px] tracking-wide">
                INSTAGRAM
              </div>
              <h2 className="mt-2 font-display text-[40px] leading-none">
                ÚLTIMOS MOVIMIENTOS
              </h2>
            </div>
            <Link
              href="https://instagram.com/emzsportandfitness"
              target="_blank"
              className="font-mono text-xs text-gray-400 hover:text-orange transition-colors"
            >
              @emzsportandfitness →
            </Link>
          </div>
        </RevealOnScroll>

        {media.length === 0 ? (
          <RevealOnScroll delayMs={80} className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-gray-200">
              Todavía no hay publicaciones disponibles o falta `INSTAGRAM_ACCESS_TOKEN`.
            </div>
          </RevealOnScroll>
        ) : (
          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {media.map((m) => (
              <a
                key={m.id}
                href={m.permalink}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <Image
                  src={m.media_url}
                  alt={m.caption ?? "Instagram post"}
                  fill
                  sizes="(max-width: 768px) 33vw, 280px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-2 left-2 right-2 text-[11px] font-mono text-chalk/90 opacity-0 transition-opacity group-hover:opacity-100">
                  {m.caption?.slice(0, 46) ?? "EMZ"}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

