"use client";

import { Crown, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui";

const socials = [
  { label: "Twitter", icon: Twitter },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin }
];

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-amber-300/12 bg-black py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/20 bg-gradient-to-br from-amber-300 to-amber-700">
              <Crown className="h-5 w-5 text-zinc-950" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">FlowPilot AI</span>
          </a>
          <p className="mt-4 text-sm text-zinc-500">{copy.footer.copyright}</p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-medium text-zinc-500">
          {copy.nav.links.map((link) => (
            <a key={link} href="#" className="transition hover:text-amber-200">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/14 bg-white/[0.05] text-zinc-500 transition hover:border-amber-300/34 hover:text-amber-200"
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
