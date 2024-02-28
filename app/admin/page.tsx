import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { FamilyList } from "./_components/family-list";

const AdminPage = async () => {
  const families = await db.family.findMany({
    include: {
      invitados: true
    },
    orderBy: {
      nombre_familia: 'asc'
    }
  })

  return (
    <div className="">
      <div className="flex items-center justify-center pt-4">
        F & B Admin Page
      </div>
      <div className="flex items-center justify-center pt-2">
        Lista de invitados
      </div>
      <div className="flex flex-col space-y-2">
        <FamilyList />
      </div>
    </div>
  )
}

export default AdminPage;