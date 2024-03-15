"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { useAction } from "@/hooks/use-action";
import { checkCodigo } from "@/actions/check-codigo";
import { useState } from "react";
import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";

interface CardCodigoProps {
  onInvitados: (data: any) => void;
}
export const CardCodigo = ({ onInvitados }: CardCodigoProps) => {

  const { execute, fieldErrors } = useAction(
    checkCodigo, {
    onSuccess: (data) => {
      console.log('Codigo correcto, respuesta', data)
      onInvitados(data);
    },
    onError: (error) => {
      console.log('Error en el codigo', error)
    }
  }
  )


  const onSubmit = (formData: FormData) => {
    const codigo_invitacion = formData.get('codigo_invitacion') as string;

    const data = {
      codigo_invitacion
    }

    execute(data);
  }


  return (
    <Card
      className="bg-[#666460] max-w-[280px] md:max-w-[450px] h-[600px]"
    >
      <CardHeader
        className="mb-10"
      >
        <CardTitle
          className="text-[#b69f6b] uppercase text-xl tracking-widest text-center my-8"
        >
          Confirmación
        </CardTitle>
        <CardDescription
          className="text-white text-center uppercase text-xs"
        >
          Ingresa tu código de invitado y da click en continuar
        </CardDescription>
      </CardHeader>
      <CardContent
        className=""
      >
        <form action={onSubmit} className="flex flex-col gap-y-8">
          <FormInput
            id="codigo_invitacion"
            label="Codigo de invitación"
            type="text"
            placeholder="gfydshs"
            required
            className="text-white bg-[#000c1b66] h-[35px]"
          />
          <FormSubmit
            className="bg-[#b69f6b] p-4 text-white text-md tracking-wider"
          >
            Buscar
          </FormSubmit>
          <span className="my-6 text-white text-sm">Ingresa el código que viene en la invitación</span>
        </form>
      </CardContent>
    </Card>
  )
}