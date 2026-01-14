import { ContainerChildren } from "@/features/content/components/container-children";
import { ContainerDetails } from "@/features/content/components/container-details";

export async function ContainerDetailsWrapper({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;

  return (
    <div>
      <ContainerDetails slug={slug} />
      <ContainerChildren slug={slug} page={page as string} />
    </div>
  );
}
