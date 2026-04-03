import type { Metadata } from "next"

import Contact from "@/components/Contact/Contact"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Book a discovery call or ask about React, React Native, and Expo projects.`,
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for React and React Native engineering.`,
    url: "/contact",
  },
  twitter: {
    title: `Contact — ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for React and React Native engineering.`,
  },
}

const ContactPage = () => {
  return (
    <>
      <LayoutWrapper maxWidth="sm" padding="none">
        <Navbar variant="contact" />
      </LayoutWrapper>
      <LayoutWrapper maxWidth="sm" padding="comfortable">
        <Contact />
      </LayoutWrapper>
      <LayoutWrapper maxWidth="full" padding="tight" className="bg-muted/30">
        <LayoutWrapper maxWidth="sm" padding="none">
          <Footer />
        </LayoutWrapper>
      </LayoutWrapper>
    </>
  )
}

export default ContactPage
