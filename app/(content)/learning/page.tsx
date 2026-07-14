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
    <div className="mx-auto w-full max-w-5xl px-6 py-8 space-y-4">
      <FadeUp className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Courses</h1>
        <p className="max-w-xl text-foreground/60">
          Course by course, stage by stage. Only completed work shown.
        </p>
      </FadeUp>

      <LearningGrid learning={learning} className="grid gap-4 md:grid-cols-2" />
    </div>
  )
}
