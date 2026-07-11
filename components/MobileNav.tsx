"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, User, Award, FolderKanban, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Send },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-5 py-3.5 backdrop-blur transition-colors duration-300">
        <span className="text-sm font-semibold text-foreground">{profile.name}</span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map(({ href, label, icon: Icon }) => {
                  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn("nav-link px-3 py-2.5 text-base", active && "nav-link-active")}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
