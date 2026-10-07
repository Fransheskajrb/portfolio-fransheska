"use client";

import { useRef } from "react";
import Dialog from "@/components/campo/Dialog";
import Reveal from "@/components/campo/Reveal";

export default function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <><Reveal className="contact" id="contacto">
    <div className="surface-ring" aria-hidden="true" />
    <h2>¿Qué podríamos<br />construir?</h2>
    <p>Abierta a oportunidades laborales remotas y proyectos con clientes.</p>
    <button className="solid" id="contact-button" onClick={() => dialogRef.current?.showModal()}>Conversemos</button>
  </Reveal>
  <Dialog id="contact-dialog" dialogRef={dialogRef}>
    <h2>Conversemos.</h2>
    <p>Este es un prototipo de mi portfolio. El canal de contacto se incorporará en la versión final.</p>
  </Dialog></>;
}
