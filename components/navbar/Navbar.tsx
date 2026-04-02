"use client"

import {
  ArrowLeft01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"

const logoClass = "size-[60px] object-contain"

type NavbarProps = {
  variant?: "default" | "contact"
}

const Navbar = ({ variant = "default" }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 sm:px-0">
      <Link
        href="/"
        className="relative inline-block size-[60px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="VBEE Studio — Home"
      >
        <Image
          src="/VBEE_dark.png"
          alt=""
          width={60}
          height={60}
          className={`${logoClass} dark:hidden`}
        />
        <Image
          src="/VBee_white.png"
          alt=""
          width={60}
          height={60}
          aria-hidden
          className={`${logoClass} hidden dark:block`}
        />
      </Link>
      <div>
        {variant === "contact" ? (
          <>
            <h2 className="text-sm">Contact VBEE</h2>
            <p>
              <Link
                href="/"
                className="group flex items-center justify-end gap-0.5 text-sm text-gray-400 transition-colors hover:text-foreground"
              >
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  size={14}
                  className="transition-transform group-hover:-translate-x-px"
                />
                Home
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-sm">Need a Development Partner?</h2>
            <p>
              <Link
                href="/contact"
                className="flex items-center justify-end text-sm text-gray-400"
              >
                Let&apos;s Talk{" "}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
              </Link>
            </p>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
