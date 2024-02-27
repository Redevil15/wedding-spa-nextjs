import Image from "next/image"
import { db } from "@/lib/db"

export const ConfirmacionComponent = async () => {
  const families = await db.family.findMany({
    include: {
      invitados: true
    },
    orderBy: {
      nombre_familia: 'asc'
    }
  })

  console.log('FAMILIESSSS: ', families)
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
      {families.map((family) => (
        <div className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <p className="relative font-semibold text-white">
            {family.nombre_familia}
          </p>
        </div>
      ))}

      Confirmacion component
    </div>
  )
}