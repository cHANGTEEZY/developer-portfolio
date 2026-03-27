export type TooltipDecay = "immediate" | "delayed" | "persistent"

export const TOOLTIP_DECAY_MS: Record<
  TooltipDecay,
  { open: number; close: number }
> = {
  immediate: { open: 0, close: 0 },
  delayed: { open: 400, close: 200 },
  persistent: { open: 0, close: 0 },
}

/** Auto-dismiss for `mode="click"` after open. `null` = never (persistent). */
export const TOOLTIP_CLICK_AUTO_HIDE_MS: Record<TooltipDecay, number | null> = {
  immediate: 2000,
  delayed: 2000,
  persistent: null,
}
