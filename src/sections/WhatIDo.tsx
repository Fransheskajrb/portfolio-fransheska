import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import FadeIn from "@/components/FadeIn";

export default function WhatIDo() {
  return (
    <FadeIn delay={0.15}>
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Qué hago"
          subtitle="Soluciones digitales para problemas reales."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}