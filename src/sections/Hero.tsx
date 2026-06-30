import { profile } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const highlights = [
  {
    title: "Hospital Alto Hospicio",
    description: "Administrativa de Capacitación",
  },
  {
    title: "Proyecto SIRIUS",
    description: "Solución digital para Código Azul",
  },
  {
    title: "Análisis de Datos",
    description: "Indicadores, metas y toma de decisiones",
  },
  {
    title: "Trabajo remoto",
    description: "Interés en equipos digitales y colaborativos",
  },
];

export default function Hero() {
  return (
    <FadeIn delay={0}>
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
          Portafolio profesional
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Hola, soy {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-[#0F4C5C] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#12343B]"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#0F4C5C] hover:text-[#0F4C5C]"
          >
            Contacto
          </a>
        </div>
      </div>

      <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
          Actualmente
        </p>

        <div className="mt-6 space-y-4">
          {highlights.map((highlight) => (
  <div
    key={highlight.title}
    className="rounded-2xl bg-slate-50 px-5 py-4"
  >
    <p className="text-sm font-semibold text-slate-950">
      {highlight.title}
    </p>

    <p className="mt-1 text-sm text-slate-600">
      {highlight.description}
    </p>
  </div>
))}
        </div>
      </aside>
    </section>
    </FadeIn>
  );
}