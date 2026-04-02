"use client"

import React, { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import Button, { ButtonIcon, ButtonText } from "../composition/Button/Button"
import { RadarBackdrop } from "@/components/not-found/RadarBackdrop"
import { TerminalPromptLine } from "@/components/terminal/TerminalPromptLine"
import { TerminalSuccessLine } from "@/components/terminal/TerminalSuccessLine"
import { TerminalWindow } from "@/components/terminal/TerminalWindow"
import { Button as UiButton } from "@/components/ui/button"

type FormState = "idle" | "submitting" | "success" | "error"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    setStatus("submitting")

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const payload = (await res.json()) as {
        ok?: boolean
        error?: string
      }

      if (!res.ok || !payload.ok) {
        setStatus("error")
        setErrorMessage(
          payload.error ?? "Something went wrong. Please try again."
        )
        return
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Check your connection and try again.")
    }
  }

  return (
    <section
      className={
        status === "success"
          ? "relative min-h-[min(70vh,560px)] overflow-hidden rounded-[2rem] bg-[#0A0A0A] p-6 text-white md:p-10"
          : "rounded-[2rem] bg-muted-foreground/10 p-6 md:p-8"
      }
    >
      {status === "success" ? <RadarBackdrop /> : null}

      <div
        className={
          status === "success"
            ? "relative z-10 mx-auto flex min-h-[min(64vh,480px)] w-full max-w-xl flex-col items-center justify-center text-center"
            : "mx-auto max-w-[620px]"
        }
      >
        {status === "success" ? (
          <div className="flex w-full flex-col items-center" role="status">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              200: Transmission Complete
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#A0A0A0] sm:text-lg">
              Thanks — your message is on its way. We&apos;ll reply soon.
            </p>

            <div className="mt-10 w-full max-w-lg">
              <TerminalWindow>
                <div className="flex flex-col items-baseline text-left">
                  <TerminalPromptLine command="curl -X POST /api/contact" />
                  <TerminalSuccessLine message="Message received and queued for delivery." />
                </div>
              </TerminalWindow>
            </div>

            <UiButton
              variant="ghost"
              size="lg"
              type="button"
              className="mt-10 h-11 gap-2 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setStatus("idle")}
            >
              Send another message
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </UiButton>
          </div>
        ) : (
          <>
            <span className="font-mono text-xs text-muted-foreground">
              Contact
            </span>
            <h1 className="mt-2 font-sans text-3xl font-semibold tracking-tight">
              Let&apos;s build something great together.
            </h1>
            <p className="mt-3 max-w-[60ch] font-sans text-sm leading-relaxed text-muted-foreground">
              Tell us a bit about your product, your team, and what kind of
              support you need. We&apos;ll get back with a clear next step.
            </p>

            <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="input"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Artour Babaev"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="artour@vbee.studio"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  rows={8}
                  required
                  minLength={10}
                  placeholder="Tell us briefly about your project, your team, and what kind of help is needed."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {errorMessage ? (
                <p
                  className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 font-sans text-sm text-destructive"
                  role="alert"
                >
                  {errorMessage}
                </p>
              ) : null}

              <Button
                variant={"primary"}
                size={"small"}
                type="submit"
                loading={status === "submitting"}
                className="mt-1 flex w-full justify-center p-3"
              >
                <ButtonText>Send Message</ButtonText>
                <ButtonIcon>
                  <HugeiconsIcon icon={ArrowRight01Icon} />
                </ButtonIcon>
              </Button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
