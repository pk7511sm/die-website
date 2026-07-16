import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer, MobileStickyCTA } from "@/components/Footer";
import { LANGS } from "@/data/translations";
import { normalizeLang } from "@/lib/i18n";

// 靜態輸出：產生 /zh 與 /en 兩個語言
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <Navbar lang={lang} />
      {/* 底部留空間給手機浮動 CTA */}
      <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
      <Footer lang={lang} />
      <MobileStickyCTA lang={lang} />
    </>
  );
}
