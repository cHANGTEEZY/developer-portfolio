type TerminalPromptLineProps = {
  command: string
}

export function TerminalPromptLine({ command }: TerminalPromptLineProps) {
  return (
    <p className="m-0 leading-relaxed">
      <span className="text-[#D97706]">$</span>
      <span className="text-white"> {command}</span>
    </p>
  )
}
