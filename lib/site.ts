/**
 * Canonical site URL for metadata, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com).
 * On Vercel, VERCEL_URL is used as a fallback when the env var is unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (explicit) return explicit
  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "")
  if (vercel) return vercel.startsWith("http") ? vercel : `https://${vercel}`
  return "http://localhost:3000"
}

export const siteConfig = {
  name: "Sushank Gurung",
  email: "sushankgurung2002@gmail.com",
  /** Nepal mobile number, as dialed locally. */
  phone: "9841957899",
  phoneE164: "+9779841957899",
  whatsappUrl: "https://wa.me/9779841957899",
  description:
    "Kathmandu-based React and React Native developer. I build web and mobile products with React, React Native, Expo, and TypeScript.",
  keywords: [
    "React developer",
    "React Native",
    "Expo",
    "Kathmandu",
    "Sushank Gurung",
    "web development",
    "mobile app development",
  ],
  creator: "Sushank Gurung",
  authors: [
    {
      name: "Sushank Gurung",
      url: "https://www.linkedin.com/in/sushank-gurung/",
    },
  ],
  twitterHandle: "@SushankGurung",
  sameAs: [
    "https://github.com/cHANGTEEZY",
    "https://www.linkedin.com/in/sushank-gurung/",
    "https://x.com/SushankGurung",
  ],
  /** Open Graph / Twitter card image (public path). */
  defaultOgImage: "/og-default.png",
} as const

const PERSON_ID = "#person"
const WEBSITE_ID = "#website"

/** Person + WebSite JSON-LD for name signals (e.g. Google). */
export function siteJsonLd() {
  const url = getSiteUrl()
  const personUrl = `${url}${PERSON_ID}`
  const websiteUrl = `${url}${WEBSITE_ID}`
  const imageUrl = `${url}${siteConfig.defaultOgImage}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personUrl,
        name: siteConfig.name,
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        jobTitle: "React and React Native Developer",
        description: siteConfig.description,
        url,
        image: imageUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressCountry: "NP",
        },
        sameAs: [...siteConfig.sameAs],
      },
      {
        "@type": "WebSite",
        "@id": websiteUrl,
        url,
        name: siteConfig.name,
        publisher: { "@id": personUrl },
      },
    ],
  }
}
