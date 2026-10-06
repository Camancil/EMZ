/**
 * Contenido de los tres pilares de EMZ: RENDIMIENTO, PROYECTOS y LONGEVIDAD.
 *
 * Única fuente de verdad para las cards del home (`PilaresGrid`) y para las
 * páginas /rendimiento, /proyectos y /longevidad (`PilarContent`).
 *
 * `parrafos` y `servicios[].descripcion` son el texto largo de cada pilar:
 * pégalo acá y las páginas se actualizan solas. Los arrays vacíos y las
 * descripciones en blanco simplemente no se renderizan.
 */

/** Acentos de cada pilar (design system EMZ). */
export const ACCENTS = {
  rendimiento: "#FF5A1F",
  proyectos: "#F5F0E8",
  longevidad: "#8FAE8B",
} as const;

export type PilarSlug = keyof typeof ACCENTS;

export type Servicio = {
  nombre: string;
  /** Placeholder: descripción larga del servicio. */
  descripcion: string;
};

export type Pilar = {
  slug: PilarSlug;
  /** Jersey number de la card en el home. */
  num: string;
  nombre: string;
  accent: string;
  /** Frase corta de la card en el home. */
  frase: string;
  /** Chips de la card en el home. */
  chips: string[];
  href: string;
  /** Título del hero de la página del pilar. */
  titulo: string;
  /** Bajada del hero de la página del pilar. */
  bajada: string;
  /** Placeholder: cuerpo de texto de la página del pilar. */
  parrafos: string[];
  servicios: Servicio[];
};

export const PILARES: Pilar[] = [
  {
    slug: "rendimiento",
    num: "01",
    nombre: "RENDIMIENTO",
    accent: ACCENTS.rendimiento,
    frase: "Entrenar mejor y con un propósito.",
    chips: [
      "Cancha 3x3",
      "Entrenamiento personalizado",
      "Box",
      "Sicología deportiva",
      "Nutrición",
    ],
    href: "/rendimiento",
    titulo: "RENDIMIENTO",
    bajada: "Entrenar mejor y con un propósito.",
    parrafos: [],
    servicios: [
      {
        nombre: "Cancha 3x3",
        descripcion:
          "Cancha oficial 3x3 techada en Ñuñoa. Arriendo libre desde $15.000/hr, sesiones con entrenador desde $25.000 y clases grupales desde $8.000 por persona (mín. 4).",
      },
      {
        nombre: "Entrenamiento personalizado",
        descripcion:
          "Entrenamiento de fuerza, potencia y técnica según tu nivel, con entrenador de básquetbol y preparación física.",
      },
      {
        nombre: "Box",
        descripcion: "Box y acondicionamiento general, individual o en grupo.",
      },
      {
        nombre: "Sicología deportiva",
        descripcion:
          "Entrenamiento cognitivo, gestión emocional y rendimiento bajo presión para atletas de todos los niveles.",
      },
      {
        nombre: "Nutrición",
        descripcion:
          "Plan nutricional personalizado, suplementación, composición corporal y seguimiento continuo.",
      },
    ],
  },
  {
    slug: "proyectos",
    num: "02",
    nombre: "PROYECTOS",
    accent: ACCENTS.proyectos,
    frase: "Tu idea deportiva también necesita entrenamiento para crecer.",
    chips: ["Arriendo de cancha", "Espacio para entrenadores", "Academias"],
    href: "/proyectos",
    titulo: "PROYECTOS",
    bajada: "Tu idea deportiva también necesita entrenamiento para crecer.",
    parrafos: [],
    servicios: [
      { nombre: "Arriendo de cancha", descripcion: "" },
      { nombre: "Espacio para entrenadores", descripcion: "" },
      { nombre: "Academias", descripcion: "" },
    ],
  },
  {
    slug: "longevidad",
    num: "03",
    nombre: "LONGEVIDAD",
    accent: ACCENTS.longevidad,
    frase: "A veces el objetivo no es rendir más, es estar mejor.",
    chips: ["Reintegro deportivo", "Masoterapia", "Movimiento funcional"],
    href: "/longevidad",
    titulo: "LONGEVIDAD",
    bajada: "A veces el objetivo no es rendir más, es estar mejor.",
    parrafos: [],
    servicios: [
      {
        nombre: "Reintegro deportivo",
        descripcion:
          "Protocolo para atletas en recuperación: progresión controlada, re-educación del movimiento y gestión del dolor.",
      },
      {
        nombre: "Masoterapia",
        descripcion:
          "Masoterapia deportiva para descarga, recuperación y manejo de molestias.",
      },
      {
        nombre: "Movimiento funcional",
        descripcion:
          "Ejercicios funcionales para moverte mejor, sin dolor y con más autonomía.",
      },
    ],
  },
];

export function getPilar(slug: PilarSlug): Pilar {
  const pilar = PILARES.find((p) => p.slug === slug);
  if (!pilar) throw new Error(`Pilar desconocido: ${slug}`);
  return pilar;
}

/** Contenido de /nosotros. Mismo criterio: pega el texto en `parrafos`. */
export const NOSOTROS = {
  titulo: "NOSOTROS",
  bajada:
    "Una plataforma de desarrollo deportivo, personal y de proyectos en Ñuñoa.",
  parrafos: [] as string[],
};
