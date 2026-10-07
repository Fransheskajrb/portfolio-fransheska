"use client";
import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
/** Motion observes the viewport; the frozen CSS owns the exact transitions. */
export default function Reveal({ as: Tag = "section", className = "", id, children }: {
  as?: "section" | "h2"; className?: string; id?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLElement & HTMLHeadingElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.1 });
  return <Tag ref={ref} id={id} className={`${className} reveal${visible ? " visible" : ""}`}>{children}</Tag>;
}
