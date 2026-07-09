import { MapPin, Briefcase, Code2 } from "lucide-react";
import { profile } from "@/data/profile";
import { SkillsSection } from "@/components/SkillsSection";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-semibold text-neutral-900 dark:text-white">Hi, I&apos;m {profile.name.split(" ")[0]}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-base text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1.5">
          <MapPin size={16} />
          Based in {profile.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={16} />
          {profile.status}
        </span>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        {profile.tagline}
      </p>

      <Separator className="mt-10" />

      <div className="mt-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
          <Code2 size={20} className="text-accent-500" />
          Skills
        </h2>
        <p className="mt-1.5 mb-5 text-base text-neutral-500 dark:text-neutral-400">My professional skills.</p>
        <SkillsSection />
      </div>
    </div>
  );
}
