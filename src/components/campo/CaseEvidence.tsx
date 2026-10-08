import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

const evidence: Record<string, { src: string; title: string; width: number; height: number }[]> = {
  "institutional-goals": [
    { src: "/images/cases/metas-sanitarias.png", title: "Metas Sanitarias", width: 1923, height: 817 },
    { src: "/images/cases/acreditacion.png", title: "Acreditación", width: 1804, height: 872 },
  ],
  "room-management": [
    { src: "/images/cases/agenda-sala.png", title: "Agenda", width: 1790, height: 879 },
    { src: "/images/cases/reportes-sala.png", title: "Reportes", width: 1788, height: 880 },
  ],
};

function protectionNotice(slug: string) {
  return slug === "institutional-goals"
    ? "Capturas anonimizadas · datos demostrativos · valores institucionales protegidos"
    : "Capturas anonimizadas · datos demostrativos · información protegida";
}

export function CaseCover({ slug }: { slug: string }) {
  const image = evidence[slug]?.[0];
  if (!image) return null;
  return <figure className="case-cover">
    <a href={image.src} aria-label={`Ver captura completa de ${image.title}`}>
      <Image src={image.src} alt={`${image.title}: captura anonimizada con datos demostrativos e información protegida`} width={image.width} height={image.height} unoptimized preload />
    </a>
    <figcaption>{image.title} · {protectionNotice(slug)}</figcaption>
  </figure>;
}

export default function CaseEvidence({ slug }: { slug: string }) {
  // Do not publish broken image URLs while the original attachments are unavailable.
  const images = (evidence[slug] ?? []).slice(1).filter(({ src }) => existsSync(path.join(process.cwd(), "public", src)));
  if (!images.length) return null;
  return <section className="case-evidence case-block" aria-labelledby="case-evidence-title">
    <h2 id="case-evidence-title">Capturas del sistema</h2>
    <p className="meta">{protectionNotice(slug)}</p>
    {images.map(({ src, title, width, height }) => <figure key={src}>
      <a href={src} aria-label={`Ver captura completa de ${title}`}>
        <Image src={src} alt={`${title}: captura anonimizada con datos demostrativos e información protegida`} width={width} height={height} unoptimized />
      </a>
      <figcaption>{title} · Datos demostrativos; no representan resultados reales.</figcaption>
    </figure>)}
  </section>;
}
