import Image from "next/image";
import { caseEvidence } from "@/data/caseEvidence";
import type { CSSProperties } from "react";
import type { CampoProject } from "@/data/campoProjects";
export default function ProjectVisual({ project }: { project: CampoProject }) {
  const capture = caseEvidence[project.slug]?.[0];
  if (capture) return <div className="surface surface--capture">
    <span className="asset-title">{project.assetTitle}</span>
    <div className="project-capture">
      <Image src={capture.src.replace(/\.png$/, ".webp")} alt={`${capture.title}: datos demostrativos e información protegida`} fill sizes="(max-width: 900px) 90vw, 60vw" unoptimized />
    </div>
  </div>;
  return <div className="surface"><span className="asset-title">{project.assetTitle}</span>
    {project.visual === "data" && <div className="bars" aria-hidden="true">
      {[35, 60, 45, 85, 70].map((height, index) => <i key={index} style={{ "--h": `${height}%` } as CSSProperties} />)}
    </div>}
    {project.visual === "web" && <div className="webasset" aria-hidden="true">Fr.<br />Ruiz</div>}
    {project.visual === "agenda" && <div className="agendaasset" aria-hidden="true">{Array.from({ length: 28 }, (_, index) => <i key={index} />)}</div>}
    {project.visual === "system" && <div className="systemasset" aria-hidden="true"><span>SIRIUS</span></div>}
  </div>;
}
