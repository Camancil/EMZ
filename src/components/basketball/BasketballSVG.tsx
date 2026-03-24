import React from "react";

type BasketballSVGProps = {
  size?: number;
  color?: string;
  opacity?: number;
};

export default function BasketballSVG({
  size = 620,
  color = "#FF5A1F",
  opacity = 0.07,
}: BasketballSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
      style={{
        opacity,
        animation: "basketball-rotate 60s linear infinite",
        transformOrigin: "50% 50%",
      }}
    >
      {/* Exterior */}
      <circle cx="150" cy="150" r="118" stroke={color} strokeWidth="2" opacity="0.9" />

      {/* Líneas curvas características */}
      <path
        d="M150 32
           C204 54 232 92 236 144
           C240 202 214 243 150 268
           C86 243 60 202 64 144
           C68 92 96 54 150 32Z"
        stroke={color}
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Arcos horizontales */}
      <path
        d="M66 126
           C94 97 121 82 150 78
           C180 82 206 97 234 126"
        stroke={color}
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M66 174
           C94 203 121 218 150 222
           C180 218 206 203 234 174"
        stroke={color}
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Vertical central “costura” */}
      <path
        d="M150 48
           C141 94 141 206 150 252"
        stroke={color}
        strokeWidth="2"
        opacity="0.9"
      />
    </svg>
  );
}

