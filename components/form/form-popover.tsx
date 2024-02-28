"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Plus, XIcon } from "lucide-react";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { useAction } from "@/hooks/use-action";
import { inviteFamily } from "@/actions/invite-family";
import { toast } from "sonner";
import { ElementRef, useRef, useState } from "react";
import { useRouter } from "next/navigation";


interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom"
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  const router = useRouter()
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute, fieldErrors } = useAction(inviteFamily, {
    onSuccess: (data) => {
      toast.success("Family invited");
      setGuests([{ name: "", adult: false }]);
      router.refresh()
      closeRef.current?.click();
    },
    onError: (error) => {
      console.log('Error inviting family', error)
      toast.error(error);
    },
  })

  const [guests, setGuests] = useState([{ name: "", adult: false }]);

  const handleAddGuest = () => {
    setGuests([...guests, { name: "", adult: false }]);
  }

  const handleRemoveGuest = (index: number) => {
    if (index === 0) return;
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  }

  const handleGuestAdultChange = (index: number, adult: boolean) => {
    const updateGuests = guests.map((guest, i) =>
      i === index ? { ...guest, adult } : guest
    );
    setGuests(updateGuests);
  }

  const handleGuestNameChange = (index: number, name: string) => {
    const updateGuests = guests.map((guest, i) =>
      i === index ? { ...guest, name } : guest
    );
    setGuests(updateGuests);
  }

  const onSubmit = (formData: FormData) => {
    const nombre_familia = formData.get("nombre_familia") as string;
    const invitados = guests.map((guest) => ({
      nombre: guest.name,
      adulto: guest.adult,
    }));

    const data = {
      nombre_familia,
      invitados,
    }


    execute(data);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className="w-140 pt-3"
      >
        <div className="text-sm font-medium text-center text-neutral-700 pb-4">
          Invite Family
        </div>
        <PopoverClose
          asChild
          ref={closeRef}
        >
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormInput
              id="nombre_familia"
              label="Nombre Familia"
              type="text"
              placeholder="Nombre de la familia a invitar"
              required
              errors={fieldErrors}
            />
          </div>
          <div className="space-y-4 mt-4">
            {guests.map((guest, index) => (
              <div
                key={index}
                className="flex items-center space-x-2"
              >
                <FormInput
                  id={`guest_name_${index}`}
                  label={`Nombre del invitado ${index + 1}`}
                  type="text"
                  placeholder="Nombre del invitado"
                  value={guest.name}
                  onChange={(e) => handleGuestNameChange(index, e.target.value)}
                />
                <input
                  type="checkbox"
                  checked={guest.adult}
                  onChange={(e) => handleGuestAdultChange(index, e.target.checked)}
                />
                <Button
                  onClick={() => handleRemoveGuest(index)}
                  variant="destructive"
                  className="text-neutral-600"
                  size="sm"
                >
                  <XIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant='outline'
                  size="sm"
                  onClick={handleAddGuest}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          <FormSubmit className="w-full">
            Invite
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};