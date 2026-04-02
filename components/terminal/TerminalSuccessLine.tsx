type TerminalSuccessLineProps = {
  message: string
}

export function TerminalSuccessLine({ message }: TerminalSuccessLineProps) {
  return (
    <p className="m-0 leading-relaxed text-[#4ADE80]">OK: {message}</p>
  )
}
