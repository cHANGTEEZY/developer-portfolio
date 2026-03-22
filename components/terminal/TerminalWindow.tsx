import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { TerminalWindowControls } from "./TerminalWindowControls"

type TerminalWindowProps = {
  children: ReactNode
  className?: string
}

export function TerminalWindow({ children, className }: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-xl border border-white/5 bg-[#1A1A1A] shadow-xl shadow-black/50",
        className
      )}
    >
      <div className="flex items-center border-b border-white/5 px-4 py-3">
        <TerminalWindowControls />
      </div>
      <div className="space-y-1 px-4 py-4 font-mono text-sm">{children}</div>
    </div>
  )
}
