import { contact } from "@/data/contact";

export default function CvDownload({ available }: { available: boolean }) {
  return available
    ? <a className="textlink" href={contact.cv} download>Descargar CV (PDF)</a>
    : <p className="cv-note">CV no disponible para descarga todavía.</p>;
}
