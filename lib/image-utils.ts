/**
 * Constructs the full URL for a container's cover image
 */
export function getCoverImageUrl(coverFile: string | null, containerUuid: string): string | null {
  if (!coverFile) return null;
  
  // If coverFile is already a full URL, return it
  if (coverFile.startsWith("http://") || coverFile.startsWith("https://")) {
    return coverFile;
  }
  
  // Otherwise, construct the URL using the API base URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return null;
  
  // Remove leading slash if present
  const cleanPath = coverFile.startsWith("/") ? coverFile.slice(1) : coverFile;
  
  // Construct URL - adjust this pattern based on your API structure
  return `${apiUrl}/v3/public/${containerUuid}/cover/${cleanPath}`;
}
