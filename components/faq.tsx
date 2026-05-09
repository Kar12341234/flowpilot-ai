"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container, SectionHeader } from "@/components/ui";

export function FAQ() {
  const { copy } = useLanguage();

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={copy.faq.eyebrow}
          title={copy.faq.title}
          description={copy.faq.desc}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {copy.faq.items.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-2xl border border-amber-300/14 bg-white/[0.045] p-5 shadow-sm transition hover:border-amber-300/28 hover:bg-white/[0.07]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {question}
                <ChevronDown className="h-5 w-5 shrink-0 text-amber-200/60 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
