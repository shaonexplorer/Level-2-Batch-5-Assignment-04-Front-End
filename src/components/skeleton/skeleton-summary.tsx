import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSummary() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[20px] w-full sm:w-[680px] rounded-xl" />
      <div className="space-y-3">
        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex justify-between w-full sm:w-[680px] gap-3">
          <Skeleton className="h-4 w-4/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    </div>
  );
}
