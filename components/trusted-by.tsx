"use client";

import { Container } from "@/components/ui";
import { useLanguage } from "@/components/language-provider";

export function TrustedBy() {
  const { copy } = useLanguage();

  return (
    <section className="relative py-10">
      <Container>
        <div className="rounded-3xl border border-amber-300/12 bg-white/[0.045] px-6 py-8 shadow-sm">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {copy.trusted.title}
          </p>
          <div className="mt-7 grid grid-cols-2 gap-5 text-center sm:grid-cols-3 lg:grid-cols-5">
            {copy.trusted.items.map((company) => (
              <div key={company} className="text-lg font-semibold text-amber-100/80 transition hover:text-amber-200">
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
