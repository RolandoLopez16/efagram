"use client";

import { Card, CardBody } from "@heroui/react";

import { allies } from "@/data/allies";
import { operationZones } from "@/data/zones";

import { OperationZonesChart } from "../charts/OperationZonesChart";
import { SectionTitle } from "../ui/SectionTitle";

export function AlliesPreview() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Aliados" title="Presencia operativa en zonas estrategicas" description="EFAGRAM ha fortalecido su presencia empresarial junto a organizaciones aliadas y clientes preferenciales." />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="shadow-soft">
            <CardBody className="p-8">
              <OperationZonesChart />
            </CardBody>
          </Card>
          <div className="grid gap-5">
            {allies.map((ally) => (
              <div key={ally.name} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <h3 className="font-alegreya text-2xl font-semibold text-forest-900">{ally.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{ally.description}</p>
              </div>
            ))}
            <div className="rounded-[2rem] bg-forest-900 p-6 text-white">
              <h3 className="font-alegreya text-2xl font-semibold">Zonas de influencia</h3>
              <div className="mt-4 grid gap-3">
                {operationZones.map((zone) => (
                  <p key={zone.name} className="text-sm text-white/75">
                    <strong className="text-white">{zone.name}:</strong> {zone.departments.join(", ")}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
