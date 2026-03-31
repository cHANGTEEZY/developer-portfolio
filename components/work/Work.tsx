import Image from "next/image"

import { LayoutWrapper } from "../shell"
import { WORK } from "./data"

const Work = () => {
  return (
    <LayoutWrapper maxWidth="sm" padding="none">
      <section>
        <div className="flex items-center justify-between border-b border-muted py-10">
          <h1 className="font-maru text-3xl font-bold">Work</h1>
          <span className="font-mono text-xs text-muted-foreground">
            3 YEARS, 35+ Projects
          </span>
        </div>
        <div className="grid grid-cols-1 space-y-10 py-10">
          {WORK.map((work: (typeof WORK)[number]) => (
            <div key={work.title} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={40}
                  height={40}
                />
                <p className="font-sans text-sm">{work.title}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between border-t border-muted py-6">
          <h1 className="font-maru text-3xl font-bold">About</h1>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              HQ -&gt; KTM,NEPAL
            </p>
            <p className="self-end font-mono text-xs text-muted-foreground">
              UTC +5:45
            </p>
          </div>
        </div>
        <div className="space-y-5 px-5 py-6">
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            It started alone, with a laptop and a deadline. Before VBEE existed,
            there was just freelance work. Late nights in Kathmandu, shipping
            code for clients, solving problems solo.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            The work was good. But after a while it became clear that the best
            products are not built by one person. Nepal has a lot of talented
            developers. The idea was simple: bring the right people together,
            work with high standards, and build things that can hold up anywhere
            in the world.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            So in 2024, VBEE was founded right here in Kathmandu. We work with
            React, React Native, and Expo. These are not just tools we picked
            up. We genuinely enjoy working with them and have built our whole
            workflow around them.
          </p>
          <p className="max-w-[68ch] font-sans text-sm leading-7 tracking-[0.01em] text-foreground/90">
            Today we are a team of five. Small, focused, and hands on with every
            project we take. We keep things straightforward. Write good code,
            talk openly with clients, own our work fully, and always try to do
            better than the last time. Kathmandu is where we are. Everywhere else
            is where we deliver.
          </p>
        </div>
      </section>
    </LayoutWrapper>
  )
}

export default Work
