import { IContainer } from "@/features/content/types/container";
import { apiClient } from "@/lib/api-client";

export const getContainerById = async (
  containerId: string
): Promise<IContainer> => {
  return await apiClient(`/v3/public/containers/${containerId}`);
};
