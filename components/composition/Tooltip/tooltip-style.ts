import { cva, type VariantProps } from "class-variance-authority"

export const tooltipContentVariants = cva(
  "absolute z-50 w-max min-w-0 max-w-[min(20rem,calc(100vw-1.5rem))] max-h-[min(50vh,24rem)] overflow-y-auto overflow-x-hidden whitespace-normal break-words border font-dm antialiased opacity-0 shadow-lg transition-opacity duration-150 ease-out data-[state=closed]:duration-0 data-[state=open]:pointer-events-auto data-[state=open]:opacity-100 data-[state=open]:duration-150",
  {
    variants: {
      position: {
        /** Tooltip above the trigger */
        top: "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
        /** Tooltip below the trigger */
        bottom: "top-full left-1/2 mt-1.5 -translate-x-1/2",
        /** Tooltip to the left of the trigger */
        left: "right-full top-1/2 mr-1.5 -translate-y-1/2",
        /** Tooltip to the right of the trigger */
        right: "left-full top-1/2 ml-1.5 -translate-y-1/2",
      },
      variant: {
        default:
          "border-border/80 bg-popover text-popover-foreground shadow-black/10 dark:shadow-black/40",
        muted:
          "border-transparent bg-muted text-muted-foreground shadow-md dark:bg-muted/95",
        inverted:
          "border-transparent bg-foreground text-background shadow-lg",
      },
      size: {
        sm: "rounded-md px-2.5 py-1 text-xs leading-snug",
        md: "rounded-lg px-3 py-1.5 text-sm leading-normal",
      },
    },
    defaultVariants: {
      position: "bottom",
      variant: "default",
      size: "sm",
    },
  }
)

export type TooltipContentVariantProps = VariantProps<
  typeof tooltipContentVariants
>
