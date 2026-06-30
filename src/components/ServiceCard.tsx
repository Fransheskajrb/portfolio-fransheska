type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}