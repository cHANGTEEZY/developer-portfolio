"use client"

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

import ButtonContext, {
  type ButtonBehavior,
  ButtonContextType,
  useButtonContext,
} from "./button-context"
import {
  compositionButtonVariants,
  type CompositionButtonVariantProps,
} from "./button-styles"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading02Icon } from "@hugeicons/core-free-icons"

const ICON_SIZE_PX: Record<ButtonContextType["size"], number> = {
  small: 14,
  medium: 18,
  large: 22,
}

function behaviorButtonClasses(behavior: ButtonBehavior) {
  return cn(
    (behavior === "cta" || behavior === "ctaLift") && "group/button",
    (behavior === "lift" || behavior === "ctaLift") &&
      "motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-px"
  )
}

const Button = ({
  children,
  onClick,
  variant,
  size,
  disabled,
  loading,
  className,
  behavior,
  type = "button",
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode
  onClick?: () => void
  variant: NonNullable<CompositionButtonVariantProps["variant"]>
  size: NonNullable<CompositionButtonVariantProps["size"]>
  disabled?: boolean
  loading?: boolean
  className?: string
  /** Extra motion/feedback. `cta` nudges the icon right on hover (works best with a trailing `Button.Icon`). */
  behavior?: ButtonBehavior
  /** Use `submit` inside a `<form>` so Enter submits fields. */
  type?: "button" | "submit" | "reset"
  "aria-label"?: string
}) => {
  const resolvedBehavior: ButtonBehavior = behavior ?? "default"

  const contextValue: ButtonContextType = {
    onClick,
    variant,
    size,
    disabled,
    loading,
    behavior: resolvedBehavior,
  }

  return (
    <ButtonContext.Provider value={contextValue}>
      <button
        type={type}
        data-slot="composition-button"
        aria-busy={loading}
        aria-label={ariaLabel}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          compositionButtonVariants({ variant, size }),
          behaviorButtonClasses(resolvedBehavior),
          className
        )}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  )
}

export default Button

export type { ButtonBehavior }

export type ButtonTextProps = {
  children?: ReactNode
  className?: string
}

export const ButtonText = ({ children, className }: ButtonTextProps) => {
  return (
    <span
      data-slot="button-text"
      className={cn("min-w-0 truncate leading-none", className)}
    >
      {children}
    </span>
  )
}

export type ButtonIconProps = {
  children?: ReactNode
  className?: string
}

function mergeIconSize(
  icon: ReactElement<{ className?: string; size?: number }>,
  px: number
) {
  const { className } = icon.props
  return cloneElement(icon, {
    size: px,
    className: cn(className),
  })
}

function renderSizedIcon(children: ReactNode, px: number): ReactNode {
  const nodes = Children.toArray(children).filter((n) => n != null)
  if (nodes.length === 1 && isValidElement(nodes[0])) {
    return mergeIconSize(
      nodes[0] as ReactElement<{ className?: string; size?: number }>,
      px
    )
  }
  return children
}

export const ButtonIcon = ({ children, className }: ButtonIconProps) => {
  const { loading, size: buttonSize, behavior } = useButtonContext()
  const px = ICON_SIZE_PX[buttonSize]

  const ctaIconMotion =
    !loading &&
    (behavior === "cta" || behavior === "ctaLift") &&
    "motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover/button:translate-x-1"

  if (loading) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center text-current [&_svg]:pointer-events-none",
          className
        )}
        aria-hidden
      >
        <HugeiconsIcon
          icon={Loading02Icon}
          size={16}
          className="animate-spin"
        />
      </span>
    )
  }

  if (children == null) return null

  const content = renderSizedIcon(children, px)

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-current [&_svg]:pointer-events-none",
        ctaIconMotion,
        className
      )}
      aria-hidden
    >
      {content}
    </span>
  )
}
