import { ArrowUpRight, CircleDollarSign, Clock3, FileText, LineChart, Users } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const kpis = [
  { label: "商机转化率", value: "31.8%", change: "+9.6%", icon: CircleDollarSign },
  { label: "协同用户", value: "4,280", change: "+18.2%", icon: Users },
  { label: "审批周期", value: "1.6天", change: "-42%", icon: Clock3 },
  { label: "风险拦截率", value: "96.4%", change: "+11.3%", icon: LineChart }
];

const revenue = [46, 58, 62, 71, 69, 80, 86, 91, 96, 108, 118, 132];

const activities = [
  "AI 已完成 128 条重点商机画像补全",
  "华南区域合同风险条款已推送法务复核",
  "库存周转异常预警同步至供应链负责人",
  "经营周报已生成并发送至管理层群组"
];

const transactions = [
  { company: "华东一区", plan: "重点客户续约", amount: "¥320万" },
  { company: "新能源事业部", plan: "新签项目", amount: "¥186万" },
  { company: "华南渠道", plan: "回款到账", amount: "¥92万" }
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Executive Dashboard"
          title="给管理层看的经营与效率驾驶舱"
          description="用一页看清收入趋势、协同效率、流程风险和重点事项，适合在客户会议中直接演示。"
        />

        <div className="glass mt-14 overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-6">
            <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-slate-500">典型案例 Demo</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-950">华东智能制造集团 · 经营驾驶舱</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["本周", "本月", "本季度"].map((period) => (
                  <button
                    key={period}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <kpi.icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {kpi.change}
                    </span>
                  </div>
                  <p className="mt-5 text-2xl font-semibold text-slate-950">{kpi.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{kpi.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">收入与回款趋势</p>
                    <p className="text-xs text-slate-500">12 个月经营成效追踪</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div className="relative h-72">
                  <div className="absolute inset-0 grid grid-rows-5">
                    {[0, 1, 2, 3, 4].map((line) => (
                      <div key={line} className="border-t border-slate-100" />
                    ))}
                  </div>
                  <div className="relative flex h-full items-end gap-2">
                    {revenue.map((value, index) => (
                      <div key={index} className="flex flex-1 items-end rounded-full bg-slate-100">
                        <div className="chart-bar w-full rounded-full transition duration-500 hover:opacity-80" style={{ height: `${value / 1.35}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">核心指标达成</p>
                  <div className="mt-5 space-y-4">
                    {[
                      ["线索响应及时率", "82%"],
                      ["合同审批准时率", "74%"],
                      ["异常处理闭环率", "89%"]
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-slate-500">{label}</span>
                          <span className="font-medium text-slate-950">{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">重点事项动态</p>
                  <div className="mt-5 space-y-4">
                    {activities.map((activity) => (
                      <div key={activity} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.26)]" />
                        <p className="text-sm text-slate-600">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-950">近期重点业务记录</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.company}
                    className="grid grid-cols-3 gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm last:border-b-0"
                  >
                    <span className="font-medium text-slate-950">{transaction.company}</span>
                    <span className="text-slate-500">{transaction.plan}</span>
                    <span className="text-right font-semibold text-blue-700">{transaction.amount}</span>
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
