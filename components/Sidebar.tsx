"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Award, FolderKanban, Github, Linkedin, Mail, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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

  return (
    <aside className="flex h-full w-full flex-col justify-between bg-background py-12 pl-8 pr-6 transition-colors duration-300">
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-700 text-4xl font-semibold text-white ring-2 ring-accent-500/30 ring-offset-4 ring-offset-background">
            {initials}
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
            {profile.status}
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

        <nav className="mt-12 flex flex-col gap-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn("nav-link group relative px-3.5 py-3 text-lg", active && "nav-link-active")}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 animate-in rounded-full bg-accent-500 zoom-in-50 fade-in-0 duration-200" />
                )}
                <Icon
                  size={20}
                  className={cn(
                    "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-110",
                    active && "text-accent-500 dark:text-accent-400"
                  )}
                />
                {label}
                {active && <ChevronRight size={20} className="ml-auto text-accent-500" />}
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
