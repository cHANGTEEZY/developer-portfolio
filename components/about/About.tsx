"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

import Button from "../composition/Button"
import Tooltip, {
  TooltipContent,
  TooltipTrigger,
} from "../composition/Tooltip/Tooltip"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="max-w-2xl space-y-8">
        <h1 className="text-center font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          React & React Native <br /> Engineering Studio
        </h1>

        <p className="text-center font-mono text-lg leading-relaxed text-muted-foreground">
          VBEE Studio is a Montreal-based React Native engineering studio. We
          partner with the world&apos;s top companies to help them unlock the
          full potential of React, React Native and Expo.
        </p>
      </header>

      <Button
        onClick={() => console.log("clicked")}
        variant="primary"
        size="medium"
        loading={false}
        behavior="ctaLift"
        className="mt-8 cursor-pointer"
      >
        <Button.Text>Book a Discovery Call</Button.Text>
        <Button.Icon>
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </Button.Icon>
      </Button>

      <Tooltip>
        <TooltipTrigger mode="click" decay="immediate">
          <button
            onClick={() => navigator.clipboard.writeText("sales@vbee.studio")}
            className="cursor-pointer"
          >
            sales@vbee.studio
          </button>
        </TooltipTrigger>
        <TooltipContent variant="default" size="sm" position="bottom">
          &quot;copied&quot;
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default About
