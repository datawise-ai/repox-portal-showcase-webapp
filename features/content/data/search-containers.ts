import { IContainer } from "@/features/content/types/container";
import { IPageableResponse } from "@/features/content/types/paginated-response";
import { apiClient } from "@/lib/api-client";

export const searchContainers = async ({
  page,
  value = "",
}: {
  page: string;
  value?: string;
}): Promise<IPageableResponse<IContainer>> => {
  const payload = {
    parent: "",
    value: value || "",
    multiTermSearch: "ALL",
    labelSensitivity: "CASE_INSENSITIVE",
    containerTypes: [],
    propertyValueOperator: null,
    propertyValueFilters: [],
    tags: [],
    sort: [],
    page: page,
    findInType: "LABELS",
    containerContent: {
      containerExists: "ANY",
      datastreamExists: "ANY",
    },
  };

  const data = await apiClient("/v3/public/search", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return data;
};
