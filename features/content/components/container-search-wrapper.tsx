import { ContainerGrid } from "@/features/content/components/container-grid";
import { SearchBar } from "@/features/content/components/search-bar";
import { searchContainers } from "@/features/content/data/search-containers";
import { cacheLife } from "next/cache";
import { ContainerPagination } from "@/features/content/components/container-pagination";

const CachedContainerSearchWrapper = async ({
  page,
  term,
}: {
  page: string;
  term?: string;
}) => {
  "use cache";
  cacheLife("weeks");
  const containers = await searchContainers({ page: page, value: term });
  return (
    <div>
      <ContainerGrid containers={containers.content} />
      <ContainerPagination
        currentPage={Number(page)}
        totalPages={containers.totalPages}
      />
    </div>
  );
};

export async function ContainerSearchWrapper({
  searchParams,
}: {
  searchParams: Promise<{ term?: string; page?: string }>;
}) {
  const { page = "0", term = "" } = await searchParams;

  return (
    <div>
      <SearchBar />
      <CachedContainerSearchWrapper
        page={page as string}
        term={term as string}
      />
    </div>
  );
}
