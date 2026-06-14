"use client";

import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <Card className="border border-forest-100 shadow-soft">
      <CardBody className="p-8">
        <h2 className="font-alegreya text-4xl font-semibold text-forest-900">Enviar solicitud</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Formulario visual listo para conectarse posteriormente a correo, API o integracion de Vercel.
        </p>
        <form className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Nombre" placeholder="Su nombre" variant="bordered" />
            <Input label="Telefono" placeholder="Numero de contacto" variant="bordered" />
          </div>
          <Input label="Correo" placeholder="correo@empresa.com" type="email" variant="bordered" />
          <Textarea label="Mensaje" minRows={5} placeholder="Cuente brevemente su solicitud" variant="bordered" />
          <Button color="primary" endContent={<Send size={18} />} radius="full" size="lg" type="button">
            Enviar mensaje
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
