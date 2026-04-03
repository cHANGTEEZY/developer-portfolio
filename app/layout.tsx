import { Geist, JetBrains_Mono, DM_Sans, Comic_Neue, Kosugi_Maru } from "next/font/google"
import type { Metadata } from "next"

import JsonLd from "@/components/seo/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"
import { getSiteUrl, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import "./globals.css"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — React & React Native engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  icons: {
    icon: [{ url: "/VBEE_dark.png", type: "image/png" }],
    apple: [{ url: "/VBEE_dark.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — React & React Native engineering`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        alt: `${siteConfig.name} — portfolio and services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — React & React Native engineering`,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  /** Resolves to the current pathname for each route when metadataBase is set */
  alternates: { canonical: "./" },
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic",
})

const kosugiMaru = Kosugi_Maru({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-maru",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        dmSans.variable,
        jetbrainsMono.variable,
        comicNeue.variable,
        kosugiMaru.variable
      )}
    >
      <body className={cn(fontSans.className, "font-maru")}>
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
