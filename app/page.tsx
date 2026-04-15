import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalWindow } from "@/components/terminal-window"
import { ProjectsGrid } from "@/components/projects-grid"
import { FadeUp } from "@/components/fade-up"
import { FadeIn } from "@/components/fade-in"
import { getFeaturedProjects } from "@/lib/projects"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 space-y-24">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn delay={0.6} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            available for work
          </div>

          <h1 className="text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Norbert.</span>
            <br />I build things for the web.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            Full-stack developer specialising in React and Node.js. I craft
            performant, accessible, and beautifully designed digital products —
            from idea to production.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <Link href="mailto:norbert.kralik.dev@gmail.com">Get In Touch</Link>
            </Button>
          </div>
        </FadeIn>

        <div className="flex justify-center lg:justify-end">
          <TerminalWindow />
        </div>
      </section>

      {/* Recent Projects */}
      <section className="space-y-6">
        <FadeUp className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              selected work
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </FadeUp>

        <ProjectsGrid projects={featuredProjects} />
      </section>
    </div>
  )
}
