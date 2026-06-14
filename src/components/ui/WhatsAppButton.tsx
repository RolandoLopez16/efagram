"use client";

import { Button } from "@heroui/react";
import { MessageCircle } from "lucide-react";

import { company } from "@/data/company";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <Button as="a" className={className} color="primary" href={company.whatsappUrl} radius="full" size="lg" startContent={<MessageCircle size={18} />} target="_blank" rel="noopener noreferrer">
      Escribir por WhatsApp
    </Button>
  );
}
