"use client"

import { HairlinePiece } from "@/components/hairline/HairlinePiece"
import { Slow } from "@/components/ui/hairline"
import { cn } from "@/lib/utils"

type HeroLoaderProps = {
  /** While true the loader is shown; when false it fades out and stops intercepting the pointer. */
  visible: boolean
}

/**
 * Server-rendered placeholder for the hero scene. It is in the initial HTML, so
 * it is on screen before the three.js bundle and the model download finish.
 */
export function HeroLoader({ visible }: HeroLoaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <output aria-live="polite" className="flex flex-col items-center">
        <HairlinePiece
          figure={Slow}
          label="Loading the desk"
          play
          intensity={0.5}
          className="w-[clamp(140px,28vw,200px)]"
        />
        <span className="sr-only">Loading the 3D desk</span>
      </output>
    </div>
  )
}
