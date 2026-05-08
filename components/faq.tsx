import { ChevronDown } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "这个页面主要展示什么？",
    answer: "主要展示黑金高端小程序 UI，并且覆盖 VIP 身份、认证会员、私享预约、权益商城和后台运营。"
  },
  {
    question: "能不能换成其他行业？",
    answer: "可以。会所、医美、私域零售、高端餐饮、俱乐部、企业家社群都能替换文案、配色、页面结构和业务流程。"
  },
  {
    question: "这是真正的微信小程序吗？",
    answer: "当前是网页展示 Demo，用来展示视觉和业务能力；正式项目可以开发成真实微信小程序并提交审核上线。"
  },
  {
    question: "后续能不能接支付和后台？",
    answer: "可以。可扩展微信支付、预约管理、订单管理、会员等级、认证审核、权益配置和内容管理后台。"
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="圈层小程序 Demo 常见问题"
          description="说明行业适配、真实上线、后台管理、认证会员和支付能力。"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-amber-300/14 bg-white/[0.045] p-5 shadow-sm transition hover:border-amber-300/28 hover:bg-white/[0.07]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-amber-200/60 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 leading-7 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
