"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Mark = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const marks: Mark[] = [
  {
    src: "/images/fiba-3x3.png",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/fiba-3x3.jpg",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/fiba-3x3.jpeg",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/fiba-3x3.jfif",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/fiba-3x3.svg",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/partners/fiba-3x3.png",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
  {
    src: "/images/partners/fiba-3x3.svg",
    alt: "Logo FIBA 3x3",
    width: 220,
    height: 72,
    className: "h-12 w-auto opacity-100",
  },
];

export default function PartnerMarks({ className }: { className?: string }) {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  const visibleMarks = useMemo(
    () => marks.filter((m) => !hidden[m.src]),
    [hidden],
  );

  if (visibleMarks.length === 0) {
    return (
      <div
        className={[
          "inline-flex items-center gap-3 rounded-full border border-[rgba(255,90,31,0.35)] bg-black/55 px-4 py-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur-sm",
          className ?? "",
        ].join(" ")}
      >
        <span className="nba-ribbon h-3 w-3 rounded-full" aria-hidden="true" />
        <span className="font-mono text-[13px] uppercase tracking-wide text-chalk/90">
          3x3
        </span>
      </div>
    );
  }

  return (
    <div
      className={[
        "inline-flex items-center gap-3 rounded-full border border-[rgba(255,90,31,0.35)] bg-black/55 px-4 py-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur-sm",
        className ?? "",
      ].join(" ")}
    >
      <span className="nba-ribbon h-3 w-3 rounded-full" aria-hidden="true" />
      {visibleMarks.map((m) => (
        <Image
          key={m.src}
          src={m.src}
          alt={m.alt}
          width={m.width}
          height={m.height}
          className={m.className}
          onError={() => setHidden((prev) => ({ ...prev, [m.src]: true }))}
        />
      ))}
    </div>
  );
}

