import Antigravity from "@/components/Antigravity"
import { LayoutWrapper } from "@/components/shell"

export default function HomePage() {
  return (
    <LayoutWrapper
      maxWidth="full"
      className="absolute flex h-screen flex-1 border"
    >
      <Antigravity color="red" />
    </LayoutWrapper>
  )
}
