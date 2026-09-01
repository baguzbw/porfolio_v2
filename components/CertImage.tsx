"use client";

import { useState } from "react";
import Image from "next/image";
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
  /** Viewport-relative rendered width, so next/image requests a right-sized file instead of the full 1400px original. */
  sizes = "100vw",
  /** Set on the first few above-the-fold cards; everything else loads lazily. */
  priority = false,
  quality = 70,
  onNaturalSize,
}: {
  achievement: Achievement;
  className?: string;
  iconSize?: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  onNaturalSize?: (width: number, height: number) => void;
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
    <Image
      src={achievement.image}
      alt={`${achievement.title} certificate`}
      fill
      sizes={sizes}
      priority={priority}
      quality={quality}
      // The parent already paints bg-muted, so fading in reads as a skeleton filling rather than a pop.
      className={cn(
        "object-cover transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
      onError={() => setError(true)}
      onLoad={(e) => {
        setLoaded(true);
        const img = e.currentTarget;
        onNaturalSize?.(img.naturalWidth, img.naturalHeight);
      }}
    />
  );
}
