import Reveal from "@/components/campo/Reveal";

export default function About() {
  return <Reveal as="section" className="about" id="sobre-mi">
    <h2>Me mueve lo que<br />todavía no entiendo.</h2>
    <p>La astronomía, la fotografía, la música y la naturaleza me provocan asombro y ganas de descubrir más. Llevo esa curiosidad a mi trabajo: entender el problema, buscar la mejor solución y cuidar lo que entrego.</p>
    <p>Mi foco está en software, datos y automatización. UX/UI, research y product thinking me ayudan a construir con más contexto.</p>
    <div className="experience">
      <article>
        <strong>Hospital Alto Hospicio</strong>
        <span>2025 — Actualidad · Administrativa de Capacitación</span>
        <p>Seguimiento de indicadores, gestión de información y procesos de capacitación. Un contexto real para aplicar herramientas de datos.</p>
      </article>
      <article>
        <strong>EME</strong>
        <span>2020 — 2025 · Coordinación de sede</span>
        <p>Organización, gestión y atención a personas.</p>
      </article>
    </div>
  </Reveal>;
}
