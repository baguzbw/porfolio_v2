import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/profile";
import { TechIcon } from "./TechIcon";
import { ProjectCoverImage } from "./ProjectCoverImage";
import { GlassCard } from "./GlassCard";
import { CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <GlassCard className="flex h-full flex-col p-0">
        <div className="relative aspect-[16/10] w-full flex-shrink-0 overflow-hidden bg-muted">
          <ProjectCoverImage project={project} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 text-sm font-medium text-white">
              View Detail
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-2">
            <h3 className="line-clamp-1 text-base font-semibold text-foreground">{project.title}</h3>
            {project.featured && (
              <Badge className="flex-shrink-0 bg-accent-500 text-white hover:bg-accent-500">
                <Star size={10} fill="currentColor" />
                Featured
              </Badge>
            )}
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <span key={t} title={t} className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                <TechIcon name={t} size={17} />
              </span>
            ))}
          </div>
        </CardContent>
      </GlassCard>
    </Link>
  );
}
