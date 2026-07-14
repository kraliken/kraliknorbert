"use client"

import { useActionState } from "react"
import { sendContactMessage, type ContactState } from "@/app/(content)/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const initialState: ContactState = {
  status: "idle",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState)

  return (
    <form action={formAction} className="space-y-6 rounded-2xl border border-border/50 bg-muted/20 p-7 sm:p-8">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          disabled={isPending}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          disabled={isPending}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a little about what you'd like to discuss..."
          rows={8}
          required
          disabled={isPending}
        />
      </div>

      {/* Honeypot field (hidden from normal users) */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Status message */}
      {state.status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950 dark:text-green-200">
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">
          {state.message}
        </div>
      )}

      {/* Submit button */}
      <Button type="submit" disabled={isPending} className="rounded-full px-6">
        {isPending ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  )
}
