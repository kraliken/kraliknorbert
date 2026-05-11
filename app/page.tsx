import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WorkflowPreviewCard } from "@/components/workflow-preview-card"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <FadeIn delay={0.6} className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Accounting → Automation
          </div>

          <h1 className="text-4xl font-semibold tracking-tight leading-tight sm:text-5xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Norbert.</span>
            <br />I automate finance workflows.
          </h1>

          <p className="text-base leading-relaxed text-foreground/60">
            Accounting background. I build Power Platform tools for approvals,
            reconciliation, and reporting.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6"
            >
              <Link href="mailto:norbert.kralik.dev@gmail.com">
                Get In Touch
              </Link>
            </Button>
          </div>
        </FadeIn>

        <div className="flex justify-center lg:justify-end">
          <WorkflowPreviewCard />
        </div>
      </section>
    </div>
  )
}