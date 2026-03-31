import About from "@/components/about/About"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"
import Hero from "@/components/hero/Hero"
import Expertise from "@/components/expertise/Expertise"
import Footer from "@/components/footer/Footer"
import Work from "@/components/work/Work"
import Services from "@/components/services/Services"

export default function HomePage() {
  return (
    <>
      <LayoutWrapper maxWidth="sm" padding="none">
        <Navbar />
      </LayoutWrapper>
      <LayoutWrapper maxWidth="full" padding="none">
        <div className="relative h-[min(80vh,900px)] w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <LayoutWrapper
              maxWidth="full"
              padding="none"
              className="flex h-full min-w-0 items-center"
            >
              <div
                className="h-full w-full max-w-screen-sm shrink-0"
                aria-hidden
              />
            </LayoutWrapper>
          </div>
          <LayoutWrapper
            maxWidth="sm"
            padding="none"
            className="relative z-10 h-full min-w-0"
          >
            <Hero />
          </LayoutWrapper>
        </div>
      </LayoutWrapper>
      <LayoutWrapper maxWidth="sm" padding="none">
        <div className="mt-12">
          <About />
        </div>
        <div className="mt-32">
          <Services />
        </div>
        <div className="mt-32">
          <Expertise />
        </div>
      </LayoutWrapper>
      <LayoutWrapper maxWidth="full" padding="tight">
        <div className="rounded-3xl bg-muted/30">
          <Work />
        </div>
      </LayoutWrapper>
      <LayoutWrapper maxWidth="sm" padding="none">
        <Footer />
      </LayoutWrapper>
    </>
  )
}
