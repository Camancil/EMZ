import Link from "next/link";
import CourtLines from "@/components/basketball/CourtLines";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { isPlaceholderLink, PROGRAMAS } from "@/content/programas";
import { whatsappUrl } from "@/lib/site";

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export default function ProgramasDestacados() {
  return (
    <section id="programas" className="relative scroll-mt-24 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 court-grid opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <div className="font-display tracking-wide text-orange text-[13px]">
            PAGA ONLINE CON MERCADO PAGO
          </div>
          <h2 className="mt-2 font-display text-[48px] leading-none">
            PROGRAMAS DESTACADOS
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROGRAMAS.map((programa, idx) => (
            <RevealOnScroll key={programa.id} delayMs={idx * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-8 transition-colors hover:border-[rgba(255,255,255,0.18)]">
                <CourtLines variant="threepoint" />

                <div className="relative">
                  <span
                    className="inline-flex items-center rounded-full border px-3 py-1 font-display text-[12px] tracking-wide"
                    style={{
                      color: programa.accent,
                      borderColor: `${programa.accent}55`,
                      background: `${programa.accent}14`,
                    }}
                  >
                    {programa.pilar}
                  </span>

                  <h3 className="mt-4 font-display text-[30px] leading-[0.95] tracking-wide">
                    {programa.nombre}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-200/95">
                    {programa.descripcion}
                  </p>
                </div>

                <ul className="relative mt-7 space-y-3">
                  {programa.planes.map((plan) => {
                    const pendiente = isPlaceholderLink(plan.link);
                    const href = pendiente
                      ? whatsappUrl(
                          `Quiero pagar el plan ${plan.nombre} de ${programa.nombre}`,
                        )
                      : plan.link;

                    return (
                      <li
                        key={plan.id}
                        className="rounded-xl border bg-[rgba(255,255,255,0.02)] p-4"
                        style={{
                          borderColor: plan.destacado
                            ? programa.accent
                            : "rgba(255,255,255,0.08)",
                        }}
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0">
                            {plan.destacado ? (
                              <div
                                className="mb-2 inline-flex items-center rounded-full px-2.5 py-1 font-display text-[11px] tracking-wide text-black"
                                style={{ background: programa.accent }}
                              >
                                MÁS CONVENIENTE
                              </div>
                            ) : null}
                            <div className="font-display text-[22px] leading-none tracking-wide">
                              {plan.nombre}
                            </div>
                            <div className="mt-1.5 text-xs text-gray-400">
                              {plan.detalle}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-4">
                            <div className="font-mono text-[17px] text-orange">
                              {clp.format(plan.precio)}
                            </div>
                            <Link
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-programa={programa.id}
                              data-plan={plan.id}
                              className={[
                                "rounded-full px-5 py-2.5 font-display text-sm tracking-wide transition-transform hover:scale-[1.03]",
                                plan.destacado
                                  ? "text-black"
                                  : "border bg-transparent text-chalk",
                              ].join(" ")}
                              style={
                                plan.destacado
                                  ? { background: programa.accent }
                                  : { borderColor: `${programa.accent}80` }
                              }
                            >
                              PAGAR
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="relative mt-auto pt-7">
                  <p className="text-xs leading-relaxed text-gray-400">
                    Después de pagar te contactamos por WhatsApp para coordinar
                    tu inicio.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href={whatsappUrl(`Tengo dudas sobre ${programa.nombre}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-gray-400 hover:text-orange transition-colors"
                    >
                      ¿Dudas? Escríbenos por WhatsApp
                    </Link>
                    <Link
                      href={programa.pilarHref}
                      className="font-mono text-xs text-gray-400 hover:text-chalk transition-colors"
                    >
                      Ver {programa.pilar.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
