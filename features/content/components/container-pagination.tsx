"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
}

// Generate page numbers with ellipsis
const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisible: number = 7,
) => {
  const pages: (number | string)[] = [];
  const delta = 1; // pages around current page

  if (totalPages <= maxVisible) {
    // Show all pages if total is small
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  pages.push(0); // first page

  let left = currentPage - delta;
  let right = currentPage + delta;

  if (left <= 1) left = 1;
  if (right >= totalPages - 2) right = totalPages - 2;

  if (left > 1) pages.push("…"); // ellipsis before

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < totalPages - 2) pages.push("…"); // ellipsis after

  pages.push(totalPages - 1); // last page

  return pages;
};

export function ContainerPagination({ currentPage, totalPages }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // get current path

  if (!totalPages) return null;

  // Build the URL with generic queryKey + extraParams
  const query = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    return `${pathname}?${params.toString()}`;
  };

  const pages = getPageNumbers(currentPage, totalPages);
  const prevPage = currentPage > 0 ? currentPage - 1 : null;
  const nextPage = currentPage + 1 < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {/* Previous Button */}
      <Link href={prevPage !== null ? query(prevPage) : "#"}>
        <Button
          variant={prevPage === null ? "outline" : "default"}
          disabled={prevPage === null}
          className="shadow-sm"
        >
          Previous
        </Button>
      </Link>

      {/* Page Numbers */}
      {pages.map((p, idx) =>
        typeof p === "number" ? (
          <Link key={idx} href={query(p)}>
            <Button
              variant={p === currentPage ? "default" : "outline"}
              className="shadow-sm px-3"
            >
              {p + 1}
            </Button>
          </Link>
        ) : (
          <span key={idx} className="px-2 text-gray-500 font-medium">
            {p}
          </span>
        ),
      )}

      {/* Next Button */}
      <Link href={nextPage !== null ? query(nextPage) : "#"}>
        <Button
          variant={nextPage === null ? "outline" : "default"}
          disabled={nextPage === null}
          className="shadow-sm"
        >
          Next
        </Button>
      </Link>
    </div>
  );
}
