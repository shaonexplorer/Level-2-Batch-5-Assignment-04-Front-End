import { useGetBooksQuery } from "@/redux/api/book.api";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { SkeletonTable } from "../skeleton/skeleton-table";

export default function BooksTable() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading)
    return (
      <div className="w-full container mx-auto py-10">
        <SkeletonTable />
      </div>
    );

  return (
    <div className="container mx-auto py-10">
      {!isLoading && data && <DataTable columns={columns} data={data.data} />}
    </div>
  );
}
