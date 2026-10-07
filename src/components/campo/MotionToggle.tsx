"use client";
import { useEffect, useState } from "react";
export default function MotionToggle() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => () => {
    document.body.classList.remove("reduced");
    window.dispatchEvent(new Event("campo-motion-change"));
  }, []);
  function toggle() {
    const next = !reduced;
    document.body.classList.toggle("reduced", next);
    setReduced(next);
    window.dispatchEvent(new Event("campo-motion-change"));
  }
  return <button className="motion" aria-pressed={reduced} onClick={toggle}>{reduced ? "Activar movimiento" : "Reducir movimiento"}</button>;
}
