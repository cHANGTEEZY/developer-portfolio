import cta from "@/public/logos/cta.webp"
import oripari from "@/public/logos/Oripari.png"
import { StaticImageData } from "next/image"

export const WORK = [{
    title: "Clinical Talent Australia",
    image: cta,
    description: "Admin, Web and Mobile App"
}, {
    title: "Oripari",
    image: oripari,
    description: "Mobile App"
}]  as const satisfies {
    title: string
    image: StaticImageData
    description: string
}[]