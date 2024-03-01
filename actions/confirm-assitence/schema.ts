import { z } from "zod"; 

export const ConfirmAssistence = z.array(
  z.object({
    id_invitado: z.string(),
    confirmed: z.boolean()
  })
)

