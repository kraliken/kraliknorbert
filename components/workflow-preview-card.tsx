"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  FileText,
  Database,
  Zap,
  BarChart2,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
} from "lucide-react"

interface FlowNodeProps {
  icon: LucideIcon
  label: string
  iconClass: string
}

function FlowNode({ icon: Icon, label, iconClass }: FlowNodeProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/40 py-3.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background">
        <Icon className={`h-4 w-4 ${iconClass}`} />
      </div>
      <span className="text-xs font-medium text-foreground/65">{label}</span>
    </div>
  )
}

export function WorkflowPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
      className="w-full max-w-sm rounded-2xl border border-border bg-card shadow-xl overflow-hidden text-sm"
    >
      <div className="flex items-center px-4 py-3 border-b border-border bg-muted/50">
        <span className="text-xs font-medium text-muted-foreground">
          Finance workflow
        </span>
      </div>

      <div className="px-5 py-5 space-y-4">
        {/* Flow diagram: Request → App ↓ Flow → Report (U-shape) */}
        <div className="grid grid-cols-[1fr_28px_1fr] items-center gap-y-1">
          <FlowNode icon={FileText} label="Request" iconClass="text-blue-400/75" />
          <ArrowRight className="h-3 w-3 justify-self-center text-muted-foreground/30" />
          <FlowNode icon={Database} label="App" iconClass="text-violet-400/75" />

          <div />
          <div />
          <div className="flex justify-center py-0.5">
            <ArrowDown className="h-3 w-3 text-muted-foreground/30" />
          </div>

          <FlowNode icon={BarChart2} label="Report" iconClass="text-emerald-400/75" />
          <ArrowLeft className="h-3 w-3 justify-self-center text-muted-foreground/30" />
          <FlowNode icon={Zap} label="Flow" iconClass="text-amber-400/75" />
        </div>

      </div>
    </motion.div>
  )
}
