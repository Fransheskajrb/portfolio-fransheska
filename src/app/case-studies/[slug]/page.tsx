import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/campo/ProjectVisual";
import Reveal from "@/components/campo/Reveal";
import ContactChannels from "@/components/campo/ContactChannels";
import { campoProjects } from "@/data/campoProjects";
import { getCaseStudy } from "@/lib/caseStudy";
import { hasCvPdf } from "@/lib/cvAvailability";
import { pageMetadata } from "@/lib/siteMetadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return campoProjects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return pageMetadata(study.title, study.project.description, `/case-studies/${slug}`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const order = campoProjects.findIndex((project) => project.slug === slug) + 1;
  const sections = [
    { id: "contexto", title: "Contexto", text: study.context },
    { id: "desafio", title: "El desafío", text: study.challenge },
    { id: "trabajo", title: study.project.blocks[1].title, text: study.project.blocks[1].text },
    { id: "investigacion", title: "Investigación", text: study.research },
    { id: "propuesta", title: "La propuesta", text: study.proposal },
    { id: "aprendizajes", title: "Aprendizajes", text: study.learnings },
  ];

  return <>
    <Navbar fromCase />
    <main id="main-content" tabIndex={-1} className="case-page">
      <article>
        <Link className="textlink case-back" href="/#trabajo">← Volver a proyectos</Link>
        <div className="case-header">
          <div>
            <p className="case-eyebrow">{String(order).padStart(2, "0")} / {study.status}</p>
            <h1 className="case-title">{study.title}</h1>
            <p className="case-subtitle">{study.project.subtitle}</p>
            <p className="case-summary">{study.summary}</p>
          </div>
          <figure className="case-visual project" data-pos="1">
            <ProjectVisual project={study.project} />
            <figcaption className="meta">{study.project.assetTitle} · Visual ilustrativo</figcaption>
          </figure>
        </div>
        <dl className="case-facts">
          <div><dt>Año</dt><dd>{study.year}</dd></div>
          <div><dt>Rol</dt><dd>{study.role}</dd></div>
          <div><dt>Área</dt><dd>{study.category}</dd></div>
        </dl>
        <div className="case-reading">
          <nav className="case-index" aria-label="En este caso">
            {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
            </a>)}
          </nav>
          <div className="case-text">
            {sections.map((section) => <Reveal key={section.id} id={section.id} className="case-block">
              <h2>{section.title}</h2><p>{section.text}</p>
            </Reveal>)}
            <section className="case-block" aria-labelledby="case-tools-title">
              <h2 id="case-tools-title">{slug === "sirius" ? "Áreas y enfoques del proyecto" : "Herramientas y enfoque"}</h2>
              <ul className="case-tools">{study.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </section>
            <section className="case-block case-scope" aria-labelledby="case-scope-title">
              <h2 id="case-scope-title">{study.project.blocks[2].title}</h2>
              <p>{study.project.blocks[2].text}</p>
            </section>
          </div>
        </div>
        <nav className="case-project-nav" aria-label="Casos de estudio">
          {campoProjects.map((project, index) => <Link key={project.slug} href={`/case-studies/${project.slug}`} aria-current={project.slug === slug ? "page" : undefined}>
            <span>{String(index + 1).padStart(2, "0")} / {project.status}</span>{project.title}
          </Link>)}
        </nav>
        <section className="case-contact" id="contacto" aria-labelledby="case-contact-title">
          <h2 id="case-contact-title">Conversemos.</h2>
          <ContactChannels cvAvailable={hasCvPdf()} />
        </section>
      </article>
    </main>
    <Footer />
  </>;
}
