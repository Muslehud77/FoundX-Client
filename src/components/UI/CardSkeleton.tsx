import { Skeleton } from "@nextui-org/skeleton";
import { Card as NextUiCard, CardHeader, CardFooter } from "@nextui-org/card";

export default function CardSkeleton() {
  return (
    <NextUiCard className="relative h-[300px] w-full">
      {/* Header Skeleton */}
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <Skeleton className="absolute -top-0 right-1 h-6 w-16 rounded-full bg-default-300" />
        <Skeleton className="mt-2 h-8 w-3/4 rounded-lg bg-default-300" />
      </CardHeader>

      {/* Image Skeleton */}
      <Skeleton className="z-0 h-full w-full -translate-y-6">
        <div className="h-full w-full bg-default-200"></div>
      </Skeleton>

      {/* Footer Skeleton */}
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-lg bg-default-200" />
          <Skeleton className="h-4 w-28 rounded-lg bg-default-200" />
        </div>
        <Skeleton className="h-8 w-16 rounded-full bg-default-300" />
      </CardFooter>
    </NextUiCard>
  );
}
