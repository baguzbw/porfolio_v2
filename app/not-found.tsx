"use client";

import Link from "next/link";
import { Compass, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCommandPalette } from "@/components/CommandPaletteProvider";

export default function NotFound() {
  const { setOpen } = useCommandPalette();

  return (
    <div className="flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-500/30 bg-accent-500/10 text-accent-500">
        <Compass size={28} />
      </div>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent-500">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-3 max-w-sm text-base text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <Button asChild>
          <Link href="/">
            <Home size={16} />
            Back to Home
          </Link>
        </Button>
        <Button type="button" variant="outline" onClick={() => setOpen(true)}>
          <Search size={16} />
          Search instead
        </Button>
      </div>
    </div>
  );
}
