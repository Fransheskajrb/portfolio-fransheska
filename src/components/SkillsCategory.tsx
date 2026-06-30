type SkillCategoryProps = {
  category: string;
  items: string[];
};

export default function SkillCategory({
  category,
  items,
}: SkillCategoryProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-950">{category}</h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}