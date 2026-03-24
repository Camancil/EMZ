import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emzsportandfitness.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EMZ Sport & Fitness",
    template: "%s | EMZ Sport & Fitness",
  },
  description:
    "Cancha basketball Ñuñoa, arriendo 3x3, reintegro deportivo, entrenamiento físico, sicología deportiva y nutrición para maximizar tu rendimiento.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EMZ Sport & Fitness",
    description:
      "Cancha basketball Ñuñoa, arriendo 3x3, reintegro deportivo, entrenamiento, sicología y nutrición deportiva.",
    url: siteUrl,
    siteName: "EMZ Sport & Fitness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMZ Sport & Fitness",
    description:
      "Cancha basketball Ñuñoa, arriendo 3x3, reintegro deportivo, entrenamiento, sicología y nutrición deportiva.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-chalk">
        <div className="relative z-0 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
