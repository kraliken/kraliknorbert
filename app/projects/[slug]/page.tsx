import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ExternalLink, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { getAllProjects, getProjectBySlug } from "@/lib/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const project = getProjectBySlug(slug)
    return {
      title: `${project.title} — Kralik.dev`,
      description: project.description,
    }
  } catch {
    return {}
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  let project
  try {
    project = getProjectBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 space-y-10">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Projects
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.demoUrl && (
            <Button asChild size="sm" className="rounded-full gap-1.5">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline" className="rounded-full gap-1.5">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitFork className="h-3.5 w-3.5" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </header>

      <hr className="border-border" />

      {/* Markdown body */}
      <MarkdownRenderer content={project.content} />
    </div>
  )
}
