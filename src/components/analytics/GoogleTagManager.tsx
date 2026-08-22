import { GTM_CONTAINER_ID } from "@/lib/site";

/**
 * Contenedor de Google Tag Manager renderizado en el HTML del servidor.
 *
 * Se usan etiquetas <script> nativas en vez de next/script por la misma razón
 * que en GoogleAnalytics: el verificador de Google sólo lee el HTML inicial.
 */
export default function GoogleTagManager() {
  if (!GTM_CONTAINER_ID) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`,
      }}
    />
  );
}

/** Respaldo para navegadores sin JavaScript; debe ir apenas abre <body>. */
export function GoogleTagManagerNoScript() {
  if (!GTM_CONTAINER_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
