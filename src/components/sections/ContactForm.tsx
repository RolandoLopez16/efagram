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
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nombre completo" fieldId="contact-name">
              <Input
                id="contact-name"
                isRequired
                classNames={{ input: "text-slate-900", inputWrapper: "bg-gradient-to-br from-forest-50 to-forest-100" }}
                name="name"
                placeholder="Ej: Juan Pérez"
                value={form.name}
                variant="bordered"
                onValueChange={(value) => updateField("name", value)}
              />
            </Field>
            <Field label="Teléfono de contacto" fieldId="contact-phone">
              <Input
                id="contact-phone"
                isRequired
                classNames={{ input: "text-slate-900", inputWrapper: "bg-gradient-to-br from-forest-50 to-forest-100" }}
                name="phone"
                placeholder="Ej: 320 000 0000"
                type="tel"
                value={form.phone}
                variant="bordered"
                onValueChange={(value) => updateField("phone", value)}
              />
            </Field>
          </div>
          <Field label="Correo electrónico" fieldId="contact-email">
            <Input
              id="contact-email"
              isRequired
                classNames={{ input: "text-slate-900", inputWrapper: "bg-gradient-to-br from-forest-50 to-forest-100" }}
                name="email"
              placeholder="correo@empresa.com"
              type="email"
              value={form.email}
              variant="bordered"
              onValueChange={(value) => updateField("email", value)}
            />
          </Field>
          <Field label="Mensaje o solicitud" fieldId="contact-message">
            <Textarea
              id="contact-message"
              isRequired
                classNames={{ input: "text-slate-900", inputWrapper: "bg-gradient-to-br from-forest-50 to-forest-100" }}
                minRows={5}
                name="message"
              placeholder="Cuente brevemente su solicitud"
              value={form.message}
              variant="bordered"
              onValueChange={(value) => updateField("message", value)}
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button color="primary" radius="full" size="lg" startContent={<Send size={18} />} type="submit">
              Enviar por WhatsApp
            </Button>
            <Button as="a" href={emailHref} radius="full" size="lg" startContent={<Mail size={18} />} variant="bordered">
              Enviar correo
            </Button>
          </div>
          <a className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 sm:justify-start" href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Image alt="WhatsApp" height={16} src="/images/whatsapp-svgrepo-com.svg" width={16} /> Abrir WhatsApp sin formulario
          </a>
        </form>
      </CardBody>
    </Card>
  );
}

function Field({ fieldId, label, children }: { fieldId: string; label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-slate-700" htmlFor={fieldId}>
        {label} <span className="text-red-600">*</span>
      </label>
      {children}
    </div>
  );
}
