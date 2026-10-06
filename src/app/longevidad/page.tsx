import type { Metadata } from "next";
import PilarContent from "@/components/sections/PilarContent";
import JsonLd from "@/components/seo/JsonLd";
import { getPilar } from "@/content/pilares";
import {
  breadcrumbJsonLd,
  buildMetadata,
  SEO_DESCRIPTION_LONGEVIDAD,
  SEO_TITLE_LONGEVIDAD,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE_LONGEVIDAD,
  description: SEO_DESCRIPTION_LONGEVIDAD,
  path: "/longevidad",
});

const pilar = getPilar("longevidad");

export default function LongevidadPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({ name: "Longevidad", path: "/longevidad" })}
      />
      <PilarContent pilar={pilar} />
    </>
  );
}
