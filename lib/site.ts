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
  name: "VBEE Studio",
  description:
    "Kathmandu-based React and React Native engineering studio. We partner with teams worldwide to ship durable products with React, React Native, and Expo.",
  keywords: [
    "React developer",
    "React Native",
    "Expo",
    "Kathmandu",
    "VBEE Studio",
    "Sushank Gurung",
    "web development",
    "mobile app development",
  ],
  creator: "Sushank Gurung",
  authors: [{ name: "Sushank Gurung", url: "https://www.linkedin.com/in/sushank-gurung/" }],
  twitterHandle: "@SushankGurung",
  sameAs: [
    "https://github.com/cHANGTEEZY",
    "https://www.linkedin.com/in/sushank-gurung/",
    "https://x.com/SushankGurung",
  ],
  /** Prefer a 1200×630 asset when you add one; this works as a social preview fallback. */
  defaultOgImage: "/profile-hero.png",
} as const

export function organizationJsonLd() {
  const url = getSiteUrl()
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    image: `${url}${siteConfig.defaultOgImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: siteConfig.sameAs,
  }
}
