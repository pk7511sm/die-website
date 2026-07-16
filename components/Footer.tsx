import Link from "next/link";
import { Lang, t } from "@/data/translations";
import { navItems } from "@/data/navigation";
import { site, buildMailto } from "@/data/site";
import { link } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-slate-200 bg-ink text-slate-300">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 公司 */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-white/10">
                <span className="block h-3.5 w-3.5 border-2 border-ember" />
              </span>
              <span className="font-display text-base font-bold text-white">
                {site.companyName[lang]}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline[lang]}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks[lang]}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={link(lang, item.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactInfo[lang]}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>{site.address[lang]}</li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={buildMailto(lang)} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.businessHours[lang]}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={site.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-ember px-3 py-2 text-xs font-semibold text-white hover:bg-ember-dark"
              >
                {t.cta.messenger[lang]}
              </a>
              <a
                href={site.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/20 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
              >
                {t.cta.viewPage[lang]}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">{t.footer.inquiryReminder[lang]}</p>
          <p className="mt-2 text-xs text-slate-600">
            © {year} {site.companyName[lang]} · {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* 手機版浮動詢價列（sticky bottom），桌機隱藏 */
export function MobileStickyCTA({ lang }: { lang: Lang }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 lg:hidden">
      <a
        href={site.messenger}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-ember py-3.5 text-sm font-semibold text-white"
      >
        {t.cta.messenger[lang]}
      </a>
      <a
        href={buildMailto(lang)}
        className="flex items-center justify-center gap-1.5 bg-steel py-3.5 text-sm font-semibold text-white"
      >
        {t.cta.email[lang]}
      </a>
    </div>
  );
}
