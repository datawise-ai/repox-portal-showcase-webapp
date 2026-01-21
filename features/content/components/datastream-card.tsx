import { Card } from "@/components/ui/card";
import { IDatastream } from "@/features/content/types/datastream";
import { IconFile } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface DatastreamCardProps {
  datastream: IDatastream;
}

export function DatastreamCard({ datastream }: DatastreamCardProps) {
  const viewUrl = datastream.bitstreamFile?.viewUrl;

  return (
    <Link
      href={viewUrl || "#"}
      target={viewUrl ? "_blank" : undefined}
      rel={viewUrl ? "noopener noreferrer" : undefined}
      className="block h-full group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-card py-0">
        {/* Cover Image */}
        <div className="relative w-full aspect-[4/3] bg-muted/30 overflow-hidden">
          {viewUrl ? (
            <Image
              src={viewUrl}
              alt={datastream.label}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted/20">
              <IconFile size={40} className="text-muted-foreground/30" />
            </div>
          )}
        </div>

        {/* Card Content - Minimal */}
        <div className="p-4 space-y-1">
          <h3 className="font-medium text-sm leading-tight line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
            {datastream.label}
          </h3>
          {datastream.type.name && (
            <p className="text-xs text-muted-foreground font-normal">
              {datastream.type.name}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
