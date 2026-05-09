"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

export type Locale = "zh-CN" | "zh-TW" | "en";

const copy = {
  "zh-CN": {
    nav: {
      subtitle: "圈层会员小程序",
      links: ["圈层权益", "VIP 界面", "交付流程", "常见问题"],
      case: "认证案例",
      cta: "预约私享演示"
    },
    hero: {
      titleBefore: "打造有身份感的",
      titleAccent: "圈层会员小程序",
      desc: "以「悦澜会」VIP 私享会员小程序为样板，展示黑金视觉、认证身份、专属权益、私享活动与高端预约体验。",
      primary: "查看 VIP 界面",
      secondary: "查看圈层权益",
      metricsTitle: "圈层运营数据",
      metricsSub: "VIP 会员体系预估",
      metrics: [
        ["VIP 身份等级", "5级"],
        ["私享权益场景", "12+"],
        ["认证会员体系", "实名"]
      ],
      appName: "悦澜会",
      appSub: "Black Card Club",
      verified: "已认证",
      tag: "Black Diamond",
      perk: "本周私享权益",
      cardTitle: "城市圈层俱乐部",
      cardDesc: "认证会员、私享空间、定制礼遇与高端活动预约。",
      rating: "5.0 私享评分",
      services: ["身份认证", "私享权益", "高端预约", "圈层活动"],
      booking: "私享预约",
      bookingSub: "顾问制服务",
      gift: "专属礼遇",
      giftSub: "徽章、券包、会籍",
      shop: "圈层臻选",
      shopSub: "限量礼盒 · 私享名额",
      certified: "认证"
    },
    trusted: {
      title: "可组合成高端圈层小程序的核心模块",
      items: ["Black Card", "私享预约", "认证会员", "圈层活动", "臻选商城"]
    },
    features: {
      eyebrow: "Mini Program",
      title: "围绕圈层身份设计的小程序能力",
      desc: "深色、金色、VIP、认证标识与私享权益结合，突出高端感、身份感和稀缺感。",
      items: [
        ["黑金品牌首页", "用深色视觉、金色层级、认证徽章和私享入口，建立高端品牌与身份识别。"],
        ["VIP 身份体系", "支持 Black Card、Diamond、Founder 等等级，展示身份标签、成长值和专属徽章。"],
        ["私享预约服务", "支持顾问制预约、私享空间、限定名额和高端活动预约，突出稀缺感。"],
        ["圈层臻选商城", "展示限量礼盒、会籍卡、权益包和高端服务套餐，强化消费身份感。"],
        ["专属顾问入口", "对接企微顾问、活动报名、入会申请和私域触达，让服务更像一对一接待。"],
        ["认证与权限管理", "支持实名认证、邀请制入会、等级权限和活动名额管理，适合圈层运营。"]
      ]
    },
    dashboard: {
      eyebrow: "UI Showcase",
      title: "黑金质感的 VIP 小程序界面",
      desc: "用手机端样机展示圈层首页、私享预约、会员身份和运营后台，一眼呈现高级感。",
      screens: [
        ["圈层首页", "悦澜会", "Black Card 私享俱乐部", "身份认证", "申请入会"],
        ["私享预约", "预约私享席位", "顾问、空间、活动名额一屏完成", "限定名额", "锁定席位"],
        ["会员中心", "Black Diamond", "徽章、权益、会籍、等级成长", "VIP 身份", "查看权益"]
      ],
      visits: "认证访问",
      benefit: "权益领取",
      entries: [
        ["私享权益", "专属等级开放"],
        ["臻选商城", "限量礼盒会籍"],
        ["专属顾问", "一对一接待"]
      ],
      tabs: ["首页", "权益", "臻选", "我的"],
      backend: "圈层运营后台",
      backendSub: "认证、权益、预约、活动统一管理",
      sync: "实时同步",
      metrics: [["认证会员", "8,260", "+12%"], ["私享预约", "1,286", "+38%"], ["权益领取", "46.2%", "+19%"]],
      modulesTitle: "可交付后台模块",
      modules: ["内容管理", "预约管理", "订单管理", "会员管理", "数据报表", "活动配置"]
    },
    pricing: {
      eyebrow: "Delivery",
      title: "从黑金视觉到可上线圈层小程序",
      desc: "先确定身份感与高级 UI，再推进可点击 Demo 和正式开发。",
      popular: "推荐展示",
      button: "咨询交付方式",
      plans: [
        ["黑金视觉方案", "1-2 天", "先确定深色、金色、VIP、认证标识和核心页面方向，快速判断圈层质感。", ["首页视觉稿", "VIP 组件", "黑金配色", "动效方向"]],
        ["VIP 小程序 Demo", "3-7 天", "搭建可点击的圈层小程序演示，包含认证、权益、私享预约、臻选商城等关键流程。", ["可点击原型", "身份动效", "权益流程", "演示链接"]],
        ["正式开发", "按需求", "进入真实小程序开发，接入后台、支付、预约、会员等级、认证与运营数据。", ["微信小程序", "圈层后台", "支付/预约", "上线部署"]]
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "圈层小程序 Demo 常见问题",
      desc: "说明行业适配、真实上线、后台管理、认证会员和支付能力。",
      items: [
        ["这个页面主要展示什么？", "主要展示黑金高端小程序 UI，并且覆盖 VIP 身份、认证会员、私享预约、权益商城和后台运营。"],
        ["能不能换成其他行业？", "可以。会所、医美、私域零售、高端餐饮、俱乐部、企业家社群都能替换文案、配色、页面结构和业务流程。"],
        ["这是真正的微信小程序吗？", "当前是网页展示 Demo，用来展示视觉和业务能力；正式项目可以开发成真实微信小程序并提交审核上线。"],
        ["后续能不能接支付和后台？", "可以。可扩展微信支付、预约管理、订单管理、会员等级、认证审核、权益配置和内容管理后台。"]
      ]
    },
    cta: {
      title: "一眼看到圈层小程序的身份感",
      desc: "深色、金色、VIP、认证标识与私享权益一起呈现，让小程序看起来更高端、更有门槛。",
      button: "查看交付流程"
    },
    footer: {
      copyright: "© 2026 FlowPilot AI. 圈层会员小程序 Demo."
    }
  },
  "zh-TW": {
    nav: {
      subtitle: "圈層會員小程序",
      links: ["圈層權益", "VIP 介面", "交付流程", "常見問題"],
      case: "認證案例",
      cta: "預約私享演示"
    },
    hero: {
      titleBefore: "打造有身份感的",
      titleAccent: "圈層會員小程序",
      desc: "以「悅瀾會」VIP 私享會員小程序為樣板，展示黑金視覺、認證身份、專屬權益、私享活動與高端預約體驗。",
      primary: "查看 VIP 介面",
      secondary: "查看圈層權益",
      metricsTitle: "圈層營運數據",
      metricsSub: "VIP 會員體系預估",
      metrics: [["VIP 身份等級", "5級"], ["私享權益場景", "12+"], ["認證會員體系", "實名"]],
      appName: "悅瀾會",
      appSub: "Black Card Club",
      verified: "已認證",
      tag: "Black Diamond",
      perk: "本週私享權益",
      cardTitle: "城市圈層俱樂部",
      cardDesc: "認證會員、私享空間、定制禮遇與高端活動預約。",
      rating: "5.0 私享評分",
      services: ["身份認證", "私享權益", "高端預約", "圈層活動"],
      booking: "私享預約",
      bookingSub: "顧問制服務",
      gift: "專屬禮遇",
      giftSub: "徽章、券包、會籍",
      shop: "圈層臻選",
      shopSub: "限量禮盒 · 私享名額",
      certified: "認證"
    },
    trusted: { title: "可組合成高端圈層小程序的核心模組", items: ["Black Card", "私享預約", "認證會員", "圈層活動", "臻選商城"] },
    features: {
      eyebrow: "Mini Program",
      title: "圍繞圈層身份設計的小程序能力",
      desc: "深色、金色、VIP、認證標識與私享權益結合，突出高端感、身份感和稀缺感。",
      items: [
        ["黑金品牌首頁", "用深色視覺、金色層級、認證徽章和私享入口，建立高端品牌與身份識別。"],
        ["VIP 身份體系", "支援 Black Card、Diamond、Founder 等等級，展示身份標籤、成長值和專屬徽章。"],
        ["私享預約服務", "支援顧問制預約、私享空間、限定名額和高端活動預約，突出稀缺感。"],
        ["圈層臻選商城", "展示限量禮盒、會籍卡、權益包和高端服務套餐，強化消費身份感。"],
        ["專屬顧問入口", "對接企微顧問、活動報名、入會申請和私域觸達，讓服務更像一對一接待。"],
        ["認證與權限管理", "支援實名認證、邀請制入會、等級權限和活動名額管理，適合圈層營運。"]
      ]
    },
    dashboard: {
      eyebrow: "UI Showcase",
      title: "黑金質感的 VIP 小程序介面",
      desc: "用手機端樣機展示圈層首頁、私享預約、會員身份和營運後台，一眼呈現高級感。",
      screens: [["圈層首頁", "悅瀾會", "Black Card 私享俱樂部", "身份認證", "申請入會"], ["私享預約", "預約私享席位", "顧問、空間、活動名額一屏完成", "限定名額", "鎖定席位"], ["會員中心", "Black Diamond", "徽章、權益、會籍、等級成長", "VIP 身份", "查看權益"]],
      visits: "認證訪問",
      benefit: "權益領取",
      entries: [["私享權益", "專屬等級開放"], ["臻選商城", "限量禮盒會籍"], ["專屬顧問", "一對一接待"]],
      tabs: ["首頁", "權益", "臻選", "我的"],
      backend: "圈層營運後台",
      backendSub: "認證、權益、預約、活動統一管理",
      sync: "即時同步",
      metrics: [["認證會員", "8,260", "+12%"], ["私享預約", "1,286", "+38%"], ["權益領取", "46.2%", "+19%"]],
      modulesTitle: "可交付後台模組",
      modules: ["內容管理", "預約管理", "訂單管理", "會員管理", "數據報表", "活動配置"]
    },
    pricing: {
      eyebrow: "Delivery",
      title: "從黑金視覺到可上線圈層小程序",
      desc: "先確定身份感與高級 UI，再推進可點擊 Demo 和正式開發。",
      popular: "推薦展示",
      button: "諮詢交付方式",
      plans: [["黑金視覺方案", "1-2 天", "先確定深色、金色、VIP、認證標識和核心頁面方向，快速判斷圈層質感。", ["首頁視覺稿", "VIP 元件", "黑金配色", "動效方向"]], ["VIP 小程序 Demo", "3-7 天", "搭建可點擊的圈層小程序演示，包含認證、權益、私享預約、臻選商城等關鍵流程。", ["可點擊原型", "身份動效", "權益流程", "演示連結"]], ["正式開發", "按需求", "進入真實小程序開發，接入後台、支付、預約、會員等級、認證與營運數據。", ["微信小程序", "圈層後台", "支付/預約", "上線部署"]]]
    },
    faq: {
      eyebrow: "FAQ",
      title: "圈層小程序 Demo 常見問題",
      desc: "說明行業適配、真實上線、後台管理、認證會員和支付能力。",
      items: [["這個頁面主要展示什麼？", "主要展示黑金高端小程序 UI，並且覆蓋 VIP 身份、認證會員、私享預約、權益商城和後台營運。"], ["能不能換成其他行業？", "可以。會所、醫美、私域零售、高端餐飲、俱樂部、企業家社群都能替換文案、配色、頁面結構和業務流程。"], ["這是真正的微信小程序嗎？", "目前是網頁展示 Demo，用來展示視覺和業務能力；正式項目可以開發成真實微信小程序並提交審核上線。"], ["後續能不能接支付和後台？", "可以。可擴展微信支付、預約管理、訂單管理、會員等級、認證審核、權益配置和內容管理後台。"]]
    },
    cta: { title: "一眼看到圈層小程序的身份感", desc: "深色、金色、VIP、認證標識與私享權益一起呈現，讓小程序看起來更高端、更有門檻。", button: "查看交付流程" },
    footer: { copyright: "© 2026 FlowPilot AI. 圈層會員小程序 Demo." }
  },
  en: {
    nav: { subtitle: "Private Membership Mini Program", links: ["Privileges", "VIP UI", "Delivery", "FAQ"], case: "Verified Cases", cta: "Book Private Demo" },
    hero: {
      titleBefore: "Build a status-driven",
      titleAccent: "VIP membership mini program",
      desc: "A black-and-gold private membership mini program concept with verified identity, exclusive privileges, private events, and premium booking flows.",
      primary: "View VIP UI",
      secondary: "Explore Privileges",
      metricsTitle: "Membership Metrics",
      metricsSub: "VIP system preview",
      metrics: [["VIP tiers", "5"], ["Privilege scenes", "12+"], ["Verified members", "ID"]],
      appName: "Yuelan Club",
      appSub: "Black Card Club",
      verified: "Verified",
      tag: "Black Diamond",
      perk: "This Week's Privilege",
      cardTitle: "Private City Club",
      cardDesc: "Verified members, private spaces, tailored benefits, and premium event booking.",
      rating: "5.0 private rating",
      services: ["Identity", "Privileges", "Booking", "Events"],
      booking: "Private Booking",
      bookingSub: "Concierge service",
      gift: "Exclusive Gifts",
      giftSub: "Badges, vouchers, membership",
      shop: "Curated Selection",
      shopSub: "Limited gifts · private quota",
      certified: "Certified"
    },
    trusted: { title: "Core modules for premium membership mini programs", items: ["Black Card", "Private Booking", "Verified Members", "Club Events", "Curated Shop"] },
    features: {
      eyebrow: "Mini Program",
      title: "Mini program features designed around status",
      desc: "Dark UI, gold accents, VIP labels, verified badges, and exclusive privileges create a premium, gated feeling.",
      items: [["Black-gold home", "Dark visuals, gold hierarchy, verified badges, and private access points define a premium identity."], ["VIP identity system", "Support Black Card, Diamond, Founder tiers, status tags, growth values, and exclusive badges."], ["Private booking", "Concierge booking, private spaces, limited quotas, and premium event reservations."], ["Curated shop", "Limited gift boxes, membership cards, privilege packs, and premium service bundles."], ["Concierge entry", "Connect advisors, event registration, membership applications, and private community touchpoints."], ["Verification & access", "Support ID verification, invite-only membership, tier permissions, and event quota management."]]
    },
    dashboard: {
      eyebrow: "UI Showcase",
      title: "Black-gold VIP mini program UI",
      desc: "Showcase club home, private booking, member identity, and operations dashboard in realistic mobile screens.",
      screens: [["Club Home", "Yuelan Club", "Black Card private club", "Verified Identity", "Apply Now"], ["Private Booking", "Reserve a Private Seat", "Advisor, space, and event quota in one flow", "Limited Seats", "Reserve"], ["Member Center", "Black Diamond", "Badges, privileges, membership, and tier growth", "VIP Status", "View Benefits"]],
      visits: "Verified visits",
      benefit: "Benefits claimed",
      entries: [["Private Benefits", "Unlocked by tier"], ["Curated Shop", "Limited gifts"], ["Concierge", "One-on-one service"]],
      tabs: ["Home", "Benefits", "Shop", "Me"],
      backend: "Membership Ops Dashboard",
      backendSub: "Verification, benefits, booking, and events in one place",
      sync: "Live sync",
      metrics: [["Verified members", "8,260", "+12%"], ["Bookings", "1,286", "+38%"], ["Benefits claimed", "46.2%", "+19%"]],
      modulesTitle: "Deliverable backend modules",
      modules: ["Content", "Bookings", "Orders", "Members", "Reports", "Events"]
    },
    pricing: {
      eyebrow: "Delivery",
      title: "From black-gold UI to launch-ready mini program",
      desc: "Define premium identity and UI first, then move into clickable demo and full development.",
      popular: "Recommended",
      button: "Discuss Delivery",
      plans: [["Black-gold UI", "1-2 days", "Define dark UI, gold accents, VIP marks, verified badges, and key screen direction.", ["Home design", "VIP components", "Palette", "Motion direction"]], ["VIP Demo", "3-7 days", "Build a clickable VIP mini program demo with verification, privileges, booking, and curated shop flows.", ["Clickable prototype", "Identity motion", "Privilege flow", "Demo link"]], ["Development", "Custom", "Build the real mini program with backend, payment, booking, membership tiers, verification, and analytics.", ["WeChat mini program", "Membership admin", "Payment/booking", "Launch"]]]
    },
    faq: {
      eyebrow: "FAQ",
      title: "VIP mini program demo FAQ",
      desc: "Answers for industry fit, launch, backend, verified membership, and payment capabilities.",
      items: [["What does this page show?", "A black-gold premium mini program UI covering VIP status, verified members, private booking, privilege shop, and backend operations."], ["Can it fit another industry?", "Yes. Private clubs, beauty, premium retail, restaurants, founder communities, and service brands can all be adapted."], ["Is this a real WeChat mini program?", "This is a web demo for visual and business presentation. A real WeChat mini program can be built and submitted for review."], ["Can it connect payment and backend?", "Yes. It can support WeChat Pay, bookings, orders, membership tiers, verification review, privileges, and content management."]]
    },
    cta: { title: "Make the mini program feel premium at first glance", desc: "Dark UI, gold accents, VIP status, verified marks, and private privileges create a stronger sense of identity and exclusivity.", button: "View Delivery Flow" },
    footer: { copyright: "© 2026 FlowPilot AI. VIP membership mini program demo." }
  }
} as const;

type Copy = typeof copy["zh-CN"];
const defaultLocale: Locale = "zh-CN";
const storageKey = "flowpilot-locale";

function isLocale(value: string | null): value is Locale {
  return value === "zh-CN" || value === "zh-TW" || value === "en";
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const saved = window.localStorage.getItem(storageKey);
  return isLocale(saved) ? saved : defaultLocale;
}

function subscribeToLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("flowpilot-locale-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("flowpilot-locale-change", callback);
  };
}

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Copy;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getStoredLocale, () => defaultLocale);
  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(storageKey, nextLocale);
    window.dispatchEvent(new Event("flowpilot-locale-change"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, copy: copy[locale] as Copy }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
