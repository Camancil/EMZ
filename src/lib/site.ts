/** URL canónica del sitio. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://emz.cl";

/** ID de medición de Google Analytics 4. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-E497P629WN";

/** Dirección física (una sola fuente de verdad para mapa y footer). */
export const EMZ_ADDRESS = "Pedro Hemrick Ling 782, Ñuñoa, Santiago, Chile";
export const EMZ_STREET = "Pedro Hemrick Ling 782";
export const EMZ_COMUNA = "Ñuñoa";
export const EMZ_CITY = "Santiago";
export const EMZ_POSTAL_CODE = "7760301";
export const EMZ_GEO = { latitude: -33.4474, longitude: -70.5828 };

/** Teléfono de contacto (display). */
export const EMZ_PHONE_DISPLAY = "+56 9 9596 7873";
export const EMZ_PHONE_E164 = "+56995967873";

export const OG_IMAGE = "https://emz.cl/images/cancha-basketball-nunoa.jpg";
export const INSTAGRAM_URL = "https://instagram.com/emzsportandfitness";

const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP ?? "56995967873").replace(
  /\D/g,
  "",
);

export function whatsappUrl(text: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`;
}

/** Chat de WhatsApp con mensaje inicial de reserva. */
export const WHATSAPP_URL = whatsappUrl(
  "Hola, quiero reservar en EMZ Sport & Fitness",
);

const addressQuery = encodeURIComponent(EMZ_ADDRESS);

/** Abrir en la app / web de Google Maps. */
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

/** Abrir en Waze con la dirección y opción de navegar. */
export const WAZE_URL = `https://waze.com/ul?q=${addressQuery}&navigate=yes`;

/**
 * iframe de mapa (sin API key; búsqueda por dirección).
 * Si Google cambia el embed, se pueden sustituir por coordenadas o Embed API.
 */
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${addressQuery}&output=embed&z=16`;
