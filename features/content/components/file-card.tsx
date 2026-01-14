import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { IContainer } from "@/features/content/types/container";
import { IconFile } from "@tabler/icons-react";

interface FileCardProps {
  container: IContainer;
}

export function FileCard({ container }: FileCardProps) {
  // Construct viewUrl - adjust this based on actual API structure
  // For now, using a placeholder pattern that might need adjustment
  const viewUrl = container.coverFile 
    ? `${process.env.NEXT_PUBLIC_API_URL}/v3/public/${container.uuid}/view`
    : null;

  if (!viewUrl) {
    return null;
  }

  return (
    <Link href={viewUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="h-full transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer group">
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
              <IconFile size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm line-clamp-2">{container.label}</CardTitle>
              {container.type.name && (
                <CardDescription className="mt-1 text-xs">
                  {container.type.name}
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
