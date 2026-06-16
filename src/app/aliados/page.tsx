import type { Metadata } from "next";
import Image from "next/image";

import { ForestBackground } from "@/components/ui/ForestBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { assetPaths } from "@/lib/constants";
import { allies } from "@/data/allies";
import { operationZones } from "@/data/zones";

export const metadata: Metadata = {
  title: "Aliados",
  description: "Cliente exclusivo Smurfit WestRock y aliados estratégicos de EFAGRAM S.A.S. con presencia en Cauca, Valle del Cauca, Caldas, Quindío y Risaralda.",
};

export default function AliadosPage() {
  return (
    <>
      <PageHeader title="Aliados" description="Relaciones empresariales y presencia operativa en zonas forestales del norte, centro y sur de Colombia." />
      <ForestBackground image="/images/paisaje.webp" className="bg-[radial-gradient(ellipse_at_60%_30%,#f7f4ec_0%,#ffffff_60%,#eef7ef_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Clientes y aliados" title="Confianza institucional y cobertura regional" description="Desde 2010 prestamos servicios agroforestales con exclusividad para Smurfit WestRock Cartón de Colombia en las tres zonas configuradas para la operación." />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid gap-5">
              {allies.map((ally) => (
                <article key={ally.name} className="rounded-[2rem] border border-forest-100 bg-white p-8 shadow-soft">
                    <h2 className="font-alegreya text-3xl font-semibold text-forest-900">{ally.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{ally.description}</p>
                </article>
              ))}
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <Image alt="Zonas de influencia EFAGRAM" className="w-full rounded-xl object-cover" height={400} src={assetPaths.zonaInfluencia} width={600} />
              <div className="mt-4 grid gap-3">
                  {operationZones.map((zone) => (
                    <p key={zone.name} className="rounded-2xl bg-forest-50 p-4 text-sm text-slate-700">
                      <strong className="text-forest-900">{zone.name}:</strong> {zone.departments.join(", ")}
                    </p>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </ForestBackground>
    </>
  );
}
