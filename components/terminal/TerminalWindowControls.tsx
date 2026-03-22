export function TerminalWindowControls() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-2.5 shrink-0 rounded-full bg-neutral-600"
        />
      ))}
    </div>
  )
}
