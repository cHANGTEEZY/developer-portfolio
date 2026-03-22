import { LayoutWrapper } from "@/components/shell"

export default function HomePage() {
  return (
    <LayoutWrapper
      as="main"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <p className="text-muted-foreground text-sm">Home</p>
    </LayoutWrapper>
  )
}
