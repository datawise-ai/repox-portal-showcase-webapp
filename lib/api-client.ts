interface IApiClientOptions extends RequestInit {
  queryParams?: URLSearchParams;
}

export const apiClient = async (
  endpoint: string,
  options?: IApiClientOptions,
) => {
  const headers = new Headers();
  headers.set("Authorization", process.env.API_KEY!);
  headers.set("X-TenantID", process.env.NEXT_PUBLIC_TENANT_KEY!);
  headers.set("Content-Type", "application/json");
  headers.set("X-TargetID", "public");

  const queryString = options?.queryParams
    ? `?${options.queryParams.toString()}`
    : "";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}${queryString}`,
      {
        ...(options || {}),
        headers,
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
