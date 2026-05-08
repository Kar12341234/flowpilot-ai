import { CalendarCheck, CheckCircle2, Crown, Gift, ShoppingBag, Sparkles, Star, Users } from "lucide-react";
import { Button, Container } from "@/components/ui";

const stats = [
  { label: "首屏质感评分", value: "98%", icon: Sparkles },
  { label: "会员转化场景", value: "12+", icon: Users },
  { label: "预约/商城模块", value: "24h", icon: ShoppingBag }
];

const services = ["品牌展示", "会员体系", "预约服务", "商城转化"];

export function Hero() {
  return (
    <section className="relative pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
            <Crown className="h-4 w-4" aria-hidden="true" />
            给中国大陆客户看的高端小程序 Demo
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            一眼看懂我们能做 <span className="gradient-text">高级小程序 UI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            以「悦澜生活」精品服务小程序为样板，展示品牌首页、会员权益、在线预约、精品商城和数据运营的完整体验。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#dashboard">查看小程序界面</Button>
            <Button href="#features" variant="secondary">
              看可做功能
            </Button>
          </div>
          <div className="mt-9 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center">
            {["适合发给客户预览", "手机端观感高级", "可换成任意行业"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-200/70 via-white to-amber-100/70 blur-3xl" />
          <div className="relative grid items-end gap-5 md:grid-cols-[0.92fr_1.08fr]">
            <div className="glass hidden rounded-[2rem] p-4 md:block">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">运营数据</p>
                <p className="mt-1 text-xs text-slate-500">小程序上线后首月预估</p>
                <div className="mt-5 grid gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <stat.icon className="mb-3 h-5 w-5 text-blue-700" aria-hidden="true" />
                      <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass relative mx-auto w-full max-w-[390px] rounded-[2.5rem] p-3 shadow-[0_40px_100px_rgba(37,99,235,0.18)]">
              <div className="overflow-hidden rounded-[2.1rem] border border-slate-200 bg-[#f7f9fc]">
                <div className="flex items-center justify-between bg-white px-5 py-4">
                  <div>
                    <p className="text-xs text-slate-500">悦澜生活</p>
                    <p className="text-base font-semibold text-slate-950">会员服务小程序</p>
                  </div>
                  <div className="flex gap-1.5 rounded-full bg-slate-100 px-2 py-1">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-5 text-white">
                    <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs">VIP Black</div>
                    <p className="text-sm text-blue-100">本周精选权益</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">城市高端生活服务</h2>
                    <p className="mt-4 max-w-[230px] text-sm leading-6 text-blue-50">预约私享空间、精品护理、下午茶与高端沙龙活动。</p>
                    <div className="mt-6 flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star key={item} className="h-4 w-4 fill-amber-300 text-amber-300" aria-hidden="true" />
                      ))}
                      <span className="text-xs text-blue-50">4.9 客户评分</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {services.map((service) => (
                      <div key={service} className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-slate-100">
                        <p className="text-xs font-medium text-slate-700">{service}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                      <CalendarCheck className="h-5 w-5 text-blue-700" aria-hidden="true" />
                      <p className="mt-4 text-lg font-semibold text-slate-950">预约</p>
                      <p className="mt-1 text-xs text-slate-500">3 步完成到店预约</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                      <Gift className="h-5 w-5 text-amber-600" aria-hidden="true" />
                      <p className="mt-4 text-lg font-semibold text-slate-950">权益</p>
                      <p className="mt-1 text-xs text-slate-500">积分、券包、会员日</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-950">精品商城</p>
                        <p className="mt-1 text-xs text-slate-500">高端礼盒 · 限量套装</p>
                      </div>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">热销</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-600 to-amber-500" />
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
