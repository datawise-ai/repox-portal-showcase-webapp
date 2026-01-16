import { IContainer } from "@/features/content/types/container";
import { IPageableResponse } from "@/features/content/types/paginated-response";
import { apiClient } from "@/lib/api-client";

export const getSubcontainers = async ({
  containerId,
  page,
}: {
  containerId: string;
  page: string;
}): Promise<IPageableResponse<IContainer>> => {
  const queryParams = new URLSearchParams();
  queryParams.set("page", page);
  queryParams.set("pageSize", "10");

  return await apiClient(`/v3/public/containers/${containerId}/children`, {
    queryParams,
  });
};
