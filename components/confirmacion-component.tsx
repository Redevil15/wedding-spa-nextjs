import Image from "next/image"
import { db } from "@/lib/db"

export const ConfirmacionComponent = async () => {
  /*  const families = await db.family.findMany({
     include: {
       invitados: true
     },
     orderBy: {
       nombre_familia: 'asc'
     }
   }) */

  //console.log('FAMILIESSSS: ', families)
  return (
    <div className="relative w-full px-5 md:px-0 md:max-w-screen-lg mx-auto py-10 md:py-20 bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src="/form-oro-bg.jpg"
          alt="Save the date"
          height="1080"
          width="1920"
          className="rounded-lg" // Add any additional styles here
        />
      </div>

      Confirmacion component
    </div>
  )
}