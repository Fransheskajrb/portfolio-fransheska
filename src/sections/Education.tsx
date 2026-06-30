import SectionTitle from "@/components/SectionTitle";
import EducationCard from "@/components/EducationCard";
import { education } from "@/data/education";
import FadeIn from "@/components/FadeIn";

export default function Education() {
  return (
    <FadeIn delay={0.35}>
    <section id="education" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Educación"
          subtitle="Formación académica"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <EducationCard
              key={item.degree}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}