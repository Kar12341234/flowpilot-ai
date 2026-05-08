import { CheckCircle2 } from "lucide-react";
import { Button, Container, SectionHeader } from "@/components/ui";

const plans = [
  {
    name: "视觉方案",
    price: "1-2 天",
    description: "先出首页风格、色彩、组件和核心页面方向，让客户快速判断质感是否符合品牌。",
    features: ["首页视觉稿", "核心组件", "品牌配色", "交互动效方向"],
    featured: false
  },
  {
    name: "小程序 Demo",
    price: "3-7 天",
    description: "搭建可点击的小程序演示版本，包含首页、详情、预约、会员、商城等关键流程。",
    features: ["可点击原型", "页面动效", "业务流程", "演示链接"],
    featured: true
  },
  {
    name: "正式开发",
    price: "按需求",
    description: "进入真实小程序开发，接入后台、支付、预约、会员、客服和运营数据。",
    features: ["微信小程序", "后台管理", "支付/预约", "上线部署"],
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Delivery"
          title="从高级 UI 到可上线小程序"
          description="先让客户看到高质量界面，再推进可点击 Demo 和正式开发，降低沟通成本。"
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
                  推荐展示
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-slate-950">{plan.price}</span>
              </div>
              <Button href="#" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                咨询交付方式
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
