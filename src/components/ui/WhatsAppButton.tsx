"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

import { company } from "@/data/company";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <Button as="a" className={className} color="primary" href={company.whatsappUrl} radius="full" size="lg" startContent={<Image alt="WhatsApp" height={18} src="/images/whatsapp-svgrepo-com.svg" width={18} />} target="_blank" rel="noopener noreferrer">
      Escribir por WhatsApp
    </Button>
  );
}
