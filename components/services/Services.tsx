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

type ServiceCardData = {
  tag: string
  titleLead: string
  titleRest: string
  whatItIs: string[]
  whyUs: string[]
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
    titleRest: " the best app, from scratch",
    whatItIs: [
      "Design engineering oriented.",
      "The perfect foundation for a company going mobile.",
      "Battle tested workflow powering apps for the world's best companies.",
    ],
    whyUs: [
      "Our apps are used by millions of people across the globe.",
      "We are recommended by Expo.",
    ],
  },
  {
    tag: "Consulting",
    titleLead: "Extend",
    titleRest: " your team, upgrade your app",
    whatItIs: [
      "Enterprise oriented workflow.",
      "SDK building and maintenance.",
      "Expo, React Native upgrades.",
      "Custom native modules.",
      "Brownfield work.",
    ],
    whyUs: [
      "React Native Core Contributors.",
      "10 years of React Native specialization.",
    ],
  },
]

const SERVICE_MODALS: ServiceModalData[] = [
  {
    tag: "Product",
    title: "From git init to the app stores",
    description:
      "With nearly a decade of experience working with the world's top tech companies, we've perfected an efficient and battle-tested workflow that enables us to develop superior applications faster.",
    bullets: [
      {
        icon: <Users className="h-4 w-4" />,
        text: "Two engineers, billed monthly.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        text: "Available 10am–5pm / EST timezone.",
      },
      {
        icon: <Smartphone className="h-4 w-4" />,
        text: "135 hours of development, management and QA per month.",
      },
      {
        icon: <MessageSquare className="h-4 w-4" />,
        text: "Direct communication with the engineers via Slack.",
      },
      {
        icon: <Smartphone className="h-4 w-4" />,
        text: "New applications built with React Native + Expo.",
      },
    ],
    ctaLabel: "Book a discovery call",
  },
  {
    tag: "Consulting",
    title: "Consulting",
    description:
      "With React Native core contributors on our team, our deep technical expertise enables companies to build the best mobile products through focused consulting, performance optimization, and strategic engineering support.",
    bullets: [
      {
        icon: <User className="h-4 w-4" />,
        text: "One engineer from our consulting team, billed hourly.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        text: "Available 10am–5pm / EST timezone.",
      },
      {
        icon: <MessageSquare className="h-4 w-4" />,
        text: "Direct communication with the engineers via Slack.",
      },
      {
        icon: <Activity className="h-4 w-4" />,
        text: "Performance audits, targeted support, native capabilities etc…",
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
          <button
            type="button"
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            {modal.ctaLabel}
          </button>
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
  onOpen,
}: ServiceCardData & { onOpen: () => void }) {
  return (
    <article
      className="flex h-full cursor-pointer flex-col rounded-[2rem] bg-[#e6e6e6] p-8 transition-all duration-300 hover:shadow-md dark:bg-muted/45"
      onClick={onOpen}
    >
      <div className="flex flex-col gap-3 md:min-h-34">
        <span className="hidden w-fit rounded-full bg-sky-100 px-3 py-1 font-sans text-xs font-medium text-sky-800 md:inline-flex dark:bg-[#ddfe7a]/60 dark:text-[#ccf959]">
          {tag}
        </span>
        <h3 className="font-sans text-2xl leading-tight font-semibold tracking-tight">
          <span className="text-sky-600 dark:text-[#ddfe7a]">{titleLead}</span>
          <span className="text-foreground">{titleRest}</span>
        </h3>
      </div>

      <div className="mt-6 hidden border-t border-border/80 pt-6 md:block">
        <p className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
          What it is
        </p>
        <ul className="mt-3 min-h-50 space-y-2 font-sans text-sm leading-relaxed text-muted-foreground">
          {whatItIs.map((line, i) => (
            <li key={`${tag}-what-${i}`}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 hidden border-t border-border/80 pt-6 md:block">
        <p className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Why us
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
    <section className="rounded-[2rem] bg-muted-foreground/10 p-6">
      <div className="mt-5 px-10">
        <span className="font-mono text-xs text-muted-foreground">
          Services
        </span>
        <h2 className="mt-2 font-sans text-2xl font-semibold">
          Greenfield, brownfield, we do it all.
        </h2>
        <h2 className="font-sans text-2xl font-semibold text-muted-foreground">
          Wheather you are building a new application or need support on an
          existing one, we are here to help.
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
                src="/VBEE_dark.png"
                alt="VBEE"
                width={54}
                height={40}
                className="block h-10 w-auto dark:hidden"
                priority={false}
              />
              <Image
                src="/VBee_white.png"
                alt="VBEE"
                width={54}
                height={40}
                className="hidden h-10 w-auto dark:block"
                priority={false}
              />
            </div>

            <span className="font-mono text-xs text-muted-foreground">X</span>

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
          <span className="font-mono text-xs">OUR STANCE ON AI</span>
          <p className="px-4 text-center font-sans text-sm leading-relaxed">
            We use Agentic AI technology to help us write better code, faster.
            It is the perfect co-pilot, pairing with our taste and expertise.
            While it helps us produce the code, we take full ownership of
            whatever we ship. We have not outsourced our work to machines, nor
            our judgment. Careful review and skillful training of both teammates
            and agents is, for us, an integral part of the path forward in the
            AI era.
          </p>
        </div>
      </div>

      {activeModal ? (
        <ServiceModal modal={activeModal} onClose={() => setOpenTag(null)} />
      ) : null}
    </section>
  )
}

export default Services
