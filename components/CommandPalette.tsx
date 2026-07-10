"use client";

import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Home, User, Award, FolderKanban, Search, CornerDownLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useCommandPalette } from "./CommandPaletteProvider";

type PaletteItem = {
  label: string;
  sublabel?: string;
  href: string;
  icon: typeof Home;
};

const pages: PaletteItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Achievements", href: "/achievements", icon: Award },
  { label: "Projects", href: "/projects", icon: FolderKanban },
];

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const projectItems: PaletteItem[] = useMemo(
    () =>
      projects.map((p) => ({
        label: p.title,
        sublabel: "Project",
        href: `/projects/${p.slug}`,
        icon: FolderKanban,
      })),
    []
  );

  const items = useMemo(() => {
    const all = [...pages, ...projectItems];
    if (!query.trim()) return all;
    const q = query.toLowerCase();
    return all.filter((item) => item.label.toLowerCase().includes(q));
  }, [query, projectItems]);

  useEffect(() => {
    function handleKeyDown(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = items[activeIndex];
      if (item) go(item.href);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="top-24 w-[calc(100%-2rem)] max-w-lg translate-y-0 gap-0 p-0">
        <DialogTitle className="sr-only">Quick navigation</DialogTitle>
        <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
          <Search size={16} className="flex-shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search pages and projects..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <kbd className="hidden flex-shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:block">
            Esc
          </kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {items.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">No results found.</p>
          )}
          {items.map((item, i) => {
            const Icon = item.icon;
            const active = i === activeIndex;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => go(item.href)}
                onMouseEnter={() => setActiveIndex(i)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  active ? "bg-accent-500/10 text-foreground" : "text-muted-foreground hover:bg-accent-500/5"
                )}
              >
                <Icon size={16} className={cn("flex-shrink-0", active && "text-accent-500")} />
                <span className="flex-1 truncate">{item.label}</span>
                {item.sublabel && <span className="text-xs text-muted-foreground">{item.sublabel}</span>}
                {active && <CornerDownLeft size={13} className="flex-shrink-0 text-accent-500" />}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
