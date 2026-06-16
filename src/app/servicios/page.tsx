import type { Metadata } from "next";

import { ForestBackground } from "@/components/ui/ForestBackground";
import { InfoCard } from "@/components/ui/InfoCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Establecimiento forestal, mantenimiento de bosques, cosecha forestal, silvicultura, restauración y asesoría agroambiental de EFAGRAM S.A.S.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader title="Servicios" description="Ejecutamos labores de establecimiento, mantenimiento y cosecha de bosques comerciales, restauración de ecosistemas y asesoría especializada en el sector forestal." />
      <ForestBackground image="/images/operacion-harvester.webp" className="bg-[radial-gradient(ellipse_at_50%_15%,#eef7ef_0%,#ffffff_60%,#f7f4ec_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Portafolio" title="Servicios forestales integrales" description="Desde el establecimiento de bosques hasta la cosecha y restauración de ecosistemas, con calidad, seguridad y compromiso ambiental." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <InfoCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </ForestBackground>
    </>
  );
}
