"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AchievementCard } from "@/components/AchievementCard";
import { achievements } from "@/data/profile";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AchievementsPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");

  const types = ["All", ...Array.from(new Set(achievements.map((a) => a.type)))];
  const categories = ["All", ...Array.from(new Set(achievements.map((a) => a.category)))];

  const filtered = useMemo(() => {
    return achievements.filter((a) => {
      const matchesQuery =
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.issuer.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === "All" || a.type === type;
      const matchesCategory = category === "All" || a.category === category;
      return matchesQuery && matchesType && matchesCategory;
    });
  }, [query, type, category]);

  return (
    <div>
      <PageHeader
        title="Achievements"
        subtitle="A curated collection of certificates and courses I've completed."
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="pl-9"
          />
        </div>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="sm:w-48">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t === "All" ? "Filter by Type" : t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="sm:w-48">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c === "All" ? "Filter by Category" : c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">Total: {filtered.length}</p>

      <div key={`${type}|${category}`} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a, i) => (
          <div
            key={a.title}
            className="h-full animate-in fade-in-0 slide-in-from-bottom-2 duration-300 ease-out"
            style={{ animationDelay: `${Math.min(i * 30, 300)}ms`, animationFillMode: "backwards" }}
          >
            <AchievementCard achievement={a} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">Nothing matches those filters.</p>
      )}
    </div>
  );
}
