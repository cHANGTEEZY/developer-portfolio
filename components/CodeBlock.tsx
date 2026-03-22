import { TerminalErrorLine } from "./terminal/TerminalErrorLine"
import { TerminalPromptLine } from "./terminal/TerminalPromptLine"
import { TerminalWindow } from "./terminal/TerminalWindow"

export default function CodeBlock() {
  return (
    <TerminalWindow>
      <div className="flex flex-col items-baseline">
        <TerminalPromptLine command='locate "requested_resource"' />
        <TerminalErrorLine message="Path not found in current architecture." />
        <TerminalPromptLine command="checkout main" />
      </div>
    </TerminalWindow>
  )
}
