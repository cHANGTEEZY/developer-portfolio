"use client"

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"

const logoClass = "size-[60px] object-contain"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <span className="relative inline-block size-[60px] shrink-0">
        <Image
          src="/VBEE_dark.png"
          alt="VBEE Logo"
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
      </span>
      <div>
        <h2 className="text-sm">Need a Development Partner?</h2>
        <p>
          <Link
            href={"/contact"}
            className="flex items-center justify-end text-sm text-gray-400"
          >
            Let&apos;s Talk{" "}
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </Link>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
