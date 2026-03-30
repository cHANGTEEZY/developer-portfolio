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
    </LayoutWrapper>
  )
}

export default Work
