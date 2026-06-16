import type { LucideIcon } from "lucide-react";
import Image from "next/image";

export function InfoCard({ title, description, icon: Icon, image }: { title: string; description: string; icon?: LucideIcon; image?: string }) {
  return (
    <article className="group rounded-[2rem] border border-forest-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-forest-200">
      {image ? (
        <div className="relative mb-6 h-44 overflow-hidden rounded-2xl">
          <Image alt={title} className="object-cover transition duration-500 group-hover:scale-105" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={image} />
        </div>
      ) : Icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700">
          <Icon size={24} />
        </div>
      ) : null}
      <h3 className="font-alegreya text-2xl font-semibold text-forest-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
