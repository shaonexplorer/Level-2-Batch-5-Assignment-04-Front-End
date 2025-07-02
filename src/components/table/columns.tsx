import type { Books } from "@/types/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import EditBook from "../books/editBook";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
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
            <Badge variant={"default"} className="bg-green-500">
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
      const book = row.original;

      return <ActionDialog book={book} />;
    },
  },
];
