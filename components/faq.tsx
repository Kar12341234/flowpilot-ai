import { ChevronDown } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "这个 Demo 适合给什么客户看？",
    answer: "适合制造、园区、连锁、企业服务等 B2B 客户，尤其是关注流程效率、经营数据和管理可视化的决策层。"
  },
  {
    question: "是否需要真实客户数据？",
    answer: "不需要。当前版本使用脱敏假数据，适合作品集、售前演示和方案讲解；后续可替换为客户自己的数据结构。"
  },
  {
    question: "能否部署到 Netlify 或 Vercel？",
    answer: "可以。项目是 Next.js 静态页面展示，不依赖后端服务，构建通过后即可部署。"
  },
  {
    question: "后续能扩展成真实系统吗？",
    answer: "可以。当前是前端 Demo，后续可接入 CRM、OA、ERP 或数据仓库，扩展为真实的企业运营工作台。"
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="客户会议里常见的四个问题"
          description="提前覆盖客户最关心的数据、部署、扩展和演示适配问题。"
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
