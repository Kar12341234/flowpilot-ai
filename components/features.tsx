import { CalendarDays, CreditCard, LayoutGrid, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const features = [
  {
    title: "高级品牌首页",
    description: "用精致首屏、服务入口、品牌故事和活动 Banner，让客户打开就觉得专业、有质感。",
    icon: LayoutGrid
  },
  {
    title: "会员权益体系",
    description: "支持等级、积分、券包、会员日和专属权益，适合美容、餐饮、零售、会所和服务行业。",
    icon: Sparkles
  },
  {
    title: "在线预约服务",
    description: "客户可选择门店、顾问、时间和服务项目，减少人工沟通，提升转化效率。",
    icon: CalendarDays
  },
  {
    title: "精品商城转化",
    description: "展示套餐、礼盒、卡券和限量产品，适合做品牌销售闭环和私域复购。",
    icon: CreditCard
  },
  {
    title: "客服与表单线索",
    description: "对接企微客服、咨询表单、报价申请和活动报名，把小程序变成获客入口。",
    icon: MessageSquareText
  },
  {
    title: "安全与后台管理",
    description: "后台可管理内容、订单、预约、会员和数据报表，客户后续运营有抓手。",
    icon: ShieldCheck
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Mini Program"
          title="客户能直观看到的小程序能力"
          description="不用讲太多技术，直接用客户熟悉的业务场景展示：品牌、会员、预约、商城、客服和后台。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-amber-50 ring-1 ring-blue-100">
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
