import { Lang, LANGS } from "@/data/translations";

/** 驗證並回傳合法語言，預設 zh */
export function normalizeLang(value: string): Lang {
  return (LANGS as string[]).includes(value) ? (value as Lang) : "zh";
}

/** 產生帶語言前綴的內部連結，例如 link("zh", "services") => /zh/services/ */
export function link(lang: Lang, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** 另一語言（給語言切換用） */
export function otherLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}
