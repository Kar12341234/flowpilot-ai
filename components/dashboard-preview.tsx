import { CalendarCheck, ChevronRight, Heart, Home, MessageCircle, ShoppingBag, UserRound } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const screens = [
  {
    name: "圈层首页",
    icon: Home,
    title: "悦澜会",
    subtitle: "Black Card 私享俱乐部",
    tag: "身份认证",
    color: "from-zinc-950 via-[#1b1710] to-amber-800",
    accent: "bg-amber-300/12 text-amber-200",
    cta: "申请入会"
  },
  {
    name: "私享预约",
    icon: CalendarCheck,
    title: "预约私享席位",
    subtitle: "顾问、空间、活动名额一屏完成",
    tag: "限定名额",
    color: "from-black via-zinc-900 to-stone-800",
    accent: "bg-stone-700/30 text-amber-100",
    cta: "锁定席位"
  },
  {
    name: "会员中心",
    icon: UserRound,
    title: "Black Diamond",
    subtitle: "徽章、权益、会籍、等级成长",
    tag: "VIP 身份",
    color: "from-amber-700 via-yellow-600 to-amber-400",
    accent: "bg-amber-300/16 text-amber-100",
    cta: "查看权益"
  }
];

const metrics = [
  ["认证会员", "8,260", "+12%"],
  ["私享预约", "1,286", "+38%"],
  ["权益领取", "46.2%", "+19%"]
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="UI Showcase"
          title="黑金质感的 VIP 小程序界面"
          description="用手机端样机展示圈层首页、私享预约、会员身份和运营后台，一眼呈现高级感。"
        />

        <div className="mt-14">
          <div className="grid justify-items-center gap-7 lg:grid-cols-3">
            {screens.map((screen) => (
              <article key={screen.name} className="glass w-full max-w-[390px] rounded-[2.6rem] p-3">
                <div className="overflow-hidden rounded-[2rem] border border-amber-300/14 bg-[#080808]">
                  <div className="flex items-center justify-between bg-black px-5 py-4">
                    <span className="text-sm font-semibold text-amber-100">{screen.name}</span>
                    <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs text-amber-200">已认证</span>
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <div className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${screen.color} p-5 text-white shadow-[0_18px_45px_rgba(37,99,235,0.16)]`}>
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/12" />
                      <div className="flex items-center justify-between">
                        <screen.icon className="h-7 w-7" aria-hidden="true" />
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-amber-50">{screen.tag}</span>
                      </div>
                      <p className="mt-12 text-3xl font-semibold tracking-tight">{screen.title}</p>
                      <p className="mt-3 text-sm leading-6 text-white/82">{screen.subtitle}</p>
                      <button className="mt-6 rounded-full bg-gradient-to-r from-amber-200 to-amber-600 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm">
                        {screen.cta}
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                        <p className="text-xs text-zinc-500">认证访问</p>
                        <p className="mt-2 text-xl font-semibold text-white">12,860</p>
                      </div>
                      <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                        <p className="text-xs text-zinc-500">权益领取</p>
                        <p className="mt-2 text-xl font-semibold text-white">+32%</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        ["私享权益", Heart, "专属等级开放"],
                        ["臻选商城", ShoppingBag, "限量礼盒会籍"],
                        ["专属顾问", MessageCircle, "一对一接待"]
                      ].map(([label, Icon, desc]) => (
                        <div key={label as string} className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4 ring-1 ring-amber-300/10">
                          <div className="flex items-center gap-3">
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${screen.accent}`}>
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">{label as string}</p>
                              <p className="text-xs text-zinc-500">{desc as string}</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-amber-200/40" aria-hidden="true" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-4 rounded-2xl bg-white/[0.06] p-2 ring-1 ring-amber-300/10">
                      {["首页", "权益", "臻选", "我的"].map((item, index) => (
                        <div key={item} className={`rounded-xl px-2 py-2 text-center text-xs font-medium ${index === 0 ? "bg-amber-300/14 text-amber-200" : "text-zinc-500"}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="glass mt-8 rounded-[2rem] p-5">
            <div className="grid gap-6 rounded-[1.5rem] border border-amber-300/14 bg-zinc-950 p-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">圈层运营后台</p>
                  <p className="mt-1 text-xs text-zinc-500">认证、权益、预约、活动统一管理</p>
                </div>
                <span className="rounded-full bg-amber-300/12 px-3 py-1 text-xs font-semibold text-amber-200">实时同步</span>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {metrics.map(([label, value, change]) => (
                  <div key={label} className="rounded-2xl border border-amber-300/14 bg-white/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-500">{label}</p>
                      <span className="rounded-full bg-amber-300/12 px-2.5 py-1 text-xs font-semibold text-amber-200">{change}</span>
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-black via-stone-950 to-amber-950 p-5 text-white lg:col-span-2">
                <p className="text-sm text-amber-100/75">可交付后台模块</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-6">
                  {["内容管理", "预约管理", "订单管理", "会员管理", "数据报表", "活动配置"].map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 px-3 py-2 text-amber-50/80">
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
