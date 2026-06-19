"use client";

import { MapPin } from "lucide-react";
import { useDisclosure } from "@heroui/react";
import { MapModal } from "./MapModal";

export function FooterMapLink() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button 
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 hover:text-white" 
        onClick={onOpen}
        type="button"
      >
        <MapPin size={16} /> Ver ubicación
      </button>

      <MapModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
