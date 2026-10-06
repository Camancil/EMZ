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
  descripcion: string;
  planes: Plan[];
};

export const PROGRAMAS: Programa[] = [
  {
    id: "basketball",
    nombre: "ENTRENAMIENTO PERSONALIZADO BASKETBALL",
    pilar: "RENDIMIENTO",
    pilarHref: "/rendimiento",
    accent: ACCENTS.rendimiento,
    descripcion:
      "Entrenamiento de básquetbol en cancha oficial 3x3: técnica, físico y juego, con entrenador y plan según tu nivel.",
    planes: [
      {
        id: "1-sesion",
        nombre: "Sesión individual",
        precio: 30000,
        detalle: "1 sesión",
        link: "[LINK_BASK_1]",
      },
      {
        id: "4-sesiones",
        nombre: "Programa 4 sesiones",
        precio: 112000,
        detalle: "$28.000 por sesión",
        link: "[LINK_BASK_4]",
      },
      {
        id: "10-sesiones",
        nombre: "Programa 10 sesiones",
        precio: 250000,
        detalle: "$25.000 por sesión · Ahorras $50.000",
        destacado: true,
        link: "[LINK_BASK_10]",
      },
    ],
  },
  {
    id: "longevidad",
    nombre: "CURSO LONGEVIDAD",
    pilar: "LONGEVIDAD",
    pilarHref: "/longevidad",
    accent: ACCENTS.longevidad,
    descripcion:
      "Programa de movimiento funcional y cuidado del cuerpo para estar mejor, con progresión guiada y sin dolor.",
    planes: [
      {
        id: "mensual",
        nombre: "Mensual",
        precio: 64000,
        detalle: "Pago mes a mes",
        link: "[LINK_LONG_MENSUAL]",
      },
      {
        id: "trimestral",
        nombre: "Trimestral",
        precio: 156000,
        detalle: "Equivale a $52.000/mes · Ahorras $36.000",
        destacado: true,
        link: "[LINK_LONG_TRIMESTRAL]",
      },
    ],
  },
];

/** Un link sigue sin configurar mientras sea un placeholder `[LINK_...]`. */
export function isPlaceholderLink(link: string) {
  return /^\[.*\]$/.test(link.trim());
}
