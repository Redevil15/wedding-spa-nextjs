"use server";

import { db } from "@/lib/db";

const handler = async (data: { id_invitado : string; confirmed: boolean }[]): Promise<void> => {
  console.log('como viene la data en confirm assistence: ', data);

  try {
    for (const { id_invitado, confirmed} of data) {
      await db.guest.update({
        where: {
          id_invitado
        },
        data: {
          confirmed
        }
      })
    }
    console.log('Invitados confirmados correctamente')
  } catch (error) {
    console.log("Error al actualizar los invitados: ", error);
    throw new Error("Error al actualizar los invitados");
  }
}

export const ConfirmAssistence = handler;