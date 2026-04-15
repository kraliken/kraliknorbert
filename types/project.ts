export type ProjectFrontmatter = {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  coverImage?: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

export type Project = ProjectFrontmatter & {
  content: string
}
