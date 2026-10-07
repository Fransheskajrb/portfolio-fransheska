"use client";
import { useEffect, useRef } from "react";
import { createSkillNetwork } from "@/lib/skillNetwork";
export default function SkillNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) return createSkillNetwork(canvasRef.current);
  }, []);
  return <canvas id="network" ref={canvasRef} />;
}
