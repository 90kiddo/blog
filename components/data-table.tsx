"use client"

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  RowData,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<TData>[]
  data: TData[]
}

export function DataTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="border rounded-md">
      <Table>

        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  )
}