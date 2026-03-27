"use client"

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

import TooltipContext, {
  type TooltipInteraction,
  useTooltipContext,
} from "./tooltip-context"
import {
  TOOLTIP_CLICK_AUTO_HIDE_MS,
  TOOLTIP_DECAY_MS,
  type TooltipDecay,
} from "./tooltip-decay"
import {
  tooltipContentVariants,
  type TooltipContentVariantProps,
} from "./tooltip-style"

const DEFAULT_INTERACTION: TooltipInteraction = {
  mode: "click",
  decay: "immediate",
}

type TooltipProps = {
  children?: ReactNode
  className?: string
}

const Tooltip = ({ children, className }: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const [interaction, setInteraction] =
    useState<TooltipInteraction>(DEFAULT_INTERACTION)
  const rootRef = useRef<HTMLDivElement>(null)
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const timing = TOOLTIP_DECAY_MS[interaction.decay]

  const clearTimers = useCallback(() => {
    if (openTimer.current != null) {
      clearTimeout(openTimer.current)
      openTimer.current = null
    }
    if (closeTimer.current != null) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  useEffect(() => () => clearTimers(), [clearTimers])

  useEffect(() => {
    if (!open || interaction.mode !== "click") return
    const ms = TOOLTIP_CLICK_AUTO_HIDE_MS[interaction.decay]
    if (ms == null) return
    const id = window.setTimeout(() => setOpen(false), ms)
    return () => window.clearTimeout(id)
  }, [open, interaction.mode, interaction.decay])

  const handleRootMouseEnter = useCallback(() => {
    if (interaction.mode !== "hover") return
    clearTimers()
    if (interaction.decay === "persistent") {
      setOpen(true)
      return
    }
    openTimer.current = setTimeout(() => {
      setOpen(true)
    }, timing.open)
  }, [interaction.mode, interaction.decay, timing.open, clearTimers])

  const handleRootMouseLeave = useCallback(() => {
    if (interaction.mode !== "hover") return
    clearTimers()
    if (interaction.decay === "persistent") return
    closeTimer.current = setTimeout(() => {
      setOpen(false)
    }, timing.close)
  }, [interaction.mode, interaction.decay, timing.close, clearTimers])

  useEffect(() => {
    if (!open) return

    const needsOutsideDismiss =
      interaction.mode === "click" ||
      (interaction.mode === "hover" && interaction.decay === "persistent")

    if (!needsOutsideDismiss) return

    const onDocMouseDown = (e: MouseEvent) => {
      const root = rootRef.current
      if (root && !root.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onDocMouseDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, interaction.mode, interaction.decay])

  return (
    <TooltipContext.Provider
      value={{ open, setOpen, rootRef, interaction, setInteraction }}
    >
      <div
        ref={rootRef}
        className={cn("relative inline-block w-fit max-w-full", className)}
        onMouseEnter={
          interaction.mode === "hover" ? handleRootMouseEnter : undefined
        }
        onMouseLeave={
          interaction.mode === "hover" ? handleRootMouseLeave : undefined
        }
      >
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

export default Tooltip

export type TooltipTriggerProps = {
  children?: ReactNode
  mode?: "hover" | "click"
  decay?: TooltipDecay
  className?: string
}

export const TooltipTrigger = ({
  children,
  mode = "click",
  decay = "immediate",
  className,
}: TooltipTriggerProps) => {
  const { open, setOpen, setInteraction } = useTooltipContext()
  const clickDelayedOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  useLayoutEffect(() => {
    setInteraction({ mode, decay })
  }, [mode, decay, setInteraction])

  useEffect(
    () => () => {
      if (clickDelayedOpenTimer.current != null) {
        clearTimeout(clickDelayedOpenTimer.current)
      }
    },
    []
  )

  if (mode === "hover") {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      className={className}
      onClick={(e) => {
        e.stopPropagation()
        if (decay === "delayed") {
          if (clickDelayedOpenTimer.current != null) {
            clearTimeout(clickDelayedOpenTimer.current)
            clickDelayedOpenTimer.current = null
            return
          }
          if (open) {
            setOpen(false)
            return
          }
          clickDelayedOpenTimer.current = setTimeout(() => {
            setOpen(true)
            clickDelayedOpenTimer.current = null
          }, TOOLTIP_DECAY_MS.delayed.open)
          return
        }
        setOpen((was) => !was)
      }}
    >
      {children}
    </div>
  )
}

export type TooltipContentProps = {
  children?: ReactNode
  className?: string
} & TooltipContentVariantProps

export const TooltipContent = ({
  children,
  className,
  variant,
  size,
  position,
}: TooltipContentProps) => {
  const { open } = useTooltipContext()
  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        tooltipContentVariants({ variant, size, position }),
        className
      )}
    >
      {children}
    </div>
  )
}

export type { TooltipDecay }
