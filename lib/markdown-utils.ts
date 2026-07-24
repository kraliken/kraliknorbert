// Extract headings from markdown content for TOC generation
export interface Heading {
  level: number // 2 for h2, 3 for h3
  text: string
  id: string
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length // ## = 2, ### = 3
    const text = match[2].trim()
    // Create a URL-friendly ID from the heading text
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special chars
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single

    headings.push({ level, text, id })
  }

  return headings
}
