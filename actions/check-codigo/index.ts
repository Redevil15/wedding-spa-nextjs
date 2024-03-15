"use server";
import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CheckCodigo } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  console.log('como viene la data en check codigo: ', data);
  const { codigo_invitacion } = data;

  try {
    const families = await db.family.findMany({
      where: {
        id_familia: codigo_invitacion
      },
      include: {
        invitados: true
      }
    });

    if (!families || families.length === 0) {
      return { error: "No se encontraron datos para el código de invitación proporcionado." };
    }

    // Extraer los datos necesarios y devolverlos en el formato esperado
    const { id_familia, nombre_familia, invitados } = families[0]; // Suponiendo que solo haya una familia con ese código de invitación

    return { data: { id_familia, nombre_familia, invitados } };
  } catch (error) {
    console.log("Error al buscar la familia: ", error);
    return { error: "Error al buscar la familia." };
  }
};


export const checkCodigo = createSafeAction(CheckCodigo, handler);