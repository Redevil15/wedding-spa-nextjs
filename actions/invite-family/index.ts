"use server";

import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { InviteFamily } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  console.log('como viene la data', data)
  const { nombre_familia, invitados } = data;
  console.log('Invite action', data)

  let family;

  try {
    family = await db.family.create({
      data: {
        nombre_familia,
        invitados: {
          createMany: {
            data: invitados.map((invitado) => ({
              nombre_invitado: invitado.nombre,
              es_adulto: invitado.adulto ? true : false,
            }))
          }
        }
      },
    });
  } catch (error) {
    return {
      error: "Error al invitar a la familia",
    };
  }

  revalidatePath('/adminPage123')
  return { data: family };
};

export const inviteFamily = createSafeAction(InviteFamily, handler);