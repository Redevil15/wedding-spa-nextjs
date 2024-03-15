import { FormPopover } from "@/components/form/form-popover"
import { db } from "@/lib/db"

export const FamilyList = async () => {
  const families = await db.family.findMany({
    include: {
      invitados: true
    },
    orderBy: {
      nombre_familia: 'asc'
    }
  })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {/* Show tne invited families */}
        {families.map((family) => (
          <div key={family.id_familia} className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">
              {family.nombre_familia}
            </p>
          </div>
        ))}

        <FormPopover
          side="right"
          sideOffset={10}
        >
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Invite Family</p>
          </div>
        </FormPopover>
      </div>
    </div >
  )
}