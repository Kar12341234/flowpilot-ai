"use client";

import { CalendarCheck, ChevronRight, Heart, Home, MessageCircle, ShoppingBag, UserRound } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container, SectionHeader } from "@/components/ui";

const screenStyles = [
  { icon: Home, color: "from-zinc-950 via-[#1b1710] to-amber-800", accent: "bg-amber-300/12 text-amber-200" },
  { icon: CalendarCheck, color: "from-black via-zinc-900 to-stone-800", accent: "bg-stone-700/30 text-amber-100" },
  { icon: UserRound, color: "from-amber-700 via-yellow-600 to-amber-400", accent: "bg-amber-300/16 text-amber-100" }
];

const entryIcons = [Heart, ShoppingBag, MessageCircle];

export function DashboardPreview() {
  const { copy } = useLanguage();

  return (
    <section id="dashboard" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={copy.dashboard.eyebrow}
          title={copy.dashboard.title}
          description={copy.dashboard.desc}
        />

        <div className="mt-14">
          <div className="grid justify-items-center gap-7 lg:grid-cols-3">
            {copy.dashboard.screens.map(([name, title, subtitle, tag, cta], index) => {
              const style = screenStyles[index];
              const Icon = style.icon;
              return (
              <article key={name} className="glass w-full max-w-[390px] rounded-[2.6rem] p-3">
                <div className="overflow-hidden rounded-[2rem] border border-amber-300/14 bg-[#080808]">
                  <div className="flex items-center justify-between bg-black px-5 py-4">
                    <span className="text-sm font-semibold text-amber-100">{name}</span>
                    <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs text-amber-200">{copy.hero.verified}</span>
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <div className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${style.color} p-5 text-white shadow-[0_18px_45px_rgba(37,99,235,0.16)]`}>
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/12" />
                      <div className="flex items-center justify-between">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-amber-50">{tag}</span>
                      </div>
                      <p className="mt-12 text-3xl font-semibold tracking-tight">{title}</p>
                      <p className="mt-3 text-sm leading-6 text-white/82">{subtitle}</p>
                      <button className="mt-6 rounded-full bg-gradient-to-r from-amber-200 to-amber-600 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm">
                        {cta}
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                        <p className="text-xs text-zinc-500">{copy.dashboard.visits}</p>
                        <p className="mt-2 text-xl font-semibold text-white">12,860</p>
                      </div>
                      <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                        <p className="text-xs text-zinc-500">{copy.dashboard.benefit}</p>
                        <p className="mt-2 text-xl font-semibold text-white">+32%</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        ...copy.dashboard.entries
                      ].map(([label, desc], entryIndex) => {
                        const EntryIcon = entryIcons[entryIndex];
                        return (
                        <div key={label as string} className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                          <div className="flex items-center gap-3">
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.accent}`}>
                              <EntryIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">{label as string}</p>
                              <p className="text-xs text-zinc-500">{desc as string}</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-amber-200/40" aria-hidden="true" />
                        </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 grid grid-cols-4 rounded-2xl bg-white/[0.06] p-2 ring-1 ring-amber-300/10">
                      {copy.dashboard.tabs.map((item, tabIndex) => (
                        <div key={item} className={`rounded-xl px-2 py-2 text-center text-xs font-medium ${tabIndex === 0 ? "bg-amber-300/14 text-amber-200" : "text-zinc-500"}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>

          <div className="glass mt-8 rounded-[2rem] p-5">
            <div className="grid gap-6 rounded-[1.5rem] border border-amber-300/14 bg-zinc-950 p-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{copy.dashboard.backend}</p>
                  <p className="mt-1 text-xs text-zinc-500">{copy.dashboard.backendSub}</p>
                </div>
                <span className="rounded-full bg-amber-300/12 px-3 py-1 text-xs font-semibold text-amber-200">{copy.dashboard.sync}</span>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {copy.dashboard.metrics.map(([label, value, change]) => (
                  <div key={label} className="rounded-2xl border border-amber-300/14 bg-white/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-500">{label}</p>
                      <span className="rounded-full bg-amber-300/12 px-2.5 py-1 text-xs font-semibold text-amber-200">{change}</span>
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-black via-stone-950 to-amber-950 p-5 text-white lg:col-span-2">
                <p className="text-sm text-amber-100/75">{copy.dashboard.modulesTitle}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-6">
                  {copy.dashboard.modules.map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 px-3 py-2 text-amber-50/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
