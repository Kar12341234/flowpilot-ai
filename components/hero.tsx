import { BarChart3, CheckCircle2, CircleDollarSign, Factory, Sparkles, Users } from "lucide-react";
import { Button, Container } from "@/components/ui";

const stats = [
  { label: "流程自动化率", value: "72%", icon: Sparkles },
  { label: "服务覆盖员工", value: "18,600", icon: Users },
  { label: "年化节省成本", value: "¥860万", icon: CircleDollarSign }
];

const bars = [52, 66, 58, 72, 69, 84, 78, 92, 88, 100, 86, 96];

export function Hero() {
  return (
    <section className="relative pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
            <Factory className="h-4 w-4" aria-hidden="true" />
            面向集团企业的 AI 运营中台典型案例
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            打造可落地的 <span className="gradient-text">AI 经营驾驶舱</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            以“华东智能制造集团”为样板，展示从线索协同、流程审批、经营分析到风险预警的完整 AI 运营升级方案。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#dashboard">查看案例看板</Button>
            <Button href="#dashboard" variant="secondary">
              下载方案摘要
            </Button>
          </div>
          <div className="mt-9 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center">
            {["适合售前演示", "覆盖管理层视角", "可复制到多行业"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/70 via-white to-teal-100/70 blur-3xl" />
          <div className="glass relative animate-float overflow-hidden rounded-[2rem] p-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-950">集团经营驾驶舱</p>
                  <p className="text-xs text-slate-500">华东智能制造集团 · AI 运营样板</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  运行稳定
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <stat.icon className="mb-4 h-5 w-5 text-blue-700" aria-hidden="true" />
                    <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">流程提效指数</p>
                      <p className="text-xs text-slate-500">12 周上线效果追踪</p>
                    </div>
                    <BarChart3 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <div className="flex h-44 items-end gap-2">
                    {bars.map((height, index) => (
                      <div key={index} className="flex flex-1 items-end rounded-full bg-slate-100">
                        <div className="chart-bar w-full rounded-full" style={{ height: `${height}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {["商机线索分级", "合同审批提速", "库存异常预警", "经营周报生成"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-slate-950">{item}</p>
                          <p className="mt-1 text-xs text-slate-500">{index + 2} 个业务单元接入</p>
                        </div>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.45)]" />
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
