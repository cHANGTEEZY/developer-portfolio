"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

export interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setHeight(el.getBoundingClientRect().height)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div ref={containerRef} className="w-full font-sans">
      <div ref={ref} className="relative mx-auto pb-6 md:pb-10">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start pt-8 md:gap-10 md:pt-24"
          >
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:top-40 md:w-full md:max-w-sm lg:max-w-sm">
              <div className="relative h-10 w-full shrink-0 md:h-auto">
                <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-background md:left-3">
                  <div className="size-4 rounded-full border-2 border-primary/70 bg-background ring-4 ring-background dark:border-primary/80" />
                </div>
              </div>
              <h3 className="hidden pl-20 font-maru text-xl font-bold text-muted-foreground md:block md:pl-20 md:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-1 md:pl-4">
              <h3 className="mb-3 block text-left font-maru text-2xl font-bold text-muted-foreground md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height > 0 ? `${height}px` : "100%" }}
          className="pointer-events-none absolute top-0 left-8 w-0.5 overflow-hidden bg-linear-to-b from-transparent from-0% via-border via-50% to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-primary via-primary/80 to-primary/10"
          />
        </div>
      </div>
    </div>
  )
}
