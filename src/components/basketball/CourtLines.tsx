import React from "react";

type CourtLinesProps = {
  variant?: "full" | "half" | "threepoint";
  color?: string;
};

export default function CourtLines({
  variant = "full",
  color = "rgba(255,90,31,0.05)",
}: CourtLinesProps) {
  // viewBox para coordenadas “de cancha” (orientado en 1000x600)
  const showHalf = variant === "half";
  const showThree = variant === "threepoint";

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-0"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1" fill="none" opacity="1">
        {/* Rectángulo exterior */}
        {!showHalf && !showThree ? <rect x="50" y="40" width="900" height="520" /> : null}

        {/* Líneas base para variantes */}
        {showHalf ? (
          <rect x="50" y="300" width="900" height="260" />
        ) : null}
        {showThree ? (
          <rect x="50" y="40" width="900" height="520" opacity="0.7" />
        ) : null}

        {/* Línea de medio campo */}
        {!showHalf && !showThree ? <line x1="500" y1="40" x2="500" y2="560" /> : null}

        {/* Círculo central */}
        {!showHalf && !showThree ? <circle cx="500" cy="300" r="64" /> : null}

        {/* Zona pintada / llave */}
        <path
          d="M175 140
             Q175 300 175 460
             L225 460
             Q225 300 225 140
             Z"
        />
        <path
          d="M825 140
             Q825 300 825 460
             L775 460
             Q775 300 775 140
             Z"
        />

        {/* Arco de 3 puntos (aprox) */}
        <path d="M105 300 A395 395 0 0 0 220 120" />
        <path d="M895 300 A395 395 0 0 1 780 120" />

        {/* Si es “half”, recortamos visualmente */}
        {showHalf ? (
          <>
            <line x1="500" y1="300" x2="500" y2="560" opacity="0.9" />
            <path d="M105 300 A395 395 0 0 0 220 560" opacity="0.9" />
            <path d="M895 300 A395 395 0 0 1 780 560" opacity="0.9" />
          </>
        ) : null}
      </g>
    </svg>
  );
}

