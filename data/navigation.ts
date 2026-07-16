import { Localized, t } from "./translations";

export type NavItem = {
  href: string; // 相對於 /[lang] 的路徑，例如 "services"，首頁為 ""
  label: Localized;
};

/**
 * 主導覽列項目。href 為空字串代表首頁。
 * 實際連結會自動加上語言前綴，例如 /zh/services。
 */
export const navItems: NavItem[] = [
  { href: "", label: t.nav.home },
  { href: "about", label: t.nav.about },
  { href: "services", label: t.nav.services },
  { href: "capabilities", label: t.nav.capabilities },
  { href: "cases", label: t.nav.cases },
  { href: "products", label: t.nav.products },
  { href: "videos", label: t.nav.videos },
  { href: "quote", label: t.nav.quote },
  { href: "contact", label: t.nav.contact },
];
