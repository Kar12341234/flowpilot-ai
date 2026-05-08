import { Crown, Menu } from "lucide-react";
import { Button, Container } from "@/components/ui";

const navItems = [
  { label: "圈层权益", href: "#features" },
  { label: "VIP 界面", href: "#dashboard" },
  { label: "交付流程", href: "#pricing" },
  { label: "常见问题", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/12 bg-black/72 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/20 bg-gradient-to-br from-amber-300 to-amber-700 shadow-[0_16px_36px_rgba(212,175,55,0.22)]">
            <Crown className="h-5 w-5 text-zinc-950" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight text-white">FlowPilot AI</span>
            <span className="block text-xs font-medium text-amber-200/70">圈层会员小程序</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-amber-200">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:text-amber-100">
            认证案例
          </a>
          <Button href="#pricing" className="min-h-10 px-4">
            预约私享演示
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/20 bg-white/[0.06] text-amber-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
    </header>
  );
}
