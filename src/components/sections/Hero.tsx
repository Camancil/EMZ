"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/site";
import CourtLines from "@/components/basketball/CourtLines";
import BasketballSVG from "@/components/basketball/BasketballSVG";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PartnerMarks from "@/components/ui/PartnerMarks";
import EmzLogo from "@/components/ui/EmzLogo";

const stats = [
  { value: 5, label: "Áreas", prefix: "", suffix: "" },
  { value: 3, label: "Cancha oficial", prefix: "", suffix: "×3" },
  { value: 1097, label: "Seguidores", prefix: "+", suffix: "" },
  { value: null as number | null, label: "Disponible", staticValue: "Lun–Sáb" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] nba-ribbon opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[3px] h-24 nba-ribbon-soft opacity-60 blur-xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 court-grid opacity-100" aria-hidden="true" />

      <CourtLines variant="threepoint" />

      <div className="absolute right-[-160px] top-[-90px] -z-0 opacity-100 hidden lg:block">
        <BasketballSVG size={720} opacity={0.04} />
      </div>

      <div
        className="pointer-events-none absolute -left-10 top-28 hidden opacity-[0.14] lg:block"
        aria-hidden="true"
      >
        <EmzLogo
          variant="blackTranslucent"
          decorative
          className="h-[420px] w-[420px] object-contain"
          sizes="420px"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:grid-cols-2 md:items-center md:gap-12 md:pb-24">
        <div className="relative z-10 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,90,31,0.7)] px-5 py-2 text-sm font-mono text-[rgba(255,90,31,0.95)]">
              <span aria-hidden="true">📍</span>
              ÑUÑOA, SANTIAGO
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 font-display tracking-wider text-[clamp(4rem,10vw,9rem)] leading-[0.88]"
          >
            <span className="text-chalk">ENTRENA.</span>{" "}
            <span className="text-orange">CRECE.</span>{" "}
            <span className="text-chalk">DIVIÉRTETE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-[46ch] text-[15px] font-[300] text-gray-200"
          >
            Cancha de basketball y básquetbol en Ñuñoa, Santiago. Cancha oficial
            3x3 techada, arriendo, entrenamiento personalizado y entrenador de
            básquetbol. Streetball, reintegro y preparación física.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Button href={WHATSAPP_URL} variant="primary">
              RESERVAR CANCHA →
            </Button>
            <Button href="#servicios" variant="outline">
              VER SERVICIOS
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                {typeof s.value === "number" ? (
                  <div className="text-[44px] font-display leading-[0.95] text-orange">
                    <AnimatedCounter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      durationMs={900 + idx * 120}
                    />
                  </div>
                ) : (
                  <div className="text-[36px] font-display leading-[0.95] text-orange">
                    {s.staticValue}
                  </div>
                )}
                <div className="mt-1 font-mono text-[11px] uppercase text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 order-1 md:order-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(255,90,31,0.22)] bg-black/20 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06] md:aspect-auto md:h-[min(520px,56vh)]">
            <Image
              src="/images/cancha-hero.png"
              alt="Cancha de basketball y básquetbol 3x3 en Ñuñoa, Santiago — EMZ Sport & Fitness"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent md:from-black/55"
              aria-hidden="true"
            />
            <div className="absolute left-5 top-5 md:left-6 md:top-6">
              <PartnerMarks className="scale-[1.15] origin-top-left md:scale-[1.25]" />
            </div>
            <div
              className="pointer-events-none absolute right-4 top-4 opacity-80 md:right-5 md:top-5"
              aria-hidden="true"
            >
              <EmzLogo
                variant="whiteTranslucent"
                decorative
                className="h-16 w-16 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] md:h-20 md:w-20"
                sizes="80px"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-auto">
              <Link
                href="/cancha"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,90,31,0.45)] bg-black/35 px-5 py-3 font-display tracking-wide text-chalk backdrop-blur-sm hover:border-[rgba(255,90,31,0.7)] hover:text-orange transition-colors"
              >
                Ver la cancha
                <span aria-hidden="true" className="text-orange">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

