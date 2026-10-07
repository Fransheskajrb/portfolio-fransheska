"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribeSystemMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
function systemMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}
function serverMotionSnapshot() { return false; }

export default function MotionToggle() {
  const [reduced, setReduced] = useState(false);
  const systemReduced = useSyncExternalStore(subscribeSystemMotion, systemMotionSnapshot, serverMotionSnapshot);
  const effectiveReduced = systemReduced || reduced;
  useEffect(() => () => {
    document.body.classList.remove("reduced");
    window.dispatchEvent(new Event("campo-motion-change"));
  }, []);
  function toggle() {
    if (systemReduced) return;
    const next = !reduced;
    document.body.classList.toggle("reduced", next);
    setReduced(next);
    window.dispatchEvent(new Event("campo-motion-change"));
  }
  return <button className="motion" aria-pressed={effectiveReduced} disabled={systemReduced} onClick={toggle}>
    {systemReduced ? "Movimiento reducido por el sistema" : reduced ? "Activar movimiento" : "Reducir movimiento"}
  </button>;
}
