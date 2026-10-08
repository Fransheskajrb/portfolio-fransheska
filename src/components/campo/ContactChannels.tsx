import { contact } from "@/data/contact";
import CvDownload from "@/components/campo/CvDownload";

export default function ContactChannels({ cvAvailable }: { cvAvailable: boolean }) {
  return <div className="contact-channels">
    <a className="textlink" href={`mailto:${contact.email}`}>{contact.email}</a>
    <div className="professional-links">
      <a className="textlink" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className="textlink" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <CvDownload available={cvAvailable} />
  </div>;
}
