import { ContainerContentLoading } from "@/features/content/components/container-content-loading";
import { ContainerSearchWrapper } from "@/features/content/components/container-search-wrapper";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ term?: string; page?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  return (
    <Suspense fallback={<ContainerContentLoading />}>
      <ContainerSearchWrapper searchParams={searchParams} />
    </Suspense>
  );
}
