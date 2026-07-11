"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-[76px] flex-shrink-0 rounded-full border border-border" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-10 w-[76px] flex-shrink-0 items-center rounded-full border border-border bg-muted/60 p-1 transition-colors duration-300 hover:border-accent-500/50"
    >
      <span
        className="absolute left-1 h-8 w-[34px] rounded-full bg-background shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: isDark ? "translateX(34px)" : "translateX(0px)" }}
      />
      <span className="relative z-10 flex flex-1 items-center justify-center">
        <Sun
          size={14}
          className={cn("transition-colors duration-300", !isDark ? "text-accent-500" : "text-muted-foreground")}
        />
      </span>
      <span className="relative z-10 flex flex-1 items-center justify-center">
        <Moon
          size={14}
          className={cn("transition-colors duration-300", isDark ? "text-accent-500" : "text-muted-foreground")}
        />
      </span>
    </button>
  );
}
