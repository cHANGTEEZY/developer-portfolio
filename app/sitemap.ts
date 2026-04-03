import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ]
}
