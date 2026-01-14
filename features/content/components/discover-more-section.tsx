"use client";

import { IContainer } from "@/features/content/types/container";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { FolderCard } from "./folder-card";

interface DiscoverMoreSectionProps {
  containers: IContainer[];
}

export function DiscoverMoreSection({ containers }: DiscoverMoreSectionProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [containers]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newPosition =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: Math.max(0, newPosition),
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Discover More</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded-full hover:bg-muted transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <IconChevronLeft size={18} className="text-muted-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-2 rounded-full hover:bg-muted transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <IconChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateScrollButtons}
      >
        {containers.map((container) => (
          <div
            key={container.uuid}
            className="flex-shrink-0 w-[280px] sm:w-[320px]"
          >
            <FolderCard container={container} />
          </div>
        ))}
      </div>
    </div>
  );
}
