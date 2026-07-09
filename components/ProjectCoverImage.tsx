"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ProjectCoverImage({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-500/20 via-accent-500/5 to-transparent p-6 text-center",
          className
        )}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400">
          <Layers size={26} />
        </div>
        <p className="max-w-xs text-sm font-medium text-neutral-600 dark:text-neutral-300">{project.title}</p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.coverImage}
      alt={`${project.title} screenshot`}
      className={cn("h-full w-full object-cover", className)}
      onError={() => setError(true)}
    />
  );
}
