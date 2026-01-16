import { ContainerChildren } from "@/features/content/components/container-children";
import { ContainerDatastreams } from "@/features/content/components/container-datastreams";
import { ContainerDetails } from "@/features/content/components/container-details";

export async function ContainerDetailsWrapper({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const { containerPage, datastreamPage } = await searchParams;

  return (
    <div>
      <ContainerDetails slug={slug} />
      <ContainerDatastreams slug={slug} page={datastreamPage as string} />
      <ContainerChildren slug={slug} page={containerPage as string} />
    </div>
  );
}
