import type { Metadata } from "next";
import Link from "next/link";
import PilarContent from "@/components/sections/PilarContent";
import JsonLd from "@/components/seo/JsonLd";
import { getPilar } from "@/content/pilares";
import {
  breadcrumbJsonLd,
  buildMetadata,
  SEO_DESCRIPTION_RENDIMIENTO,
  SEO_TITLE_RENDIMIENTO,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE_RENDIMIENTO,
  description: SEO_DESCRIPTION_RENDIMIENTO,
  path: "/rendimiento",
});

const pilar = getPilar("rendimiento");

export default function RendimientoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({ name: "Rendimiento", path: "/rendimiento" })}
      />
      <PilarContent pilar={pilar}>
        <section className="mt-14 rounded-2xl border border-[rgba(255,90,31,0.15)] bg-[rgba(255,90,31,0.04)] px-6 py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-200">
              Cancha oficial 3x3 techada en Ñuñoa: mira el espacio, los horarios
              y los valores de arriendo.
            </div>
            <Link
              href="/cancha"
              className="font-display tracking-wide text-orange hover:text-chalk transition-colors"
            >
              VER LA CANCHA →
            </Link>
          </div>
        </section>
      </PilarContent>
    </>
  );
}
