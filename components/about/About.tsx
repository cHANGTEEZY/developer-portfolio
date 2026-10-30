"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { useRouter } from "next/navigation"

import Button from "../composition/Button"
import Tooltip, {
  TooltipContent,
  TooltipTrigger,
} from "../composition/Tooltip/Tooltip"

import { IsoCode } from "@/components/overflow/icons"
import { siteConfig } from "@/lib/site"

const About = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-[34px]">
      <IsoCode className="h-24 w-24" />

      <header className="max-w-2xl space-y-8">
        <h2 className="text-center font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          React & React Native <br /> Developer
        </h2>

        <p className="max-w-[500px] px-6 text-center font-mono text-sm leading-relaxed text-muted-foreground sm:px-0">
          I&apos;m Sushank Gurung, a developer based in Kathmandu. I build web
          and mobile products with React, React Native, and Expo.
        </p>
      </header>

      <div className="flex flex-col items-center justify-center gap-3">
        <Button
          onClick={() => router.push("/contact")}
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

        <Tooltip>
          <TooltipTrigger mode="click" decay="immediate">
            <button
              onClick={() => navigator.clipboard.writeText(siteConfig.email)}
              className="cursor-pointer text-sm italic"
            >
              {siteConfig.email}
            </button>
          </TooltipTrigger>
          <TooltipContent variant="default" size="sm" position="bottom">
            &quot;copied&quot;
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default About
