import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ProgressBar } from "@/components/progress-bar"
import { getAllLearning, getLearningBySlug } from "@/lib/learning"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllLearning().map((learning) => ({ slug: learning.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const learning = getLearningBySlug(slug)
    return {
      title: `${learning.title} — Kralik.dev`,
      description: learning.description,
    }
  } catch {
    return {}
  }
}

const statusColors = {
  "not-started": "bg-muted text-muted-foreground",
  "in-progress": "bg-blue-500/10 text-blue-500",
  completed: "bg-green-500/10 text-green-500",
  paused: "bg-amber-500/10 text-amber-500",
}

const statusLabels = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
  paused: "Paused",
}

export default async function LearningPage({ params }: Props) {
  const { slug } = await params

  let learning
  try {
    learning = getLearningBySlug(slug)
  } catch {
    notFound()
  }

  const statusColor = statusColors[learning.status]
  const statusLabel = statusLabels[learning.status]

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 space-y-10">
      {/* Back */}
      <Link
        href="/learning"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Learning
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight">{learning.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
              {learning.description}
            </p>
          </div>
          <span className={`text-xs font-medium px-3 py-1.5 rounded-md ${statusColor} whitespace-nowrap`}>
            {statusLabel}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{learning.category}</span>
              {learning.provider && <span> • {learning.provider}</span>}
            </p>
          </div>

          <ProgressBar completed={learning.completedModules} total={learning.totalModules} />

          <div className="flex flex-wrap gap-1.5">
            {learning.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {learning.courseUrl && (
          <Button asChild size="sm" className="rounded-full gap-1.5">
            <a href={learning.courseUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              View on {learning.provider || "course platform"}
            </a>
          </Button>
        )}
      </header>

      <hr className="border-border" />

      {/* Markdown body */}
      <MarkdownRenderer content={learning.content} />
    </div>
  )
}
