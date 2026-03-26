"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

import Button from "../composition/Button"

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl space-y-4">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          React Native <br /> Engineering Studio
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground">
          App&Flow is a Montreal-based React Native engineering studio. We
          partner with the world&apos;s top companies to help them unlock the
          full potential of React Native and Expo.
        </p>
      </header>

      <Button
        onClick={() => console.log("clicked")}
        variant="secondary"
        size="medium"
        disabled={false}
        loading={false}
      >
        <Button.Text>Book a Discovery Call</Button.Text>
        <Button.Icon>
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </Button.Icon>
      </Button>
    </div>
  )
}

export default About
