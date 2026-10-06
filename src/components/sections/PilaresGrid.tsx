"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BasketballSVG from "@/components/basketball/BasketballSVG";
import CourtLines from "@/components/basketball/CourtLines";
import { PILARES } from "@/content/pilares";
import { WHATSAPP_URL } from "@/lib/site";

export default function PilaresGrid() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="pilares" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 court-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-120px] top-[-60px] opacity-20 hidden lg:block">
        <BasketballSVG size={520} opacity={0.03} />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative z-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="font-display tracking-wide text-orange text-[13px]">
                CANCHA OFICIAL 3×3 · ENTRENADOR · ÑUÑOA
              </div>
              <h2 className="mt-2 font-display text-[48px] leading-none">
                PILARES
              </h2>
            </div>
          </div>
        </div>

        <div ref={ref} className="relative z-10 mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p, idx) => (
            <div key={p.slug} className="relative">
              <motion.div
                className="group relative h-full overflow-hidden rounded-[8px] border bg-[rgba(255,255,255,0.02)]"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  borderColor: p.accent,
                  boxShadow: `0 0 0 1px ${p.accent}55, 0 18px 60px ${p.accent}25`,
                }}
              >
                <CourtLines variant="threepoint" />

                <Link href={p.href} className="block h-full">
                  <div className="relative flex h-full flex-col p-8">
                    <div
                      className="absolute bottom-4 right-4 select-none font-display text-[7rem] leading-[0.85] tracking-wide opacity-[0.04] group-hover:opacity-[0.09]"
                      style={{ color: p.accent }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </div>

                    <div
                      className="font-display tracking-wide text-[32px] leading-none"
                      style={{ color: p.accent }}
                    >
                      {p.nombre}
                    </div>

                    <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-gray-200/95">
                      {p.frase}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border px-3 py-1 text-xs text-gray-200/90"
                          style={{
                            borderColor: `${p.accent}33`,
                            background: `${p.accent}0D`,
                          }}
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <div
                        className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-2 text-xs font-mono text-gray-400"
                        style={{ borderColor: `${p.accent}55` }}
                      >
                        Ver {p.nombre.toLowerCase()} →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-10 rounded-2xl border border-[rgba(255,90,31,0.15)] bg-[rgba(255,90,31,0.04)] px-6 py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-sm text-gray-200">
              ¿Quieres reservar tu sesión? Escríbenos por WhatsApp.
            </div>
            <div className="mt-2 flex items-center gap-3">
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
        </div>
      </div>
    </section>
  );
}
