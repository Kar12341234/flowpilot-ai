"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button, Container, SectionHeader } from "@/components/ui";

export function Pricing() {
  const { copy } = useLanguage();

  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={copy.pricing.eyebrow}
          title={copy.pricing.title}
          description={copy.pricing.desc}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {copy.pricing.plans.map(([name, price, description, features], index) => {
            const featured = index === 1;
            return (
            <article
              key={name}
              className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                featured
                  ? "border-amber-300/28 bg-gradient-to-br from-amber-300/14 via-white/[0.06] to-yellow-900/12 shadow-[0_24px_70px_rgba(212,175,55,0.14)]"
                  : "border-amber-300/14 bg-white/[0.045] shadow-sm hover:border-amber-300/26 hover:bg-white/[0.07]"
              }`}
            >
              {featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-zinc-950">
                  {copy.pricing.popular}
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">{description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-amber-100">{price}</span>
              </div>
              <Button href="#" variant={featured ? "primary" : "secondary"} className="mt-8 w-full">
                {copy.pricing.button}
              </Button>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
