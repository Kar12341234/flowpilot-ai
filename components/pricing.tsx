import { CheckCircle2 } from "lucide-react";
import { Button, Container, SectionHeader } from "@/components/ui";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For creators and solo operators starting with AI automation.",
    features: ["5 active workflows", "Basic analytics", "Email support", "1,000 AI runs"],
    featured: false
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams that need collaboration and reliable scale.",
    features: ["25 active workflows", "Advanced analytics", "Team permissions", "20,000 AI runs"],
    featured: true
  },
  {
    name: "Business",
    price: "$99",
    description: "For companies with complex operations and security needs.",
    features: ["Unlimited workflows", "Custom integrations", "Priority support", "Audit logs"],
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple plans that scale with your workflow"
          description="Start small, upgrade when your automations become part of the operating rhythm."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-sky-300/34 bg-gradient-to-br from-indigo-500/18 via-white/[0.07] to-sky-400/12 shadow-glow"
                  : "border-white/[0.1] bg-white/[0.045] hover:border-sky-300/22 hover:bg-white/[0.07]"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-sky-300 px-3 py-1 text-xs font-bold text-slate-950">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 min-h-[56px] text-sm leading-7 text-slate-400">{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                <span className="pb-2 text-slate-400">/mo</span>
              </div>
              <Button href="#" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                Get Started
              </Button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
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
