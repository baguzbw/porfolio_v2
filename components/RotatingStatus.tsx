"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function RotatingStatus({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const statuses = profile.statuses;

  useEffect(() => {
    if (statuses.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % statuses.length), 3200);
    return () => clearInterval(id);
  }, [statuses.length]);

  return (
    <span className={cn("relative inline-grid", className)}>
      <span className="sr-only">{statuses[0]}</span>
      <span
        key={index}
        aria-hidden="true"
        className="col-start-1 row-start-1 animate-in fade-in-0 slide-in-from-bottom-1 duration-300 ease-out"
      >
        {statuses[index]}
      </span>
    </span>
  );
}
