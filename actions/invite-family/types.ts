import { z } from "zod";
import { Family } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";
import { InviteFamily } from "./schema";

export type InputType = z.infer<typeof InviteFamily>;
export type ReturnType = ActionState<InputType, Family>;
