import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <FadeIn delay={0.1}>
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
        title="Sobre mí"
        subtitle="Tecnología, procesos y personas"
        />

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Elegí la informática porque vi en ella una forma de construir
          soluciones propias y crecer profesionalmente con mayor libertad. En el
          camino descubrí que me atrae su estructura lógica: como en las
          matemáticas, existen distintas formas de resolver un problema, pero
          siempre se puede buscar una solución más clara, eficiente y bien
          diseñada.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Mi interés está en desarrollar soluciones digitales que conecten la
          tecnología con las necesidades reales de las personas, combinando
          desarrollo web, análisis de datos y gestión de proyectos.
        </p>
      </div>
    </section>
    </FadeIn>
  );
}