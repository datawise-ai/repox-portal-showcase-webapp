import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { IContainer } from "@/features/content/types/container";
import { IconPhoto } from "@tabler/icons-react";
import { getCoverImageUrl } from "@/lib/image-utils";

interface FolderCardProps {
  container: IContainer;
}

export function FolderCard({ container }: FolderCardProps) {
  // Use uuid as the slug for routing
  const slug = container.uuid;
  const coverImageUrl = getCoverImageUrl(container.coverFile, container.uuid);

  return (
    <Link href={`/${slug}`} className="block h-full group">
      <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-card py-0">
        {/* Cover Image */}
        <div className="relative w-full aspect-[4/3] bg-muted/30 overflow-hidden">
          {coverImageUrl ? (
            <Image
              src={coverImageUrl}
              alt={container.label}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted/20">
              <IconPhoto size={40} className="text-muted-foreground/30" />
            </div>
          )}
        </div>

        {/* Card Content - Minimal */}
        <div className="p-4 space-y-1">
          <h3 className="font-medium text-sm leading-tight line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
            {container.label}
          </h3>
          {container.type.name && (
            <p className="text-xs text-muted-foreground font-normal">
              {container.type.name}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
