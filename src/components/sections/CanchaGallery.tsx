"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { CANCHA_PHOTOS } from "@/lib/cancha-gallery";

export default function CanchaGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i + CANCHA_PHOTOS.length - 1) % CANCHA_PHOTOS.length,
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % CANCHA_PHOTOS.length));
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : CANCHA_PHOTOS[active];

  return (
    <>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {CANCHA_PHOTOS.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
          >
            {photo.type === "video" ? (
              <div className="relative">
                <Image
                  src={photo.poster ?? photo.src}
                  alt={photo.alt}
                  width={439}
                  height={728}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/55 text-chalk backdrop-blur-sm">
                    <Play size={22} fill="currentColor" className="ml-0.5" />
                  </span>
                </span>
              </div>
            ) : (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.aspect === "portrait" ? 900 : 1600}
                height={photo.aspect === "portrait" ? 1350 : 1000}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-chalk/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {photo.caption}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-chalk hover:text-orange"
              aria-label="Cerrar galería"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-chalk hover:text-orange md:left-6"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-chalk hover:text-orange md:right-6"
              aria-label="Foto siguiente"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={current.src}
              className="relative max-h-[82vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {current.type === "video" ? (
                <video
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  playsInline
                  className="mx-auto h-auto max-h-[82vh] w-auto max-w-[min(100%,420px)] rounded-xl"
                >
                  {current.alt}
                </video>
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.aspect === "portrait" ? 900 : 1600}
                  height={current.aspect === "portrait" ? 1350 : 1000}
                  className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain"
                  sizes="90vw"
                />
              )}
              <div className="mt-4 text-center font-mono text-sm text-gray-200">
                {current.caption}
                <span className="ml-3 text-gray-400">
                  {(active ?? 0) + 1} / {CANCHA_PHOTOS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
