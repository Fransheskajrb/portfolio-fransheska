import Reveal from "@/components/campo/Reveal";

export default function Process() {
  return <Reveal as="section" className="process">
    <h2>Detrás de cada solución,<br />una buena pregunta.</h2>
    <p>Entender el contexto, comparar alternativas y construir algo que funcione. La interfaz es una parte; el criterio que la sostiene también importa.</p>
    <div className="process-list">
      <span>01 · Comprender</span><span>02 · Decidir</span><span>03 · Construir</span><span>04 · Entregar</span>
    </div>
  </Reveal>;
}
