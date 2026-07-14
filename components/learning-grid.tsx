"use client"

import { motion } from "framer-motion"
import { LearningCard } from "@/components/learning-card"
import type { Learning } from "@/types/learning"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

type LearningGridProps = {
  learning: Learning[]
  className?: string
}

export function LearningGrid({ learning, className }: LearningGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className ?? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
    >
      {learning.map((learningItem) => (
        <motion.div key={learningItem.slug} variants={item} className="h-full">
          <LearningCard learning={learningItem} />
        </motion.div>
      ))}
    </motion.div>
  )
}
