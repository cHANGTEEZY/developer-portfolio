"use client"

import { cn } from "@/lib/utils"

type LazyLoaderProps = {
  className?: string
}

export function LazyLoader({ className }: LazyLoaderProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading"
      className={cn(
        "flex min-h-[min(80vh,900px)] w-full items-center justify-center",
        className
      )}
    >
      <div
        className="size-9 h-10 w-10 animate-spin rounded-br-lg border-3 border-primary"
        aria-hidden
      />
    </div>
  )
}
