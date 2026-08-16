import type { Metadata } from "next";
import { LOGOS } from "@/lib/brand";
import {
  EMZ_CITY,
  EMZ_COMUNA,
  EMZ_GEO,
  EMZ_PHONE_E164,
  EMZ_POSTAL_CODE,
  EMZ_STREET,
  INSTAGRAM_URL,
  OG_IMAGE,
  SITE_URL,
} from "@/lib/site";

export const SEO_TITLE_HOME =
  "Cancha de Basketball Ñuñoa | Oficial 3x3 y Entrenador | EMZ";

export const SEO_DESCRIPTION_HOME =
  "Cancha de basketball y básquetbol en Ñuñoa, Santiago. Cancha oficial 3x3, arriendo, entrenamiento personalizado y entrenador de básquetbol. Reserva en EMZ.";

export const SEO_TITLE_CANCHA =
  "Cancha de Basketball Ñuñoa · Oficial 3x3";

export const SEO_DESCRIPTION_CANCHA =
  "Cancha oficial 3x3 en Ñuñoa, Santiago: arriendo de cancha de basketball y básquetbol, entrenamiento personalizado y entrenador. Galería y reserva por WhatsApp.";

const ogImage = {
  url: OG_IMAGE,
  width: 1200,
  height: 630,
  alt: "Cancha de Basketball 3x3 EMZ Sport & Fitness — Ñuñoa, Santiago",
};

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const absoluteTitle = path ? `${title} | EMZ Sport & Fitness` : title;

  return {
    title,
    description,
    keywords: [
      "cancha de basketball Ñuñoa",
      "cancha de básquetbol Ñuñoa",
      "cancha de basquetbol Ñuñoa",
      "cancha oficial 3x3",
      "cancha 3x3 Santiago",
      "cancha basketball Santiago",
      "entrenamiento personalizado",
      "entrenador básquetbol",
      "entrenador basquetbol Ñuñoa",
      "arriendo cancha 3x3",
      "EMZ Sport & Fitness",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: "EMZ Sport & Fitness",
      locale: "es_CL",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export const CANCHA_FAQS = [
  {
    question: "¿Dónde hay una cancha de basketball en Ñuñoa?",
    answer: `En EMZ Sport & Fitness, ${EMZ_STREET}, ${EMZ_COMUNA}, ${EMZ_CITY}. Cancha de basketball y básquetbol techada, lista para arriendo y entrenamiento.`,
  },
  {
    question: "¿Tienen cancha oficial 3x3?",
    answer:
      "Sí. Contamos con cancha oficial 3x3, iluminación LED y arriendo por hora en Ñuñoa, Santiago. También hay sesiones con entrenador y clases grupales.",
  },
  {
    question: "¿Hacen entrenamiento personalizado con entrenador de básquetbol?",
    answer:
      "Sí. Ofrecemos entrenamiento personalizado y entrenador de básquetbol para técnica, físico y rendimiento, además de box y preparación física.",
  },
] as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness", "SportsClub"],
    name: "EMZ Sport & Fitness",
    alternateName: ["EMZ", "EMZ Ñuñoa"],
    description: SEO_DESCRIPTION_HOME,
    url: SITE_URL,
    telephone: EMZ_PHONE_E164,
    email: undefined,
    logo: `${SITE_URL}${LOGOS.white}`,
    image: [OG_IMAGE, `${SITE_URL}${LOGOS.white}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: EMZ_STREET,
      addressLocality: EMZ_COMUNA,
      addressRegion: "Región Metropolitana",
      postalCode: EMZ_POSTAL_CODE,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: EMZ_GEO.latitude,
      longitude: EMZ_GEO.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Ñuñoa" },
      { "@type": "City", name: "Santiago" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:30",
      },
    ],
    sameAs: [INSTAGRAM_URL],
    priceRange: "$$",
    sport: ["Basketball", "3x3 Basketball"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios EMZ",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arriendo cancha oficial 3x3",
            areaServed: "Ñuñoa, Santiago",
            description:
              "Cancha de basketball y básquetbol 3x3 en Ñuñoa para arriendo por hora.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entrenamiento personalizado",
            description:
              "Entrenamiento personalizado de básquetbol y preparación física.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entrenador de básquetbol",
            description:
              "Entrenador de básquetbol en Santiago para técnica, físico y rendimiento.",
          },
        },
      ],
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CANCHA_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbCanchaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cancha de basketball Ñuñoa",
        item: `${SITE_URL}/cancha`,
      },
    ],
  };
}
