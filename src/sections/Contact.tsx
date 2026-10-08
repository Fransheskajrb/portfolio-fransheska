"use client";

import { useRef, type ReactNode } from "react";
import Dialog from "@/components/campo/Dialog";
import Reveal from "@/components/campo/Reveal";

export default function Contact({ channels }: { channels: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <><Reveal className="contact" id="contacto">
    <div className="surface-ring" aria-hidden="true" />
    <h2>¿Qué podríamos<br />construir?</h2>
    <p>Abierta a oportunidades laborales remotas y proyectos con clientes.</p>
    <button className="solid" id="contact-button" onClick={() => dialogRef.current?.showModal()}>Conversemos</button>
  </Reveal>
  <Dialog id="contact-dialog" labelledBy="contact-title" dialogRef={dialogRef}>
    <h2 id="contact-title">Conversemos.</h2>
    {channels}
  </Dialog></>;
}
