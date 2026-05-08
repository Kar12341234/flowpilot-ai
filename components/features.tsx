import { CalendarDays, CreditCard, LayoutGrid, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const features = [
  {
    title: "黑金品牌首页",
    description: "用深色视觉、金色层级、认证徽章和私享入口，建立高端品牌与身份识别。",
    icon: LayoutGrid
  },
  {
    title: "VIP 身份体系",
    description: "支持 Black Card、Diamond、Founder 等等级，展示身份标签、成长值和专属徽章。",
    icon: Sparkles
  },
  {
    title: "私享预约服务",
    description: "支持顾问制预约、私享空间、限定名额和高端活动预约，突出稀缺感。",
    icon: CalendarDays
  },
  {
    title: "圈层臻选商城",
    description: "展示限量礼盒、会籍卡、权益包和高端服务套餐，强化消费身份感。",
    icon: CreditCard
  },
  {
    title: "专属顾问入口",
    description: "对接企微顾问、活动报名、入会申请和私域触达，让服务更像一对一接待。",
    icon: MessageSquareText
  },
  {
    title: "认证与权限管理",
    description: "支持实名认证、邀请制入会、等级权限和活动名额管理，适合圈层运营。",
    icon: ShieldCheck
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Mini Program"
          title="围绕圈层身份设计的小程序能力"
          description="深色、金色、VIP、认证标识与私享权益结合，突出高端感、身份感和稀缺感。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-amber-300/14 bg-white/[0.045] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/28 hover:shadow-[0_24px_60px_rgba(212,175,55,0.12)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300/16 to-yellow-900/16 ring-1 ring-amber-300/16">
                <feature.icon className="h-6 w-6 text-amber-300 transition group-hover:scale-110" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
