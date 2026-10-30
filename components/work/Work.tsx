import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

import { LayoutWrapper } from "../shell"
import { WORK } from "./data"

const Work = () => {
  return (
    <LayoutWrapper maxWidth="sm" padding="none">
      <section>
        <div className="flex items-center justify-between border-b border-muted px-5 py-10 md:px-2">
          <h1 className="font-maru text-3xl font-bold">Work</h1>
          <span className="font-mono text-xs text-muted-foreground">
            3+ years
          </span>
        </div>
        <div className="grid grid-cols-1 space-y-10 py-10">
          {WORK.map((work: (typeof WORK)[number]) => (
            <a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-5 transition-colors hover:text-primary md:px-2"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={work.image}
                  alt=""
                  className="h-10 w-auto max-w-28 shrink-0 object-contain"
                />
                <p className="font-sans text-sm">{work.title}</p>
              </div>
              <p className="flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-primary">
                {work.description}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={14}
                  className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px"
                />
              </p>
            </a>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  )
}

export default Work
