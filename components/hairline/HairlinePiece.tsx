"use client"

import { useState, type ComponentType, type CSSProperties } from "react"
import type { HairlineProps } from "@lucasmarkes/hairline/react"

import { cn } from "@/lib/utils"

const voidTokens = {
  "--hairline-plate": "#0A0A0A",
  "--hairline-hi": "#f5f5f5",
  "--hairline-edge": "#a1a1aa",
  "--hairline-mid": "#52525b",
  "--hairline-lo": "#3f3f46",
} as CSSProperties

type HairlinePieceProps = {
  figure: ComponentType<HairlineProps>
  label: string
  intensity?: number
  play?: boolean
  tone?: "canvas" | "void"
  align?: "start" | "center"
  frame?: boolean
  isolate?: boolean
  className?: string
}

export function HairlinePiece({
  figure: Figure,
  label,
  intensity = 0.64,
  play = false,
  tone = "canvas",
  align = "center",
  frame = false,
  isolate = false,
  className,
}: HairlinePieceProps) {
  const [read, setRead] = useState("rest")

  return (
    <figure
      className={cn(
        "w-full max-w-[220px]",
        align === "center" && "mx-auto",
        className
      )}
      onClick={isolate ? (event) => event.stopPropagation() : undefined}
    >
      <div
        className={cn(
          frame && "overflow-hidden rounded-2xl bg-background"
        )}
      >
        <Figure
          intensity={intensity}
          play={play}
          theme={tone === "void" ? "dark" : "auto"}
          label={label}
          onRead={setRead}
          style={tone === "void" ? voidTokens : undefined}
          className="w-full"
        />
      </div>
      <figcaption
        aria-hidden
        className={cn(
          "mt-1.5 font-mono text-[10px] tracking-[0.16em] uppercase",
          align === "center" ? "text-center" : "text-left",
          tone === "void" ? "text-[#A0A0A0]" : "text-muted-foreground"
        )}
      >
        {read}
      </figcaption>
    </figure>
  )
}
