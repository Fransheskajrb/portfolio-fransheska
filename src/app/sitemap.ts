import type { MetadataRoute } from "next";
import { campoProjects } from "@/data/campoProjects";
import { siteUrl } from "@/lib/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl + "/", priority: 1 },
    ...campoProjects.map((project, index) => ({ url: `${siteUrl}/case-studies/${project.slug}`, priority: index === 0 ? 0.9 : 0.6 })),
  ];
}
