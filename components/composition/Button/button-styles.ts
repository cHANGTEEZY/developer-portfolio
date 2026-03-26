import { cva, type VariantProps } from "class-variance-authority"

export const compositionButtonVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center font-dm font-semibold tracking-tight transition-[color,box-shadow,transform,background-color,border-color] outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "border border-primary/20 bg-primary text-primary-foreground shadow-[0_1px_0_0_oklch(0.45_0.12_16.9_/_0.35)] hover:bg-primary/92 hover:shadow-[0_2px_8px_-2px_oklch(0.45_0.18_16.9_/_0.45)]",
        secondary:
          "border border-border/80 bg-secondary/90 text-secondary-foreground shadow-sm hover:border-border hover:bg-secondary",
        ghost:
          "border border-transparent bg-transparent text-foreground hover:bg-muted/90 hover:text-foreground",
        destructive:
          "border border-destructive/15 bg-destructive text-white shadow-sm hover:bg-destructive/92",
        link: "h-auto min-h-0 border-0 bg-transparent px-0 py-0 font-semibold text-primary underline shadow-none hover:cursor-pointer hover:bg-transparent hover:underline active:scale-100",
      },
      size: {
        small:
          "gap-1.5 rounded-md px-3 text-xs [&_[data-slot=button-text]]:text-xs",
        medium:
          "gap-2 rounded-lg px-4 text-sm [&_[data-slot=button-text]]:text-sm",
        large:
          "gap-2.5 rounded-xl px-5 text-base [&_[data-slot=button-text]]:text-base",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        size: "small",
        class: "text-xs",
      },
      {
        variant: "link",
        size: "medium",
        class: "text-sm",
      },
      {
        variant: "link",
        size: "large",
        class: "text-base",
      },
      {
        variant: "link",
        class: "rounded-none",
      },
      {
        variant: ["primary", "secondary", "ghost", "destructive"],
        size: "small",
        class: "min-h-8 py-1.5",
      },
      {
        variant: ["primary", "secondary", "ghost", "destructive"],
        size: "medium",
        class: "min-h-10 py-2",
      },
      {
        variant: ["primary", "secondary", "ghost", "destructive"],
        size: "large",
        class: "min-h-12 py-2.5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

export type CompositionButtonVariantProps = VariantProps<
  typeof compositionButtonVariants
>
