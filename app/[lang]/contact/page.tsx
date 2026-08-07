import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Lang, t } from "@/data/translations";
import { site, buildMailto } from "@/data/site";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageParts";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "contact",
    title: { zh: "聯絡我們", en: "Contact" },
    description: {
      zh: "透過 Facebook 私訊、Email、電話與我們聯絡，或查看公司地址與營業時間。",
      en: "Contact us via Facebook Messenger, email, or phone. See our address and business hours.",
    },
  });
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);

  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "聯絡我們" : "Contact"}
        title={lang === "zh" ? "與我們聯絡" : "Get in Touch"}
        subtitle={
          lang === "zh"
            ? "歡迎透過 Facebook 私訊或 Email 詢價。報價時請提供圖檔、尺寸、材質、用途、數量與預計交期。"
            : "Reach us via Facebook Messenger or email. For quotations, please include drawing files, dimensions, material, application, quantity, and expected lead time."
        }
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* 聯絡資訊 */}
          <div>
            <h2 className="font-display text-xl font-bold text-steel">
              {site.companyName[lang]}
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              <InfoRow label={lang === "zh" ? "電話" : "Phone"}>
                <a href={`tel:${site.phone}`} className="text-slate-600 hover:text-ember">
                  {site.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow label="Email">
                <a href={buildMailto(lang)} className="text-slate-600 hover:text-ember">
                  {site.email}
                </a>
              </InfoRow>
              <InfoRow label={lang === "zh" ? "地址" : "Address"}>
                <span className="text-slate-600">{site.address[lang]}</span>
              </InfoRow>
              <InfoRow label={lang === "zh" ? "營業時間" : "Hours"}>
                <span className="text-slate-600">{site.businessHours[lang]}</span>
              </InfoRow>
              <InfoRow label="Facebook">
                <a
                  href={site.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-ember"
                >
                  {t.cta.followFb[lang]} →
                </a>
              </InfoRow>
              <InfoRow label="Instagram">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-ember"
                >
                  {site.instagramHandle} →
                </a>
              </InfoRow>
            </dl>

            {/* CTA 按鈕 */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={buildMailto(lang)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 text-sm font-semibold text-white hover:bg-ember-dark"
              >
                {t.cta.email[lang]}
              </a>
              <a
                href={buildMailto(lang)}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-steel hover:border-steel"
              >
                {t.cta.sendFiles[lang]}
              </a>
            </div>
            <div className="mt-3 flex gap-3">
              <a
                href={site.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-ember"
              >
                {t.cta.followFb[lang]} →
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-ember"
              >
                {t.cta.followIg[lang]} →
              </a>
            </div>
          </div>

          {/* 地圖 */}
          <div>
            {site.googleMapEmbed ? (
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-slate-200">
                <iframe
                  src={site.googleMapEmbed}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={lang === "zh" ? "公司位置" : "Company location"}
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-400">
                {lang === "zh"
                  ? "（在 data/site.ts 填入 Google Map 嵌入網址後顯示地圖）"
                  : "(Add a Google Map embed URL in data/site.ts to show the map)"}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-slate-100 pb-4">
      <dt className="w-20 shrink-0 font-semibold text-steel">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
