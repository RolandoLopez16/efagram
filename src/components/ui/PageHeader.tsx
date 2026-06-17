import Image from "next/image";

import { assetPaths } from "@/lib/constants";

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-forest-900 px-4 py-20 text-white sm:px-6 lg:px-8">
      <Image alt="Plantación forestal EFAGRAM" className="absolute inset-0 h-full w-full object-cover opacity-40" fill src={assetPaths.hero} priority />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 via-forest-900/50 to-forest-700/30" />
      <div className="relative mx-auto max-w-7xl">
        <Image alt="EFAGRAM S.A.S." className="mb-4 h-auto w-auto object-contain" height={48} src={assetPaths.logoWhite} width={220} />
        <h1 className="max-w-4xl font-alegreya text-5xl font-semibold tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{description}</p>
      </div>
    </section>
  );
}
