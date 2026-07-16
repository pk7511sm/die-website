import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { navItems } from "@/data/navigation";
import { LANGS } from "@/data/translations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of LANGS) {
    for (const item of navItems) {
      const path = item.href ? `/${lang}/${item.href}/` : `/${lang}/`;
      entries.push({
        url: `${site.siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: item.href === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
