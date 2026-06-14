"use client";

import { Link as HeroLink } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { assetPaths } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" onClick={() => setIsOpen(false)}>
          <Image alt="EFAGRAM S.A.S." className="h-12 w-auto object-contain" height={48} src={assetPaths.logo} width={160} priority />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-forest-700 sm:block">
            {company.tagline}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <HeroLink
                key={item.href}
                as={Link}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${active ? "bg-forest-700 text-white" : "text-slate-700 hover:bg-forest-50 hover:text-forest-700"}`}
                href={item.href}
              >
                {item.label}
              </HeroLink>
            );
          })}
        </div>

        <button
          aria-label="Abrir menu"
          className="rounded-full border border-forest-100 p-2 text-forest-700 lg:hidden"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-forest-100 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${pathname === item.href ? "bg-forest-700 text-white" : "text-slate-700 hover:bg-forest-50"}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
