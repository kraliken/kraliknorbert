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

export default async function LearningPage({ params }: Props) {
  const { slug } = await params

  let learning
  try {
    learning = getLearningBySlug(slug)
  } catch {
    notFound()
  }

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
      <header className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{learning.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
            {learning.description}
          </p>
        </div>

        <ProgressBar completed={learning.completedModules} total={learning.totalModules} />

        {/* {learning.courseUrl && (
          <Button asChild size="sm" className="rounded-full gap-1.5">
            <a href={learning.courseUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              View on {learning.provider || "course platform"}
            </a>
          </Button>
        )} */}
      </header>

      {/* <hr className="border-border" /> */}

      {/* Markdown body */}
      <MarkdownRenderer content={learning.content} />
    </div>
  )
}
