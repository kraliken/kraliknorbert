import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import type { Learning } from "@/types/learning"

const learningDirectory = path.join(process.cwd(), "content/learning")

export function getLearningSlugs(): string[] {
  return fs.readdirSync(learningDirectory).filter((file) => file.endsWith(".md"))
}

export function getLearningBySlug(slug: string): Learning {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(learningDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    ...(data as Omit<Learning, "content">),
    content,
  }
}

export function getAllLearning(): Learning[] {
  return getLearningSlugs()
    .map((slug) => getLearningBySlug(slug))
    .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
}

export function getFeaturedLearning(): Learning[] {
  return getAllLearning().filter((learning) => learning.featured)
}

export function getCurrentlyLearning(): Learning[] {
  return getAllLearning().filter((learning) => learning.status === "in-progress")
}

export function getCompletedLearning(): Learning[] {
  return getAllLearning().filter((learning) => learning.status === "completed")
}
