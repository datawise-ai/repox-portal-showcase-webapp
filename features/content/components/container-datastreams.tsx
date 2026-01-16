"use cache";

import { getContainerDatastreams } from "@/features/content/data/get-container-datastreams";
import { DatastreamCard } from "./datastream-card";

interface ContainerDatastreamsProps {
  slug: string;
  page: string;
}

export async function ContainerDatastreams({
  slug,
  page,
}: ContainerDatastreamsProps) {
  const datastreams = await getContainerDatastreams({
    containerId: slug,
    page,
  });

  if (datastreams.content.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">Files</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {datastreams.content.map((datastream) => (
          <DatastreamCard key={datastream.uuid} datastream={datastream} />
        ))}
      </div>
    </div>
  );
}
