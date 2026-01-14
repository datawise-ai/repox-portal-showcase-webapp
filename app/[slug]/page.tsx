import { ContainerContentLoading } from "@/features/content/components/container-content-loading";
import { ContainerDetailsWrapper } from "@/features/content/components/container-details-wrapper";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ContainerPage({
  params,
  searchParams,
}: PageProps) {
  return (
    <Suspense fallback={<ContainerContentLoading />}>
      <ContainerDetailsWrapper params={params} searchParams={searchParams} />
    </Suspense>
  );
}
