"use client";

import { Crown, Menu } from "lucide-react";
import { useLanguage, type Locale } from "@/components/language-provider";
import { Button, Container } from "@/components/ui";

const hrefs = ["#features", "#dashboard", "#pricing", "#faq"];
const languages: Array<{ label: string; value: Locale }> = [
  { label: "简", value: "zh-CN" },
  { label: "繁", value: "zh-TW" },
  { label: "EN", value: "en" }
];

export function Navbar() {
  const { locale, setLocale, copy } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/12 bg-black/72 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/20 bg-gradient-to-br from-amber-300 to-amber-700 shadow-[0_16px_36px_rgba(212,175,55,0.22)]">
            <Crown className="h-5 w-5 text-zinc-950" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight text-white">FlowPilot AI</span>
            <span className="block text-xs font-medium text-amber-200/70">{copy.nav.subtitle}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          {copy.nav.links.map((label, index) => (
            <a key={label} href={hrefs[index]} className="transition hover:text-amber-200">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:text-amber-100">
            {copy.nav.case}
          </a>
          <div className="flex rounded-full border border-amber-300/16 bg-white/[0.05] p-1">
            {languages.map((language) => (
              <button
                key={language.value}
                onClick={() => setLocale(language.value)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  locale === language.value ? "bg-amber-300 text-zinc-950" : "text-zinc-400 hover:text-amber-100"
                }`}
                type="button"
              >
                {language.label}
              </button>
            ))}
          </div>
          <Button href="#pricing" className="min-h-10 px-4">
            {copy.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex rounded-full border border-amber-300/16 bg-white/[0.05] p-1">
            {languages.map((language) => (
              <button
                key={language.value}
                onClick={() => setLocale(language.value)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                  locale === language.value ? "bg-amber-300 text-zinc-950" : "text-zinc-400 hover:text-amber-100"
                }`}
                type="button"
              >
                {language.label}
              </button>
            ))}
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/20 bg-white/[0.06] text-amber-100"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}
