import { BarChart3, CalendarCheck, ChevronRight, Heart, Home, ShoppingBag, UserRound } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const screens = [
  {
    name: "品牌首页",
    icon: Home,
    title: "悦澜生活",
    subtitle: "高端生活服务小程序",
    tag: "品牌质感",
    color: "from-blue-700 to-cyan-500"
  },
  {
    name: "预约服务",
    icon: CalendarCheck,
    title: "选择到店时间",
    subtitle: "顾问、门店、项目一屏完成",
    tag: "效率提升",
    color: "from-slate-900 to-blue-700"
  },
  {
    name: "会员中心",
    icon: UserRound,
    title: "Black VIP",
    subtitle: "积分、券包、权益、等级成长",
    tag: "私域运营",
    color: "from-amber-600 to-orange-500"
  }
];

const metrics = [
  ["访问转化", "32.8%", "+12%"],
  ["预约完成", "1,286", "+38%"],
  ["会员复购", "46.2%", "+19%"]
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="UI Showcase"
          title="像真实小程序一样展示完整界面"
          description="用手机端视觉样机展示首页、预约、会员、商城和运营数据，让客户一眼感受到交付品质。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {screens.map((screen) => (
              <article key={screen.name} className="glass rounded-[2rem] p-3">
                <div className="overflow-hidden rounded-[1.65rem] border border-slate-200 bg-[#f7f9fc]">
                  <div className="flex items-center justify-between bg-white px-4 py-3">
                    <span className="text-xs font-semibold text-slate-500">{screen.name}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">小程序</span>
                  </div>
                  <div className={`m-3 rounded-[1.35rem] bg-gradient-to-br ${screen.color} p-4 text-white`}>
                    <screen.icon className="h-6 w-6" aria-hidden="true" />
                    <p className="mt-8 text-2xl font-semibold">{screen.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/80">{screen.subtitle}</p>
                    <div className="mt-5 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs">{screen.tag}</div>
                  </div>
                  <div className="space-y-3 px-3 pb-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                            {item === 1 ? <Heart className="h-4 w-4" /> : item === 2 ? <ShoppingBag className="h-4 w-4" /> : <BarChart3 className="h-4 w-4" />}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-slate-950">高频业务入口</p>
                            <p className="text-xs text-slate-500">适配客户行业</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="glass rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-950">小程序运营后台</p>
                  <p className="mt-1 text-xs text-slate-500">给客户看的数据管理能力</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">实时同步</span>
              </div>

              <div className="mt-6 grid gap-3">
                {metrics.map(([label, value, change]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500">{label}</p>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{change}</span>
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-950 to-blue-800 p-5 text-white">
                <p className="text-sm text-blue-100">可交付后台模块</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {["内容管理", "预约管理", "订单管理", "会员管理", "数据报表", "活动配置"].map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 px-3 py-2">
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
