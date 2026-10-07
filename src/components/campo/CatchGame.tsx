"use client";
import { useState } from "react";
const replies = ["Una pausa para la curiosidad.", "Casi. Un intento más.", "Ya, ahora sí. Te estaba probando."];
export default function CatchGame() {
  const [attempt, setAttempt] = useState(0);
  return <aside className="play" aria-label="Pequeño descubrimiento interactivo">
    <button className="catch" aria-label={attempt === 2 ? "Soltar el objeto y volver a jugar" : "Atrapar el objeto curioso"}
      style={{ transform: attempt ? "translate(-95px,45px)" : undefined }}
      onClick={() => setAttempt((current) => (current + 1) % 3)}>{attempt === 2 ? "✓" : "·"}</button>
    <label>¿Me pillas?</label><p id="reply" aria-live="polite">{replies[attempt]}</p>
  </aside>;
}
