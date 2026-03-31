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
        <Hero />
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
