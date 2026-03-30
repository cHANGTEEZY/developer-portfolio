import Link from "next/link"

import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterEllipseIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const Footer = () => {
  return (
    <footer className="my-4 flex items-center justify-between gap-2 rounded-full bg-muted-foreground/10 p-2">
      <span className="rounded-full bg-muted-foreground/10 p-2">
        &copy;{new Date().getFullYear()} VBEE Studio
      </span>

      <Link href="https://github.com/cHANGTEEZY" target="_blank">
        <HugeiconsIcon icon={Github01Icon} className="cursor-pointer" />
      </Link>
      <Link href="https://www.linkedin.com/in/sushank-gurung/" target="_blank">
        <HugeiconsIcon icon={Linkedin01Icon} className="cursor-pointer" />
      </Link>
      <Link href="https://x.com/SushankGurung" target="_blank">
        <HugeiconsIcon
          icon={NewTwitterEllipseIcon}
          className="cursor-pointer"
        />
      </Link>
    </footer>
  )
}

export default Footer
