import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Etiqueta de Google (gtag.js) renderizada en el HTML del servidor.
 *
 * Se usan etiquetas <script> nativas en vez de next/script porque la estrategia
 * "afterInteractive" inyecta el script recién al hidratar, y el detector de
 * Google (y algunos crawlers) sólo leen el HTML inicial.
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  );
}
