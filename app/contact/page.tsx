import type { Metadata } from "next"

import Contact from "@/components/Contact/Contact"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Ask about a React, React Native, or Expo project.`,
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for React and React Native development.`,
    url: "/contact",
  },
  twitter: {
    title: `Contact — ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for React and React Native development.`,
  },
}

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <LayoutWrapper maxWidth="sm" padding="none">
          <Navbar variant="contact" />
        </LayoutWrapper>
        <LayoutWrapper maxWidth="sm" padding="comfortable">
          <Contact />
        </LayoutWrapper>
      </main>
      <LayoutWrapper maxWidth="full" padding="tight" className="bg-muted/30">
        <LayoutWrapper maxWidth="sm" padding="none">
          <Footer />
        </LayoutWrapper>
      </LayoutWrapper>
    </>
  )
}

export default ContactPage
