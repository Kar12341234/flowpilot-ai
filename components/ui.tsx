import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}

export function Button({ children, href = "#", variant = "primary", className = "" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "button-glow bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-700 text-zinc-950 hover:scale-[1.02] hover:from-amber-200 hover:to-amber-600"
      : "border border-amber-300/28 bg-white/[0.06] text-amber-100 shadow-sm hover:border-amber-300/50 hover:bg-white/[0.1]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ${styles} ${className}`}
    >
      {children}
      {variant === "primary" ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
