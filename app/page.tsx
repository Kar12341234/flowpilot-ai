import { CTA } from "@/components/cta";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { TrustedBy } from "@/components/trusted-by";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] grid-mask opacity-45" />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DashboardPreview />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
