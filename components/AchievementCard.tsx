"use client";

import { Award, BookOpen, Trophy, ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/data/profile";
import { CardContent } from "./ui/card";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import { CertImage } from "./CertImage";

const typeIcon = {
  Certification: Award,
  Course: BookOpen,
  Competition: Trophy,
};

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = typeIcon[achievement.type];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <GlassCard role="button" tabIndex={0} className="flex h-full cursor-pointer flex-col p-0">
          <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-muted">
            <CertImage
              achievement={achievement}
              iconSize={26}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100">
              <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                View Detail
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
          <CardContent className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                <Icon size={15} />
              </div>
              <Badge variant="muted" className="flex-shrink-0">{achievement.category}</Badge>
            </div>
            <div>
              <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">{achievement.title}</h3>
              <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{achievement.issuer}</p>
            </div>
            <div className="mt-auto flex items-center justify-between pt-1 text-xs text-muted-foreground">
              <span>{achievement.type}</span>
              {achievement.issued && <span>{achievement.issued}</span>}
            </div>
          </CardContent>
        </GlassCard>
      </DialogTrigger>

      <DialogContent className="grid max-h-[85vh] w-[94vw] max-w-3xl grid-rows-[auto_1fr] gap-0 overflow-y-auto p-0 sm:grid-cols-[1.4fr_1fr] sm:grid-rows-1 sm:overflow-hidden">
        <div className="relative h-56 w-full bg-muted sm:h-full">
          <CertImage achievement={achievement} iconSize={40} className="h-full" />
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-6">
          <DialogTitle className="text-xl leading-snug">{achievement.title}</DialogTitle>
          <p className="-mt-3 text-sm text-accent-600 dark:text-accent-400">{achievement.issuer}</p>

          <div className="flex flex-col gap-4">
            {achievement.credentialId && (
              <DetailRow label="Credential ID" value={achievement.credentialId} />
            )}
            <DetailRow label="Type" value={achievement.type} />
            <DetailRow label="Category" value={achievement.category} />
            {achievement.issued && <DetailRow label="Issue Date" value={achievement.issued} />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
