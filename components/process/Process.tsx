import type { ComponentType } from "react"
import type { HairlineProps } from "@lucasmarkes/hairline/react"

import { HairlinePiece } from "@/components/hairline/HairlinePiece"
import { Exploded, Format, Loupe, Slow } from "@/components/ui/hairline"
import { Timeline, type TimelineEntry } from "@/components/ui/timeline"

type StepDef = {
  code: string
  title: string
  description: string
  figure: ComponentType<HairlineProps>
  figureLabel: string
}

const STEPS: StepDef[] = [
  {
    code: "01",
    title: "Discovery",
    description:
      "Goals, constraints, and who actually uses the thing — nailed down before I type `npm install`. Less guessing later.",
    figure: Loupe,
    figureLabel: "A loupe over a blank ruled sheet. The pointer drags it across the page.",
  },
  {
    code: "02",
    title: "Design",
    description:
      "Structure and screens that can grow with you. Good architecture beats a pretty mess that cracks under the first real feature.",
    figure: Exploded,
    figureLabel:
      "An app window in layers. Moving across opens the gap; moving down picks a layer.",
  },
  {
    code: "03",
    title: "Build",
    description:
      "React, React Native, Expo — the stack I live in. Reviews, tests where they matter, and I don't ship work I won't stand behind.",
    figure: Format,
    figureLabel:
      "A file of crooked lines. The pointer runs the formatter down it until the lines sit square.",
  },
  {
    code: "04",
    title: "Ship",
    description:
      "Release, handoff docs, and space to stabilize. If something breaks in prod, I'm in the thread — not ghosting.",
    figure: Slow,
    figureLabel:
      "Crates riding a belt through a gate. Hovering slows the clock without stopping it.",
  },
]

const TIMELINE_DATA: TimelineEntry[] = STEPS.map((step, index) => {
  const n = index + 1
  const total = STEPS.length

  return {
    title: step.title,
    content: (
      <div className="space-y-5">
        <HairlinePiece
          figure={step.figure}
          label={step.figureLabel}
          intensity={0.66}
          align="start"
          className="max-w-[200px]"
        />
        <p className="font-mono text-xs leading-none text-muted-foreground">
          <span className="text-foreground">{step.code}</span>
          <span className="px-2 text-muted-foreground/50">—</span>
          <span>
            {n} of {total}
          </span>
        </p>
        <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
          {step.description}
        </p>
      </div>
    ),
  }
})

const Process = () => {
  return (
    <section
      className="border-b border-muted pb-10 md:pb-14"
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-muted-foreground">
          HOW I WORK
        </span>
        <h2
          id="process-heading"
          className="font-maru text-2xl font-bold tracking-tight sm:text-3xl"
        >
          From discovery to ship
        </h2>
        <p className="mt-1 max-w-[52ch] font-sans text-sm leading-relaxed text-muted-foreground">
          Four stages I actually stick to. You always know which leg of the trip
          you&apos;re on.
        </p>
      </div>

      <div className="mt-8 md:mt-12">
        <Timeline data={TIMELINE_DATA} />
      </div>
    </section>
  )
}

export default Process
