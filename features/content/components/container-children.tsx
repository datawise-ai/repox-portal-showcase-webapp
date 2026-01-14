"use cache";

import { getSubcontainers } from "@/features/content/data/get-subcontainers";
import { DiscoverMoreSection } from "./discover-more-section";

interface ContainerChildrenProps {
  slug: string;
  page: string;
}

export async function ContainerChildren({
  slug,
  page,
}: ContainerChildrenProps) {
  const children = await getSubcontainers({ containerId: slug, page });
  if (children.content.length > 0) {
    return <DiscoverMoreSection containers={children.content} />;
  }
  return null;
}
