/**
 * Programas con pago online por Mercado Pago.
 *
 * Cada programa tiene uno o más `planes`. `link` es el link de pago de Mercado
 * Pago: mientras siga siendo un placeholder tipo `[LINK_...]`, el botón PAGAR
 * cae al flujo de WhatsApp.
 *
 * `id` (programa) y `id` (plan) alimentan los atributos `data-programa` y
 * `data-plan` de los botones, que son los que se miden en GTM. Si los cambias,
 * actualiza también los triggers.
 */

import { ACCENTS } from "./pilares";

export type Plan = {
  /** Valor de `data-plan` en el botón PAGAR. */
  id: string;
  nombre: string;
  /** Precio en CLP, sin formato. */
  precio: number;
  detalle: string;
  /** Marca el plan con badge "MÁS CONVENIENTE", borde del pilar y botón relleno. */
  destacado?: boolean;
  link: string;
};

export type Programa = {
  /** Valor de `data-programa` en el botón PAGAR. */
  id: string;
  nombre: string;
  /** Pilar al que pertenece (se muestra como tag en la card). */
  pilar: string;
  pilarHref: string;
  accent: string;
  /** Afiche del programa, mostrado completo (sin recorte) en la card. */
  imagen: string;
  imagenAlt: string;
  descripcion: string;
  /** Días y horario fijo, si el programa lo tiene. */
  horario?: string;
  planes: Plan[];
};

export const PROGRAMAS: Programa[] = [
  {
    id: "basketball",
    nombre: "ENTRENAMIENTO PERSONALIZADO BASKETBALL",
    pilar: "RENDIMIENTO",
    pilarHref: "/rendimiento",
    accent: ACCENTS.rendimiento,
    imagen: "/images/programa-basketball.webp",
    imagenAlt:
      "Acondicionamiento deportivo y básquetbol en EMZ: preparación física juvenil, salto, velocidad y prevención de lesiones",
    descripcion:
      "Entrenamiento de básquetbol en cancha oficial 3x3: técnica, físico y juego, con entrenador y plan según tu nivel.",
    planes: [
      {
        id: "1-sesion",
        nombre: "Sesión individual",
        precio: 30000,
        detalle: "1 sesión",
        link: "https://mpago.la/1ZWXVas",
      },
      {
        id: "4-sesiones",
        nombre: "Programa 4 sesiones",
        precio: 112000,
        detalle: "$28.000 por sesión",
        link: "https://mpago.la/1rcppin",
      },
      {
        id: "10-sesiones",
        nombre: "Programa 10 sesiones",
        precio: 250000,
        detalle: "$25.000 por sesión · Ahorras $50.000",
        destacado: true,
        link: "https://mpago.la/2ACQKdE",
      },
    ],
  },
  {
    id: "woman-performance",
    nombre: "WOMAN PERFORMANCE",
    pilar: "RENDIMIENTO",
    pilarHref: "/rendimiento",
    accent: ACCENTS.rendimiento,
    imagen: "/images/programa-woman-performance.webp",
    imagenAlt:
      "EMZ Woman Performance: entrenamiento exclusivo para mujeres, martes y jueves de 19:00 a 20:00 en Ñuñoa",
    descripcion:
      "Un espacio de entrenamiento exclusivo para mujeres. Grupos reducidos con una profesora que te acompaña toda la sesión, con ejercicios adaptados a tu nivel para desarrollar fuerza, rendimiento y tonificación.",
    horario: "Martes y jueves · 19:00 a 20:00",
    planes: [
      {
        id: "mensual",
        nombre: "Mensualidad regular",
        precio: 64000,
        detalle: "Pago mes a mes",
        link: "https://mpago.la/1xmqWvD",
      },
      {
        id: "lanzamiento",
        nombre: "Valor de lanzamiento",
        precio: 141000,
        detalle: "Octubre, noviembre y diciembre · Ahorras $24.000",
        destacado: true,
        link: "[LINK_WOMAN_LANZAMIENTO]",
      },
    ],
  },
  {
    id: "longevidad",
    nombre: "CURSO ACTIVA LONGEVIDAD",
    pilar: "LONGEVIDAD",
    pilarHref: "/longevidad",
    accent: ACCENTS.longevidad,
    imagen: "/images/programa-activa-longevidad.webp",
    imagenAlt:
      "Activa+ EMZ Longevidad: clases de actividad física martes y jueves de 9:30 a 10:30 en Ñuñoa",
    descripcion:
      "Programa de movimiento funcional y cuidado del cuerpo para estar mejor, con progresión guiada y sin dolor.",
    horario: "Martes y jueves · 9:30 a 10:30",
    planes: [
      {
        id: "mensual",
        nombre: "Mensual",
        precio: 64000,
        detalle: "Pago mes a mes",
        link: "https://mpago.la/2Sm5yr3",
      },
      {
        id: "trimestral",
        nombre: "Trimestral",
        precio: 156000,
        detalle: "Equivale a $52.000/mes · Ahorras $36.000",
        destacado: true,
        link: "https://mpago.la/2LLFhLY",
      },
    ],
  },
];

/** Un link sigue sin configurar mientras sea un placeholder `[LINK_...]`. */
export function isPlaceholderLink(link: string) {
  return /^\[.*\]$/.test(link.trim());
}
