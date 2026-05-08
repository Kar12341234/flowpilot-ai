import { Rocket } from "lucide-react";
import { Button, Container } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-8 text-center shadow-[0_30px_90px_rgba(37,99,235,0.22)] sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
            <Rocket className="h-7 w-7 text-white" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">让客户一眼看懂 AI 如何创造业务价值</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
            用清晰的典型案例、真实的业务语言和可视化成效，让演示从“技术展示”变成“管理层决策材料”。
          </p>
          <Button href="#pricing" variant="secondary" className="mt-8">
            进入实施路径
          </Button>
        </div>
      </Container>
    </section>
  );
}
