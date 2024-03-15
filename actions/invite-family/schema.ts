import { z } from "zod";

export const InviteFamily = z.object({
  nombre_familia: z.string({
    required_error: "El nombre de la familia es requerido",
    invalid_type_error: "El nombre de la familia debe ser un string",
  }).min(3, {
    message: "El nombre de la familia debe tener al menos 3 caracteres"
  }),
  invitados: z.array(
    z.object({
      nombre: z.string({
        required_error: "El nombre del invitado es requerido",
        invalid_type_error: "El nombre del invitado debe ser un string",
      }).min(3, {
        message: "El nombre del invitado debe tener al menos 3 caracteres"
      }),
      adulto: z.boolean({
        required_error: "El campo adulto es requerido",
        invalid_type_error: "El campo adulto debe ser un booleano"
      }),
    }),
  )
});