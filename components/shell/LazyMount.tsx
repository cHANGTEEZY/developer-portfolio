"use client"

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

export type LazyMountProps = {
  children: ReactNode
  /** Shown until the sentinel enters the viewport (or if IntersectionObserver is unavailable). */
  fallback: ReactNode
  /** Passed to IntersectionObserver; e.g. preload before visible. */
  rootMargin?: string
  threshold?: number | number[]
  /** When true, stop observing after the first time the sentinel intersects. */
  once?: boolean
  className?: string
}

/**
 * Defers mounting `children` until the wrapper is near or inside the viewport.
 * Pair with `next/dynamic` or `React.lazy` if you also need a separate JS chunk.
 *
 * @example
 * const Heavy = dynamic(() => import("./Heavy"), { loading: () => <Skeleton /> })
 * <LazyMount fallback={<Skeleton />}><Heavy /></LazyMount>
 */
export function LazyMount({
  children,
  fallback,
  rootMargin = "200px",
  threshold = 0,
  once = true,
  className,
}: LazyMountProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) {
          return
        }
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setVisible(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return (
    <div ref={ref} className={cn("min-w-0", className)}>
      {visible ? children : fallback}
    </div>
  )
}
