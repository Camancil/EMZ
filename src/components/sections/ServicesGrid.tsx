"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BasketballSVG from "@/components/basketball/BasketballSVG";
import CourtLines from "@/components/basketball/CourtLines";
import { AGENDAPRO_RESERVAS_URL } from "@/lib/site";

const services = [
  {
    num: "01",
    href: "/cancha",
    title: "CANCHA 3×3",
    emoji: "🏀",
    color: "#FF5A1F",
    subtitle: "Arriendo techado + cultura streetball",
    description:
      "Cancha techada con iluminación LED. Disponible para arriendo libre, sesiones personalizadas y clases grupales.",
    items: [
      "Arriendo libre por hora",
      "Sesiones personalizadas con entrenador",
      "Clases grupales (mín. 4 personas)",
    ],
    details: [
      "Arriendo libre: desde $15.000/hr",
      "Personalizado: desde $25.000",
      "Grupal: desde $8.000/persona (mín. 4)",
    ],
  },
  {
    num: "02",
    href: "/reintegro",
    title: "REINTEGRO DEPORTIVO",
    emoji: "🩺",
    color: "#3B82F6",
    subtitle: "Vuelve al juego de forma segura",
    description:
      "Protocolo especializado para atletas en recuperación. Progresión controlada, técnica y gestión del dolor.",
    items: [
      "Re-educación del movimiento",
      "Masoterapia deportiva",
      "Ejercicios funcionales de rehabilitación",
    ],
    details: ["Re-educación del movimiento", "Masoterapia deportiva", "Rehabilitación funcional"],
  },
  {
    num: "03",
    href: "/entrenamiento",
    title: "ENTRENAMIENTO FÍSICO",
    emoji: "💪",
    color: "#10B981",
    subtitle: "Alto rendimiento para todos",
    description:
      "Entrenamiento con foco en fuerza, potencia, acondicionamiento y preparación física según tu nivel y objetivos.",
    items: [
      "Box: técnica y acondicionamiento",
      "Acondicionamiento físico general",
      "Preparación Física personalizada",
      "PF Grupal (clases colectivas)",
    ],
    details: ["Box", "Acondicionamiento general", "PF personalizada", "PF grupal"],
  },
  {
    num: "04",
    href: "/sicologia",
    title: "SICOLOGÍA DEPORTIVA",
    emoji: "🧠",
    color: "#8B5CF6",
    subtitle: "El juego empieza en la mente",
    description:
      "Entrenamiento cognitivo para atletas de todos los niveles. Gestión emocional, presión y hábitos para rendir mejor.",
    items: [
      "Entrenamiento cognitivo",
      "Gestión emocional en competencia",
      "Rendimiento bajo presión",
      "Hábitos y mentalidad ganadora",
    ],
    details: ["Cognitivo", "Emociones", "Presión", "Mentalidad"],
  },
  {
    num: "05",
    href: "/nutricion",
    title: "NUTRICIÓN DEPORTIVA",
    emoji: "🥗",
    color: "#F59E0B",
    subtitle: "Alimentación estratégica para rendir",
    description:
      "Nutrición orientada a maximizar tu rendimiento y recuperación. Plan y seguimiento continuo para ajustes en el camino.",
    items: [
      "Plan nutricional personalizado",
      "Suplementación deportiva",
      "Composición corporal",
      "Seguimiento y ajuste continuo",
    ],
    details: ["Plan personalizado", "Suplementación", "Composición corporal", "Seguimiento continuo"],
  },
] as const;

export default function ServicesGrid() {
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
    <section id="servicios" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 court-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-120px] top-[-60px] opacity-20 hidden lg:block">
        <BasketballSVG size={520} opacity={0.03} />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative z-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="font-display tracking-wide text-orange text-[13px]">
                CANCHA / STREET / RENDIMIENTO
              </div>
              <h2 className="mt-2 font-display text-[48px] leading-none">
                SERVICIOS
              </h2>
            </div>
          </div>
        </div>

        <div ref={ref} className="relative z-10 mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div key={s.num} className="relative">
              <motion.div
                className="group relative overflow-hidden rounded-[8px] border bg-[rgba(255,255,255,0.02)]"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  borderColor: s.color,
                  boxShadow: `0 0 0 1px ${s.color}55, 0 18px 60px ${s.color}25`,
                }}
              >
                <CourtLines variant="threepoint" />

                <div className="pointer-events-none absolute inset-0" />

                <Link href={s.href} className="block">
                  <div className="p-8 relative">
                    <div
                      className="absolute bottom-4 right-4 select-none font-display text-[7rem] leading-[0.85] tracking-wide opacity-[0.04] group-hover:opacity-[0.09]"
                      style={{ color: s.color }}
                      aria-hidden="true"
                    >
                      {s.num}
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="mt-1 text-[34px] leading-none"
                        aria-hidden="true"
                        style={{ color: s.color }}
                      >
                        {s.emoji}
                      </div>
                      <div>
                        <div className="font-display tracking-wide text-[22px] leading-none">
                          {s.title}
                        </div>
                        <div
                          className="mt-2 text-sm font-[300] text-gray-200"
                          style={{ color: s.color }}
                        >
                          {s.subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-gray-200/95">
                      {s.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm text-gray-200/90">
                          <span
                            className="mt-[6px] h-2 w-2 rounded-full"
                            style={{ background: s.color, opacity: 0.9 }}
                          />
                          {it}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <div
                        className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-2 text-xs font-mono text-gray-400"
                        style={{ borderColor: `${s.color}55` }}
                      >
                        Ver detalle →
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
              ¿Quieres reservar tu sesión? Elige fecha y horario en AgendaPro.
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Link
                href={AGENDAPRO_RESERVAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display tracking-wide text-orange hover:text-chalk transition-colors"
              >
                Reservar en AgendaPro →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

