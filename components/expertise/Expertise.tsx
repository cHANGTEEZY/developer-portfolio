import React from "react"
import AppLogosCarousel from "./Carousel"
import { EXPERTISE } from "./data"

const Expertise = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">
          EXPERTISE
        </span>
        <h3 className="text-2xl font-bold sm:text-3xl">Build like the best</h3>
      </div>

      <AppLogosCarousel />

      <div className="flex flex-col items-center justify-center space-y-10">
        <p className="flex max-w-[500px] px-6 text-center font-sans text-sm leading-relaxed sm:px-0">
          The world’s top brands — including the National Football League, Pizza
          Hut and Microsoft — use React Native for app development, and so do
          we. We started building with React Native and its ecosystem on day
          one, and we’ve been a trusted partner in the community ever since.
        </p>

        <span className="font-mono text-xs text-muted-foreground">
          FULL-STACK && CUSTOM
        </span>

        <div className="flex max-w-[500px] flex-wrap items-center justify-center gap-2">
          {EXPERTISE.map((expertise, index) => (
            <button
              key={index}
              className="rounded-lg border border-gray-800 px-2 py-1 font-sans text-sm transition-all duration-300 hover:scale-105"
            >
              {expertise}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-center font-mono text-sm text-muted-foreground">
            Need something special? <br />
            We’re always up for something new.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Expertise
