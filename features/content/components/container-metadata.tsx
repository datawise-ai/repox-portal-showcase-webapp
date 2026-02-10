import { IContainer } from "@/features/content/types/container";

interface ContainerMetadataProps {
  container: IContainer;
}

export function ContainerMetadata({ container }: ContainerMetadataProps) {
  // Find description from properties
  const description = container.properties.find(
    (prop) =>
      prop.property.slug === "description" ||
      prop.property.name.toLowerCase().includes("description"),
  )?.valueAsText;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-3 tracking-tight">
          {container.label}
        </h1>

        {description && (
          <p className="text-muted-foreground mb-6 leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>

      {/* Properties */}
      {container.properties.length > 0 && (
        <div className="pt-6 border-t border-border">
          <div className="text-md font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            Properties
          </div>
          {container.properties
            .filter((prop) => {
              // Exclude description as it's shown separately
              const name = prop.property.name.toLowerCase();
              return !name.includes("description");
            })
            .map((prop) => (
              <div key={prop.uuid} className="pb-4 last:border-0 last:pb-0">
                <div className="text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                  {prop.property.name}
                </div>
                <div className="text-base font-normal">{prop.valueAsText}</div>
              </div>
            ))}
        </div>
      )}

      {/* Tags */}
      {container.tags.length > 0 && (
        <div className="pt-6 border-t border-border">
          <div className="text-md font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {container.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-xs px-3 py-1.5 bg-muted/50 rounded-full text-muted-foreground font-light"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Type */}
      {container.type.name && (
        <div className="pt-6 border-t border-border">
          <div className="text-md font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
            Type
          </div>
          <div className="text-base font-normal">{container.type.name}</div>
        </div>
      )}
    </div>
  );
}
