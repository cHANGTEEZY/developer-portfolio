"use client"

import React, { useState } from "react"
import Button, { ButtonIcon, ButtonText } from "../composition/Button/Button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmitForm = (formData: FormData) => {
    console.log(formData)
  }
  return (
    <section className="rounded-[2rem] bg-muted-foreground/10 p-6 md:p-8">
      <div className="mx-auto max-w-[620px]">
        <span className="font-mono text-xs text-muted-foreground">Contact</span>
        <h1 className="mt-2 font-sans text-3xl font-semibold tracking-tight">
          Let&apos;s build something great together.
        </h1>
        <p className="mt-3 max-w-[60ch] font-sans text-sm leading-relaxed text-muted-foreground">
          Tell us a bit about your product, your team, and what kind of support
          you need. We&apos;ll get back with a clear next step.
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <div className="input-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              type="text"
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
              className="input"
              type="email"
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
              className="textarea"
              rows={8}
              placeholder="Tell us briefly about your project, your team, and what kind of help is needed."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>
        <Button
          variant={"primary"}
          size={"small"}
          onClick={() => handleSubmitForm(formData as unknown as FormData)}
          className="mt-5 flex w-full justify-center p-3"
        >
          <ButtonText>Send Message</ButtonText>
          <ButtonIcon>
            <HugeiconsIcon icon={ArrowRight01Icon} />
          </ButtonIcon>
        </Button>
      </div>
    </section>
  )
}

export default Contact
