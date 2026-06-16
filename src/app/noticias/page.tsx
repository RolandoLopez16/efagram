import type { Metadata } from "next";
import Image from "next/image";

import { ForestBackground } from "@/components/ui/ForestBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias, actividades y acciones empresariales de EFAGRAM S.A.S.",
};

export default function NoticiasPage() {
  return (
    <>
      <PageHeader title="Noticias" description="Actividades empresariales, acciones de bienestar laboral, operacion forestal y compromiso con las comunidades." />
      <ForestBackground image="/images/detalle-pino.webp" className="bg-[radial-gradient(ellipse_at_30%_50%,#f7f4ec_0%,#ffffff_60%,#eef7ef_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-forest-100 bg-cream p-7 shadow-sm transition hover:-translate-y-1">
              <div className="relative mb-5 h-48 overflow-hidden rounded-2xl">
                <Image alt={item.title} className="object-cover transition duration-500 group-hover:scale-105" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={item.image} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest-700">{item.date}</p>
              <h2 className="mt-4 font-alegreya text-3xl font-semibold text-forest-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </ForestBackground>
    </>
  );
}
