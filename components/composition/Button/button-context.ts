"use client"

import { createContext, useContext } from "react"

export type ButtonBehavior = "default" | "cta" | "lift" | "ctaLift"

export type ButtonContextType = {
  onClick?: () => void
  variant: "primary" | "secondary" | "ghost" | "destructive" | "link"
  size: "small" | "medium" | "large"
  disabled?: boolean
  loading?: boolean
  behavior: ButtonBehavior
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined)

export const useButtonContext = () => {
  const context = useContext(ButtonContext)
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider")
  }
  return context
}

export default ButtonContext
