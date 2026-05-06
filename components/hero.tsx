import { Activity, BarChart3, CheckCircle2, CircleDollarSign, Sparkles, Users } from "lucide-react";
import { Button, Container } from "@/components/ui";

const stats = [
  { label: "Automations", value: "2,481", icon: Sparkles },
  { label: "Active users", value: "18.6k", icon: Users },
  { label: "Revenue", value: "$92.4k", icon: CircleDollarSign }
];

const bars = [42, 58, 45, 75, 64, 88, 72, 96, 82, 100, 74, 91];

export function Hero() {
  return (
    <section className="relative pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.08] px-4 py-2 text-sm font-medium text-sky-200">
            <Activity className="h-4 w-4" aria-hidden="true" />
            AI workflow operating system for fast teams
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Automate Your Workflow With <span className="gradient-text">AI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            FlowPilot AI helps teams, creators, and startups automate repetitive work and boost productivity.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing">Get Started</Button>
            <Button href="#dashboard" variant="secondary">
              Live Demo
            </Button>
          </div>
          <div className="mt-9 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center">
            {["No credit card", "Setup in minutes", "SOC2-ready workflows"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/22 via-sky-400/16 to-violet-500/22 blur-3xl" />
          <div className="glass relative animate-float overflow-hidden rounded-[2rem] p-3">
            <div className="rounded-[1.5rem] border border-white/[0.08] bg-slate-950/80 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Command Center</p>
                  <p className="text-xs text-slate-400">Live workflow analytics</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-4">
                    <stat.icon className="mb-4 h-5 w-5 text-sky-300" aria-hidden="true" />
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Productivity Score</p>
                      <p className="text-xs text-slate-400">Weekly automation lift</p>
                    </div>
                    <BarChart3 className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  </div>
                  <div className="flex h-44 items-end gap-2">
                    {bars.map((height, index) => (
                      <div key={index} className="flex flex-1 items-end rounded-full bg-white/[0.06]">
                        <div className="chart-bar w-full rounded-full" style={{ height: `${height}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {["Summarize leads", "Sync CRM", "Route approvals", "Draft report"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-4 transition hover:bg-white/[0.08]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-white">{item}</p>
                          <p className="mt-1 text-xs text-slate-400">{index + 2} agents running</p>
                        </div>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
                      </div>
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
