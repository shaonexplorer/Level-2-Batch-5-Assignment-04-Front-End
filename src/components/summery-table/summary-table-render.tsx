import { useGetBorrowQuery } from "@/redux/api/book.api";
import { summary_columns } from "./summary-columns";
import { SummaryTable } from "./summary-table";

export default function SummaryTableRender() {
  const { data, isLoading } = useGetBorrowQuery(undefined);

  return (
    <div className="w-[680px] container mx-auto py-10">
      {!isLoading && data && (
        <SummaryTable columns={summary_columns} data={data.data} />
      )}
    </div>
  );
}
