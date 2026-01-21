import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary/10">
      <div className="container mx-auto px-6 py-5">
        <Link
          href="/"
          className="inline-block hover:opacity-90 transition-opacity"
        >
          <h1 className="text-2xl font-semibold tracking-tight">Repox</h1>
          <p className="text-xs opacity-75 mt-1 font-light tracking-wide">
            An elegant content explorer
          </p>
        </Link>
      </div>
    </header>
  );
}
