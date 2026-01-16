import { IDatastream } from "@/features/content/types/datastream";
import { IPageableResponse } from "@/features/content/types/paginated-response";
import { apiClient } from "@/lib/api-client";

export const getContainerDatastreams = async ({
  containerId,
  page,
}: {
  containerId: string;
  page: string;
}): Promise<IPageableResponse<IDatastream>> => {
  const queryParams = new URLSearchParams();
  queryParams.set("page", page || "0");

  return await apiClient(`/v3/public/containers/${containerId}/datastreams`, {
    queryParams,
  });
};
