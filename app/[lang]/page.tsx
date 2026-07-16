import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import {
  Hero,
  ServicesPreview,
  WhyUs,
  CapabilitiesPreview,
  CasesPreview,
  ProductsPreview,
  VideosPreview,
  ProcessPreview,
  FinalCTA,
} from "@/components/home/sections";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "",
    title: {
      zh: "刀模廠 · 紙盒刀模 · 泡棉刀模 · 客製刀模",
      en: "Die-Cutting Mold Manufacturer · Custom Cutting Dies",
    },
    description: {
      zh: "台中刀模廠，提供紙盒刀模、泡棉刀模、特殊刀模、盤刀與彎刀加工、打樣協助與刀模商品。歡迎透過 FB 私訊或 Email 詢價。",
      en: "Taiwan die-cutting mold manufacturer offering paper packaging dies, foam cutting dies, steel rule dies, prototyping support, and die-making products. Inquire via Facebook or email.",
    },
  });
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <Hero lang={lang} />
      <ServicesPreview lang={lang} />
      <WhyUs lang={lang} />
      <CapabilitiesPreview lang={lang} />
      <CasesPreview lang={lang} />
      <ProductsPreview lang={lang} />
      <VideosPreview lang={lang} />
      <ProcessPreview lang={lang} />
      <FinalCTA lang={lang} />
    </>
  );
}
