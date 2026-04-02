import { Resend } from "resend"

import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/email"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const from =
  process.env.RESEND_FROM ?? "VBEE Studio <onboarding@resend.dev>"


const inboxTo = process.env.RESEND_TO ?? "sushankgurung2002@gmail.com"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(message: string) {
  return Response.json({ ok: false, error: message }, { status: 400 })
}

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      {
        ok: false,
        error:
          "Email is not configured. Set RESEND_API_KEY in the environment.",
      },
      { status: 503 }
    )
  }

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return badRequest("Invalid JSON body.")
  }

  if (raw === null || typeof raw !== "object") {
    return badRequest("Invalid payload.")
  }

  const body = raw as Record<string, unknown>
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (name.length < 1 || name.length > 200) {
    return badRequest("Please enter your name (max 200 characters).")
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 320) {
    return badRequest("Please enter a valid email address.")
  }
  if (message.length < 10 || message.length > 10_000) {
    return badRequest(
      "Please enter a message between 10 and 10,000 characters."
    )
  }

  const subject = `Message from ${name}`

  const { data, error } = await resend.emails.send({
    from,
    to: inboxTo,
    replyTo: email,
    subject,
    html: buildContactEmailHtml({ name, email, message }),
    text: buildContactEmailText({ name, email, message }),
  })

  if (error) {
    console.error("[api/email]", error)
    return Response.json(
      {
        ok: false,
        error:
          typeof error === "object" && error !== null && "message" in error
            ? String((error as { message: unknown }).message)
            : "Failed to send email.",
      },
      { status: 500 }
    )
  }

  return Response.json({ ok: true, id: data?.id ?? null })
}
