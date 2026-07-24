import ReactMarkdown, { Components } from "react-markdown"

type MarkdownRendererProps = {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Custom heading renderer to add IDs for anchor links
  const components: Components = {
    h2: ({ children }) => {
      const text = String(children)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
      return <h2 id={id}>{children}</h2>
    },
    h3: ({ children }) => {
      const text = String(children)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
      return <h3 id={id}>{children}</h3>
    },
  }

  return (
    <article className="prose prose-sm prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:scroll-mt-20 prose-h3:scroll-mt-20 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-medium">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  )
}
