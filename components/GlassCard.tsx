"use client";

import { forwardRef, useRef, useState, type ReactNode, type MouseEvent, type HTMLAttributes } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { children, className, onMouseMove, onMouseEnter, onMouseLeave, ...props },
  forwardedRef
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = innerRef.current?.getBoundingClientRect();
    if (rect) {
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    onMouseMove?.(e);
  }

  return (
    <Card
      ref={(node) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      onMouseMove={handleMove}
      onMouseEnter={(e) => {
        setHovering(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHovering(false);
        onMouseLeave?.(e);
      }}
      className={cn(
        "group relative overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:shadow-black/30",
        className
      )}
      {...props}
    >
      {/* cursor-tracked glass shine */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(480px circle at ${pos.x}% ${pos.y}%, rgba(59,130,246,0.16), rgba(59,130,246,0.05) 35%, transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.35), transparent 70%)`,
          mixBlendMode: "overlay",
        }}
      />
      {children}
    </Card>
  );
});
