import Image from "next/image";
import { site } from "@/lib/site";

/*
THESIS: A person at night, not a flat strip of type. The portrait
hangs into the khaki band the way Meant To hangs a photo into the page.
OWN-WORLD: Warm night, plaza light, khaki only for what you can open
now, offset shadow, 4px print corners.
STORY: What he believes products should improve, what he is building,
what he learned by stopping, and how to write him.
FIRST VIEWPORT: Photo at scale, name, one line. Button in the khaki
that the photo overlaps.
FORM: Night plaza with an editorial split — not a magazine system,
not cream/orange SaaS.
*/

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_at_18%_0%,rgba(196,165,116,0.28),transparent_58%),radial-gradient(ellipse_at_90%_12%,rgba(80,64,40,0.35),transparent_42%)]"
      />

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-khaki focus:px-3 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-stone/10 bg-night/80 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 md:px-8"
          aria-label="Principal"
        >
          <a
            href="#contenido"
            className="min-h-11 py-2 font-display text-[1.125rem] font-medium tracking-[-0.02em] text-stone"
          >
            Jose Antonio Hyeon
          </a>
          <a
            href="#escribir"
            className="inline-flex min-h-11 items-center text-[1.125rem] text-stone underline decoration-khaki decoration-2 underline-offset-[6px]"
          >
            Escribir
          </a>
        </nav>
      </header>

      <main id="contenido" className="relative">
        <section
          aria-labelledby="nombre"
          className="relative z-10 mx-auto grid max-w-5xl items-end gap-0 px-5 pb-4 pt-6 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:px-8 md:pb-0 md:pt-10"
        >
          <div className="relative -mx-5 md:mx-0 md:-mb-24">
            <div className="overflow-hidden bg-night-raised shadow-[18px_36px_64px_-16px_rgba(8,6,4,0.8)] md:rounded-[2px]">
              <Image
                src={site.photo}
                alt="Jose Antonio Hyeon con gorra negra y gafas, de noche frente a unas columnas"
                width={site.photoWidth}
                height={site.photoHeight}
                priority
                className="photo-settle aspect-[8/5] h-auto w-full object-cover object-[center_24%] md:aspect-square md:object-[center_18%]"
              />
            </div>
          </div>
          <div className="relative z-10 -mt-16 bg-gradient-to-t from-night from-35% to-transparent px-0 pt-16 md:mt-0 md:bg-none md:pb-24 md:pt-2">
            <h1
              id="nombre"
              className="font-display text-[clamp(2.25rem,8vw,3.75rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-stone"
            >
              Jose Antonio Hyeon
            </h1>
            <p className="mt-4 max-w-[28ch] text-[1.25rem] leading-snug text-stone md:mt-6">
              Construyo productos con una intención clara: mejorar la vida de
              alguien.
            </p>
          </div>
        </section>

        <section aria-labelledby="ahora" className="bg-khaki text-ink">
          <div className="mx-auto grid max-w-5xl gap-6 px-5 pb-14 pt-10 md:grid-cols-[minmax(0,28rem)_1fr] md:items-start md:gap-16 md:px-8 md:pb-20 md:pt-28">
            <h2
              id="ahora"
              className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em]"
            >
              Ahora
            </h2>
            <div>
              <p className="max-w-[38ch] text-[1.25rem] leading-snug">
                Migajas ayuda a personas con diabetes a aprender a contar
                carbohidratos con la comida de cada día y ejemplos cercanos, para
                tomar decisiones con más confianza sin convertir cada plato en
                un examen.
              </p>
              <a
                href={site.links.migajas}
                className="cta-migajas mt-8 inline-flex min-h-12 min-w-52 items-center justify-center bg-ink px-7 text-[1.125rem] font-bold text-stone shadow-[6px_8px_0_0_rgba(18,15,12,0.18)] md:mt-10"
              >
                Entrar en Migajas
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="hilo"
          className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24"
        >
          <div className="grid gap-4 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16">
            <h2
              id="hilo"
              className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] text-stone"
            >
              El mismo hilo
            </h2>
            <p className="max-w-[42ch] text-[1.125rem] leading-relaxed text-stone-dim md:pt-2">
              Todos parten de una idea sencilla: la información útil debería
              estar al alcance de quien la necesita.
            </p>
          </div>

          <ul className="mt-10 divide-y divide-stone/15 border-y border-stone/15">
            <li className="grid gap-3 py-8 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:py-10">
              <p className="text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-khaki">
                Vínculos
              </p>
              <div>
                <a
                  href={site.links.meantTo}
                  className="inline-flex min-h-11 items-center font-display text-[1.5rem] text-stone underline decoration-khaki decoration-2 underline-offset-[6px]"
                >
                  Meant To
                </a>
                <p className="mt-2 max-w-[38ch] text-[1.125rem] leading-relaxed text-stone-dim">
                  Ayuda a recordar las fechas, los gustos y los detalles que
                  mantienen cerca a la gente que te importa.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-8 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:py-10">
              <p className="text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-khaki">
                Vivienda
              </p>
              <div>
                <a
                  href={site.links.fachada}
                  className="inline-flex min-h-11 items-center font-display text-[1.5rem] text-stone underline decoration-khaki decoration-2 underline-offset-[6px]"
                >
                  Fachada
                </a>
                <p className="mt-2 max-w-[38ch] text-[1.125rem] leading-relaxed text-stone-dim">
                  Reúne experiencias de inquilinos y propietarios para que
                  elegir una inmobiliaria no sea un salto a ciegas.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section aria-labelledby="aprendizaje" className="bg-stone text-ink">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:px-8 md:py-24">
            <div>
              <p className="text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-ink/80">
                Sí Quiero · 2026
              </p>
              <h2
                id="aprendizaje"
                className="mt-4 font-display text-[2rem] leading-[1.05] tracking-[-0.02em]"
              >
                Cuando un problema real no basta
              </h2>
            </div>

            <div>
              <div
                className="grid grid-cols-3 border-y border-ink/25 py-5 text-center"
                aria-label="Resultado de la validación de Sí Quiero"
              >
                <p className="border-r border-ink/25 px-2">
                  <span className="block text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-ink/80">
                    Problema
                  </span>
                  <span className="mt-1 block text-[1.125rem] font-bold">
                    Real
                  </span>
                </p>
                <p className="border-r border-ink/25 px-2">
                  <span className="block text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-ink/80">
                    Solución
                  </span>
                  <span className="mt-1 block text-[1.125rem] font-bold">
                    Útil
                  </span>
                </p>
                <p className="px-2">
                  <span className="block text-[0.8125rem] font-bold uppercase tracking-[0.04em] text-ink/80">
                    Negocio
                  </span>
                  <span className="mt-1 block text-[1.125rem] font-bold">
                    No sostenible
                  </span>
                </p>
              </div>

              <div className="mt-8 space-y-5 text-[1.125rem] leading-[1.65] text-ink">
                <p>
                  Sí Quiero nació para simplificar los regalos y las
                  aportaciones de una boda. Las conversaciones confirmaron que
                  coordinar a invitados, regalos y dinero generaba una fricción
                  real.
                </p>
                <p>
                  La investigación también mostró los límites del negocio. Cada
                  pareja usaría el producto una sola vez y llegar hasta ella
                  dependía demasiado de intermediarios como los wedding
                  planners. El coste de ese canal no encajaba con el valor que
                  podía generar cada usuario.
                </p>
                <p className="font-bold">
                  Decidí parar antes de seguir construyendo. Sí Quiero fue un
                  ejemplo concreto de que no todos los proyectos deben seguir
                  adelante: un problema puede ser real y la solución útil sin
                  que el negocio sea sostenible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="metodo" className="border-t border-stone/10">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:px-8 md:py-24">
            <h2
              id="metodo"
              className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em]"
            >
              Cómo trabajo
            </h2>
            <ol className="max-w-xl divide-y divide-stone/15 border-y border-stone/15">
              <li className="grid gap-3 py-7 md:grid-cols-[2.5rem_1fr] md:gap-6">
                <span className="text-[0.8125rem] font-bold tabular-nums text-khaki">
                  1
                </span>
                <div>
                  <p className="text-[1.25rem] font-bold leading-snug text-stone">
                    Empiezo por el problema, no por la pantalla.
                  </p>
                  <p className="mt-2 text-[1.125rem] leading-[1.65] text-stone-dim">
                    Primero entiendo a quién afecta, cómo se resuelve hoy y qué
                    merece cambiar. Investigo antes de decidir qué construir.
                  </p>
                </div>
              </li>
              <li className="grid gap-3 py-7 md:grid-cols-[2.5rem_1fr] md:gap-6">
                <span className="text-[0.8125rem] font-bold tabular-nums text-khaki">
                  2
                </span>
                <div>
                  <p className="text-[1.25rem] font-bold leading-snug text-stone">
                    Pongo una versión en manos de la gente.
                  </p>
                  <p className="mt-2 text-[1.125rem] leading-[1.65] text-stone-dim">
                    Escribo, prototipo y construyo lo necesario para probar la
                    idea. La lanzo, observo cómo se usa y vuelvo a hablar con
                    quienes la necesitan. La transparencia y la accesibilidad
                    forman parte del producto desde el principio.
                  </p>
                </div>
              </li>
              <li className="grid gap-3 py-7 md:grid-cols-[2.5rem_1fr] md:gap-6">
                <span className="text-[0.8125rem] font-bold tabular-nums text-khaki">
                  3
                </span>
                <div>
                  <p className="text-[1.25rem] font-bold leading-snug text-stone">
                    Decido qué viene después.
                  </p>
                  <p className="mt-2 text-[1.125rem] leading-[1.65] text-stone-dim">
                    Con lo que observo, decido si conviene iterar, ampliar,
                    cambiar el rumbo o parar. Me importa avanzar cuando hay
                    razones para hacerlo, no por inercia. Cada decisión exige
                    estudio, criterio y cuidado.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          id="escribir"
          aria-labelledby="cierre"
          className="scroll-mt-16 border-t border-stone/10 bg-[linear-gradient(180deg,rgba(196,165,116,0.08),transparent_42%),var(--color-night-raised)]"
        >
          <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[minmax(0,28rem)_1fr] md:gap-16 md:px-8 md:py-24">
            <h2
              id="cierre"
              className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em]"
            >
              Escríbeme
            </h2>
            <div>
              <p className="max-w-[32ch] text-[1.25rem] leading-snug text-stone">
                Si quieres colaborar o conversar sobre un producto, una idea o
                un problema concreto:
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-flex min-h-12 items-center break-all text-[1.25rem] text-stone underline decoration-khaki decoration-2 underline-offset-[7px]"
              >
                {site.email}
              </a>
              <a
                href={site.links.linkedin}
                rel="me"
                className="mt-3 flex min-h-12 items-center text-[1.25rem] text-stone underline decoration-khaki decoration-2 underline-offset-[7px]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
