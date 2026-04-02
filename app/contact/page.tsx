import Contact from "@/components/Contact/Contact"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { LayoutWrapper } from "@/components/shell"

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
