"use client"

import type { ComponentType, CSSProperties } from "react"
import * as Figures from "@lucasmarkes/hairline/react"
import type { HairlineProps } from "@lucasmarkes/hairline/react"

/**
 * Hairline figures dressed in this site's tokens. A `style` you pass wins.
 * Docs: https://hairline.lucasmarkes.com
 */
const tokens = {
  "--hairline-plate": "var(--background)",
  "--hairline-hi": "var(--foreground)",
  "--hairline-edge": "var(--muted-foreground)",
  "--hairline-mid":
    "color-mix(in oklab, var(--muted-foreground) 55%, var(--background))",
  "--hairline-lo": "var(--border)",
} as CSSProperties

function withTheme(Figure: ComponentType<HairlineProps>, name: string) {
  function Themed({ style, ...props }: HairlineProps) {
    return <Figure style={{ ...tokens, ...style }} {...props} />
  }

  Themed.displayName = name
  return Themed
}

export const Basket = withTheme(Figures.Basket, "Basket")
export const Branches = withTheme(Figures.Branches, "Branches")
export const Cabinet = withTheme(Figures.Cabinet, "Cabinet")
export const Dish = withTheme(Figures.Dish, "Dish")
export const Drawer = withTheme(Figures.Drawer, "Drawer")
export const Elevator = withTheme(Figures.Elevator, "Elevator")
export const Exploded = withTheme(Figures.Exploded, "Exploded")
export const Format = withTheme(Figures.Format, "Format")
export const Hub = withTheme(Figures.Hub, "Hub")
export const Keyboard = withTheme(Figures.Keyboard, "Keyboard")
export const Laptop = withTheme(Figures.Laptop, "Laptop")
export const Lockers = withTheme(Figures.Lockers, "Lockers")
export const Loupe = withTheme(Figures.Loupe, "Loupe")
export const Padlock = withTheme(Figures.Padlock, "Padlock")
export const Patch = withTheme(Figures.Patch, "Patch")
export const Phone = withTheme(Figures.Phone, "Phone")
export const Phosphor = withTheme(Figures.Phosphor, "Phosphor")
export const Plot = withTheme(Figures.Plot, "Plot")
export const Plug = withTheme(Figures.Plug, "Plug")
export const Query = withTheme(Figures.Query, "Query")
export const Rail = withTheme(Figures.Rail, "Rail")
export const Rebuild = withTheme(Figures.Rebuild, "Rebuild")
export const Relay = withTheme(Figures.Relay, "Relay")
export const Riffle = withTheme(Figures.Riffle, "Riffle")
export const Router = withTheme(Figures.Router, "Router")
export const Settle = withTheme(Figures.Settle, "Settle")
export const Sieve = withTheme(Figures.Sieve, "Sieve")
export const Slow = withTheme(Figures.Slow, "Slow")
export const Stack = withTheme(Figures.Stack, "Stack")
export const Terminal = withTheme(Figures.Terminal, "Terminal")
export const Terrain = withTheme(Figures.Terrain, "Terrain")
export const Turntable = withTheme(Figures.Turntable, "Turntable")
export const Vault = withTheme(Figures.Vault, "Vault")
