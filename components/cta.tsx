"use client";

import { Rocket } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button, Container } from "@/components/ui";

export function CTA() {
  const { copy } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-black via-stone-950 to-amber-950 p-8 text-center shadow-[0_30px_90px_rgba(212,175,55,0.16)] sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/15 ring-1 ring-amber-300/25">
            <Rocket className="h-7 w-7 text-amber-200" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-amber-50/75">
            {copy.cta.desc}
          </p>
          <Button href="#pricing" variant="secondary" className="mt-8">
            {copy.cta.button}
          </Button>
        </div>
      </Container>
    </section>
  );
}
