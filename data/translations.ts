/**
 * ============================================================
 *  介面文字（按鈕、選單、區塊標題）中英對照
 * ============================================================
 *  頁面內容（服務、商品、案例）放在各自的 data 檔，
 *  這裡只放「介面共用字串」。
 */

export type Lang = "zh" | "en";

export const LANGS: Lang[] = ["zh", "en"];

export type Localized = { zh: string; en: string };

export const t = {
  // 共用 CTA
  cta: {
    messenger: { zh: "FB 私訊詢價", en: "Message Us on Facebook" },
    email: { zh: "Email 詢價", en: "Send Inquiry by Email" },
    viewServices: { zh: "查看服務項目", en: "View Our Services" },
    askSimilar: { zh: "詢問類似刀模", en: "Ask About a Similar Die" },
    askProduct: { zh: "詢問此商品", en: "Ask About This Product" },
    askService: { zh: "詢問此服務", en: "Ask About This Service" },
    watchVideo: { zh: "觀看影片", en: "Watch Video" },
    sendFiles: { zh: "傳送圖檔與需求", en: "Send Drawing Files" },
    viewPage: { zh: "前往粉專", en: "Visit Facebook Page" },
  },

  nav: {
    home: { zh: "首頁", en: "Home" },
    about: { zh: "關於我們", en: "About" },
    services: { zh: "服務項目", en: "Services" },
    capabilities: { zh: "技術能力", en: "Capabilities" },
    cases: { zh: "刀模案例", en: "Cases" },
    products: { zh: "商品目錄", en: "Products" },
    videos: { zh: "影片展示", en: "Videos" },
    quote: { zh: "詢價流程", en: "Quote Process" },
    contact: { zh: "聯絡我們", en: "Contact" },
  },

  // 通用標籤
  label: {
    industries: { zh: "適用產業", en: "Industries" },
    materials: { zh: "適用材料", en: "Materials" },
    commonNeeds: { zh: "常見需求", en: "Common Needs" },
    application: { zh: "用途", en: "Application" },
    scope: { zh: "適用範圍", en: "Scope" },
    specs: { zh: "可選規格", en: "Available Specs" },
    category: { zh: "分類", en: "Category" },
    allCategories: { zh: "全部", en: "All" },
    langSwitch: { zh: "EN", en: "中文" },
    placeholderNote: {
      zh: "（示意圖，實際圖片日後更換）",
      en: "(Placeholder — actual image to be added)",
    },
  },

  footer: {
    quickLinks: { zh: "快速連結", en: "Quick Links" },
    contactInfo: { zh: "聯絡資訊", en: "Contact" },
    inquiryReminder: {
      zh: "需要報價請提供圖檔、尺寸、材質、用途、數量與預計交期。",
      en: "For quotations, please provide drawing files, dimensions, material, application, quantity, and expected lead time.",
    },
    rights: { zh: "版權所有", en: "All rights reserved." },
  },
};
