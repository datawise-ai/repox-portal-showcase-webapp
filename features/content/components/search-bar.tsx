"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");

  // Update local state when URL changes (e.g., back button)
  useEffect(() => {
    setSearchTerm(searchParams.get("term") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      params.set("term", searchTerm.trim());
    } else {
      params.delete("term");
    }

    // Reset to page 1 when searching
    params.delete("page");

    router.push(`/?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("term");
    params.delete("page");
    router.push(`/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 mb-10">
      <div className="flex items-center gap-6">
        <label
          htmlFor="search-input"
          className="text-lg font-semibold tracking-tight whitespace-nowrap"
        >
          Keyword Search
        </label>
        <div className="flex items-center gap-0 flex-1">
          <div className="flex-1 relative">
            <Input
              id="search-input"
              type="text"
              placeholder="Search items by keyword, artist, title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 px-5 text-base border-r-0 rounded-r-none pr-12 bg-background"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-14 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Clear search"
              >
                <IconX size={16} strokeWidth={2} />
              </button>
            )}
          </div>
          <Button
            type="submit"
            className="h-14 px-6 rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          >
            <IconSearch size={20} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </form>
  );
}
