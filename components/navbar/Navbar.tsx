"use client"

import { ArrowLeft01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { IsoCube } from "@/components/overflow/icons"

type NavbarProps = {
  variant?: "default" | "contact"
}

const Navbar = ({ variant = "default" }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 sm:px-0">
      <Link
        href="/"
        className="font-maru inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        aria-label="Sushank Gurung — Home"
      >
        <IsoCube className="h-8 w-8" decorative />
        Sushank Gurung
      </Link>
      <div>
        {variant === "contact" ? (
          <>
            <h2 className="text-sm">Contact</h2>
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
            <h2 className="text-sm">Available for freelance</h2>
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
