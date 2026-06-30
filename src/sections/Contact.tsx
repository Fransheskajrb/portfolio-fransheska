import FadeIn from "@/components/FadeIn";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <FadeIn delay={0.4}>
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
          Contacto
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          Conversemos sobre tecnología, datos y soluciones digitales.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Estoy abierta a oportunidades donde pueda aportar en desarrollo de
          soluciones digitales, análisis de datos, gestión de proyectos y
          transformación digital.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Enviar correo
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
          >
            LinkedIn
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
          >
            GitHub
          </a>

          <a
            href={contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
          >
            Descargar CV
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            {contact.email}
          </p>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}