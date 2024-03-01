import Image from "next/image"
import { db } from "@/lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { FormCodigoInvitacion } from "./form/form-codigo-invitacion";

export const ConfirmacionComponent = () => {


  return (
    <div className="relative w-full px-5 md:px-0 md:max-w-screen-lg mx-auto py-10 md:py-20 bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src="/form-oro-bg.jpg"
          alt="Save the date"
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container
          objectPosition="center" // Center the image
          className="rounded-lg"  // Add any additional styles here
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full mx-auto ">
        <FormCodigoInvitacion />
      </div>

      Confirmacion component
    </div>
  )
}