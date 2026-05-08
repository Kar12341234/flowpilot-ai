import { BarChart3, Bot, ClipboardCheck, LockKeyhole, Network, UsersRound } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const features = [
  {
    title: "线索自动分级",
    description: "将官网、企微、展会和渠道线索统一入池，AI 自动识别客户画像、意向等级与跟进优先级。",
    icon: Bot
  },
  {
    title: "合同审批提效",
    description: "把法务、财务、销售审批节点标准化，自动提示风险条款并生成审批摘要。",
    icon: ClipboardCheck
  },
  {
    title: "跨部门协同",
    description: "销售、交付、财务和管理层共享同一套数据口径，减少重复沟通和手工表格。",
    icon: UsersRound
  },
  {
    title: "经营实时分析",
    description: "按区域、事业部、客户类型追踪收入、转化率、回款和项目交付健康度。",
    icon: BarChart3
  },
  {
    title: "系统集成底座",
    description: "对接 CRM、ERP、OA、财务系统和数据仓库，把分散流程汇聚到统一工作台。",
    icon: Network
  },
  {
    title: "权限与审计",
    description: "支持角色权限、操作留痕、敏感字段脱敏和审批记录归档，满足企业合规要求。",
    icon: LockKeyhole
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Case Overview"
          title="从业务痛点到可演示的解决方案"
          description="围绕大陆企业客户最关心的效率、成本、风险和管理可视化，构建一套可复制的 AI 运营典型案例。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 ring-1 ring-blue-100">
                <feature.icon className="h-6 w-6 text-blue-700 transition group-hover:scale-110" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
