import { FadeIn } from "@/components/fade-in"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
      <FadeIn delay={0.2} className="space-y-8 flex flex-col items-center">
        {/* Header */}
        <section className="w-full max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in Touch
          </h1>
          <p className="text-base leading-relaxed text-foreground/60">
            Have a question, feedback, or a project in mind?
            <br />
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </section>

        {/* Form */}
        <section className="w-full max-w-3xl">
          <ContactForm />
        </section>
      </FadeIn>
    </div>
  )
}
