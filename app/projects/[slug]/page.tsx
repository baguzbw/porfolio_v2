import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Layers, Sparkles, Wrench, Lightbulb } from "lucide-react";
import { projects } from "@/data/profile";
import { TechIcon } from "@/components/TechIcon";
import { ProjectCoverImage } from "@/components/ProjectCoverImage";
import { CodeBlock } from "@/components/CodeBlock";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent-600 dark:hover:text-accent-400"
      >
        <ArrowLeft size={15} />
        Back
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-foreground">{project.title}</h1>
      <p className="mt-3 text-justify text-lg leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Tech Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} title={t} className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <TechIcon name={t} size={16} />
              </span>
            ))}
          </div>
        </div>

        {(project.sourceCodeUrl || project.liveDemoUrl) && (
          <div className="flex items-center gap-2">
            {project.sourceCodeUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={14} />
                  Source Code
                </a>
              </Button>
            )}
            {project.liveDemoUrl && (
              <Button size="sm" asChild>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  {project.type === "Design" ? "View Case Study" : "Live Demo"}
                </a>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
        <ProjectCoverImage project={project} />
      </div>

      <Separator className="mt-10" />

      <Reveal>
        <Section icon={Layers} title="Overview">
          <p className="text-justify text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">{project.overview}</p>
        </Section>
      </Reveal>

      <Separator />

      <Reveal>
        <Section icon={Sparkles} title="Tech Stack">
          <div className="flex flex-col gap-4">
            {project.techDetails.map((t) => (
              <div key={t.name} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                  <TechIcon name={t.name} size={16} />
                </span>
                <p className="text-justify text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  <span className="font-semibold text-foreground">{t.name}:</span> {t.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Separator />

      <Reveal>
        <Section icon={Wrench} title="Features">
          <div className="flex flex-col gap-5">
            {project.features.map((f) => (
              <div key={f.title}>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-justify text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Separator />

      <Reveal>
        <Section icon={Wrench} title="Challenges & Solutions">
          <div className="flex flex-col gap-5">
            {project.challenges.map((c) => (
              <div key={c.title}>
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-justify text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {c.description}
                </p>
                {c.code && (
                  <div className="mt-3">
                    <CodeBlock code={c.code} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Separator />

      <Reveal>
        <Section icon={Lightbulb} title="Lessons Learned">
          <ul className="flex flex-col gap-2.5">
            {project.lessons.map((l, i) => (
              <li key={i} className="flex gap-2.5 text-justify text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                {l}
              </li>
            ))}
          </ul>
        </Section>
      </Reveal>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Layers;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
        <Icon size={19} className="text-accent-500" />
        {title}
      </h2>
      {children}
    </section>
  );
}
