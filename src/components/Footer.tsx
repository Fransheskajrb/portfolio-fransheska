export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold text-slate-950">
            Fransheska Ruiz Bonilla
          </p>

          <p className="text-sm text-slate-500">
            Desarrollo de soluciones digitales, análisis de datos y gestión de
            proyectos.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Fransheska Ruiz Bonilla
        </p>
      </div>
    </footer>
  );
}