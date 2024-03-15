/* import { z } from "zod";
import { ConfirmAssistence } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Guest } from "@prisma/client";

export type InputType = z.infer<typeof ConfirmAssistence>;
export type ReturnType =
ActionState<InputType, Guest> */

import { z } from "zod";

export const ConfirmAssistence = z.array(
  z.object({
    id_invitado: z.string(),
    confirmed: z.boolean(),
  })
);

export type InputType = z.infer<typeof ConfirmAssistence>;
