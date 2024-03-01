"use client";

import { useEffect, useState } from "react";
import { CardCodigo } from "../cards/card-codigo";
import { CardListaInvitados } from "../cards/card-lista-invitados";
import { CardFinalConfirmation } from "../cards/final-confirmation";

export const FormCodigoInvitacion = () => {
  const [invitados, setInvitados] = useState([]);
  const [invitadosAdultos, setInvitadosAdultos] = useState([]);
  const [invitadosNinos, setInvitadosNinos] = useState([]);
  const [finalConfirmation, setFinalConfirmation] = useState(false);

  const handleInvitados = (data: any) => {
    console.log(data)
    setInvitados(data.invitados)
    console.log("Invitados en padre: ", invitados)
  };

  useEffect(() => {
    console.log("Invitados en padre: ", invitados);
    const adultos = invitados.filter((invitado: any) => invitado.es_adulto);
    const ninos = invitados.filter((invitado: any) => !invitado.es_adulto);
    setInvitadosAdultos(adultos);
    console.log("Adultos", adultos);
    setInvitadosNinos(ninos);
    console.log("Ninos", ninos);
  }, [invitados]);

  return (
    <div className="flex flex-col space-y-2 my-4">
      {!finalConfirmation && invitados.length === 0 ? (
        <CardCodigo
          onInvitados={handleInvitados}
        />
      ) : !finalConfirmation && invitados.length > 0 ? (
        <CardListaInvitados
          adultos={invitadosAdultos}
          ninos={invitadosNinos}
          onBack={() => setInvitados([])}
          onContinue={() => setFinalConfirmation(true)}
        />
      ) : finalConfirmation && (
        <CardFinalConfirmation 
          adultos={invitadosAdultos}
          ninos={invitadosNinos}
        />
      )}
    </div>
  )
}