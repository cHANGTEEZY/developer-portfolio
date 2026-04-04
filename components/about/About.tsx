"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { useRouter } from "next/navigation"

import Button from "../composition/Button"
import Tooltip, {
  TooltipContent,
  TooltipTrigger,
} from "../composition/Tooltip/Tooltip"
import Image from "next/image"

const About = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-[34px]">
      <Image src={"/react10.png"} alt="React logo" width={100} height={100} />

      <header className="max-w-2xl space-y-8">
        <h2 className="text-center font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          React & React Native <br /> Engineering Studio
        </h2>

        <p className="max-w-[500px] px-6 text-center font-mono text-sm leading-relaxed text-muted-foreground sm:px-0">
          VBEE Studio is a Kathmandu-based React & React Native engineering
          studio. We partner with the world&apos;s top companies to help them
          unlock the full potential of React, React Native and Expo.
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
              onClick={() =>
                navigator.clipboard.writeText("vbee-studio@sushankgurung.com")
              }
              className="cursor-pointer text-sm italic"
            >
              vbee-studio@sushankgurung.com
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
