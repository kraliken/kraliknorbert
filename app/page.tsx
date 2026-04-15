import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { getFeaturedProjects } from "@/lib/projects"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          available for work
        </div>

        <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
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
      </section>

      {/* Recent Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
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
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
