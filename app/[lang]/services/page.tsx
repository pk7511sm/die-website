import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Lang, t } from "@/data/translations";
import { services } from "@/data/services";
import { Container, FrameImage, AskLink } from "@/components/ui";
import { PageHero, PageCTA } from "@/components/PageParts";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "services",
    title: { zh: "服務項目", en: "Services" },
    description: {
      zh: "紙盒刀模、泡棉刀模、盤刀與彎刀加工、特殊刀模、打樣與結構協助。",
      en: "Paper packaging dies, foam cutting dies, circular dies, special dies, and prototyping support.",
    },
  });
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "服務項目" : "Services"}
        title={lang === "zh" ? "刀模製作服務" : "Die-Making Services"}
        subtitle={
          lang === "zh"
            ? "從紙盒到特殊材料，提供完整的刀模製作與結構協助。可依 AI、PDF、DXF 或 CAD 圖檔製作。"
            : "From paper to specialty materials — complete die-making and structural support, made from AI, PDF, DXF, or CAD files."
        }
      />
      <section className="py-16">
        <Container className="space-y-12">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FrameImage src={s.image} alt={s.title[lang]} ratio="4/3" />
              <div>
                <h2 className="font-display text-2xl font-bold text-steel">
                  {s.title[lang]}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {s.description[lang]}
                </p>
                <dl className="mt-5 space-y-2 text-sm">
                  <Row label={t.label.industries[lang]} value={s.industries[lang]} />
                  <Row label={t.label.materials[lang]} value={s.materials[lang]} />
                  <Row label={t.label.commonNeeds[lang]} value={s.commonNeeds[lang]} />
                </dl>
                <div className="mt-5">
                  <AskLink lang={lang} label={t.cta.askService[lang]} />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 border-t border-slate-100 pt-2">
      <dt className="w-24 shrink-0 font-semibold text-steel">{label}</dt>
      <dd className="text-slate-500">{value}</dd>
    </div>
  );
}
