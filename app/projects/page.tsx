"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FilterTabs } from "@/components/FilterTabs";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");

  const typeOptions = [
    { value: "All", count: projects.length },
    ...Array.from(new Set(projects.map((p) => p.type))).map((t) => ({
      value: t,
      count: projects.filter((p) => p.type === t).length,
    })),
  ];

  const categoryOptions = [
    { value: "All", count: projects.length },
    ...Array.from(new Set(projects.map((p) => p.category))).map((c) => ({
      value: c,
      count: projects.filter((p) => p.category === c).length,
    })),
  ];

  const filtered = useMemo(() => {
    return projects.filter(
      (p) => (type === "All" || p.type === type) && (category === "All" || p.category === category)
    );
  }, [type, category]);

  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="A showcase of projects I've built, from freelance work to personal data analysis."
      />

      <div className="flex flex-col gap-3">
        <FilterTabs label="Type" options={typeOptions} active={type} onChange={setType} />
        <FilterTabs label="Category" options={categoryOptions} active={category} onChange={setCategory} />
      </div>

      <div key={`${type}|${category}`} className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className="h-full animate-in fade-in-0 slide-in-from-bottom-2 duration-300 ease-out"
            style={{ animationDelay: `${Math.min(i * 40, 300)}ms`, animationFillMode: "backwards" }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
