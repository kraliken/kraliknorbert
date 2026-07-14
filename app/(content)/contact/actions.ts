"use server"

import nodemailer from "nodemailer"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

const HONEYPOT_FIELD = "company"

export async function sendContactMessage(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() || ""
  const email = formData.get("email")?.toString().trim() || ""
  const message = formData.get("message")?.toString().trim() || ""
  const honeypot = formData.get(HONEYPOT_FIELD)?.toString().trim() || ""

  // Silent spam trap: if honeypot is filled, pretend we sent it but don't actually send
  if (honeypot) {
    return { status: "success", message: "Thank you! Your message has been sent." }
  }

  // Client validation (server-side too)
  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    }
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    }
  }

  const gmailUser = process.env.CONTACT_GMAIL_USER
  const gmailPassword = process.env.CONTACT_GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPassword) {
    console.error("Missing CONTACT_GMAIL_USER or CONTACT_GMAIL_APP_PASSWORD env var")
    return {
      status: "error",
      message: "Email configuration error. Please try again later.",
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Message:</strong></p><pre>${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`,
    })

    return {
      status: "success",
      message: "Thank you! Your message has been sent.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      status: "error",
      message: "Failed to send message. Please try again later.",
    }
  }
}
