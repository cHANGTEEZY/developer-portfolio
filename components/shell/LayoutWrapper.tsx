import {
  createElement,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

const maxWidthMap = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const

const paddingMap = {
  none: "",
  comfortable: "px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10",
  tight: "px-3 py-4 sm:px-4 sm:py-6",
} as const

export type LayoutWrapperMaxWidth = keyof typeof maxWidthMap
export type LayoutWrapperPadding = keyof typeof paddingMap

type LayoutWrapperOwnProps = {
  as?: ElementType
  maxWidth?: LayoutWrapperMaxWidth
  padding?: LayoutWrapperPadding
  className?: string
  children: ReactNode
}

export type LayoutWrapperProps = LayoutWrapperOwnProps &
  Omit<HTMLAttributes<HTMLElement>, "className" | "children">

export function LayoutWrapper({
  as = "div",
  maxWidth = "7xl",
  padding = "comfortable",
  className,
  children,
  ...rest
}: LayoutWrapperProps) {
  return createElement(
    as,
    {
      className: cn(
        "mx-auto h-full w-full min-w-0",
        maxWidthMap[maxWidth],
        paddingMap[padding],
        className
      ),
      ...rest,
    },
    children
  )
}
