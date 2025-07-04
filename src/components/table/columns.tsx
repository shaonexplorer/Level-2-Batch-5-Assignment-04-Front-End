import type { Books } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";

import ActionDialog from "../actionDialog/action-dialog";

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: () => <div className="text-center">Availability</div>,
    cell: ({ row }) => {
      const value = row.getValue("available");
      if (value) {
        return (
          <div className="flex justify-center items-center">
            <Badge variant={"default"} className="bg-green-700">
              Available
            </Badge>
          </div>
        );
      } else
        return (
          <div className="flex justify-center items-center">
            <Badge variant={"destructive"}>Not Available</Badge>
          </div>
        );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const currentBook = row.original;

      return <ActionDialog book={currentBook} />;
    },
  },
];
