import Image from "next/image";
import { IconPhoto } from "@tabler/icons-react";

interface ContainerCoverImageProps {
  coverImageUrl: string | null;
  alt: string;
}

export function ContainerCoverImage({
  coverImageUrl,
  alt,
}: ContainerCoverImageProps) {
  return (
    <div className="relative w-full aspect-[4/3] bg-muted/30 rounded-lg overflow-hidden shadow-sm">
      {coverImageUrl ? (
        <Image
          src={coverImageUrl}
          alt={alt}
          fill
          className="object-contain bg-muted/20"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted/10">
          <IconPhoto size={64} className="text-muted-foreground/30" />
        </div>
      )}
    </div>
  );
}
