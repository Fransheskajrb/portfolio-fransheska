export default function Navbar({ fromCase = false }: { fromCase?: boolean }) {
  return <header className={fromCase ? undefined : "home-header"}>
    <a className="brand" href={fromCase ? "/#inicio" : "#inicio"}>FRANSHESKA RUIZ</a>
    <nav aria-label="Principal">
      <a href={fromCase ? "/#trabajo" : "#trabajo"}>Proyectos</a>
      <a href={fromCase ? "/#sobre-mi" : "#sobre-mi"}>Sobre mí</a>
      <a href={fromCase ? "/#contacto" : "#contacto"}>Contacto</a>
    </nav>
  </header>;
}
