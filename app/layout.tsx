import { Geist, JetBrains_Mono, DM_Sans, Comic_Neue, Kosugi_Maru } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
