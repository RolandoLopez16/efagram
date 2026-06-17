import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/sections/ContactForm";
import { ForestBackground } from "@/components/ui/ForestBackground";
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
      <ForestBackground image="/images/paisaje-forestal-efagram.webp" className="bg-[radial-gradient(ellipse_at_40%_20%,#eef7ef_0%,#ffffff_70%,#f7f4ec_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <ContactInfo external icon={<MapPin size={22} />} title="Oficina principal" text={company.fullAddress} href={company.mapsUrl} />
            <ContactInfo external icon={<Image alt="WhatsApp" height={22} src="/images/whatsapp-svgrepo-com.svg" width={22} />} title="WhatsApp" text={company.whatsapp} href={company.whatsappUrl} />
            <ContactInfo icon={<Mail size={22} />} title="Correo" text={company.email} href={company.emailHref} />
            <a className="rounded-[2rem] bg-forest-900 p-6 text-white transition hover:-translate-y-1 hover:shadow-soft" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm"><MapPin size={22} /></span>
              <h2 className="font-alegreya text-2xl font-semibold">Ver ubicación</h2>
              <p className="mt-2 text-sm leading-7 text-white/70">Abrir dirección en Google Maps.</p>
            </a>
          </div>
          <ContactForm />
        </div>
      </ForestBackground>
    </>
  );
}

function ContactInfo({ icon, title, text, href, external = false }: { icon: ReactNode; title: string; text: string; href?: string; external?: boolean }) {
  const content = (
    <>
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-forest-700 shadow-sm">{icon}</span>
      <h2 className="font-alegreya text-2xl font-semibold text-forest-900">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </>
  );

  if (href) {
    return (
      <a className="rounded-[2rem] bg-forest-50 p-6 transition hover:-translate-y-1 hover:bg-forest-100 hover:shadow-soft" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-[2rem] bg-forest-50 p-6">
      {content}
    </div>
  );
}
