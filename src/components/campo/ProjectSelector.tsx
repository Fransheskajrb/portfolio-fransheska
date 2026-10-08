"use client";

import { useRef, useState, type ReactNode } from "react";
import { campoProjects } from "@/data/campoProjects";
import Link from "next/link";
import { useInView } from "motion/react";
import Dialog from "@/components/campo/Dialog";

export default function ProjectSelector({ visuals }: { visuals: ReactNode[] }) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const loadVisuals = useInView(projectsRef, { once: true, margin: "200px" });
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = campoProjects[active];
  function openCase() { dialogRef.current?.showModal(); }
  return <>
    <div className="projects" ref={projectsRef}>
      <div className="work-detail" aria-live="polite">
        <div className="steps" role="group" aria-label="Elegir proyecto">
          {campoProjects.map((project, index) => <button key={project.slug} data-select={index}
            aria-pressed={active === index} aria-label={`${String(index + 1).padStart(2, "0")} · ${project.title}`}
            onClick={() => setActive(index)}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <span className="state" id="status">{selected.status}</span>
        <h3 id="project-title">{selected.title}</h3>
        <p id="project-description">{selected.description}</p>
        <button id="details" onClick={openCase}>Explorar el caso</button>
      </div>
      {campoProjects.map((project, index) => <button className="project" key={project.slug}
        data-project={index} data-pos={index === active ? 1 : index === (active + 1) % campoProjects.length ? 0 : 2}
        onClick={() => index === active ? openCase() : setActive(index)}>
        {loadVisuals ? visuals[index] : <div className="surface surface--capture">
          <span className="asset-title">{project.assetTitle}</span>
          <div className="project-capture" />
        </div>}
        <span className="meta">{String(index + 1).padStart(2, "0")} / {project.status}</span>
        <h3>{project.title}</h3><small>{project.subtitle}</small>
      </button>)}
    </div>
  <Dialog id="case-dialog" labelledBy="case-title" dialogRef={dialogRef}>
    <h2 id="case-title">{selected.title}</h2>
    <div id="case-body">{selected.blocks.map((block) => <div key={block.title}><h3>{block.title}</h3><p>{block.text}</p></div>)}</div>
    <Link className="textlink" href={`/case-studies/${selected.slug}`}>Leer el caso completo</Link>
  </Dialog></>;
}
