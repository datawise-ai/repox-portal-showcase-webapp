export function ContainerContentLoading() {
  return (
    <div>
      {/* Search Bar Skeleton */}
      <div className="flex-1 mb-10">
        <div className="flex items-center gap-6">
          {/* Label Skeleton */}
          <div className="h-7 w-32 bg-muted/30 rounded animate-pulse" />

          {/* Search Input and Button Skeleton */}
          <div className="flex items-center gap-0 flex-1">
            <div className="flex-1 relative">
              <div className="h-14 bg-muted/30 rounded-r-none rounded-l animate-pulse" />
            </div>
            <div className="h-14 w-16 bg-muted/30 rounded-l-none rounded-r animate-pulse" />
          </div>
        </div>
      </div>

      {/* Container Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-full overflow-hidden border-0 shadow-sm bg-card py-0 rounded-lg"
          >
            {/* Cover Image Skeleton */}
            <div className="relative w-full aspect-[4/3] bg-muted/30 animate-pulse" />

            {/* Card Content Skeleton */}
            <div className="p-4 space-y-1">
              <div className="h-4 bg-muted/30 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-muted/30 rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
