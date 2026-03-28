// import Antigravity from "@/components/Antigravity"
import About from "@/components/about/About"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"

export default function HomePage() {
  return (
    <LayoutWrapper maxWidth="sm" padding="none">
      <Navbar />
      <div className="mt-24">
        <About />
      </div>
    </LayoutWrapper>
  )
}
