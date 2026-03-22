type TerminalErrorLineProps = {
  message: string
}

export function TerminalErrorLine({ message }: TerminalErrorLineProps) {
  return (
    <p className="m-0 leading-relaxed text-[#F87171]">ERROR: {message}</p>
  )
}
