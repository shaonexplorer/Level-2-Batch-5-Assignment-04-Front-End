import type { Summary } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";

export const summary_columns: ColumnDef<Summary>[] = [
  {
    accessorKey: "book.title",
    header: "Title",
  },

  {
    accessorKey: "book.ISBN",
    header: "ISBN",
  },
  {
    accessorKey: "TotalQuantity",
    header: "Copies",
    cell: ({ row }) => {
      const quantity: number = row.getValue("TotalQuantity");
      return <div className="text-center">{quantity}</div>;
    },
  },
];
