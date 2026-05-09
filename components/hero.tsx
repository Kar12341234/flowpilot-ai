"use client";

import { BadgeCheck, CalendarCheck, Crown, Diamond, Gift, ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button, Container } from "@/components/ui";

const icons = [Crown, Diamond, ShieldCheck];

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="relative pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {copy.hero.titleBefore} <span className="gradient-text">{copy.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {copy.hero.desc}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#dashboard">{copy.hero.primary}</Button>
            <Button href="#features" variant="secondary">
              {copy.hero.secondary}
            </Button>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-400/18 via-white/5 to-yellow-900/20 blur-3xl" />
          <div className="relative grid items-end gap-5 md:grid-cols-[0.92fr_1.08fr]">
            <div className="glass hidden rounded-[2rem] p-4 md:block">
              <div className="rounded-[1.6rem] border border-amber-300/16 bg-zinc-950 p-4">
                <p className="text-sm font-semibold text-white">{copy.hero.metricsTitle}</p>
                <p className="mt-1 text-xs text-zinc-500">{copy.hero.metricsSub}</p>
                <div className="mt-5 grid gap-3">
                  {copy.hero.metrics.map(([label, value], index) => {
                    const Icon = icons[index];
                    return (
                    <div key={label} className="rounded-2xl border border-amber-300/14 bg-white/[0.05] p-4">
                      <Icon className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs text-zinc-500">{label}</p>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="glass relative mx-auto w-full max-w-[390px] rounded-[2.5rem] p-3 shadow-[0_40px_100px_rgba(212,175,55,0.16)]">
              <div className="overflow-hidden rounded-[2.1rem] border border-amber-300/16 bg-[#080808]">
                <div className="flex items-center justify-between bg-black px-5 py-4">
                  <div>
                    <p className="text-xs text-amber-200/55">{copy.hero.appName}</p>
                    <p className="text-base font-semibold text-white">{copy.hero.appSub}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-amber-300/10 px-2.5 py-1 text-[10px] text-amber-200">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.hero.verified}
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-zinc-950 via-[#1b1710] to-amber-800 p-5 text-white">
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-amber-200/20" />
                    <div className="absolute right-4 top-4 rounded-full bg-amber-300/15 px-3 py-1 text-xs text-amber-100">{copy.hero.tag}</div>
                    <p className="text-sm text-amber-100/80">{copy.hero.perk}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">{copy.hero.cardTitle}</h2>
                    <p className="mt-4 max-w-[240px] text-sm leading-6 text-amber-50/78">{copy.hero.cardDesc}</p>
                    <div className="mt-6 flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star key={item} className="h-4 w-4 fill-amber-300 text-amber-300" aria-hidden="true" />
                      ))}
                      <span className="text-xs text-amber-50/80">{copy.hero.rating}</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {copy.hero.services.map((service) => (
                      <div key={service} className="rounded-2xl bg-white/[0.06] p-3 text-center ring-1 ring-amber-300/10">
                        <p className="text-xs font-medium text-amber-100/80">{service}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                      <CalendarCheck className="h-5 w-5 text-amber-300" aria-hidden="true" />
                      <p className="mt-4 text-lg font-semibold text-white">{copy.hero.booking}</p>
                      <p className="mt-1 text-xs text-zinc-500">{copy.hero.bookingSub}</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                      <Gift className="h-5 w-5 text-amber-300" aria-hidden="true" />
                      <p className="mt-4 text-lg font-semibold text-white">{copy.hero.gift}</p>
                      <p className="mt-1 text-xs text-zinc-500">{copy.hero.giftSub}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">{copy.hero.shop}</p>
                        <p className="mt-1 text-xs text-zinc-500">{copy.hero.shopSub}</p>
                      </div>
                      <span className="rounded-full bg-amber-300/12 px-3 py-1 text-xs font-semibold text-amber-200">{copy.hero.certified}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-amber-200 to-amber-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
