import { ArrowUpRight, Building2, Handshake, Newspaper, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetPaths } from "@/lib/constants";

const quickLinks = [
  {
    title: "Nosotros",
    href: "/nosotros",
    description: "Conozca la empresa, su ubicación y enfoque de trabajo.",
    image: assetPaths.equipo,
    icon: Building2,
  },
  {
    title: "Servicios",
    href: "/servicios",
    description: "Explore nuestras labores forestales y agroambientales.",
    image: "/images/fw.webp",
    icon: Trees,
  },
  {
    title: "Aliados",
    href: "/aliados",
    description: "Revise aliados estratégicos y zonas de operación.",
    image: assetPaths.plantacionAerea,
    icon: Handshake,
  },
  {
    title: "Noticias",
    href: "/noticias",
    description: "Actividad empresarial, comunidad y bienestar laboral.",
    image: assetPaths.forestal2,
    icon: Newspaper,
  },
];

export function HomeQuickLinks() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_20%,#d7ead9_0%,#ffffff_60%,#f7f4ec_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <Image
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]"
        fill
        sizes="100vw"
        src={assetPaths.forestCanopy}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-forest-700">Explore EFAGRAM</p>
            <h2 className="max-w-3xl font-alegreya text-4xl font-semibold tracking-tight text-forest-900 md:text-5xl">
              Conozca cada área de <span className="forest-inline-text">EFAGRAM</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Cliente preferencial de Smurfit WestRock. Cobertura en zonas Norte (Caldas, Quindío, Risaralda),
            Centro (Valle del Cauca) y Sur (Cauca). Gestión forestal con compromiso rural.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] bg-forest-900 p-5 text-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-soft"
                href={item.href}
              >
                <Image
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-110 group-hover:opacity-85"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/55 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md transition group-hover:bg-white group-hover:text-forest-900">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="mb-4 h-px w-12 bg-emerald-200 transition-all duration-500 group-hover:w-24" />
                    <h3 className="font-alegreya text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-100">
                      Ver página <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
