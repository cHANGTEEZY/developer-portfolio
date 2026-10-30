import cta from "@/public/logos/cta.webp"
import oripari from "@/public/logos/Oripari.png"
import mrvaluator from "@/public/logos/m.png"
import mdesk from "@/public/logos/mdesk.png"
import hearttohelp from "@/public/logos/hearttohelp.png"
import { StaticImageData } from "next/image"

export const WORK = [
  {
    title: "Clinical Talent Australia",
    image: cta,
    description: "Admin, Web and Mobile App",
    href: "https://clinicaltalent.com.au/en",
  },
  {
    title: "Oripari",
    image: oripari,
    description: "Cross Platform Mobile App",
    href: "https://apps.apple.com/np/app/oripari/id6737851096",
  },
  {
    title: "Mr. Valuator",
    image: mrvaluator,
    description: "Cross Platform Mobile App",
    href: "https://apps.apple.com/np/app/mr-valuator/id6761289671",
  },
  {
    title: "MDESK",
    image: mdesk as StaticImageData,
    description: "Web and Mobile App",
    href: "https://mdesk.margintopsolutions.com.np/",
  },
  {
    title: "Heart to Help",
    image: hearttohelp as StaticImageData,
    description: "Web App",
    href: "https://hearttohelp.com.au/",
  },
] as const satisfies {
  title: string
  image: StaticImageData
  description: string
  href: string
}[]
