/** Variantes del logo EMZ y su uso previsto en la UI. */
export const LOGOS = {
  /** Marca principal sobre fondos oscuros (navbar, footer). */
  white: "/images/logo-blanco.png",
  /** Marca sólida para fondos claros. */
  black: "/images/logo-negro.png",
  /** Marca suave para superponer sobre fotos o bloques oscuros. */
  whiteTranslucent: "/images/logo-blanco-traslucido.png",
  /** Marca muy sutil como marca de agua sobre negro. */
  blackTranslucent: "/images/logo-negro-traslucido.png",
  /** Recorte cuadrado / circular, versión clara. */
  iconWhite: "/images/logo-blanco-icono-512.jpg",
  /** Recorte cuadrado / circular, versión oscura. */
  iconBlack: "/images/logo-negro-icono-512.jpg",
} as const;

export type LogoVariant = keyof typeof LOGOS;

export const LOGO_INTRINSIC: Record<LogoVariant, { width: number; height: number }> =
  {
    white: { width: 4384, height: 4384 },
    black: { width: 4384, height: 4384 },
    whiteTranslucent: { width: 4384, height: 4384 },
    blackTranslucent: { width: 4384, height: 4384 },
    iconWhite: { width: 512, height: 512 },
    iconBlack: { width: 512, height: 512 },
  };
