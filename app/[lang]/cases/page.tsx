import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui";
import { PageHero, PageCTA } from "@/components/PageParts";
import CasesGrid from "@/components/CasesGrid";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "cases",
    title: { zh: "刀模案例", en: "Cases" },
    description: {
      zh: "紙盒刀模、泡棉刀模、盤刀、特殊刀模與打樣成型案例展示。",
      en: "Showcase of paper dies, foam dies, circular dies, special dies, and prototyping cases.",
    },
  });
}

export default function CasesPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "刀模案例" : "Cases"}
        title={lang === "zh" ? "刀模作品集" : "Our Die-Making Works"}
        subtitle={
          lang === "zh"
            ? "依類型瀏覽我們的刀模案例。看到類似需求，歡迎直接私訊詢問。"
            : "Browse our die-making works by category. See something similar? Message us directly."
        }
      />
      <section className="py-16">
        <Container>
          <CasesGrid lang={lang} />
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}
