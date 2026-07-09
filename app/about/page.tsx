import { Briefcase, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GlassCard } from "@/components/GlassCard";
import { LogoTile } from "@/components/LogoTile";
import { CardContent } from "@/components/ui/card";
import { profile, experience, education } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      <PageHeader title="About" subtitle="A brief introduction to who I am." size="lg" />

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-base text-neutral-500 dark:text-neutral-400">Best Regards,</p>
        <p className="mt-1 font-signature text-5xl text-accent-500">{profile.name.split(" ")[0]}</p>
      </div>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
          <Briefcase size={20} className="text-accent-500" />
          Career
        </h2>
        <p className="mt-1.5 mb-5 text-base text-neutral-500 dark:text-neutral-400">My professional journey.</p>

        <div className="flex flex-col gap-3">
          {experience.map((job) => (
            <ExperienceCard key={job.title + job.company} job={job} />
          ))}
        </div>
      </section>

      <section className="mt-12 mb-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
          <GraduationCap size={20} className="text-accent-500" />
          Education
        </h2>
        <p className="mt-1.5 mb-5 text-base text-neutral-500 dark:text-neutral-400">My educational journey.</p>

        <div className="flex flex-col gap-3">
          {education.map((edu) => (
            <GlassCard key={edu.school}>
              <CardContent className="relative flex items-start gap-4">
                <LogoTile src={edu.logoSrc} alt={`${edu.school} logo`} initials={edu.logoInitials} size="lg" />
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{edu.school}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {edu.degree} · {edu.field}
                      {edu.gpa && <> · GPA: {edu.gpa}</>}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
