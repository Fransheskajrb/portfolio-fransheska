import { campoProjects } from "@/data/campoProjects";
import ProjectSelector from "@/components/campo/ProjectSelector";
import ProjectVisual from "@/components/campo/ProjectVisual";
import Reveal from "@/components/campo/Reveal";

export default function SelectedWork() {
  return <section className="work" id="trabajo">
    <Reveal as="h2">El criterio<br />toma forma.</Reveal>
    <ProjectSelector visuals={campoProjects.map((project) => <ProjectVisual key={project.slug} project={project} />)} />
  </section>;
}
