import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects-grid"
import { FadeUp } from "@/components/fade-up"
import { getAllProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects — Kralik.dev",
  description:
    "Power Platform case studies for finance and back-office workflows — built with Power Apps, Power Automate, and Power BI.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 space-y-10">
      <FadeUp className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          selected work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="max-w-xl text-foreground/60">
          Power Platform projects focused on finance and back-office workflows
          — approvals, reconciliation, and reporting.
        </p>
      </FadeUp>

      <ProjectsGrid projects={projects} />
    </div>
  )
}
