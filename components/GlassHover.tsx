"use client";

import { useRef, useState, type ReactNode, type MouseEvent, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassHover({
  children,
  className,
  glowSize = 140,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode; glowSize?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  function handleMove(e: MouseEvent<HTMLSpanElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(${glowSize}px circle at ${pos.x}% ${pos.y}%, rgba(59,130,246,0.22), rgba(59,130,246,0.06) 40%, transparent 70%)`,
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(${glowSize * 0.5}px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.4), transparent 70%)`,
          mixBlendMode: "overlay",
          transition: "opacity 300ms",
        }}
      />
      {children}
    </span>
  );
}
