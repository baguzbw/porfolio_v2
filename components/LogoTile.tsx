"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function LogoTile({
  src,
  alt,
  initials,
  size = "md",
  className,
}: {
  src: string;
  alt: string;
  initials: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-accent-500/10 shadow-sm ring-1 ring-border/60",
        size === "lg" ? "h-20 w-20" : "h-16 w-16",
        className
      )}
    >
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" onError={() => setError(true)} />
      ) : (
        <span className={cn("font-semibold text-accent-600 dark:text-accent-400", size === "lg" ? "text-xl" : "text-lg")}>
          {initials}
        </span>
      )}
    </div>
  );
}
