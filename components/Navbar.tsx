"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang, t } from "@/data/translations";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { link, otherLang } from "@/lib/i18n";

export default function Navbar({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  // 目前頁面對應到另一語言的路徑（保留同一頁）
  const rest = pathname.replace(/^\/(zh|en)/, "").replace(/^\/+|\/+$/g, "");
  const switchHref = link(otherLang(lang), rest);

  function isActive(href: string) {
    const target = link(lang, href);
    return pathname === target || pathname === target.replace(/\/$/, "");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href={link(lang, "")} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded bg-steel">
            <span className="block h-3.5 w-3.5 border-2 border-ember" />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-steel">
            {lang === "zh" ? "進利雷射" : "Jinli Laser"}
          </span>
        </Link>

        {/* 桌機選單 */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={link(lang, item.href)}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-ember"
                    : "text-slate-600 hover:text-steel"
                }`}
              >
                {item.label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        {/* 右側：語言切換 + 桌機 CTA */}
        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            className="rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-steel transition-colors hover:border-steel"
            aria-label="Switch language"
          >
            {t.label.langSwitch[lang]}
          </Link>

          <a
            href={site.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-ember px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ember-dark sm:inline-flex lg:inline-flex"
          >
            {lang === "zh" ? "FB 詢價" : "Inquire"}
          </a>

          {/* 手機 hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-300 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-steel transition-all ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-steel transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-steel transition-all ${
                  open ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* 手機選單展開 */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto max-w-content px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={link(lang, item.href)}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-slate-100 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-ember" : "text-slate-700"
                  }`}
                >
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
