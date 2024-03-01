import { z } from "zod"; 

export const CheckCodigo = z.object({
  codigo_invitacion: z.string({
    required_error: "El codigo de invitacion es requerido",
    invalid_type_error: "El codigo de invitacion debe ser un string",
  }).min(3, {
    message: "El codigo de invitacion debe tener al menos 3 caracteres"
  })
})