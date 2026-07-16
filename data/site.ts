export const site = {
  companyName: {
    zh: "進利雷射刀模有限公司",
    en: "Jinli Laser Die-Cutting Co., Ltd.",
  },
  companyShort: {
    zh: "進利雷射",
    en: "Jinli Laser",
  },
  tagline: {
    zh: "精準刀模製作 · 包裝結構協助 · 客製化刀模商品",
    en: "Precision Die-Cutting Molds · Packaging Structure Support · Custom Die Products",
  },
  phone: "+886-4-2380-9569",
  phoneDisplay: "04-2380-9569",
  email: "a23849.a168@msa.hinet.net",
  address: {
    zh: "台中市南屯區筏子東街一段130號",
    en: "No. 130, Sec. 1, Fazidong St., Nantun Dist., Taichung City 408, Taiwan (R.O.C.)",
  },
  googleMapEmbed: "",
  businessHours: {
    zh: "週一至週五 08:30 – 17:30",
    en: "Mon – Fri, 8:30 AM – 5:30 PM",
  },
  facebookPage: "https://www.facebook.com/yourpage",
  messenger: "https://m.me/yourpage",
  siteUrl: "https://die-website.netlify.app",
};

export function buildMailto(lang: "zh" | "en"): string {
  const subject = lang === "zh" ? "Jinli - Die Inquiry" : "Jinli - Die-Cutting Inquiry";
  return "mailto:" + site.email + "?subject=" + encodeURIComponent(subject);
}
