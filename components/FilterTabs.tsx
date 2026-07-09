"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function FilterTabs({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: { value: string; count: number }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {options.map((opt) => (
        <Button
          key={opt.value}
          type="button"
          size="sm"
          variant={active === opt.value ? "default" : "outline"}
          onClick={() => onChange(opt.value)}
          className="rounded-full"
        >
          {opt.value}
          <span
            className={cn(
              "rounded-full px-1.5 text-xs",
              active === opt.value ? "bg-white/20" : "bg-muted"
            )}
          >
            {opt.count}
          </span>
        </Button>
      ))}
    </div>
  );
}
