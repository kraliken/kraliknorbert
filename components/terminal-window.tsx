"use client"

import { motion } from "framer-motion"

type Line =
  | { type: "command"; text: string }
  | { type: "output"; text: string }
  | { type: "gap" }

const LINES: Line[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "Norbert Kralik" },
  { type: "gap" },
  { type: "command", text: "cat skills.json" },
  { type: "output", text: '["React", "Next.js", "Node.js",' },
  { type: "output", text: ' "TypeScript", "PostgreSQL"]' },
  { type: "gap" },
  { type: "command", text: "git log --oneline -1" },
  { type: "output", text: "feat: launch kralik.dev" },
]

function renderLine(line: Line, idx: number) {
  if (line.type === "gap") return <div key={idx} className="h-3" />
  if (line.type === "command")
    return (
      <div key={idx} className="flex items-center gap-2">
        <span className="text-primary select-none">$</span>
        <span className="text-foreground">{line.text}</span>
      </div>
    )
  return (
    <div key={idx} className="pl-4 text-muted-foreground">
      {line.text}
    </div>
  )
}

export function TerminalWindow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
      className="w-full max-w-md rounded-2xl border border-border bg-card shadow-xl overflow-hidden font-mono text-sm"
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/50">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-muted-foreground select-none">
          bash — kralik.dev
        </span>
      </div>

      {/* Content */}
      <div className="px-5 py-4 space-y-1">
        {LINES.map((line, idx) => renderLine(line, idx))}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-primary select-none">$</span>
          <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse align-middle" />
        </div>
      </div>
    </motion.div>
  )
}
