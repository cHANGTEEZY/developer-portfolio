"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 sm:px-0">
      <Link
        href="/"
        className="font-maru inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        aria-label="Sushank Gurung — Home"
      >
        Sushank Gurung
      </Link>
      <div>
        <h2 className="text-sm">Available for freelance</h2>
        <p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end text-sm text-gray-400"
          >
            Let&apos;s Talk{" "}
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
