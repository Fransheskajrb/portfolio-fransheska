"use client";

import { useRef, useState, type ReactNode } from "react";
import { campoProjects } from "@/data/campoProjects";
import Dialog from "@/components/campo/Dialog";

export default function ProjectSelector({ visuals }: { visuals: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = campoProjects[active];
  function openCase() { dialogRef.current?.showModal(); }
  return <>
    <div className="projects">
      <div className="work-detail" aria-live="polite">
        <div className="steps" aria-label="Elegir proyecto">
          {campoProjects.map((project, index) => <button key={project.slug} data-select={index}
            aria-pressed={active === index} aria-label={project.title}
            onClick={() => setActive(index)}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <span className="state" id="status">{selected.status}</span>
        <h3 id="project-title">{selected.title}</h3>
        <p id="project-description">{selected.description}</p>
        <button id="details" onClick={openCase}>Explorar el caso</button>
      </div>
      {campoProjects.map((project, index) => <button className="project" key={project.slug}
        data-project={index} data-pos={index === active ? 1 : index === (active + 1) % 3 ? 0 : 2}
        aria-label={`Seleccionar ${project.title}`}
        onClick={() => index === active ? openCase() : setActive(index)}>
        {visuals[index]}
        <span className="meta">{String(index + 1).padStart(2, "0")} / {project.status}</span>
        <h3>{project.title}</h3><small>{project.subtitle}</small>
      </button>)}
    </div>
  <Dialog id="case-dialog" dialogRef={dialogRef}>
    <h2 id="case-title">{selected.title}</h2>
    <div id="case-body">{selected.blocks.map((block) => <div key={block.title}><h3>{block.title}</h3><p>{block.text}</p></div>)}</div>
  </Dialog></>;
}
