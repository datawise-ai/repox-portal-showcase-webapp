import { IContainer } from "@/features/content/types/container";
import { FolderCard } from "./folder-card";

interface ContainerGridProps {
  containers: IContainer[];
}

export async function ContainerGrid({ containers }: ContainerGridProps) {
  if (containers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No items found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {containers.map((container) => {
        return <FolderCard key={container.uuid} container={container} />;
      })}
    </div>
  );
}
