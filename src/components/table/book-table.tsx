import { useGetBooksQuery } from "@/redux/api/book.api";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function BooksTable() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className="container mx-auto py-10">
      {!isLoading && data && <DataTable columns={columns} data={data.data} />}
    </div>
  );
}
