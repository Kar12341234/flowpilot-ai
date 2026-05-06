import { ChevronDown } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "Can FlowPilot AI connect to my existing tools?",
    answer: "Yes. The product concept includes API integrations for CRMs, support desks, databases, and internal tools."
  },
  {
    question: "Do I need technical knowledge to build workflows?",
    answer: "No. Teams can start with templates, then tune triggers, approvals, and AI actions as their needs grow."
  },
  {
    question: "Is this landing page connected to a backend?",
    answer: "No. This portfolio project uses static data and UI components only, so it is easy to deploy."
  },
  {
    question: "Can the design be customized?",
    answer: "Yes. The sections are componentized and styled with Tailwind CSS, making colors and layout easy to adjust."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions before takeoff"
          description="The essentials a buyer would expect from a polished AI SaaS landing page."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/[0.1] bg-white/[0.045] p-5 transition hover:border-sky-300/24 hover:bg-white/[0.07]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 leading-7 text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
