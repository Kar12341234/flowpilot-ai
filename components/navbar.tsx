import { Bot, Menu } from "lucide-react";
import { Button, Container } from "@/components/ui";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/72 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/14 bg-white/[0.08] shadow-glow">
            <Bot className="h-5 w-5 text-sky-300" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">FlowPilot AI</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:text-white">
            Login
          </a>
          <Button href="#pricing" className="min-h-10 px-4">
            Get Started
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
    </header>
  );
}
