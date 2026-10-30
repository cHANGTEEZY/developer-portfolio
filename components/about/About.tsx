"use client"

import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

import { HairlinePiece } from "@/components/hairline/HairlinePiece"
import { Keyboard } from "@/components/ui/hairline"
import { siteConfig } from "@/lib/site"

import Button from "../composition/Button"

const PARAGRAPHS = [
  "It started with a laptop and a deadline. My first projects were freelance jobs, built late at night in Kathmandu, figuring things out one bug at a time.",
  "Over 3 years later, that habit hasn't changed. I've worked with software companies in Lalitpur and with clients in Nepal and Australia, building everything from offline field apps used across all 77 districts of Nepal, to community apps on Google Play and the App Store, to dashboards that teams use every day.",
  "I work mainly with React, React Native and Expo, with TypeScript and Node.js behind them. I didn't just pick these tools up. I enjoy working with them, and I've built my whole workflow around them.",
  "I work alone, on purpose. When you hire me, you talk to the person writing your code. No account managers, no hand-offs, no getting lost in translation. I keep things simple: write clean code, communicate openly, own the work fully, and make each project better than the last.",
  "Kathmandu is where I work. Everywhere else is where I deliver.",
] as const

const TIMELINE = [
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

const About = () => {
  return (
    <article className="px-6 sm:px-0">
      <header className="max-w-[38rem]">
        <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
          About
        </p>
        <h2 className="mt-4 font-maru text-4xl leading-[1.05] font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          React & React Native developer
        </h2>
        <p className="mt-6 max-w-[36rem] font-sans text-lg leading-8 text-muted-foreground">
          I&apos;m Sushank Gurung, a developer based in Kathmandu. I build web
          and mobile products with React, React Native, and Expo.
        </p>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Kathmandu, Nepal
          <span className="px-2 text-muted-foreground/40">·</span>
          UTC+5:45
          <span className="px-2 text-muted-foreground/40">·</span>
          3+ years
        </p>
      </header>

      <HairlinePiece
        figure={Keyboard}
        label="A keyboard. The key under the pointer sinks, and its neighbours follow."
        intensity={0.72}
        play
        align="start"
        className="mt-12 max-w-[420px]"
      />

      <div className="mt-12 max-w-[38rem] space-y-6">
        {PARAGRAPHS.map((paragraph) => (
          <p
            key={paragraph}
            className="font-sans text-base leading-8 tracking-[0.01em] text-foreground/90"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ol className="mt-12 max-w-[38rem] border-t border-muted">
        {TIMELINE.map((item) => (
          <li
            key={item.label}
            className="grid gap-1 border-b border-muted py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-8"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {item.label}
            </span>
            <span className="font-sans text-base leading-7 text-foreground/90">
              {item.text}
            </span>
          </li>
        ))}
      </ol>

      <figure className="mt-12 max-w-[38rem] overflow-hidden rounded-2xl">
        <Image
          src="/kathmandu_dark.png"
          alt="Kathmandu"
          width={1000}
          height={1000}
          className="hidden h-auto w-full object-cover dark:block"
        />
        <Image
          src="/kathmandu_white.png"
          alt="Kathmandu"
          width={1000}
          height={1000}
          className="block h-auto w-full object-cover dark:hidden"
        />
      </figure>

      <div className="mt-12 flex flex-col items-start gap-3">
        <Button
          onClick={() => {
            window.open(siteConfig.whatsappUrl, "_blank", "noopener,noreferrer")
          }}
          variant="primary"
          size="medium"
          loading={false}
          behavior="ctaLift"
          className="cursor-pointer"
        >
          <Button.Text>Book a Discovery Call</Button.Text>
          <Button.Icon>
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button.Icon>
        </Button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          {siteConfig.email}
        </a>
      </div>
    </article>
  )
}

export default About
