import Link from "next/link";
import { EMZ_ADDRESS, EMZ_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {

  return (
    <footer className="relative z-10 border-t border-[rgba(255,90,31,0.15)] bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-[40px] leading-none">
              <span className="text-chalk">EMZ</span>{" "}
              <span className="text-orange">SPORT</span>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Cultura basketball en Ñuñoa: arriendo 3x3, reintegro, entrenamiento,
              sicología y nutrición deportiva.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-gray-200">
            <div>
              <span className="font-mono text-gray-400">Dirección: </span>
              {EMZ_ADDRESS}
            </div>
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
              href="https://instagram.com/emzsportandfitness"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-center font-display tracking-wide text-chalk hover:text-orange transition-colors"
            >
              Instagram: @emzsportandfitness
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} EMZ Sport & Fitness. Todos los derechos
            reservados.
          </div>
          <div className="text-xs text-gray-400">
            Hecho para cancha: negro crudo, naranja pelota, ritmo NBA.
          </div>
        </div>
      </div>
    </footer>
  );
}

