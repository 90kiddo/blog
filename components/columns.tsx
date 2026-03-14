"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

export type User = {
  id: number | string
  name: string
  email: string
}

export const columns = (
  deleteUser: (id: number | string) => void,
  editUser: (user: User) => void
): ColumnDef<User>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const user = row.original

      return (
        <div className="flex gap-2">
          <Button
            className="w-full sm:w-auto bg-orange-400 hover:bg-orange-600 active:bg-orange-700 text-white font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            variant="secondary"
            onClick={() => editUser(user)}
          >
            Edit
          </Button>

          <Button
            className="w-full sm:w-auto bg-red-400 hover:bg-red-600 active:bg-red-700 text-white font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            variant="destructive"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </Button>
        </div>
      )
    },
  },
]