import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Lang } from "@/data/translations";
import { Container, InquiryButtons } from "@/components/ui";
import { PageHero } from "@/components/PageParts";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "quote",
    title: { zh: "詢價流程", en: "Quote Process" },
    description: {
      zh: "詢價時請提供圖檔、尺寸、材料、用途、數量與交期。圖檔請透過 Email 或 FB 私訊提供。",
      en: "For quotations, provide drawing files, dimensions, material, application, quantity, and lead time via email or Facebook.",
    },
  });
}

export default function QuotePage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);

  const items =
    lang === "zh"
      ? [
          "產品用途",
          "刀模類型",
          "圖檔格式：AI / PDF / DXF / CAD",
          "成品尺寸",
          "材料種類與厚度",
          "數量需求",
          "是否需要打樣",
          "預計交期",
          "聯絡方式",
        ]
      : [
          "Product application",
          "Type of cutting die",
          "Drawing file format: AI / PDF / DXF / CAD",
          "Finished size",
          "Material type and thickness",
          "Quantity",
          "Whether prototyping is required",
          "Expected lead time",
          "Contact information",
        ];

  const note =
    lang === "zh"
      ? "圖檔請透過 Email 或 FB 私訊提供，網站本身不提供檔案上傳功能，以確保資料傳遞與資安管理更單純。"
      : "Please send drawing files through Email or Facebook Messenger. This website does not provide direct file upload in order to keep file handling and security management simple.";

  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "詢價流程" : "Quote Process"}
        title={lang === "zh" ? "詢價時請提供以下資訊" : "What to Include in Your Inquiry"}
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-slate-100 pb-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 font-display text-xs font-bold text-steel">
                    {i + 1}
                  </span>
                  <span className="text-base text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border-l-4 border-ember bg-slate-50 p-5">
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-steel">
                  {lang === "zh" ? "提醒：" : "Note: "}
                </span>
                {note}
              </p>
            </div>
          </div>

          {/* 流程步驟 */}
          <div className="rounded-lg bg-ink p-7 text-white">
            <h2 className="font-display text-lg font-bold">
              {lang === "zh" ? "合作流程" : "How We Work"}
            </h2>
            <ol className="mt-6 space-y-5">
              {(lang === "zh"
                ? ["提供圖檔與需求", "確認尺寸、材料與用途", "評估刀模製作方式", "製作、打樣與修正", "交付與後續支援"]
                : ["Send files & requirements", "Confirm size, material & use", "Evaluate the die method", "Make, prototype & correct", "Delivery & support"]
              ).map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-xl font-bold text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-0.5 text-sm text-slate-200">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <InquiryButtons lang={lang} dark />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
