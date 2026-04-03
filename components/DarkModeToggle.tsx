"use client"

import { useTheme } from "next-themes"
import { startTransition, useEffect, useState } from "react"

import { Switch } from "@/components/animate-ui/components/base/switch"

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    startTransition(() => setMounted(true))
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <div
      className="pointer-events-auto fixed right-6 bottom-6 z-50 flex items-center justify-center sm:right-8 sm:bottom-8"
      aria-label="Toggle color theme"
    >
      <div className="origin-center scale-[1.35] rotate-90 sm:scale-150">
        <Switch
          className="h-6 w-11"
          pressedWidth={20}
          thumbTransition={{
            type: "spring",
            stiffness: 120,
            damping: 22,
            mass: 1.15,
          }}
          checked={mounted ? isDark : false}
          onCheckedChange={(next) => setTheme(next ? "dark" : "light")}
        />
      </div>
    </div>
  )
}

export default DarkModeToggle
