import { services } from "@/data/services";

import { InfoCard } from "../ui/InfoCard";
import { SectionTitle } from "../ui/SectionTitle";

export function ServicesPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Servicios"
          title="Ejecucion tecnica y operativa en campo"
          description="Soluciones forestales y agroambientales enfocadas en productividad, seguridad y responsabilidad territorial."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <InfoCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
