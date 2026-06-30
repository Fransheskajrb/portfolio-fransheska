type EducationCardProps = {
  degree: string;
  institution: string;
  period: string;
  status: string;
};

export default function EducationCard({
  degree,
  institution,
  period,
  status,
}: EducationCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
        {period}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-950">{degree}</h3>

      <p className="mt-1 font-medium text-slate-600">{institution}</p>

      <p className="mt-5 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 w-fit">
        {status}
      </p>
    </article>
  );
}