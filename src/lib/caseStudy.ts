import { allCampoProjects } from "@/data/campoProjects";
import { caseStudies } from "@/data/caseStudies";

export function getCaseStudy(slug: string) {
  const study = caseStudies.find((item) => item.slug === slug);
  const project = allCampoProjects.find((item) => item.slug === slug);
  if (!study || !project) return undefined;
  return { ...study, title: project.title, status: project.status, project };
}
