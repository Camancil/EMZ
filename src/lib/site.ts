/** Dirección física (una sola fuente de verdad para mapa y footer). */
export const EMZ_ADDRESS = "Pedro Hemrick Ling 782, Ñuñoa, Santiago, Chile";

/** Teléfono de contacto (display). */
export const EMZ_PHONE_DISPLAY = "+56 9 9596 7873";

const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP ?? "56995967873").replace(
  /\D/g,
  "",
);

const whatsappText = encodeURIComponent(
  "Hola, quiero reservar en EMZ Sport & Fitness",
);

/** Chat de WhatsApp con mensaje inicial. */
export const WHATSAPP_URL = `https://wa.me/${whatsappDigits}?text=${whatsappText}`;

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
