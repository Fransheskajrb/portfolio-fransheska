type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {subtitle}
      </h2>
    </div>
  );
}