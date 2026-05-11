import Link from "next/link"

const socialLinks = [
  { href: "https://github.com/norbi", label: "GitHub" },
  { href: "https://linkedin.com/in/norbi", label: "LinkedIn" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Kralik.dev</span>
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
