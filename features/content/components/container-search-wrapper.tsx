import { ContainerGrid } from "@/features/content/components/container-grid";
import { SearchBar } from "@/features/content/components/search-bar";
import { searchContainers } from "@/features/content/data/search-containers";
import { cacheLife } from "next/cache";

const CachedContainerSearchWrapper = async ({ page }: { page: string }) => {
  "use cache";
  cacheLife("weeks");
  const containers = await searchContainers({ page: page as string });
  return (
    <div>
      <ContainerGrid containers={containers.content} />
    </div>
  );
};

export async function ContainerSearchWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;

  return (
    <div>
      <SearchBar />
      <CachedContainerSearchWrapper page={page as string} />
    </div>
  );
}
