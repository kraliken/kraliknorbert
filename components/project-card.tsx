import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/types/project"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-border/80 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex-1 space-y-3">
        <h3 className="font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
