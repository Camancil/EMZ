import Link from "next/link";
import EmzLogo from "@/components/ui/EmzLogo";
import { EMZ_ADDRESS, EMZ_PHONE_DISPLAY, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {

  return (
    <footer className="relative z-10 border-t border-[rgba(255,90,31,0.15)] bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="EMZ Sport & Fitness">
              <EmzLogo
                variant="white"
                className="h-20 w-20 object-contain md:h-24 md:w-24"
                sizes="96px"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-200">
              Cancha de basketball y básquetbol en Ñuñoa, Santiago. Cancha oficial
              3x3, entrenamiento personalizado y entrenador de básquetbol.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-gray-200">
            <address className="not-italic">
              <span className="font-mono text-gray-400">Dirección: </span>
              {EMZ_ADDRESS}
            </address>
            <div>
              <span className="font-mono text-gray-400">Teléfono: </span>
              <a className="hover:text-orange transition-colors" href={`tel:${EMZ_PHONE_DISPLAY}`}>
                {EMZ_PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <span className="font-mono text-gray-400">Horario: </span>
              <span>Lun–Sáb 09:00–21:30 / Domingo cerrado</span>
            </div>
            <Link href="/cancha" className="mt-1 hover:text-orange transition-colors">
              Cancha de basketball Ñuñoa →
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(255,90,31,0.4)] px-5 py-3 text-center font-display tracking-wide text-chalk hover:text-orange transition-colors"
            >
              RESERVAR
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-center font-display tracking-wide text-chalk hover:text-orange transition-colors"
            >
              Instagram: @emzsportandfitness
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} EMZ Sport & Fitness. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

