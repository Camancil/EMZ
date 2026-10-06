import type { Metadata } from "next";
import PilarContent from "@/components/sections/PilarContent";
import JsonLd from "@/components/seo/JsonLd";
import { getPilar } from "@/content/pilares";
import {
  breadcrumbJsonLd,
  buildMetadata,
  SEO_DESCRIPTION_PROYECTOS,
  SEO_TITLE_PROYECTOS,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE_PROYECTOS,
  description: SEO_DESCRIPTION_PROYECTOS,
  path: "/proyectos",
});

const pilar = getPilar("proyectos");

export default function ProyectosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({ name: "Proyectos", path: "/proyectos" })}
      />
      <PilarContent pilar={pilar} />
    </>
  );
}
