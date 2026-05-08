import { CheckCircle2 } from "lucide-react";
import { Button, Container, SectionHeader } from "@/components/ui";

const plans = [
  {
    name: "黑金视觉方案",
    price: "1-2 天",
    description: "先确定深色、金色、VIP、认证标识和核心页面方向，快速判断圈层质感。",
    features: ["首页视觉稿", "VIP 组件", "黑金配色", "动效方向"],
    featured: false
  },
  {
    name: "VIP 小程序 Demo",
    price: "3-7 天",
    description: "搭建可点击的圈层小程序演示，包含认证、权益、私享预约、臻选商城等关键流程。",
    features: ["可点击原型", "身份动效", "权益流程", "演示链接"],
    featured: true
  },
  {
    name: "正式开发",
    price: "按需求",
    description: "进入真实小程序开发，接入后台、支付、预约、会员等级、认证与运营数据。",
    features: ["微信小程序", "圈层后台", "支付/预约", "上线部署"],
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Delivery"
          title="从黑金视觉到可上线圈层小程序"
          description="先确定身份感与高级 UI，再推进可点击 Demo 和正式开发。"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-amber-300/28 bg-gradient-to-br from-amber-300/14 via-white/[0.06] to-yellow-900/12 shadow-[0_24px_70px_rgba(212,175,55,0.14)]"
                  : "border-amber-300/14 bg-white/[0.045] shadow-sm hover:border-amber-300/26 hover:bg-white/[0.07]"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-zinc-950">
                  推荐展示
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-amber-100">{plan.price}</span>
              </div>
              <Button href="#" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                咨询交付方式
              </Button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" aria-hidden="true" />
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
