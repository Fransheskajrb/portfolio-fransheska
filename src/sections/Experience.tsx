import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import FadeIn from "@/components/FadeIn";

export default function Experience() {
  return (
    <FadeIn delay={0.2}>
    <section id="experience" className="bg-slate-50 px-6 py-24">
    
              <div className="mx-auto max-w-6xl">
                <SectionTitle
                  title="Experiencia"
                  subtitle="Mi trayectoria profesional"
                />
        
                <div className="space-y-8">
                  {experiences.map((experience) => (
                    <ExperienceCard
                      key={experience.title}
                      title={experience.title}
                      company={experience.company}
                      period={experience.period}
                      summary={experience.summary}
                      highlights={experience.highlights}
                    />
                  ))}
                </div>
              </div>
      
    </section>
    </FadeIn>
  );
}