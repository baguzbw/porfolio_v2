"use client";

import { useState } from "react";
import { Award, BookOpen, Trophy } from "lucide-react";
import type { Achievement } from "@/data/profile";
import { cn } from "@/lib/utils";

const typeIcon = {
  Certification: Award,
  Course: BookOpen,
  Competition: Trophy,
};

export function CertImage({
  achievement,
  className,
  iconSize = 32,
}: {
  achievement: Achievement;
  className?: string;
  iconSize?: number;
}) {
  const [error, setError] = useState(false);
  const Icon = typeIcon[achievement.type];

  if (error) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-500/15 via-accent-500/5 to-transparent p-6 text-center",
          className
        )}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400">
          <Icon size={iconSize} />
        </div>
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{achievement.issuer}</p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={achievement.image}
      alt={`${achievement.title} certificate`}
      className={cn("h-full w-full object-cover", className)}
      onError={() => setError(true)}
    />
  );
}
