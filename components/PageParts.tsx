import { Lang, t } from "@/data/translations";
import { Container, InquiryButtons } from "@/components/ui";

/* 內頁頂部標題區 */
export function PageHero({
  lang,
  kicker,
  title,
  subtitle,
}: {
  lang: Lang;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-12 lg:py-16">
        <p className="kicker-line text-xs font-semibold uppercase tracking-[0.18em] text-ember">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-steel sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

/* 內頁底部詢價 CTA 區 */
export function PageCTA({ lang }: { lang: Lang }) {
  return (
    <section className="bg-steel py-14">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
            {lang === "zh" ? "準備好詢價了嗎？" : "Ready to Inquire?"}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-200">
            {t.footer.inquiryReminder[lang]}
          </p>
        </div>
        <div className="shrink-0">
          <InquiryButtons lang={lang} dark />
        </div>
      </Container>
    </section>
  );
}
