import { CheckCircle2 } from "lucide-react";
import { Button, Container, SectionHeader } from "@/components/ui";

const plans = [
  {
    name: "诊断评估",
    price: "第 1 周",
    description: "梳理组织流程、系统现状和经营指标，定义可演示的样板场景。",
    features: ["业务访谈", "数据口径梳理", "痛点优先级", "Demo 蓝图"],
    featured: false
  },
  {
    name: "样板搭建",
    price: "第 2-4 周",
    description: "搭建案例看板、AI 流程助手和关键业务闭环，形成可讲、可看、可点的演示版本。",
    features: ["经营驾驶舱", "流程自动化", "权限分层", "演示脚本"],
    featured: true
  },
  {
    name: "复制推广",
    price: "第 5 周+",
    description: "将样板复制到区域、事业部或更多业务线，逐步沉淀企业级 AI 运营中台。",
    features: ["多组织复制", "指标复盘", "系统集成", "运营培训"],
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Implementation"
          title="典型案例的落地实施路径"
          description="用短周期样板先证明价值，再按组织层级逐步推广，降低客户决策阻力。"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
                  : "border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:bg-blue-50/40"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
                  样板核心
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-slate-950">{plan.price}</span>
              </div>
              <Button href="#" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                查看阶段内容
              </Button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
