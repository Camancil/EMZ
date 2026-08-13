import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppBubble from "@/components/layout/WhatsAppBubble";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJsonLd, SEO_DESCRIPTION_HOME, SEO_TITLE_HOME } from "@/lib/seo";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE_HOME,
    template: "%s | EMZ Sport & Fitness",
  },
  description: SEO_DESCRIPTION_HOME,
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
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: SEO_TITLE_HOME,
    description: SEO_DESCRIPTION_HOME,
    url: SITE_URL,
    siteName: "EMZ Sport & Fitness",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cancha de basketball 3x3 EMZ en Ñuñoa, Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_HOME,
    description: SEO_DESCRIPTION_HOME,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-chalk">
        <JsonLd data={localBusinessJsonLd()} />
        <div className="relative z-0 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <WhatsAppBubble />
      </body>
    </html>
  );
}
