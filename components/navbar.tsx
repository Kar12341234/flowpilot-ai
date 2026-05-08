import { Building2, Menu } from "lucide-react";
import { Button, Container } from "@/components/ui";

const navItems = [
  { label: "案例概览", href: "#features" },
  { label: "成效看板", href: "#dashboard" },
  { label: "实施路径", href: "#pricing" },
  { label: "常见问题", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-700 shadow-[0_16px_36px_rgba(37,99,235,0.2)]">
            <Building2 className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight text-slate-950">FlowPilot AI</span>
            <span className="block text-xs font-medium text-slate-500">企业智能运营案例</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-blue-700">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950">
            客户登录
          </a>
          <Button href="#pricing" className="min-h-10 px-4">
            预约演示
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
    </header>
  );
}
