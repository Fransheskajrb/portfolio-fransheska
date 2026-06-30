import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  return (
    <FadeIn delay={0.25}>
    <section id="projects" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Proyectos"
          subtitle="Soluciones y experiencias que reflejan mi forma de trabajar."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              status={project.status}
              description={project.description}
              tags={project.tags}
              year={project.year}
              role={project.role}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}