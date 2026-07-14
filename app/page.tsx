import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 h-[calc(100vh-140px)] flex flex-col items-center justify-center">
        {/* Hero */}
        <section className="text-center space-y-6 w-full">
          <FadeIn delay={0.6} className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight leading-tight sm:text-5xl mx-auto max-w-2xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Norbert.</span>
              <br />
              Learning data &amp; BI.
            </h1>

            <p className="text-base leading-relaxed text-foreground/60 mx-auto max-w-2xl">
              Building BI and data skills in public.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/learning">View Learning Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="mailto:norbert.kralik.dev@gmail.com">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </FadeIn>
        </section>
    </div>
  )
}