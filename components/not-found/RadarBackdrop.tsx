import { cn } from "@/lib/utils"

type RadarBackdropProps = {
  className?: string
}

export function RadarBackdrop({ className }: RadarBackdropProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden text-white/10",
        className
      )}
      aria-hidden
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="175"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10 14"
        />
        <line
          x1="70"
          y1="70"
          x2="330"
          y2="330"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 12"
        />
        <line
          x1="330"
          y1="70"
          x2="70"
          y2="330"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 12"
        />
      </svg>
    </div>
  )
}
