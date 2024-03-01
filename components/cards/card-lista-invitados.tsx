import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface CardListaInvitadosProps {
  adultos: String[];
  ninos: String[];
  onBack: () => void;
  onContinue: () => void;
}

export const CardListaInvitados = ({
  adultos,
  ninos,
  onBack,
  onContinue
}: CardListaInvitadosProps) => {
  return (
    <Card
      className="bg-[#666460] max-w-[280px] md:max-w-[450px] h-[600px]"
    >
      <CardHeader
        className="mb-10"
      >
        <CardTitle
          className="text-[#b69f6b] uppercase text-xl tracking-widest text-center my-8"
        >
          Invitación
        </CardTitle>
        <CardDescription
          className="text-white text-center uppercase text-xs"
        >
          Hola te invitamos a nuestra boda! Esperamos puedas asistir.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-col space-y-2">
          <h1 className="text-[#b69f6b] text-center my-8">Pases</h1>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-sm text-white font-normal tracking-wide">Adultos</h1>
              <span className="uppercase mt-2 text-xs text-[#b69f6b]">{adultos?.length === 1 ? `${adultos.length} pase` : `${adultos.length} pases`}</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-sm text-white font-normal tracking-wide">Ninos</h1>
              <span className="uppercase mt-2 text-xs text-[#b69f6b]">{ninos?.length === 1 ? `${ninos.length} pase` : `${ninos.length} pases`}</span>
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
          onClick={onBack}
        >
          Regresar
        </Button>
        <Button
          className="w-full md:w-auto bg-[#b69f6b] text-white tracking-wider hover:bg-[#b69f6b] hover:text-[#666460] transition-colors duration-300 ease-in-out"
          onClick={onContinue}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  )
}