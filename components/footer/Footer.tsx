import Link from "next/link";

import { IsoCube } from "@/components/overflow/icons";
import { siteConfig } from "@/lib/site";

import {
  ArrowUpRight01Icon,
  Github01Icon,
  Linkedin01Icon,
  NewTwitterEllipseIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const social = [
  {
    href: "https://github.com/cHANGTEEZY",
    label: "Sushank Gurung on GitHub",
    icon: Github01Icon,
  },
  {
    href: "https://www.linkedin.com/in/sushank-gurung/",
    label: "Sushank Gurung on LinkedIn",
    icon: Linkedin01Icon,
  },
  {
    href: "https://x.com/SushankGurung",
    label: "Sushank Gurung on X",
    icon: NewTwitterEllipseIcon,
  },
] as const;

const Footer = () => {
  // Module scope runs before the Worker has a clock, so Date there is 1970.
  // eslint-disable-next-line react/purity -- must run during the request
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-muted px-5 py-10 md:px-2 md:pt-12 md:pb-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="max-w-sm space-y-3">
          <p className="font-maru flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
            <IsoCube className="h-9 w-9" decorative />
            Sushank Gurung
          </p>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            React and React Native development from Kathmandu. I work directly
            with clients to ship products that last.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Let&apos;s talk
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px"
            />
          </a>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
          <div className="space-y-3">
            <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Connect
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-mono text-sm text-foreground/90 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Social
            </p>
            <ul className="flex flex-wrap gap-2">
              {social.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground/80 transition-colors hover:border-primary/40 hover:bg-muted/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                  >
                    <HugeiconsIcon icon={icon} size={18} strokeWidth={1.75} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-muted pt-8 md:flex-row md:items-center md:justify-between md:gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {year} Sushank Gurung. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Kathmandu, Nepal · UTC+5:45
        </p>
      </div>
    </footer>
  );
};

export default Footer;
