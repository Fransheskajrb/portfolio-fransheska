import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { contact } from "@/data/contact";

/** Build-time availability: supplying the PDF requires rebuilding the site. */
export function hasCvPdf() {
  const file = path.join(process.cwd(), "public", contact.cv);
  return existsSync(file) && statSync(file).isFile() && statSync(file).size > 0;
}
