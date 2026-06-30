type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export default function ExperienceCard({
  title,
  company,
  period,
  summary,
  highlights,
}: ExperienceCardProps) {
  return (
  <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
      {period}
    </p>

    <h3 className="mt-3 text-2xl font-bold text-slate-950">
      {title}
    </h3>

    <p className="mt-1 font-medium text-slate-600">
      {company}
    </p>

    <p className="mt-6 leading-7 text-slate-600">
      {summary}
    </p>

    <div className="mt-6 flex flex-wrap gap-2">
      {highlights.map((highlight) => (
        <span
          key={highlight}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
        >
          {highlight}
        </span>
      ))}
    </div>
  </article>
        );
}