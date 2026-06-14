import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroUIProvider } from "@/components/providers/HeroUIProvider";
import { company } from "@/data/company";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Empresa forestal y agroambiental`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: ["EFAGRAM", "forestal", "agroambiental", "Popayán", "Cauca", "silvicultura"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <HeroUIProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
