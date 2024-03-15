import { z } from "zod"; 
import { Guest } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CheckCodigo } from "./schema";

export type InputType = z.infer<typeof CheckCodigo>;
export type ReturnType = ActionState<InputType, {
  id_familia: string;
  nombre_familia: string;
  invitados: Guest[];
}>;

