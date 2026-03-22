import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ComputerTerminal01Icon,
} from "@hugeicons/core-free-icons"

import CodeBlock from "@/components/CodeBlock"
import { RadarBackdrop } from "@/components/not-found/RadarBackdrop"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NotFoundPageProps = {
  reportIssueHref?: string
  className?: string
}

export default function NotFoundPage({
  reportIssueHref = "mailto:feedback@example.com",
  className,
}: NotFoundPageProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 py-16 font-sans text-white",
        className
      )}
    >
      <RadarBackdrop />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          404: System Timeout
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[#A0A0A0] sm:text-lg">
          The architecture you&apos;re looking for doesn&apos;t exist or has
          been deprecated. Let&apos;s get you back to the main branch.
        </p>

        <div className="mt-10 w-full max-w-lg">
          <CodeBlock />
        </div>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            asChild
            size="lg"
            className="h-11 border-0 bg-white text-black hover:bg-neutral-200"
          >
            <Link href="/" className="gap-2">
              Back to Main System
              <HugeiconsIcon icon={ComputerTerminal01Icon} size={18} />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-11 text-white hover:bg-white/10 hover:text-white"
          >
            <a href={reportIssueHref} className="gap-2">
              Report Issue
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
