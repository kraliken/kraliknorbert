import Link from "next/link"

const socialLinks = [
  { href: "https://github.com/norbi", label: "GitHub" },
  { href: "https://twitter.com/norbi", label: "Twitter" },
  { href: "https://linkedin.com/in/norbi", label: "LinkedIn" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Kralik.dev</span> — Built
          with Next.js &amp; shadcn/ui
        </p>

        <nav className="flex items-center gap-4">
          {socialLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
