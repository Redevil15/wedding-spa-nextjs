
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";


interface Invitado {
  nombre_invitado: string;
  id_invitado: string;
  confirmado: boolean;
}

interface CardFinalConfirmationProps {
  adultos: Invitado[];
  ninos: Invitado[];
};

export const CardFinalConfirmation = ({
  adultos,
  ninos
}: CardFinalConfirmationProps) => {
  const [invitados, setInvitados] = useState<Invitado[]>([...adultos.map(adulto => ({ ...adulto, confirmado: false })), ...ninos.map(nino => ({ ...nino, confirmado: false }))]);

  const handleCheckboxChange = (id: string) => {
    setInvitados(prevInvitados =>
      prevInvitados.map(invitado =>
        invitado.id_invitado === id
          ? { ...invitado, confirmado: !invitado.confirmado }
          : invitado
      )
    )
    console.log('invitados', invitados)
  }

  useEffect(() => {
    console.log('data adultos:', adultos)
    console.log('Invitados actualizados:', invitados);
  }, [invitados]);


  return (
    <Card
      className="bg-[#666460] max-w-[280px] md:max-w-[450px] h-[600px]"
    >
      <CardHeader
        className="mb-10"
      >
        <CardTitle
          className="text-[#b69f6b] uppercase text-xl tracking-widest text-center my-1"
        >
          Confirmación de Invitados
        </CardTitle>
        <CardDescription
          className="text-white text-center uppercase text-xs"
        >
          Selecciona la casilla a lado del nombre de aquellos invitados que desees confirmar. Los invitados con casillas sin seleccionar se cancelarán en automático.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div>
            <h1 className="text-[#b69f6b] -mt-6 mb-1 tracking-wide">
              Adultos
            </h1>
            <div className="flex flex-col gap-y-4">
              {adultos.map((invitado, index) => (
                <div key={index} className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    checked={invitado.confirmado}
                    onChange={() => {
                      handleCheckboxChange(invitado.id_invitado)
                    }}
                  />
                  <label>{invitado.nombre_invitado}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[#b69f6b] mt-4 mb-1 tracking-wide">
              Ninos
            </h1>
            <div className="flex flex-col gap-y-4">
              {ninos.map((invitado, index) => (
                <div key={index} className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    checked={invitado.confirmado}
                    onChange={() => {
                      handleCheckboxChange(invitado.id_invitado)
                    }}
                  />
                  <label>{invitado.nombre_invitado}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter
        className="my-12 flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center"
      >
        <Button
          variant="outline"
          className="w-full md:w-auto bg-[#b69f6b] text-white tracking-wider hover:bg-[#b69f6b] hover:text-[#666460] transition-colors duration-300 ease-in-out"

        >
          Regresar
        </Button>
        <Button
          className="w-full md:w-auto bg-[#b69f6b] text-white tracking-wider hover:bg-[#b69f6b] hover:text-[#666460] transition-colors duration-300 ease-in-out"

        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  )
}