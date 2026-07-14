import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Learning } from "@/types/learning"
import { ProgressBar } from "@/components/progress-bar"

type LearningCardProps = {
  learning: Learning
}

const statusColors = {
  "not-started": "text-muted-foreground",
  "in-progress": "text-blue-500",
  completed: "text-green-500",
  paused: "text-amber-500",
}

const statusLabels = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
  paused: "Paused",
}

export function LearningCard({ learning }: LearningCardProps) {
  const statusColor = statusColors[learning.status]
  const statusLabel = statusLabels[learning.status]

  return (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-border/80 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex-1 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold tracking-tight text-foreground flex-1">
            {learning.title}
          </h3>
          <span className={`text-xs font-medium ${statusColor} whitespace-nowrap`}>
            {statusLabel}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{learning.category}</p>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {learning.description}
        </p>

        <ProgressBar
          completed={learning.completedModules}
          total={learning.totalModules}
          className="space-y-1.5"
        />

        <div className="flex flex-wrap gap-1.5 pt-1">
          {learning.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {learning.tags.length > 3 && (
            <span className="text-xs text-muted-foreground">+{learning.tags.length - 3}</span>
          )}
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={`/learning/${learning.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
