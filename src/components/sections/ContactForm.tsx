"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Mail, Send } from "lucide-react";
import Image from "next/image";

import { company } from "@/data/company";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const contactMessage = useMemo(() => {
    const lines = [
      "Hola EFAGRAM S.A.S., quiero enviar una solicitud:",
      `Nombre: ${form.name || "No registrado"}`,
      `Telefono: ${form.phone || "No registrado"}`,
      `Correo: ${form.email || "No registrado"}`,
      `Mensaje: ${form.message || "No registrado"}`,
    ];

    return lines.join("\n");
  }, [form]);

  const whatsappHref = `${company.whatsappUrl}?text=${encodeURIComponent(contactMessage)}`;
  const emailHref = `${company.emailHref}?subject=${encodeURIComponent("Solicitud desde la página web de EFAGRAM")}&body=${encodeURIComponent(contactMessage)}`;

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="border border-forest-100 shadow-soft">
      <CardBody className="p-8">
        <h2 className="font-alegreya text-4xl font-semibold text-forest-900">Enviar solicitud</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Complete los campos y enviaremos su solicitud con un mensaje prellenado por WhatsApp. También puede usar el botón de correo.
        </p>
        <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              id="contact-name"
              isRequired
              label="Nombre completo"
              labelPlacement="outside"
              classNames={{
                label: "text-slate-700 font-semibold text-sm",
                input: "text-slate-900",
                inputWrapper: "border-slate-200 focus-within:!border-forest-500 hover:!border-forest-400 bg-white",
              }}
              name="name"
              placeholder="Ej: Juan Pérez"
              value={form.name}
              variant="bordered"
              onValueChange={(value) => updateField("name", value)}
            />
            <Input
              id="contact-phone"
              isRequired
              label="Teléfono de contacto"
              labelPlacement="outside"
              classNames={{
                label: "text-slate-700 font-semibold text-sm",
                input: "text-slate-900",
                inputWrapper: "border-slate-200 focus-within:!border-forest-500 hover:!border-forest-400 bg-white",
              }}
              name="phone"
              placeholder="Ej: 320 000 0000"
              type="tel"
              value={form.phone}
              variant="bordered"
              onValueChange={(value) => updateField("phone", value)}
            />
          </div>
          <Input
            id="contact-email"
            isRequired
            label="Correo electrónico"
            labelPlacement="outside"
            classNames={{
              label: "text-slate-700 font-semibold text-sm",
              input: "text-slate-900",
              inputWrapper: "border-slate-200 focus-within:!border-forest-500 hover:!border-forest-400 bg-white",
            }}
            name="email"
            placeholder="correo@empresa.com"
            type="email"
            value={form.email}
            variant="bordered"
            onValueChange={(value) => updateField("email", value)}
          />
          <Textarea
            id="contact-message"
            isRequired
            label="Mensaje o solicitud"
            labelPlacement="outside"
            classNames={{
              label: "text-slate-700 font-semibold text-sm",
              input: "text-slate-900",
              inputWrapper: "border-slate-200 focus-within:!border-forest-500 hover:!border-forest-400 bg-white",
            }}
            minRows={5}
            name="message"
            placeholder="Cuente brevemente su solicitud"
            value={form.message}
            variant="bordered"
            onValueChange={(value) => updateField("message", value)}
          />
          <div className="grid gap-4 sm:grid-cols-2 mt-2">
            <Button
              className="font-semibold shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
              style={{ backgroundColor: "#25D366", color: "white" }}
              radius="full"
              size="lg"
              startContent={<Image src="/images/whatsapp-svgrepo-com.svg" width={20} height={20} alt="WhatsApp" className="brightness-0 invert" />}
              type="submit"
            >
              Enviar por WhatsApp
            </Button>
            <Button
              as="a"
              href={emailHref}
              color="secondary"
              variant="solid"
              className="font-semibold shadow-lg text-white hover:scale-[1.01] active:scale-[0.99] transition-all"
              radius="full"
              size="lg"
              startContent={<Mail size={20} />}
            >
              Enviar correo
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
