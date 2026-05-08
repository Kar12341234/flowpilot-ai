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
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[linear-gradient(120deg,rgba(219,234,254,0.9),rgba(255,255,255,0.82)_46%,rgba(240,253,250,0.78))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] grid-mask opacity-55" />
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
