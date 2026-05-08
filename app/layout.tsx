import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "FlowPilot AI | 企业智能运营典型案例 Demo",
  description:
    "面向中国大陆企业客户的 AI 运营中台典型案例展示，覆盖业务痛点、解决方案、实施路径与经营成效。",
  openGraph: {
    title: "FlowPilot AI 企业典型案例",
    description: "AI 运营中台典型案例展示，适用于企业客户售前演示与作品集展示。",
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
