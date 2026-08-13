"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";

const INSTAGRAM_HANDLE = "emzsportandfitness";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

function cleanCaption(caption?: string) {
  const line = caption
    ?.split("\n")[0]
    ?.replace(/#\S+/g, "")
    ?.replace(/\s{2,}/g, " ")
    ?.trim();

  return line || "Ver en Instagram";
}

export default function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/instagram");
        if (!res.ok) throw new Error("feed");
        const data = (await res.json()) as { posts?: InstagramPost[] };
        if (!cancelled) {
          setPosts((data.posts ?? []).slice(0, 6));
          setStatus("ok");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 court-grid opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-1.5 text-sm font-medium text-white"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @{INSTAGRAM_HANDLE}
          </a>

          <h2 className="mt-5 font-display text-[40px] leading-none md:text-[46px]">
            ÚLTIMOS <span className="text-orange">MOVIMIENTOS</span>
          </h2>
          <p className="mt-3 text-sm text-gray-200 md:text-base">
            Cancha, entrenamiento y cultura EMZ en Instagram.
          </p>
        </motion.div>

        {status === "loading" ? (
          <div className="mt-12 flex justify-center py-16">
            <div
              className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-orange"
              aria-label="Cargando Instagram"
            />
          </div>
        ) : null}

        {status === "error" ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-gray-200">
            No pudimos cargar el feed. Síguenos en{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:underline"
            >
              @{INSTAGRAM_HANDLE}
            </a>
            .
          </div>
        ) : null}

        {status === "ok" && posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-gray-200">
            Todavía no hay publicaciones disponibles.
          </div>
        ) : null}

        {status === "ok" && posts.length > 0 ? (
          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {posts.map((post) => {
              const src =
                post.media_type === "VIDEO"
                  ? (post.thumbnail_url ?? post.media_url)
                  : post.media_url;

              return (
                <motion.a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={post.caption ?? "Publicación de Instagram"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="line-clamp-3 font-mono text-xs text-chalk/90">
                      {cleanCaption(post.caption)}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        ) : null}

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 font-display tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Ver más en Instagram
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
