type ProjectCardProps = {
  title: string;
  year: string;
  role: string;
  status: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  year,
  role,
  status,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
        {status}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">
  {year} • {role}
</p>

      <p className="mt-5 leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}