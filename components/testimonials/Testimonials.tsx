import { TESTIMONIALS, type Testimonial } from "./data"

function TestimonialCard({ quote, name, role, company }: Testimonial) {
  return (
    <figure className="w-80 shrink-0 rounded-[2rem] border border-border bg-[#e6e6e6] p-6 dark:bg-muted/45">
      <span
        aria-hidden
        className="font-maru text-4xl leading-none text-primary select-none"
      >
        &ldquo;
      </span>
      <blockquote className="font-maru -mt-2 text-sm leading-relaxed text-foreground italic">
        {quote}
      </blockquote>
      <figcaption className="mt-4 border-t border-border pt-4">
        <p className="font-mono text-xs font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {role} · {company}
        </p>
      </figcaption>
    </figure>
  )
}

const Testimonials = () => {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS]
  const row2 = [...TESTIMONIALS].reverse()
  const row2doubled = [...row2, ...row2]

  return (
    <section
      aria-label="Client testimonials"
      className="pb-10 sm:pb-14 md:pb-10"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">
          TESTIMONIALS
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl">Words from the field</h2>
      </div>

      <div className="relative mt-10 w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent sm:w-32"
        />

        <div className="flex flex-col gap-4">
          <div className="inline-flex w-max animate-marquee items-start gap-4 will-change-transform motion-reduce:animate-none">
            {row1.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} {...t} />
            ))}
          </div>

          <div className="inline-flex w-max animate-marquee-reverse items-start gap-4 will-change-transform motion-reduce:animate-none">
            {row2doubled.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
