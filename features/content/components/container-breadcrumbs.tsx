import Link from "next/link";
import { IContainer } from "@/features/content/types/container";

interface ContainerBreadcrumbsProps {
  container: IContainer;
}

export function ContainerBreadcrumbs({ container }: ContainerBreadcrumbsProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(container.ancestorPath || []).map((ancestor) => ({
      label: ancestor.label,
      href: `/${ancestor.uuid}`,
    })),
    { label: container.label, href: `/${container.uuid}` },
  ];

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-light">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-muted-foreground/40">•</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-normal">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-foreground transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
