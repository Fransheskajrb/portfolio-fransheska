import SkillNetwork from "@/components/campo/SkillNetwork";

export default function Hero() {
  return <section className="hero" id="inicio">
    <div className="eyebrow">SOFTWARE DEVELOPMENT · DATA · AUTOMATION</div>
    <h1>Fransheska<span>Ruiz.</span></h1>
    <h2>Comprender a fondo.<br />Construir con criterio.</h2>
    <p>Estoy terminando Ingeniería en Informática. Desarrollo soluciones útiles con atención a la calidad y a las personas.</p>
    <a className="textlink" href="#trabajo">Explorar mi trabajo</a>
    <div className="sculpture" aria-hidden="true"><SkillNetwork /></div>
    <p className="sr-only">Habilidades: Python, React, SQL, TypeScript, Next.js, Oracle APEX, Git, Power BI y Figma.</p>
    <span className="note">Curiosidad para comprender. Cuidado para construir.</span>
  </section>;
}
