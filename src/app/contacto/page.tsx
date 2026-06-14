import { Mail, MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacte a EFAGRAM S.A.S. en Popayán, Cauca.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader title="Contacto" description="Estamos disponibles para atender solicitudes relacionadas con servicios forestales, operativos y agroambientales." />
      <section className="bg-[radial-gradient(ellipse_at_40%_20%,#eef7ef_0%,#ffffff_70%,#f7f4ec_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <ContactInfo icon={<MapPin size={22} />} title="Oficina principal" text={company.fullAddress} />
            <ContactInfo icon={<MessageCircle size={22} />} title="WhatsApp" text={company.whatsapp} />
            <ContactInfo icon={<Mail size={22} />} title="Correo" text={company.email} />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactInfo({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] bg-forest-50 p-6">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-forest-700 shadow-sm">{icon}</span>
      <h2 className="font-alegreya text-2xl font-semibold text-forest-900">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
