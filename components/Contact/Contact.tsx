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
    <section>
      <h1 className="font-maru text-center text-3xl font-bold">
        Let&apos;s talk
      </h1>

      <div className="flex flex-col gap-4">
        <div className="input-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Artour Babaev"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
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
            className="textarea"
            rows={8}
            placeholder="Tell us briefly abouy your project, your team and what kind of help is needed."
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
        className="mt-4 flex w-full p-3"
      >
        <ButtonText>Send</ButtonText>
        <ButtonIcon>
          <HugeiconsIcon icon={ArrowRight01Icon} />
        </ButtonIcon>
      </Button>
    </section>
  )
}

export default Contact
