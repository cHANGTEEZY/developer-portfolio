import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

import { LayoutWrapper } from "../shell"
import { WORK } from "./data"

const ABOUT_TIMELINE = [
  {
    label: "The start",
    text: "Freelance web projects, learning by shipping.",
  },
  {
    label: "2024",
    text: "Joined Margintop Solutions and Probits as a web and mobile developer, freelancing on the side.",
  },
  {
    label: "Since then",
    text: "Shipped Oripari to both app stores, built Mr. Valuator for property valuers across Nepal, plus MDESK and client sites in Australia.",
  },
  {
    label: "Today",
    text: "Taking on freelance React and React Native projects worldwide.",
  },
] as const

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
      <section>
        <div className="flex items-center justify-between border-t border-muted px-5 py-6 md:px-2">
          <h1 className="font-maru text-3xl font-bold">About</h1>
          <div className="flex flex-col gap-2 text-right">
            <p className="font-mono text-xs text-muted-foreground">
              Kathmandu, Nepal
            </p>
            <p className="font-mono text-xs text-muted-foreground">UTC+5:45</p>
          </div>
        </div>
        <div className="space-y-5 px-5 py-6">
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            It started with a laptop and a deadline. My first projects were
            freelance jobs, built late at night in Kathmandu, figuring things
            out one bug at a time.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            Over 3 years later, that habit hasn&apos;t changed. I&apos;ve worked
            with software companies in Lalitpur and with clients in Nepal and
            Australia, building everything from offline field apps used across
            all 77 districts of Nepal, to community apps on Google Play and the
            App Store, to dashboards that teams use every day.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            I work mainly with React, React Native and Expo, with TypeScript and
            Node.js behind them. I didn&apos;t just pick these tools up. I enjoy
            working with them, and I&apos;ve built my whole workflow around
            them.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            I work alone, on purpose. When you hire me, you talk to the person
            writing your code. No account managers, no hand-offs, no getting
            lost in translation. I keep things simple: write clean code,
            communicate openly, own the work fully, and make each project better
            than the last.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            Kathmandu is where I work. Everywhere else is where I deliver.
          </p>
          <ol className="max-w-[68ch] space-y-4 pt-2">
            {ABOUT_TIMELINE.map((item) => (
              <li key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.label}
                </span>
                <span className="font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="px-5 py-6">
          <Image
            src={"/kathmandu_dark.png"}
            alt="Kathmandu"
            className="hidden h-full w-full object-cover dark:block"
            height={"1000"}
            width={"1000"}
          />
          <Image
            src={"/kathmandu_white.png"}
            alt="Kathmandu"
            className="block h-full w-full object-cover dark:hidden"
            height={"1000"}
            width={"1000"}
          />
        </div>
      </section>
    </LayoutWrapper>
  )
}

export default Work
