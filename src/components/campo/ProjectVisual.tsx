import type { CSSProperties } from "react";
import type { CampoProject } from "@/data/campoProjects";
export default function ProjectVisual({ project }: { project: CampoProject }) {
  return <div className="surface"><span className="asset-title">{project.assetTitle}</span>
    {project.visual === "data" && <div className="bars" aria-hidden="true">
      {[35, 60, 45, 85, 70].map((height, index) => <i key={index} style={{ "--h": `${height}%` } as CSSProperties} />)}
    </div>}
    {project.visual === "web" && <div className="webasset" aria-hidden="true">Fr.<br />Ruiz</div>}
    {project.visual === "system" && <div className="systemasset" aria-hidden="true"><span>SIRIUS</span></div>}
  </div>;
}
