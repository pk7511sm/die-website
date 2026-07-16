import type { Metadata } from "next";
import { Lang } from "@/data/translations";
import { site } from "@/data/site";

type SeoInput = {
  lang: Lang;
  path: string; // 例如 "services"，首頁為 ""
  title: { zh: string; en: string };
  description: { zh: string; en: string };
};

/**
 * 產生每頁的 metadata，含 Open Graph 與 hreflang（雙語）。
 */
export function buildMetadata({ lang, path, title, description }: SeoInput): Metadata {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const urlPath = clean ? `/${lang}/${clean}/` : `/${lang}/`;
  const fullUrl = `${site.siteUrl}${urlPath}`;
  const altPath = clean ? `/${clean}/` : `/`;

  const fullTitle = `${title[lang]} | ${site.companyName[lang]}`;

  return {
    metadataBase: new URL(site.siteUrl),
    title: fullTitle,
    description: description[lang],
    alternates: {
      canonical: fullUrl,
      languages: {
        "zh-Hant": `${site.siteUrl}/zh${altPath}`,
        en: `${site.siteUrl}/en${altPath}`,
      },
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description: description[lang],
      url: fullUrl,
      siteName: site.companyName[lang],
      locale: lang === "zh" ? "zh_TW" : "en_US",
      images: [
        {
          url: "/images/og-image.svg",
          width: 1200,
          height: 630,
          alt: site.companyName[lang],
        },
      ],
    },
  };
}
