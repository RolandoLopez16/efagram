"use client";

import { Card, CardBody } from "@heroui/react";
import { Users, Workflow, Sprout } from "lucide-react";

import { company } from "@/data/company";

import { SectionTitle } from "../ui/SectionTitle";

export function AboutPreview() {
  return (
    <section className="bg-forest-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Nosotros" title="Una empresa forestal nacida en Popayán" description={company.description} />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            [Workflow, "Operación eficiente", "Coordinamos procesos administrativos y operativos desde Popayán para atender diferentes zonas del país."],
            [Users, "Bienestar laboral", "Reconocemos la importancia del recurso humano mediante acciones de integracion, cuidado y acompanamiento."],
            [Sprout, "Compromiso ambiental", "Trabajamos por el manejo responsable de plantaciones y la protección de recursos naturales."],
          ].map(([Icon, title, description]) => (
            <Card key={title as string} className="border border-forest-100 shadow-soft">
              <CardBody className="p-7">
                <Icon className="mb-5 text-forest-700" size={32} />
                <h3 className="font-alegreya text-2xl font-semibold text-forest-900">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description as string}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
