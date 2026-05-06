import { ArrowUpRight, CircleDollarSign, Clock3, CreditCard, LineChart, Users } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const kpis = [
  { label: "MRR", value: "$184.2k", change: "+18.4%", icon: CircleDollarSign },
  { label: "Active users", value: "42,810", change: "+12.7%", icon: Users },
  { label: "Avg. run time", value: "1.8s", change: "-24.1%", icon: Clock3 },
  { label: "Success rate", value: "99.4%", change: "+3.2%", icon: LineChart }
];

const revenue = [48, 64, 58, 72, 69, 88, 82, 95, 91, 104, 116, 128];

const activities = [
  "AI agent closed 38 stale tickets",
  "CRM sync completed for enterprise leads",
  "Invoice workflow approved by finance",
  "Weekly metrics report delivered"
];

const transactions = [
  { company: "NovaTech", plan: "Business", amount: "$2,400" },
  { company: "BuildFlow", plan: "Pro", amount: "$588" },
  { company: "TaskZen", plan: "Starter", amount: "$228" }
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Dashboard Preview"
          title="A command center for AI-powered operations"
          description="See revenue trends, user behavior, automation health, activity, and recent transactions without leaving the dashboard."
        />

        <div className="glass mt-14 overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/[0.08] bg-slate-950/86 p-4 sm:p-6">
            <div className="mb-6 flex flex-col gap-4 border-b border-white/[0.08] pb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-slate-400">Admin Dashboard</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">Workflow Intelligence</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["24h", "7d", "30d"].map((period) => (
                  <button
                    key={period}
                    className="rounded-full border border-white/[0.1] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-300/40 hover:text-white"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-4">
                  <div className="flex items-center justify-between">
                    <kpi.icon className="h-5 w-5 text-sky-300" aria-hidden="true" />
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      {kpi.change}
                    </span>
                  </div>
                  <p className="mt-5 text-2xl font-semibold text-white">{kpi.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{kpi.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Revenue chart</p>
                    <p className="text-xs text-slate-400">Monthly recurring revenue</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                </div>
                <div className="relative h-72">
                  <div className="absolute inset-0 grid grid-rows-5">
                    {[0, 1, 2, 3, 4].map((line) => (
                      <div key={line} className="border-t border-white/[0.06]" />
                    ))}
                  </div>
                  <div className="relative flex h-full items-end gap-2">
                    {revenue.map((value, index) => (
                      <div key={index} className="flex flex-1 items-end rounded-full bg-white/[0.05]">
                        <div className="chart-bar w-full rounded-full transition duration-500 hover:opacity-80" style={{ height: `${value / 1.35}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5">
                  <p className="text-sm font-semibold text-white">User analytics</p>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Activation", "82%"],
                      ["Retention", "74%"],
                      ["Expansion", "39%"]
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-slate-400">{label}</span>
                          <span className="font-medium text-white">{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/[0.07]">
                          <div className="h-2 rounded-full bg-gradient-to-r from-sky-300 to-violet-400" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5">
                  <p className="text-sm font-semibold text-white">Activity feed</p>
                  <div className="mt-5 space-y-4">
                    {activities.map((activity) => (
                      <div key={activity} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.7)]" />
                        <p className="text-sm text-slate-300">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5">
              <div className="mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-violet-300" aria-hidden="true" />
                <p className="text-sm font-semibold text-white">Recent transactions</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.company}
                    className="grid grid-cols-3 gap-3 border-b border-white/[0.06] bg-slate-900/40 px-4 py-3 text-sm last:border-b-0"
                  >
                    <span className="font-medium text-white">{transaction.company}</span>
                    <span className="text-slate-400">{transaction.plan}</span>
                    <span className="text-right font-semibold text-sky-200">{transaction.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
