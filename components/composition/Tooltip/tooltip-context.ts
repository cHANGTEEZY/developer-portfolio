import {
  createContext,
  useContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react"

import type { TooltipDecay } from "./tooltip-decay"

export type TooltipInteraction = {
  mode: "hover" | "click"
  decay: TooltipDecay
}

export type TooltipContextType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  rootRef: RefObject<HTMLDivElement | null>
  interaction: TooltipInteraction
  setInteraction: Dispatch<SetStateAction<TooltipInteraction>>
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)
  if (!context) {
    throw new Error("useTooltipContext must be used within a TooltipProvider")
  }
  return context
}

export default TooltipContext
