import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import SkillCategory from "@/components/SkillsCategory";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <FadeIn delay={0.3}>
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Habilidades"
          subtitle="Herramientas y capacidades que conectan tecnología, datos y gestión."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCategory
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}