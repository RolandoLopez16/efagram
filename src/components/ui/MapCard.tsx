"use client";

import { MapPin } from "lucide-react";
import { useDisclosure } from "@heroui/react";
import { MapModal } from "./MapModal";

export function MapCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button 
        className="w-full text-left rounded-[2rem] bg-forest-900 p-6 text-white transition hover:-translate-y-1 hover:shadow-soft" 
        onClick={onOpen}
        type="button"
      >
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm">
          <MapPin size={22} />
        </span>
        <h2 className="font-alegreya text-2xl font-semibold">Ver ubicación</h2>
        <p className="mt-2 text-sm leading-7 text-white/70">Abrir mapa interactivo.</p>
      </button>

      <MapModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
