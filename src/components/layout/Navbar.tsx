"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import EmzLogo from "@/components/ui/EmzLogo";
import { WHATSAPP_URL } from "@/lib/site";
import ScoreBug from "@/components/basketball/ScoreBug";

const links = [
  { href: "/cancha", label: "CANCHA" },
  { href: "/#servicios", label: "REINTEGRO" },
  { href: "/#servicios", label: "ENTRENAMIENTO" },
  { href: "/#servicios", label: "SICOLOGÍA" },
  { href: "/#servicios", label: "NUTRICIÓN" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref = useMemo(() => {
    const p = pathname ?? "/";
    return links.find((l) => l.href === p)?.href ?? null;
  }, [pathname]);

  return (
    <header
      className={[
        "fixed left-0 top-0 z-[60] w-full transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-[rgba(255,90,31,0.45)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="EMZ Sport & Fitness"
          >
            <EmzLogo
              variant="white"
              preload
              className="h-14 w-14 object-contain md:h-16 md:w-16"
              sizes="64px"
            />
          </Link>
          <ScoreBug />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={[
                "font-display tracking-wide text-[15px] transition-colors",
                "text-chalk/80 hover:text-orange",
                l.href === activeHref ? "text-orange" : "",
              ].join(" ")}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2">
            <Button href={WHATSAPP_URL} variant="primary">
              RESERVAR
            </Button>
          </div>
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            href={WHATSAPP_URL}
            variant="primary"
            className="px-4 py-2 h-10 text-[13px]"
          >
            RESERVAR
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-chalk/90"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[80] h-full w-[86%] max-w-[420px] bg-black border-l border-[rgba(255,90,31,0.18)] p-5"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between">
                <EmzLogo
                  variant="white"
                  className="h-16 w-16 object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-chalk/90"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-7">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "font-display tracking-wide text-[34px] leading-none transition-colors",
                      "text-chalk/90 hover:text-orange",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-2">
                  <Button href={WHATSAPP_URL} variant="primary" className="w-full">
                    RESERVAR
                  </Button>
                </div>

                <div className="mt-8">
                  <ScoreBug />
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

