export type LearningStatus = "not-started" | "in-progress" | "completed" | "paused"

export type LearningFrontmatter = {
  title: string
  description: string
  slug: string
  provider: string
  courseUrl?: string
  category: string
  tags: string[]
  status: LearningStatus
  completedModules: number
  totalModules: number
  startDate: string
  completedDate?: string
  featured?: boolean
}

export type Learning = LearningFrontmatter & {
  content: string
}
