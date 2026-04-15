import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import type { Project } from "@/types/project"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".md"))
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    ...(data as Omit<Project, "content">),
    content,
  }
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured)
}
