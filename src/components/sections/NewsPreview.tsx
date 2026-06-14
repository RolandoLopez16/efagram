import { news } from "@/data/news";

import { SectionTitle } from "../ui/SectionTitle";

export function NewsPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Noticias" title="Actividad empresarial y compromiso social" description="Historias y acciones que reflejan el trabajo en campo, el bienestar laboral y la relacion con las comunidades." />
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-forest-100 bg-forest-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest-700">{item.date}</p>
              <h3 className="mt-4 font-alegreya text-2xl font-semibold text-forest-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
