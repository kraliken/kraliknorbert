import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects — Kralik.dev",
  description:
    "Things I've designed, built, and shipped — open-source tools, SaaS products, and experimental ideas.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 space-y-10">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          work
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-xl text-muted-foreground">
          Things I&apos;ve designed, built, and shipped — open-source tools,
          SaaS products, and experimental ideas.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
