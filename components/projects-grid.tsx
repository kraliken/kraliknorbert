"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/types/project"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

type ProjectsGridProps = {
  projects: Project[]
  className?: string
}

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className ?? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={item}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}
