"use client";

import { useState } from "react";
import { cn, hexAlpha } from "@/lib/utils";
import { skills } from "@/data/profile";
import { getTechIcon } from "@/lib/techIcons";
import { TechIcon } from "./TechIcon";
import { GlassHover } from "./GlassHover";
import { Button } from "./ui/button";

const allSkills = skills.flatMap((g) => g.skills);

const shortLabel: Record<string, string> = {
  "Backend & DB": "Backend",
  "Data & Analytics": "Data",
  "Tools & DevOps": "DevOps",
};

export function SkillsSection() {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? allSkills : skills.find((g) => g.label === active)?.skills ?? [];

  return (
    <div>
      <div className="flex flex-nowrap items-center gap-1.5">
        <FilterButton label="All" count={allSkills.length} active={active === "All"} onClick={() => setActive("All")} />
        {skills.map((group) => (
          <FilterButton
            key={group.label}
            label={shortLabel[group.label] ?? group.label}
            count={group.skills.length}
            active={active === group.label}
            onClick={() => setActive(group.label)}
          />
        ))}
      </div>

      <div key={active} className="mt-6 flex flex-wrap gap-2.5">
        {visible.map((skill, i) => (
          <SkillBadge key={skill} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

function SkillBadge({ skill, index = 0 }: { skill: string; index?: number }) {
  const entry = getTechIcon(skill);
  const mono = entry.kind === "brand" && entry.mono;
  const color = entry.color;

  return (
    <GlassHover
      glowSize={130}
      className={cn(
        "flex animate-assemble-pop items-center gap-2.5 rounded-full border px-4 py-2.5 text-base font-medium text-neutral-700 dark:text-neutral-200 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30",
        mono && "border-border bg-muted"
      )}
      style={{
        animationDelay: `${Math.min(index * 25, 300)}ms`,
        animationFillMode: "backwards",
        ...(!mono && color
          ? { backgroundColor: hexAlpha(color, "14"), borderColor: hexAlpha(color, "33") }
          : {}),
      }}
    >
      <TechIcon
        name={skill}
        size={19}
        className="relative z-20 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-125"
      />
      <span className="relative z-20">{skill}</span>
    </GlassHover>
  );
}

function FilterButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className="h-7 flex-shrink-0 gap-1 rounded-full px-2.5 text-xs"
    >
      {label}
      <span className={cn("rounded-full px-1 text-[10px]", active ? "bg-white/20" : "bg-muted")}>{count}</span>
    </Button>
  );
}
