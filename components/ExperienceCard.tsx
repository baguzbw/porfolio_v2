"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ListChecks, Lightbulb, Rocket, Check } from "lucide-react";
import type { Experience } from "@/data/profile";
import { CardContent } from "./ui/card";
import { GlassCard } from "./GlassCard";
import { LogoTile } from "./LogoTile";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function ExperienceCard({ job }: { job: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard>
      <CardContent className="relative flex flex-col gap-0">
        <div className="flex items-start gap-4">
          <LogoTile src={job.logoSrc} alt={`${job.company} logo`} initials={job.logoInitials} size="lg" />

          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
            <p className="mt-1 text-base text-accent-600 dark:text-accent-400">
              {job.company}
              <span className="text-muted-foreground"> · {job.location}</span>
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span>{job.period}</span>
              <span>·</span>
              <span>{job.duration}</span>
              <span>·</span>
              <span>{job.type}</span>
              <span>·</span>
              <span>{job.workMode}</span>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-3 h-auto w-fit gap-1.5 px-0 text-base text-muted-foreground hover:bg-transparent hover:text-accent-600 dark:hover:text-accent-400"
            >
              {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {open ? "Hide details" : "Show details"}
            </Button>
          </div>
        </div>

        {open && (
          <div className="mt-1 flex flex-col gap-4">
            <Separator />
            <Section icon={ListChecks} label="Responsibilities" items={job.responsibilities} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Section icon={Lightbulb} label="What I Learned" items={job.whatILearned} />
              <Section icon={Rocket} label="Impact" items={job.impact} />
            </div>
          </div>
        )}
      </CardContent>
    </GlassCard>
  );
}

function Section({
  icon: Icon,
  label,
  items,
}: {
  icon: typeof ListChecks;
  label: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
        <Icon size={13} />
        {label}
      </h4>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <Check size={14} className="mt-0.5 flex-shrink-0 text-accent-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
