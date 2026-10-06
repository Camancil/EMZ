import type { ReactNode } from "react";
import Link from "next/link";
import CourtLines from "@/components/basketball/CourtLines";
import type { Pilar } from "@/content/pilares";
import { EMZ_ADDRESS, whatsappUrl } from "@/lib/site";

type PilarContentProps = {
  pilar: Pilar;
  /** Bloques extra (links relacionados, galerías, etc.) antes del CTA. */
  children?: ReactNode;
};

export default function PilarContent({ pilar, children }: PilarContentProps) {
  return (
    <div className="relative overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute inset-0 court-grid opacity-30"
        aria-hidden="true"
      />
      <CourtLines variant="threepoint" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <header className="max-w-3xl">
          <p
            className="font-display text-[13px] tracking-wide"
            style={{ color: pilar.accent }}
          >
            PILAR {pilar.num} · ÑUÑOA, SANTIAGO
          </p>
          <h1 className="mt-3 font-display text-[46px] leading-none md:text-[64px]">
            <span style={{ color: pilar.accent }}>{pilar.titulo}</span>
          </h1>
          <p className="mt-4 max-w-[62ch] text-sm text-gray-200 md:text-base">
            {pilar.bajada}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {pilar.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border px-3 py-1 text-xs text-gray-200/90"
                style={{
                  borderColor: `${pilar.accent}33`,
                  background: `${pilar.accent}0D`,
                }}
              >
                {chip}
              </li>
            ))}
          </ul>
        </header>

        {pilar.parrafos.length > 0 ? (
          <div className="mt-10 max-w-[70ch] space-y-5">
            {pilar.parrafos.map((parrafo, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-gray-200 md:text-base">
                {parrafo}
              </p>
            ))}
          </div>
        ) : null}

        {pilar.servicios.length > 0 ? (
          <section className="mt-14" aria-labelledby={`servicios-${pilar.slug}`}>
            <h2
              id={`servicios-${pilar.slug}`}
              className="font-display text-[32px] leading-none md:text-[40px]"
              style={{ color: pilar.accent }}
            >
              Qué incluye
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pilar.servicios.map((servicio) => (
                <article
                  key={servicio.nombre}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <h3 className="font-display text-[22px] leading-none tracking-wide">
                    {servicio.nombre}
                  </h3>
                  {servicio.descripcion ? (
                    <p className="mt-3 text-sm leading-relaxed text-gray-200">
                      {servicio.descripcion}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-gray-400">{EMZ_ADDRESS}</p>
          </section>
        ) : null}

        {children}

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href={whatsappUrl(`Hola, quiero más info sobre ${pilar.nombre} en EMZ`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 font-display tracking-wide text-black transition-transform hover:scale-[1.03]"
            style={{ background: pilar.accent }}
          >
            HABLAR POR WHATSAPP
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[rgba(255,90,31,0.7)] px-6 py-3 font-display tracking-wide text-chalk hover:bg-[rgba(255,90,31,0.08)]"
          >
            VOLVER
          </Link>
        </div>
      </div>
    </div>
  );
}
