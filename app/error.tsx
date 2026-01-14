"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground text-sm">
            We encountered an unexpected error. Please try again or return to
            the home page.
          </p>
        </div>

        {error.message && (
          <div className="bg-muted/50 border border-border rounded-none p-4 text-left">
            <p className="text-xs font-mono text-muted-foreground break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground/70 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
