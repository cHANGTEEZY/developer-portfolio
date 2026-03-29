import Image from "next/image"

import { logos } from "@/public/logos"

const LOGO_SIZE = 112

const AppLogosCarousel = () => {
  const track = [...logos, ...logos]

  return (
    <div className="relative w-full min-w-0 overflow-hidden py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-2 shadow-[inset_20px_0_24px_-8px_var(--background),inset_-20px_0_24px_-8px_var(--background)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-3 w-14 bg-gradient-to-r from-background to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-3 w-14 bg-gradient-to-l from-background to-transparent sm:w-24"
      />

      <div className="inline-flex w-max max-w-none animate-marquee items-center gap-5 will-change-transform motion-reduce:animate-none">
        {track.map((logo, index) => (
          <Image
            key={`logo-${index}`}
            src={logo}
            alt=""
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="size-28 shrink-0 object-contain"
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}

export default AppLogosCarousel
