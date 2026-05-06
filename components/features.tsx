import { BarChart3, Bot, Cpu, LockKeyhole, PlugZap, UsersRound } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const features = [
  {
    title: "AI Task Automation",
    description: "Build multi-step workflows that classify, summarize, route, and complete repetitive tasks.",
    icon: Bot
  },
  {
    title: "Smart Dashboard",
    description: "Monitor team throughput, active agents, queue health, and workflow outcomes in one view.",
    icon: Cpu
  },
  {
    title: "Team Collaboration",
    description: "Give teams shared playbooks, approval flows, comments, and human-in-the-loop controls.",
    icon: UsersRound
  },
  {
    title: "Real-time Analytics",
    description: "Track productivity lift, revenue impact, and bottlenecks with always-fresh reporting.",
    icon: BarChart3
  },
  {
    title: "API Integrations",
    description: "Connect your CRM, support inbox, product analytics, data warehouse, and internal tools.",
    icon: PlugZap
  },
  {
    title: "Secure Workflow",
    description: "Control access with roles, audit trails, encrypted secrets, and policy-aware automation.",
    icon: LockKeyhole
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to automate high-value work"
          description="FlowPilot AI blends automation, analytics, and collaboration into a calm operating layer for modern teams."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-white/[0.1] bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/28 hover:bg-white/[0.075] hover:shadow-glow"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/24 to-sky-400/18 ring-1 ring-white/12">
                <feature.icon className="h-6 w-6 text-sky-200 transition group-hover:scale-110" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
