import MotionToggle from "@/components/campo/MotionToggle";
import { contact } from "@/data/contact";
import styles from "./Footer.module.css";

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.identity}>
      <p className={styles.name}>Fransheska Ruiz</p>
      <p>Software · Data · Automation</p>
    </div>
    <p className={styles.location}>Chile</p>
    <ul className={styles.links} aria-label="Contacto profesional">
      <li><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href={`mailto:${contact.email}`}>Email</a></li>
    </ul>
    <p className={styles.copyright}>© 2026 Fransheska Ruiz</p>
    <div className={styles.motion}><MotionToggle /></div>
  </footer>;
}
