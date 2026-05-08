import { ChevronDown } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "这个页面主要给客户看什么？",
    answer: "主要让客户直观看到我们能做高质感小程序 UI，并且能覆盖品牌展示、预约、会员、商城和后台运营。"
  },
  {
    question: "能不能换成客户自己的行业？",
    answer: "可以。美容、餐饮、零售、教育、会所、园区、企业服务都能替换文案、配色、页面结构和业务流程。"
  },
  {
    question: "这是真正的微信小程序吗？",
    answer: "当前是网页展示 Demo，用来给客户看视觉和业务能力；正式项目可以开发成真实微信小程序并提交审核上线。"
  },
  {
    question: "后续能不能接支付和后台？",
    answer: "可以。可扩展微信支付、预约管理、订单管理、会员积分、客服消息和内容管理后台。"
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="客户看小程序 Demo 时最常问的问题"
          description="提前回答客户对行业适配、真实上线、后台管理和支付能力的疑问。"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-950">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
