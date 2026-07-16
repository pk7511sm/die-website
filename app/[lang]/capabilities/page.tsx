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
    path: "capabilities",
    title: { zh: "技術能力", en: "Capabilities" },
    description: {
      zh: "自有設備、雷射切割、彎刀加工、高刀與特殊刀材、壓線成型與打樣修正。",
      en: "In-house equipment, laser cutting, steel rule bending, high rules, forming stability, and prototyping.",
    },
  });
}

const caps = (lang: Lang) =>
  lang === "zh"
    ? [
        ["自有設備", "從製作到修正不外包，交期與品質更好掌握。"],
        ["雷射切割", "用於底板與刀模製作，提升精度與一致性。"],
        ["彎刀加工", "依材料與盒型客製刀型，符合裁切需求。"],
        ["高刀與特殊刀材", "支援難裁材料與特殊厚度的裁切需求。"],
        ["壓線與成型穩定度", "規劃壓線與成型方式，提升摺線與成品品質。"],
        ["刀片接點處理", "注重接點細節，降低裁切瑕疵與毛邊。"],
        ["打樣修正", "量產前先確認刀線、結構與材料應用。"],
        ["周邊商品與耗材供應", "提供壓痕條、底板、清廢配件等相關商品。"],
      ]
    : [
        ["In-House Equipment", "From making to correction in-house for better control."],
        ["Laser Cutting", "For die boards and dies — improving precision and consistency."],
        ["Steel Rule Bending", "Custom blade profiles by material and box style."],
        ["High Rules & Specialty Blades", "For hard-to-cut materials and special thicknesses."],
        ["Creasing & Forming Stability", "Planning creasing and forming for better fold quality."],
        ["Joint Finishing", "Attention to rule joints to reduce burrs and defects."],
        ["Prototype Correction", "Confirm cutting lines, structure, and material before production."],
        ["Products & Consumables", "Creasing matrix, base boards, stripping accessories, and more."],
      ];

export default function CapabilitiesPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "技術能力" : "Capabilities"}
        title={lang === "zh" ? "不只接單，更能協助評估製作方式" : "More Than Orders — We Help You Decide How to Build It"}
        subtitle={
          lang === "zh"
            ? "我們用專業但好懂的方式，協助客戶在製作前釐清刀材、刀線與成型方式。"
            : "We help clients clarify blades, cutting lines, and forming methods before production — clearly and practically."
        }
      />
      <section className="py-16">
        <Container>
          <FrameImage
            src="/images/capability.svg"
            alt={lang === "zh" ? "刀模製程與設備" : "Die-making process and equipment"}
            ratio="21/9"
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {caps(lang).map(([title, desc], i) => (
              <div key={i} className="border-t border-slate-200 pt-5">
                <div className="font-display text-sm font-bold text-ember">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 font-display text-lg font-bold text-steel">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}
