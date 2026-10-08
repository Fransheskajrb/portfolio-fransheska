import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return <><Navbar fromCase />
    <main id="main-content" tabIndex={-1} className="case-page not-found-page">
      <p className="case-eyebrow">404</p>
      <h1 className="case-title">Página no encontrada.</h1>
      <Link className="textlink" href="/">Volver al portafolio</Link>
    </main><Footer /></>;
}
