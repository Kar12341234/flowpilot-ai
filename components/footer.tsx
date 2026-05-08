import { Building2, Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui";

const links = ["小程序案例", "界面展示", "交付流程", "常见问题"];
const socials = [
  { label: "Twitter", icon: Twitter },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-700">
              <Building2 className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-950">FlowPilot AI</span>
          </a>
          <p className="mt-4 text-sm text-slate-500">© 2026 FlowPilot AI. 高端小程序案例 Demo.</p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-500">
          {links.map((link) => (
            <a key={link} href="#" className="transition hover:text-blue-700">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
