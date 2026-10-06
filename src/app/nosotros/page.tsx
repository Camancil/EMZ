import type { Metadata } from "next";
import Link from "next/link";
import CourtLines from "@/components/basketball/CourtLines";
import JsonLd from "@/components/seo/JsonLd";
import { NOSOTROS, PILARES } from "@/content/pilares";
import {
  breadcrumbJsonLd,
  buildMetadata,
  SEO_DESCRIPTION_NOSOTROS,
  SEO_TITLE_NOSOTROS,
} from "@/lib/seo";
import { EMZ_ADDRESS, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE_NOSOTROS,
  description: SEO_DESCRIPTION_NOSOTROS,
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <div className="relative overflow-hidden pt-24">
      <JsonLd data={breadcrumbJsonLd({ name: "Nosotros", path: "/nosotros" })} />
      <div
        className="pointer-events-none absolute inset-0 court-grid opacity-30"
        aria-hidden="true"
      />
      <CourtLines variant="threepoint" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <header className="max-w-3xl">
          <p className="font-display text-[13px] tracking-wide text-orange">
            ENTRENAR · DESARROLLAR · CONECTAR · CRECER
          </p>
          <h1 className="mt-3 font-display text-[46px] leading-none md:text-[64px]">
            {NOSOTROS.titulo}
          </h1>
          <p className="mt-4 max-w-[62ch] text-sm text-gray-200 md:text-base">
            {NOSOTROS.bajada}
          </p>
        </header>

        {NOSOTROS.parrafos.length > 0 ? (
          <div className="mt-10 max-w-[70ch] space-y-5">
            {NOSOTROS.parrafos.map((parrafo, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-gray-200 md:text-base">
                {parrafo}
              </p>
            ))}
          </div>
        ) : null}

        <section className="mt-14" aria-labelledby="pilares-nosotros">
          <h2
            id="pilares-nosotros"
            className="font-display text-[32px] leading-none text-orange md:text-[40px]"
          >
            Nuestros pilares
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PILARES.map((pilar) => (
              <Link
                key={pilar.slug}
                href={pilar.href}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/25"
              >
                <h3
                  className="font-display text-[26px] leading-none tracking-wide"
                  style={{ color: pilar.accent }}
                >
                  {pilar.nombre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {pilar.frase}
                </p>
              </Link>
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
            HABLAR POR WHATSAPP
          </Link>
          <Link
            href="/cancha"
            className="rounded-full border border-[rgba(255,90,31,0.7)] px-6 py-3 font-display tracking-wide text-chalk hover:bg-[rgba(255,90,31,0.08)]"
          >
            VER LA CANCHA
          </Link>
        </div>
      </div>
    </div>
  );
}
