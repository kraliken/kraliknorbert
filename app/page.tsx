import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { FadeUp } from "@/components/fade-up"
import { LearningGrid } from "@/components/learning-grid"
import { getCurrentlyLearning } from "@/lib/learning"

export default async function HomePage() {
  const currentlyLearning = await Promise.resolve(getCurrentlyLearning())

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6">
        <FadeIn delay={0.6} className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Career changer, in public
          </div>

          <h1 className="text-4xl font-semibold tracking-tight leading-tight sm:text-5xl mx-auto max-w-2xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Norbert.</span>
            <br />
            Learning data &amp; BI.
          </h1>

          <p className="text-base leading-relaxed text-foreground/60 mx-auto max-w-2xl">
            Accounting background. I&apos;m building Data Analytics and Business Intelligence skills
            in public — Power BI, SQL, Tableau, Python, and more. Each course shows what I&apos;ve
            actually learned and understood.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/learning">View Learning Journey</Link>
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
      </section>

      {/* Currently Learning */}
      {currentlyLearning.length > 0 && (
        <section className="space-y-6">
          <FadeUp className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Currently learning</h2>
            <p className="text-foreground/60">
              My active courses and progress so far.
            </p>
          </FadeUp>
          <LearningGrid
            learning={currentlyLearning}
            className="grid gap-4 sm:grid-cols-2"
          />
          <div className="text-center pt-2">
            <Link href="/learning" className="text-sm font-medium text-primary hover:text-primary/80">
              View all courses →
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}