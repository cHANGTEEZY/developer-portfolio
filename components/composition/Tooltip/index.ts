import Tooltip, { TooltipTrigger, TooltipContent } from "./Tooltip"

export { Tooltip, TooltipTrigger, TooltipContent }
export type {
  TooltipContentProps,
  TooltipTriggerProps,
} from "./Tooltip"
export type { TooltipDecay } from "./tooltip-decay"
export type { TooltipInteraction } from "./tooltip-context"
export {
  TOOLTIP_CLICK_AUTO_HIDE_MS,
  TOOLTIP_DECAY_MS,
} from "./tooltip-decay"
export {
  tooltipContentVariants,
  type TooltipContentVariantProps,
} from "./tooltip-style"

const TooltipCompoundComponent = Tooltip as typeof Tooltip & {
  Trigger: typeof TooltipTrigger
  Content: typeof TooltipContent
}

TooltipCompoundComponent.Trigger = TooltipTrigger
TooltipCompoundComponent.Content = TooltipContent

export default TooltipCompoundComponent
