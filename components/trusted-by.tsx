import { Container } from "@/components/ui";

const companies = ["NovaTech", "Cloudly", "BuildFlow", "TaskZen", "OpenScale"];

export function TrustedBy() {
  return (
    <section className="relative py-10">
      <Container>
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.035] px-6 py-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Trusted by modern product teams
          </p>
          <div className="mt-7 grid grid-cols-2 gap-5 text-center sm:grid-cols-3 lg:grid-cols-5">
            {companies.map((company) => (
              <div key={company} className="text-lg font-semibold text-slate-300 transition hover:text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
