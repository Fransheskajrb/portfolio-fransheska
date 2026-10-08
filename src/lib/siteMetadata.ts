import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

export const siteUrl = "https://www.fransheskaruiz.com";
export const siteTitle = "Fransheska Ruiz · Software, Data, Automation";
export const socialImagePath = "/images/og-campo-gravitacional.png";

// Only advertise the approved social asset once it is actually provided.
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const hasSocialImage = existsSync(path.join(process.cwd(), "public", socialImagePath));
  const images = hasSocialImage ? [{ url: socialImagePath, alt: siteTitle }] : undefined;
  return {
    title: pathname === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: pathname },
    openGraph: { type: "website", locale: "es_CL", siteName: siteTitle, title, description, url: pathname, ...(images ? { images } : {}) },
    twitter: { card: images ? "summary_large_image" : "summary", title, description, ...(images ? { images } : {}) },
  };
}
