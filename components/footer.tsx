import { Bot, Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui";

const links = ["Features", "Pricing", "FAQ", "Login"];
const socials = [
  { label: "Twitter", icon: Twitter },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/14 bg-white/[0.08]">
              <Bot className="h-5 w-5 text-sky-300" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight">FlowPilot AI</span>
          </a>
          <p className="mt-4 text-sm text-slate-500">© 2026 FlowPilot AI. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-400">
          {links.map((link) => (
            <a key={link} href={link === "Login" ? "#" : `#${link.toLowerCase()}`} className="transition hover:text-white">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] text-slate-300 transition hover:border-sky-300/40 hover:text-white"
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
