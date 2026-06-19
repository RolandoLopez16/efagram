import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroUIProvider } from "@/components/providers/HeroUIProvider";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { company } from "@/data/company";
import { assetPaths } from "@/lib/constants";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Empresa forestal y agroambiental`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: ["EFAGRAM", "forestal", "agroambiental", "Popayán", "Cauca", "silvicultura", "cosecha forestal", "mantenimiento de bosques", "restauración de bosques"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${company.name} | Empresa forestal y agroambiental`,
    description: company.description,
    url: company.siteUrl,
    siteName: company.name,
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: assetPaths.hero,
        width: 1200,
        height: 630,
        alt: "Paisaje forestal gestionado por EFAGRAM S.A.S.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Empresa forestal y agroambiental`,
    description: company.description,
    images: [assetPaths.hero],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon-white.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: company.siteUrl,
  logo: `${company.siteUrl}${assetPaths.logo}`,
  description: company.description,
  foundingDate: "2009-12-12",
  taxID: company.nit,
  email: company.email,
  telephone: `+57${company.whatsapp.replace(/\s/g, "")}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Popayán",
    addressRegion: "Cauca",
    addressCountry: "CO",
  },
  areaServed: company.zones.map((zone) => ({
    "@type": "AdministrativeArea",
    name: zone,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+57${company.whatsapp.replace(/\s/g, "")}`,
    email: company.email,
    contactType: "customer service",
    areaServed: "CO",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <HeroUIProvider>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton className="fixed bottom-5 right-5 z-40 shadow-soft" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        </HeroUIProvider>
      </body>
    </html>
  );
}
