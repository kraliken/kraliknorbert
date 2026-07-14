import type { Metadata } from "next"
import { LearningGrid } from "@/components/learning-grid"
import { FadeUp } from "@/components/fade-up"
import { getAllLearning } from "@/lib/learning"

export const metadata: Metadata = {
  title: "Learning — Kralik.dev",
  description:
    "My public learning journey into Data Analytics and BI — Power BI, SQL, Tableau, Python, and Power Platform, documented course by course.",
}

export default function LearningPage() {
  const learning = getAllLearning()

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 space-y-6">
      <FadeUp className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          learning journey
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">Learning</h1>
        <p className="max-w-xl text-foreground/60">
          An accountant learning data and business intelligence in public — course by course,
          stage by stage. Only what I&apos;ve actually completed and understood is shown here.
        </p>
      </FadeUp>

      <LearningGrid learning={learning} />
    </div>
  )
}
