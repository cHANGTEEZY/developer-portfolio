import { siteJsonLd } from "@/lib/site"

export default function JsonLd() {
  const data = siteJsonLd()
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
