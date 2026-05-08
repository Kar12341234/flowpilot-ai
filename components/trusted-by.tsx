import { Container } from "@/components/ui";

const companies = ["品牌官网", "会员中心", "预约服务", "精品商城", "企业门户"];

export function TrustedBy() {
  return (
    <section className="relative py-10">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            可快速包装成客户看得懂的小程序业务场景
          </p>
          <div className="mt-7 grid grid-cols-2 gap-5 text-center sm:grid-cols-3 lg:grid-cols-5">
            {companies.map((company) => (
              <div key={company} className="text-lg font-semibold text-slate-700 transition hover:text-blue-700">
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
