import type { LucideIcon } from "lucide-react";

export function InfoCard({ title, description, icon: Icon }: { title: string; description: string; icon?: LucideIcon }) {
  return (
    <article className="rounded-[2rem] border border-forest-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-forest-200">
      {Icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700">
          <Icon size={24} />
        </div>
      ) : null}
      <h3 className="font-alegreya text-2xl font-semibold text-forest-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
