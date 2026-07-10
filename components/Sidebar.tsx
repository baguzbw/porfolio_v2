"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, User, Award, FolderKanban, Github, Linkedin, Mail, Globe, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { RotatingStatus } from "./RotatingStatus";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCommandPalette } from "./CommandPaletteProvider";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/projects", label: "Projects", icon: FolderKanban },
];

const socials = [
  { href: profile.links.github, icon: Github, label: "GitHub" },
  { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.links.portfolio, icon: Globe, label: "Portfolio" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
];

const initials = profile.name
  .split(" ")
  .slice(0, 2)
  .map((w) => w[0])
  .join("");

export function Sidebar() {
  const pathname = usePathname();
  const [photoFailed, setPhotoFailed] = useState(false);
  const { setOpen: setCommandPaletteOpen } = useCommandPalette();

  return (
    <aside className="flex h-full w-full flex-col justify-between bg-background py-12 pl-8 pr-6 transition-colors duration-300">
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent-400 to-accent-700 text-4xl font-semibold text-white ring-2 ring-accent-500/30 ring-offset-4 ring-offset-background transition-transform duration-300 hover:scale-105">
            {!photoFailed && (
              <Image
                src={profile.photoSrc}
                alt={profile.name}
                fill
                sizes="112px"
                className="object-cover"
                onError={() => setPhotoFailed(true)}
              />
            )}
            {photoFailed && initials}
          </div>
          <h1 className="mt-6 flex items-center gap-1.5 text-2xl font-semibold text-foreground">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-base text-muted-foreground">{profile.role}</p>
          <Badge variant="tint" className="mt-4 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <RotatingStatus />
          </Badge>

          <div className="mt-7 flex items-center gap-2.5">
            {socials.map(({ href, icon: Icon, label }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110 hover:border-accent-500 hover:text-accent-500"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={16} />
                </a>
              </Button>
            ))}
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCommandPaletteOpen(true)}
          className="mt-8 flex w-full items-center gap-2.5 rounded-lg border border-border px-3.5 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:border-accent-500 hover:text-accent-500"
        >
          <Search size={15} />
          <span className="flex-1 text-left">Search</span>
          <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">Ctrl K</kbd>
        </button>

        <nav className="mt-5 flex flex-col gap-2">
          {navItems.map(({ href, label, icon: Icon }, i) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
                className={cn(
                  "nav-link group relative animate-in px-3.5 py-3 text-lg fade-in-0 slide-in-from-left-2 duration-300 ease-out",
                  active && "nav-link-active"
                )}
              >
                <Icon
                  size={20}
                  className={cn(
                    "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-110",
                    active && "text-accent-600 dark:text-accent-400"
                  )}
                />
                {label}
                {active && (
                  <ChevronRight
                    size={18}
                    className="ml-auto animate-in text-accent-500 fade-in-0 zoom-in-50 duration-200"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </aside>
  );
}
