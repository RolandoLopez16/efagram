export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-forest-700">{eyebrow}</p> : null}
      <h2 className="font-alegreya text-4xl font-semibold tracking-tight text-forest-900 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
