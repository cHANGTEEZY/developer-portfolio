"use client"

import {
  Activity,
  Clock,
  MessageSquare,
  Plus,
  Smartphone,
  User,
  Users,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useMemo, useState, type ReactNode } from "react"

import { HairlinePiece } from "@/components/hairline/HairlinePiece"
import { Phone, Rebuild } from "@/components/ui/hairline"
import { siteConfig } from "@/lib/site"

import { TechStackLogos } from "./TechStackLogos"

type ServiceCardData = {
  tag: string
  titleLead: string
  titleRest: string
  whatItIs: string[]
  whyUs: string[]
  figure: typeof Phone
  figureLabel: string
}

type ServiceModalData = {
  tag: ServiceCardData["tag"]
  title: string
  description: string
  bullets: Array<{ icon: ReactNode; text: string }>
  ctaLabel: string
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    tag: "Product",
    titleLead: "Build",
    titleRest: " web and mobile products that last",
    whatItIs: [
      "React, React Native, and Expo from day one.",
      "Hands-on delivery from idea to release.",
      "One developer who ships clearly and quickly.",
    ],
    whyUs: [
      "Built in Kathmandu. I own every detail.",
      "Direct communication and a high bar for the work.",
    ],
    figure: Phone,
    figureLabel:
      "A phone in layers: glass, board, battery, and shell. Moving across opens the gap.",
  },
  {
    tag: "Consulting",
    titleLead: "Improve",
    titleRest: " your existing app with focused support",
    whatItIs: [
      "React Native and Expo upgrades without disruption.",
      "Performance tuning and codebase stabilization.",
      "Feature delivery for brownfield products.",
      "Ongoing engineering support for your internal team.",
    ],
    whyUs: [
      "I stay practical, transparent, and accountable.",
      "I keep improving each project over the last one.",
    ],
    figure: Rebuild,
    figureLabel:
      "A tree of packages. The one under the pointer rises, and every package that depends on it follows.",
  },
]

const SERVICE_MODALS: ServiceModalData[] = [
  {
    tag: "Product",
    title: "From first idea to production release",
    description:
      "I started with freelance work in Kathmandu and have spent 3+ years shipping web and mobile apps with React, React Native, and Expo. You work with me from the first call through release.",
    bullets: [
      {
        icon: <Users className="h-4 w-4" />,
        text: "I stay involved from discovery to launch.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        text: "Reliable communication and consistent delivery cadence.",
      },
      {
        icon: <Smartphone className="h-4 w-4" />,
        text: "Web and mobile builds with React, React Native, and Expo.",
      },
      {
        icon: <MessageSquare className="h-4 w-4" />,
        text: "You talk directly to the person writing the code.",
      },
      {
        icon: <Smartphone className="h-4 w-4" />,
        text: "Strong ownership of code quality and shipped outcomes.",
      },
    ],
    ctaLabel: "Book a discovery call",
  },
  {
    tag: "Consulting",
    title: "Expert support for scaling products",
    description:
      "If your app is already live, I plug in where you need me most. From upgrades and performance work to new features, I help you move forward while keeping product quality high.",
    bullets: [
      {
        icon: <User className="h-4 w-4" />,
        text: "Flexible engineering support based on your current priorities.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        text: "Fast responses and practical decisions during implementation.",
      },
      {
        icon: <MessageSquare className="h-4 w-4" />,
        text: "Clear communication with the person doing the work.",
      },
      {
        icon: <Activity className="h-4 w-4" />,
        text: "Performance improvements, upgrades, and maintainable delivery.",
      },
    ],
    ctaLabel: "Book a discovery call",
  },
]

function ServiceModal({
  modal,
  onClose,
}: {
  modal: ServiceModalData
  onClose: () => void
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={modal.title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-2xl rounded-[2rem] bg-[#e6e6e6] p-8 text-foreground shadow-xl dark:bg-muted/45">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="pr-12 font-sans text-2xl font-semibold tracking-tight">
          {modal.title}
        </h3>

        <p className="mt-4 max-w-[60ch] font-sans text-sm leading-relaxed text-foreground/80">
          {modal.description}
        </p>

        <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
          {modal.bullets.map((b, idx) => (
            <li
              key={`${modal.tag}-bullet-${idx}`}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 inline-flex text-muted-foreground">
                {b.icon}
              </span>
              <span className="font-sans leading-relaxed">{b.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            {modal.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({
  tag,
  titleLead,
  titleRest,
  whatItIs,
  whyUs,
  figure,
  figureLabel,
  onOpen,
}: ServiceCardData & { onOpen: () => void }) {
  return (
    <article
      className="flex h-full cursor-pointer flex-col rounded-[2rem] bg-[#e6e6e6] p-8 transition-all duration-300 hover:shadow-md dark:bg-muted/45"
      onClick={onOpen}
    >
      <div className="flex flex-col gap-3 md:min-h-34">
        <HairlinePiece
          figure={figure}
          label={figureLabel}
          intensity={tag === "Product" ? 0.7 : 0.68}
          align="start"
          frame
          isolate
          className="max-w-[210px]"
        />
        <span className="hidden w-fit rounded-full bg-sky-100 px-3 py-1 font-sans text-xs font-medium text-sky-800 md:inline-flex dark:bg-[#ddfe7a]/60 dark:text-[#ccf959]">
          {tag}
        </span>
        <h3 className="font-sans text-2xl leading-tight font-semibold tracking-tight">
          <span className="text-sky-600 dark:text-[#ddfe7a]">{titleLead}</span>
          <span className="text-foreground">{titleRest}</span>
        </h3>
      </div>

      <div className="mt-6 hidden border-t border-foreground/20 pt-6 md:block dark:border-border/80">
        <p className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
          What it is
        </p>
        <ul className="mt-3 min-h-50 space-y-2 font-sans text-sm leading-relaxed text-muted-foreground">
          {whatItIs.map((line, i) => (
            <li key={`${tag}-what-${i}`}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 hidden border-t border-foreground/20 pt-6 md:block dark:border-border/80">
        <p className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Why me
        </p>
        <ul className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-muted-foreground">
          {whyUs.map((line, i) => (
            <li key={`${tag}-why-${i}`}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-start md:mt-auto md:pt-8">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:opacity-90"
          aria-label={`More about ${tag}`}
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
        >
          <Plus className="h-5 w-5 stroke-[2.5]" stroke="currentColor" />
        </button>
      </div>
    </article>
  )
}

const Services = () => {
  const [openTag, setOpenTag] = useState<ServiceCardData["tag"] | null>(null)

  const modalByTag = useMemo(() => {
    const map = new Map<ServiceCardData["tag"], ServiceModalData>()
    for (const m of SERVICE_MODALS) map.set(m.tag, m)
    return map
  }, [])

  const activeModal = openTag ? modalByTag.get(openTag) : null

  return (
    <>
      <TechStackLogos className="mb-10 sm:mb-12" />
      <section className="rounded-[2rem] bg-muted-foreground/10 p-6">
        <div className="mt-5 px-6 text-center sm:px-10">
          <span className="font-mono text-xs text-muted-foreground">
            Services
          </span>
          <h2 className="mt-2 font-sans text-2xl font-semibold">
            Built in Kathmandu, delivered everywhere.
          </h2>
          <h2 className="font-sans text-2xl font-semibold text-muted-foreground">
            Whether you are launching from scratch or improving an existing app,
            I build with React, React Native, and Expo.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
            {SERVICE_CARDS.map((card) => (
              <ServiceCard
                key={card.tag}
                {...card}
                onOpen={() => setOpenTag(card.tag)}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] bg-[#e6e6e6] p-8 dark:bg-muted/45">
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-10 w-auto">
                <Image
                  src="/aiStatementLight.webp"
                  alt="AI statement"
                  width={96}
                  height={40}
                  className="block h-10 w-auto dark:hidden"
                  priority={false}
                />
                <Image
                  src="/aiStatementDark.webp"
                  alt="AI statement"
                  width={96}
                  height={40}
                  className="hidden h-10 w-auto dark:block"
                  priority={false}
                />
              </div>
            </div>
            <span className="font-mono text-xs">MY STANCE ON AI</span>
            <p className="px-4 text-center font-sans text-sm leading-relaxed">
              I use AI as a supporting tool, not a replacement for engineering
              judgment. I still write with care, review thoroughly, and take
              full ownership of every line I ship.
            </p>
          </div>
        </div>

        {activeModal ? (
          <ServiceModal modal={activeModal} onClose={() => setOpenTag(null)} />
        ) : null}
      </section>
    </>
  )
}

export default Services
