"use client"

import dynamic from "next/dynamic"
import { type ComponentType, type ReactNode } from "react"

export type LazyChunkLoader<P extends object> = () => Promise<{
  default: ComponentType<P>
}>

export type LazyChunkProps<P extends object> = {
  /**
   * Dynamic import of a module with a default export. Prefer a stable reference
   * (e.g. `const loadHeavy = () => import("./Heavy")` at module scope) so the
   * chunk is not recreated every render.
   */
  loader: LazyChunkLoader<P>
  /** Shown while the chunk loads (maps to `next/dynamic` `loading`). */
  loading: ReactNode
  /** Passed through to `next/dynamic` (default `true`). */
  ssr?: boolean
} & P

const chunkCache = new WeakMap<object, ComponentType<object>>()

function getLazyChunk<P extends object>(
  loader: LazyChunkLoader<P>,
  loading: ReactNode,
  ssr: boolean
): ComponentType<P> {
  const cached = chunkCache.get(loader)
  if (cached) return cached as ComponentType<P>

  const Component = dynamic(() => loader(), {
    loading: () => <>{loading}</>,
    ssr,
  })
  chunkCache.set(loader, Component as ComponentType<object>)
  return Component
}

/**
 * Code-splits a component via `next/dynamic`. Use this when you want a separate
 * JS bundle; use LazyMount when you only want to defer mounting until the
 * block is near the viewport (combine both when you need both).
 */
export function LazyChunk<P extends object>({
  loader,
  loading,
  ssr = true,
  ...props
}: LazyChunkProps<P>) {
  const Component = getLazyChunk(loader, loading, ssr)

  // Loader identity is cached outside render, so the chunk component is stable.
  // oxlint-disable-next-line react/static-components
  return <Component {...(props as P)} />
}
