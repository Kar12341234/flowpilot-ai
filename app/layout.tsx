import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPilot AI | 高端小程序案例 Demo",
  description:
    "高端小程序案例展示，覆盖品牌展示、会员运营、预约服务、商城转化与数据看板。",
  openGraph: {
    title: "FlowPilot AI 高端小程序案例",
    description: "展示高级 UI 小程序如何承载品牌、服务和交易。",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
