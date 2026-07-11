"use client";

import { useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn, hexAlpha, hexToRgb } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function SocialCard({
  icon: Icon,
  title,
  subtitle,
  ctaLabel,
  href,
  color,
  size = "sm",
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  color: string;
  size?: "sm" | "lg";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const rgb = hexToRgb(color);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  }

  return (
    <Card
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1",
        size === "lg" ? "min-h-[196px]" : "min-h-[172px]"
      )}
      style={{
        borderColor: hexAlpha(color, "35"),
        background: `linear-gradient(135deg, ${hexAlpha(color, "16")}, transparent 65%)`,
        boxShadow: hovering
          ? `0 0 0 1px ${hexAlpha(color, "50")}, 0 16px 32px -12px ${hexAlpha(color, "40")}`
          : "0 0 0 1px transparent",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, rgba(${rgb}, 0.22), transparent 60%)`,
        }}
      />
      <CardContent className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={cn("font-semibold text-foreground", size === "lg" ? "text-xl" : "text-base")}>
              {title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <span
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110"
            style={{ borderColor: hexAlpha(color, "40"), backgroundColor: hexAlpha(color, "14"), color }}
          >
            <Icon size={20} />
          </span>
        </div>
        <Button size="sm" variant="outline" className="w-fit gap-1.5 rounded-full" style={{ borderColor: hexAlpha(color, "40"), color }} asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
