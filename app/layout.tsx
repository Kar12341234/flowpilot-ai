import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "FlowPilot AI | Automate Your Workflow With AI",
  description:
    "FlowPilot AI helps teams, creators, and startups automate repetitive work and boost productivity.",
  openGraph: {
    title: "FlowPilot AI",
    description: "Automate repetitive work and boost productivity with AI.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
