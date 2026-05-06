import { Rocket } from "lucide-react";
import { Button, Container } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-gradient-to-br from-indigo-500/20 via-white/[0.06] to-sky-400/16 p-8 text-center shadow-glow sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.1] ring-1 ring-white/14">
            <Rocket className="h-7 w-7 text-sky-200" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to launch your AI workflow?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Turn repeatable work into intelligent systems your team can trust.
          </p>
          <Button href="#pricing" className="mt-8">
            Start Free Trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
