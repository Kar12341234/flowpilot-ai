"use client";

import { CalendarDays, CreditCard, LayoutGrid, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container, SectionHeader } from "@/components/ui";

const icons = [LayoutGrid, Sparkles, CalendarDays, CreditCard, MessageSquareText, ShieldCheck];

export function Features() {
  const { copy } = useLanguage();

  return (
    <section id="features" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={copy.features.eyebrow}
          title={copy.features.title}
          description={copy.features.desc}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.features.items.map(([title, description], index) => {
            const Icon = icons[index];
            return (
            <article
              key={title}
              className="group rounded-3xl border border-amber-300/14 bg-white/[0.045] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/28 hover:shadow-[0_24px_60px_rgba(212,175,55,0.12)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300/16 to-yellow-900/16 ring-1 ring-amber-300/16">
                <Icon className="h-6 w-6 text-amber-300 transition group-hover:scale-110" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
            </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
