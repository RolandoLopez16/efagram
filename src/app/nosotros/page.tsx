import { Check, Eye, HeartHandshake, Leaf, MapPin, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { PageHeader } from "@/components/ui/PageHeader";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { assetPaths } from "@/lib/constants";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conozca la historia, misión, visión y valores de EFAGRAM S.A.S., empresa forestal y agroambiental con operación en Cauca, Valle del Cauca, Quindío y Risaralda.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHeader title="Nosotros" description="Empresa forestal y agroambiental que ejecuta labores de establecimiento, mantenimiento y cosecha de bosques comerciales de pinos y eucaliptos." />

      <section className="bg-[radial-gradient(ellipse_at_20%_30%,#eef7ef_0%,#ffffff_70%,#f7f4ec_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionTitle eyebrow="Reseña histórica" title="Nacidos para brindar manejo integrado y sostenible" description="La empresa Forestal y Agroambiental EFAGRAM SAS nace a partir de la necesidad de brindar un manejo integrado y sostenible de los recursos naturales en el departamento del Cauca, producto de las actividades relacionadas con el cultivo, cuidado, mantenimiento y cosecha de los bosques comerciales." />
            <div className="mx-auto max-w-none text-justify text-slate-600">
              <p className="mb-5 leading-8">
                EFAGRAM SAS se constituyó mediante Acta 001 del 28 de febrero de 2009 y se registró ante la Cámara de Comercio del Cauca el <strong>12 de diciembre de 2009</strong>. Inició sus actividades operativas en <strong>febrero de 2010</strong> y desde entonces centra su acción en la prestación de servicios agroforestales con exclusividad para <strong>Smurfit WestRock Cartón de Colombia</strong>.
              </p>
              <p className="leading-8">
                Desarrollamos las actividades objeto dentro de las tres zonas configuradas por Smurfit WestRock: Zona Norte (Quindío, Tolima y Risaralda), Zona Centro (Valle del Cauca) y Zona Sur (Cauca). Nuestro compromiso de prestar un servicio de calidad superior sigue vigente y nos permite constituirnos como un referente dentro del sector forestal colombiano con certificación RUC.
              </p>
            </div>
          </div>
          <div className="grid h-fit gap-4 rounded-[2rem] border border-forest-100 bg-white p-8 shadow-soft">
            <InfoLine icon={<MapPin size={20} />} label="Oficina principal" value={company.address} />
            <InfoLine icon={<Leaf size={20} />} label="NIT" value={company.nit} />
            <InfoLine icon={<Users size={20} />} label="Fundación" value="12 de diciembre de 2009" />
            <InfoLine icon={<HeartHandshake size={20} />} label="Cliente exclusivo" value="Smurfit WestRock" />
            <InfoLine icon={<Target size={20} />} label="Cobertura" value="Cauca, Valle, Quindío, Risaralda" />
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_70%_50%,#d7ead9_0%,#eef7ef_50%,#ffffff_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Propósito empresarial" title="Misión y visión" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-forest-100 bg-white p-8 shadow-soft">
              <Eye className="mb-5 text-forest-700" size={36} />
              <h3 className="font-alegreya text-3xl font-semibold text-forest-900">Misión</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{company.mission}</p>
            </div>
            <div className="rounded-[2rem] border border-forest-100 bg-white p-8 shadow-soft">
              <Target className="mb-5 text-forest-700" size={36} />
              <h3 className="font-alegreya text-3xl font-semibold text-forest-900">Visión</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{company.vision}</p>
              <p className="mt-4 text-lg font-bold italic text-forest-700">&ldquo;{company.visionSlogan}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_50%_60%,#f7f4ec_0%,#ffffff_60%,#eef7ef_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Trayectoria y compromiso" title="Nuestros pilares" description="Seis fundamentos que aseguran un correcto desempeño interno y externo en cada una de nuestras operaciones." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value) => (
              <div key={value.title} className="flex gap-4 rounded-[2rem] bg-forest-50 p-6">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-700 text-white">
                  <Check size={16} />
                </span>
                <div>
                  <h3 className="font-alegreya text-xl font-semibold text-forest-900">{value.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_30%_80%,#d7ead9_0%,#eef7ef_50%,#f7f4ec_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-forest-700">Gestión integral</p>
            <h2 className="font-alegreya text-4xl font-semibold text-forest-900 md:text-5xl">Impacto empresarial con enfoque humano</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              EFAGRAM articula operación forestal, empleo rural, sostenibilidad y acciones comunitarias como pilares de su presencia en campo.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <Image alt="Operación forestal EFAGRAM" className="w-full object-contain" height={400} src={assetPaths.harvester2} width={600} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-forest-50 p-4">
      <span className="text-forest-700">{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-700">{label}</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}
