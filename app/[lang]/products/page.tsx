import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui";
import { PageHero, PageCTA } from "@/components/PageParts";
import ProductsGrid from "@/components/ProductsGrid";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "products",
    title: { zh: "商品目錄", en: "Products" },
    description: {
      zh: "刀模耗材、壓痕條、清廢配件、底板與鐵板、刀材與客製化刀模配件。",
      en: "Die consumables, creasing matrix, waste stripping, base boards, steel plates, and custom die components.",
    },
  });
}

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const intro =
    lang === "zh"
      ? "我們提供多種刀模製作與加工相關商品，包含壓痕條、底模板、清廢相關用品、刀材、泡棉、鐵板與客製化刀模配件。由於不同材料、設備與加工需求會影響適用規格，建議您提供使用用途、尺寸、材料與數量，我們將協助確認適合的商品與報價。"
      : "We provide a range of die-making products and accessories, including creasing matrix, base boards, waste stripping accessories, cutting materials, foam, steel plates, and custom die-related components. Since specifications may vary depending on material, equipment, dimensions, and production requirements, please send us your application, size, material, and quantity. We will help confirm the suitable product and quotation.";

  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "商品目錄" : "Products"}
        title={lang === "zh" ? "刀模相關商品與耗材" : "Die-Making Products & Accessories"}
        subtitle={intro}
      />
      <section className="py-16">
        <Container>
          <ProductsGrid lang={lang} />
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}
