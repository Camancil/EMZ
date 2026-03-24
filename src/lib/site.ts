/** Reserva de cancha (AgendaPro). */
export const AGENDAPRO_RESERVAS_URL =
  "https://agendapro.com/site/cl/emzsportandfitness/417453";

/** Dirección física (una sola fuente de verdad para mapa y footer). */
export const EMZ_ADDRESS = "Pedro Hemrick Ling 782, Ñuñoa, Santiago, Chile";

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
