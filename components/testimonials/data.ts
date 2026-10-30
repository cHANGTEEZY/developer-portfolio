export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sushank delivered a production-ready React Native app in record time. His communication was transparent throughout and the code quality was exceptional.",
    name: "Alex Turner",
    role: "CTO",
    company: "Fieldset",
  },
  {
    quote:
      "We hired him to rescue a stalled Expo project. Within two weeks he had it shipping again — and we finally understood what we had built.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Korivo",
  },
  {
    quote:
      "He treats your product like his own. Focused, and opinionated in the best way. Exactly what we needed.",
    name: "James Osei",
    role: "Founder",
    company: "Loopline",
  },
  {
    quote:
      "A React developer who actually writes clean, maintainable code. Our codebase is now something we're proud to hand off to other developers.",
    name: "Sara Lindqvist",
    role: "Engineering Lead",
    company: "Nordea Labs",
  },
  {
    quote:
      "He upgraded our legacy React Native app to Expo without a single regression. The process was smooth and well-documented the whole way through.",
    name: "Ryu Hashimoto",
    role: "Mobile Lead",
    company: "Sensei Tech",
  },
  {
    quote:
      "Working with Sushank felt like having a senior engineer in-house. He shipped without micromanagement and explained every decision.",
    name: "Maya Patel",
    role: "VP Engineering",
    company: "Orbit IO",
  },
]
