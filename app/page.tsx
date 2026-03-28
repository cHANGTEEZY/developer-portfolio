// import Antigravity from "@/components/Antigravity"
import About from "@/components/about/About"
import Hero from "@/components/hero/Hero"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"

export default function HomePage() {
  return (
    <LayoutWrapper maxWidth="sm" padding="none">
      <Navbar />
      <Hero />
      <div className="mt-12">
        <About />
      </div>
    </LayoutWrapper>
  )
}
