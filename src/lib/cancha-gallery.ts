export type CanchaPhoto = {
  src: string;
  alt: string;
  caption: string;
  aspect: "landscape" | "portrait";
};

export const CANCHA_PHOTOS: CanchaPhoto[] = [
  {
    src: "/images/cancha-hero.png",
    alt: "Cancha de basketball 3x3 EMZ en Ñuñoa de noche, aro y tablero iluminados",
    caption: "Cancha de noche",
    aspect: "landscape",
  },
  {
    src: "/images/cancha-3x3.jpeg",
    alt: "Aro de cancha oficial 3x3 de básquetbol en Ñuñoa, Santiago",
    caption: "Aro 3x3",
    aspect: "portrait",
  },
  {
    src: "/images/cancha-basketball-nunoa.jpeg",
    alt: "Cancha de basketball al aire libre en Ñuñoa, Santiago, de día",
    caption: "Cancha de día",
    aspect: "landscape",
  },
  {
    src: "/images/cancha-basquetbol-nunoa.jpeg",
    alt: "Cancha de básquetbol 3x3 en Ñuñoa al atardecer con iluminación",
    caption: "Atardecer en la cancha",
    aspect: "landscape",
  },
  {
    src: "/images/emz-el-inicio.jpeg",
    alt: "Fachada de EMZ Sport & Fitness de noche",
    caption: "El inicio",
    aspect: "landscape",
  },
  {
    src: "/images/emz-1.jpeg",
    alt: "Acceso e interior de EMZ Sport & Fitness",
    caption: "Acceso EMZ",
    aspect: "portrait",
  },
  {
    src: "/images/entrenamiento-personalizado.jpeg",
    alt: "Entrenamiento personalizado y entrenador de básquetbol en la cancha EMZ Ñuñoa",
    caption: "Entrenamiento en cancha",
    aspect: "portrait",
  },
];
