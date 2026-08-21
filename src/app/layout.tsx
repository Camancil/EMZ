import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppBubble from "@/components/layout/WhatsAppBubble";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { localBusinessJsonLd, SEO_DESCRIPTION_HOME, SEO_TITLE_HOME } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

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
        url: "https://emz.cl/images/cancha-basketball-nunoa.jpg",
        width: 1200,
        height: 630,
        alt: "Cancha de Basketball 3x3 EMZ Sport & Fitness — Ñuñoa, Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_HOME,
    description: SEO_DESCRIPTION_HOME,
    images: ["https://emz.cl/images/cancha-basketball-nunoa.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-black text-chalk`}
      >
        <JsonLd data={localBusinessJsonLd()} />
        <div className="relative z-0 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <WhatsAppBubble />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
