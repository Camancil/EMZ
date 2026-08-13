import type { Metadata } from "next";
import Link from "next/link";
import CanchaGallery from "@/components/sections/CanchaGallery";
import CourtLines from "@/components/basketball/CourtLines";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbCanchaJsonLd,
  buildMetadata,
  CANCHA_FAQS,
  faqJsonLd,
  SEO_DESCRIPTION_CANCHA,
  SEO_TITLE_CANCHA,
} from "@/lib/seo";
import { EMZ_ADDRESS, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE_CANCHA,
  description: SEO_DESCRIPTION_CANCHA,
  path: "/cancha",
});

export default function CanchaPage() {
  return (
    <div className="relative overflow-hidden pt-24">
      <JsonLd data={faqJsonLd()} />
      <JsonLd data={breadcrumbCanchaJsonLd()} />
      <div
        className="pointer-events-none absolute inset-0 court-grid opacity-30"
        aria-hidden="true"
      />
      <CourtLines variant="threepoint" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <header className="max-w-3xl">
          <p className="font-display text-[13px] tracking-wide text-orange">
            CANCHA DE BÁSQUETBOL · ÑUÑOA, SANTIAGO
          </p>
          <h1 className="mt-3 font-display text-[46px] leading-none md:text-[64px]">
            CANCHA OFICIAL <span className="text-orange">3×3</span>
          </h1>
          <p className="mt-4 max-w-[62ch] text-sm text-gray-200 md:text-base">
            Cancha de basketball y básquetbol en Ñuñoa, Santiago. Arriendo de
            cancha oficial 3x3, entrenamiento personalizado y entrenador de
            básquetbol. Mira el espacio y reserva por WhatsApp.
          </p>
        </header>

        <div className="mt-10">
          <CanchaGallery />
        </div>

        <section className="mt-14" aria-labelledby="faq-cancha">
          <h2
            id="faq-cancha"
            className="font-display text-[32px] leading-none text-orange md:text-[40px]"
          >
            Preguntas frecuentes
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {CANCHA_FAQS.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <h3 className="font-display text-[22px] leading-none tracking-wide">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-gray-400">{EMZ_ADDRESS}</p>
        </section>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange px-6 py-3 font-display tracking-wide text-black transition-transform hover:scale-[1.03]"
          >
            RESERVAR CANCHA
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
