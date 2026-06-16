"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Leaf, Mail, MapPin, Phone, Sprout, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { company } from "@/data/company";
import { assetPaths } from "@/lib/constants";

export function HomeHero() {
  const highlights = [
    [Sprout, "Establecimiento forestal"],
    [Leaf, "Mantenimiento de bosques"],
    [Trees, "Cosecha forestal"],
  ] as const;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#d7ead9_0,#f7f4ec_34%,#ffffff_100%)]">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-forest-100/60 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-earth/10 blur-3xl" />
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-4 pt-3 pb-6 sm:px-6 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pt-4 lg:pb-10 lg:px-8">
        <div className="relative z-10">
          <Image
            alt="EFAGRAM S.A.S."
            className="mb-4 h-auto w-auto object-contain"
            height={48}
            src={assetPaths.logoCompleto}
            width={220}
            priority
          />
          <h1 className="font-alegreya text-4xl font-semibold leading-[0.96] tracking-tight text-forest-900 md:text-6xl xl:text-7xl">
            Manejo integrado y sostenible de recursos forestales
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Ejecutamos labores de establecimiento, mantenimiento y cosecha de bosques comerciales
            de pinos y eucaliptos como cliente preferencial de Smurfit WestRock en las zonas
            Norte (Caldas, Quindío, Risaralda), Centro (Valle del Cauca) y Sur (Cauca), brindando
            soluciones integrales con calidad, seguridad y compromiso ambiental.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} className="text-forest-700" />
              {company.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} className="text-forest-700" />
              {company.whatsapp}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-forest-700" />
              {company.city}
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              as={Link}
              className="w-full sm:w-auto"
              color="primary"
              endContent={<ArrowRight size={18} />}
              href="/servicios"
              radius="full"
              size="lg"
            >
              Conocer servicios
            </Button>
            <Button
              as={Link}
              className="w-full sm:w-auto"
              href="/contacto"
              radius="full"
              size="lg"
              variant="bordered"
            >
              Hablar con EFAGRAM
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(([Icon, label]) => (
              <div
                key={label}
                className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3.5 text-sm font-semibold text-forest-900 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <Icon className="text-forest-700 shrink-0" size={20} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="relative row-span-2 overflow-hidden rounded-[2.5rem] bg-forest-900 shadow-soft transition duration-500 hover:-translate-y-1">
            <Image
              alt="Vista aérea de plantaciones forestales operadas por EFAGRAM S.A.S."
              className="h-full w-full object-cover opacity-95 transition duration-700 hover:scale-105"
              height={680}
              src={assetPaths.plantacionAerea}
              width={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.7rem] border border-white/15 bg-forest-900/75 p-5 text-white shadow-2xl backdrop-blur-md">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300" /> Popayán, Cauca
              </p>
              <p className="mt-2 font-alegreya text-2xl font-semibold">Cobertura forestal con manejo responsable en zonas de operación.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-soft transition duration-500 hover:-translate-y-1">
            <Image
              alt="Operación forestal con maquinaria especializada"
              className="h-52 w-full object-cover transition duration-700 hover:scale-105"
              height={280}
              src={assetPaths.harvester}
              width={460}
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-soft transition duration-500 hover:-translate-y-1">
            <Image
              alt="Bosque de pinos en zona de operación forestal de EFAGRAM S.A.S."
              className="h-44 w-full object-cover transition duration-700 hover:scale-105"
              height={260}
              src="/images/bosque-pinos-vertical.webp"
              width={460}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
