export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "VBEE delivered a production-ready React Native app in record time. Their communication was transparent throughout and the code quality was exceptional.",
    name: "Alex Turner",
    role: "CTO",
    company: "Fieldset",
  },
  {
    quote:
      "We hired them to rescue a stalled Expo project. Within two weeks they had it shipping again — and we finally understood what we had built.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Korivo",
  },
  {
    quote:
      "The team treats your product like their own. Small, focused, and opinionated in the best way. Exactly what we needed.",
    name: "James Osei",
    role: "Founder",
    company: "Loopline",
  },
  {
    quote:
      "Top-tier React engineers who actually write clean, maintainable code. Our codebase is now something we're proud to hand off to other developers.",
    name: "Sara Lindqvist",
    role: "Engineering Lead",
    company: "Nordea Labs",
  },
  {
    quote:
      "They upgraded our legacy React Native app to Expo without a single regression. The process was smooth and well-documented the whole way through.",
    name: "Ryu Hashimoto",
    role: "Mobile Lead",
    company: "Sensei Tech",
  },
  {
    quote:
      "Working with VBEE felt like having an in-house team — except better, because they shipped without micromanagement and explained every decision.",
    name: "Maya Patel",
    role: "VP Engineering",
    company: "Orbit IO",
  },
]
