import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-slate-50 px-6 py-28">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm font-semibold text-[#0F4C5C] transition hover:text-[#12343B]"
        >
          ← Volver al portafolio
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
          {study.category}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          {study.title}
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          {study.subtitle}
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {study.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
          <span>{study.year}</span>
          <span>•</span>
          <span>{study.role}</span>
          <span>•</span>
          <span>{study.readingTime}</span>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Caso de estudio
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-16 space-y-12">
          <CaseBlock title="Contexto" content={study.context} />
          <CaseBlock title="El desafío" content={study.challenge} />
          <CaseBlock title="Investigación" content={study.research} />
          <CaseBlock title="La propuesta" content={study.proposal} />
          <CaseBlock title="Aprendizajes" content={study.learnings} />
        </section>
      </article>
    </main>
  );
}

type CaseBlockProps = {
  title: string;
  content: string;
};

function CaseBlock({ title, content }: CaseBlockProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
      <p className="mt-4 text-lg leading-8 text-slate-600">{content}</p>
    </div>
  );
}