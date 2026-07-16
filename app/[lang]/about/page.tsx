import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Lang } from "@/data/translations";
import { Container, FrameImage } from "@/components/ui";
import { PageHero, PageCTA } from "@/components/PageParts";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "about",
    title: { zh: "關於我們", en: "About Us" },
    description: {
      zh: "了解我們的刀模製作經驗、設備能力與對品質的堅持。",
      en: "Learn about our die-making experience, equipment, and commitment to quality.",
    },
  });
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const body =
    lang === "zh"
      ? {
          kicker: "關於我們",
          title: "懂包裝結構與材料應用的刀模製造夥伴",
          sub: "我們專注於刀模製作與結構協助，從紙盒到特殊材料，協助客戶把設計穩定地帶到量產。",
          paras: [
            "我們是一間位於台灣的刀模廠，長期服務印刷廠、包裝廠、紙器廠、品牌客戶與特殊材料加工客戶。",
            "我們相信刀模不只是裁切工具，而是影響成型品質、交期與成本的關鍵環節。因此我們重視圖面確認、刀線與壓線的規劃，以及量產前的打樣修正。",
            "透過自有設備與多年經驗，我們希望成為客戶長期信賴的製造夥伴，而不只是單次接單的供應商。",
          ],
        }
      : {
          kicker: "About Us",
          title: "A Die-Making Partner Who Understands Packaging Structure",
          sub: "We focus on die-making and structural support, helping clients bring designs from concept to stable mass production.",
          paras: [
            "We are a Taiwan-based die-cutting mold manufacturer serving printing houses, packaging plants, paperboard converters, brand owners, and specialty material processors.",
            "We believe a cutting die is not merely a tool — it is a key factor in forming quality, lead time, and cost. That is why we emphasize drawing review, cutting-line and creasing planning, and prototype correction before production.",
            "With in-house equipment and years of experience, we aim to be a long-term manufacturing partner rather than a one-time supplier.",
          ],
        };

  return (
    <>
      <PageHero lang={lang} kicker={body.kicker} title={body.title} subtitle={body.sub} />
      <section className="py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {body.paras.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>
          <FrameImage
            src="/images/about.svg"
            alt={lang === "zh" ? "工廠設備與刀模製作" : "Factory equipment and die-making"}
            ratio="4/3"
          />
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}
