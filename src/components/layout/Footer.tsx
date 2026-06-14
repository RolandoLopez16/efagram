import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { assetPaths } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1.3fr_1fr] lg:items-start lg:px-8">
        <div>
          <Image alt="EFAGRAM S.A.S." className="mb-4 h-11 w-auto object-contain" height={44} src={assetPaths.logoWhite} width={155} />
          <p className="max-w-xs text-sm leading-6 text-white/70">Gestión forestal y agroambiental con operación responsable en territorios rurales.</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-white">Navegación</h3>
          <div className="grid gap-2 lg:grid-cols-1">
            {navigation.map((item) => (
              <Link key={item.href} className="text-sm text-white/75 hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-white">Oficina</h3>
          <p className="text-sm leading-6 text-white/75">
            Transversal 9 #60AN-41<br />
            barrio Bellavista, Popayán<br />
            Cauca, Colombia
          </p>
          <a className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 hover:text-white" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin size={16} /> Ver ubicación
          </a>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-white">Contacto</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <a className="inline-flex items-center gap-2 hover:text-white" href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp {company.whatsapp}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={company.phoneHref}>
              <Phone size={16} /> Llamar
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={company.emailHref}>
              <Mail size={16} /> {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {company.name}. Gestión forestal responsable y sostenible.
      </div>
    </footer>
  );
}
