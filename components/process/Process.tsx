import type { ReactNode } from "react"

import {
  IsoBrowser,
  IsoChat,
  IsoCode,
  IsoDeploy,
} from "@/components/overflow/icons"
import { Timeline, type TimelineEntry } from "@/components/ui/timeline"

type StepDef = {
  code: string
  title: string
  description: string
  icon: ReactNode
}

const STEPS: StepDef[] = [
  {
    code: "01",
    title: "Discovery",
    description:
      "Goals, constraints, and who actually uses the thing — nailed down before I type `npm install`. Less guessing later.",
    icon: <IsoChat className="h-14 w-14" />,
  },
  {
    code: "02",
    title: "Design",
    description:
      "Structure and screens that can grow with you. Good architecture beats a pretty mess that cracks under the first real feature.",
    icon: <IsoBrowser className="h-14 w-14" />,
  },
  {
    code: "03",
    title: "Build",
    description:
      "React, React Native, Expo — the stack I live in. Reviews, tests where they matter, and I don't ship work I won't stand behind.",
    icon: <IsoCode className="h-14 w-14" />,
  },
  {
    code: "04",
    title: "Ship",
    description:
      "Release, handoff docs, and space to stabilize. If something breaks in prod, I'm in the thread — not ghosting.",
    icon: <IsoDeploy className="h-14 w-14" />,
  },
]

const TIMELINE_DATA: TimelineEntry[] = STEPS.map((step, index) => {
  const n = index + 1
  const total = STEPS.length

  return {
    title: step.title,
    content: (
      <div className="space-y-5">
        {step.icon}
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
