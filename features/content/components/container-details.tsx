"use cache";

import { getContainerById } from "@/features/content/data/get-container-by-id";
import { getCoverImageUrl } from "@/lib/image-utils";
import { ContainerBreadcrumbs } from "./container-breadcrumbs";
import { ContainerCoverImage } from "./container-cover-image";
import { ContainerMetadata } from "./container-metadata";
import { notFound } from "next/navigation";

interface ContainerDetailsProps {
  slug: string;
}

export async function ContainerDetails({ slug }: ContainerDetailsProps) {
  try {
    const container = await getContainerById(slug);
    const coverImageUrl = getCoverImageUrl(container.coverFile, container.uuid);

    return (
      <div>
        <ContainerBreadcrumbs container={container} />

        {/* Main Content: Image Left, Metadata Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <ContainerCoverImage
            coverImageUrl={coverImageUrl}
            alt={container.label}
          />
          <ContainerMetadata container={container} />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
