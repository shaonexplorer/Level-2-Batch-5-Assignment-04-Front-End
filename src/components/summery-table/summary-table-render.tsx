import { useGetBorrowQuery } from "@/redux/api/book.api";
import { summary_columns } from "./summary-columns";
import { SummaryTable } from "./summary-table";
import { SkeletonSummary } from "../skeleton/skeleton-summary";

export default function SummaryTableRender() {
  const { data, isLoading } = useGetBorrowQuery(undefined);

  if (isLoading)
    return (
      <div className="w-full sm:w-[680px] container mx-auto py-10">
        <SkeletonSummary />
      </div>
    );

  return (
    <div className="w-full sm:w-[680px] container mx-auto py-10">
      {!isLoading && data && (
        <SummaryTable columns={summary_columns} data={data.data} />
      )}
    </div>
  );
}
