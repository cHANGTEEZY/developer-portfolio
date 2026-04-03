import type { Metadata } from "next"

import NotFoundPage from "@/components/not-found-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
  description: `The page you are looking for does not exist on ${siteConfig.name}.`,
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return <NotFoundPage />
}
