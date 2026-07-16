import Link from "next/link";
import { Lang, t } from "@/data/translations";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { cases } from "@/data/cases";
import { videos } from "@/data/videos";
import { link } from "@/lib/i18n";
import {
  Container,
  SectionHeading,
  FrameImage,
  AskLink,
  MessengerButton,
  EmailButton,
  InquiryButtons,
} from "@/components/ui";

/* ---------------- 1. Hero ---------------- */
export function Hero({ lang }: { lang: Lang }) {
  const copy = {
    zh: {
      h1: "精準刀模製作，協助您的包裝從設計到量產成形",
      sub: "提供紙盒刀模、特殊刀模、泡棉刀模、盤刀、打樣與客製化製作服務，協助印刷廠、包裝廠與品牌客戶提升成型品質與交期效率。",
      services: "查看服務項目",
    },
    en: {
      h1: "Precision Die-Cutting Mold Solutions for Packaging and Industrial Applications",
      sub: "We provide custom die-cutting molds, paper packaging dies, foam cutting dies, circular dies, prototyping support, and die-making products for packaging, printing, and industrial applications.",
      services: "View Our Services",
    },
  }[lang];

  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="kicker-line text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            {lang === "zh" ? "現代精密刀模製造" : "Modern Precision Die-Making"}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-steel sm:text-4xl lg:text-[2.75rem]">
            {copy.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            {copy.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MessengerButton lang={lang} size="lg" />
            <Link
              href={link(lang, "services")}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-7 py-3.5 text-base font-semibold text-steel transition-colors hover:border-steel hover:bg-slate-50"
            >
              {copy.services}
            </Link>
            <EmailButton lang={lang} size="lg" variant="ghost" />
          </div>
        </div>
        <div>
          <FrameImage
            src="/images/hero.svg"
            alt={
              lang === "zh"
                ? "刀模細節特寫與紙盒成品對照"
                : "Close-up of a die-cutting mold with finished carton"
            }
            ratio="16/9"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 2. 服務簡介 ---------------- */
export function ServicesPreview({ lang }: { lang: Lang }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          kicker={lang === "zh" ? "服務項目" : "Services"}
          title={lang === "zh" ? "我們能做什麼" : "What We Make"}
          subtitle={
            lang === "zh"
              ? "從紙盒到特殊材料，提供完整的刀模製作與結構協助。"
              : "From paper cartons to specialty materials — complete die-making and structural support."
          }
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.id}
              href={link(lang, "services")}
              className="card-lift group block rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100">
                <span className="block h-4 w-4 border-2 border-ember" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-steel">
                {s.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {s.short[lang]}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 3. 為什麼選擇我們 ---------------- */
export function WhyUs({ lang }: { lang: Lang }) {
  const items =
    lang === "zh"
      ? [
          ["自有設備，交期掌控度高", "從製作到修正不外包，交期更穩定。"],
          ["多年刀模製作經驗", "累積各類材料與盒型的實作經驗。"],
          ["支援客製化與特殊材料", "高刀、特殊刀材與難裁材料都能評估。"],
          ["協助圖面確認與打樣修正", "上線前先確認刀線、壓線與結構。"],
          ["重視穩定品質", "成型穩定度與一致性是長期合作基礎。"],
          ["長期合作夥伴", "不只接單，更是您的製造夥伴。"],
        ]
      : [
          ["In-house equipment, reliable lead times", "From making to correction in-house for stable scheduling."],
          ["Years of die-making experience", "Hands-on experience across materials and box styles."],
          ["Custom & specialty materials", "High rules, specialty blades, and hard-to-cut materials."],
          ["Drawing review & prototype correction", "We confirm cutting lines and structure before production."],
          ["Consistent quality", "Forming stability and consistency for long-term work."],
          ["A long-term partner", "Not just an order-taker — your manufacturing partner."],
        ];

  return (
    <section className="bg-ink py-16">
      <Container>
        <SectionHeading
          light
          kicker={lang === "zh" ? "為什麼選擇我們" : "Why Choose Us"}
          title={lang === "zh" ? "懂結構、懂材料的製造夥伴" : "A Partner Who Understands Structure and Materials"}
        />
        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, desc], i) => (
            <div key={i} className="border-t border-white/10 pt-5">
              <div className="font-display text-sm font-bold text-ember">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-base font-bold text-white">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 4. 技術能力 ---------------- */
export function CapabilitiesPreview({ lang }: { lang: Lang }) {
  const caps =
    lang === "zh"
      ? ["雷射切割", "彎刀加工", "刀片接點處理", "高刀與特殊刀材", "底板與鐵板", "壓線與清廢配件"]
      : ["Laser Cutting", "Steel Rule Bending", "Joint Finishing", "High Rules & Specialty Blades", "Base Boards & Steel Plates", "Creasing & Stripping Accessories"];

  return (
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <FrameImage
              src="/images/capability.svg"
              alt={lang === "zh" ? "刀模製程與設備細節" : "Die-making process and equipment detail"}
              ratio="4/3"
            />
          </div>
          <div>
            <SectionHeading
              kicker={lang === "zh" ? "技術能力" : "Capabilities"}
              title={lang === "zh" ? "不只接單，更能協助評估製作方式" : "More Than Orders — We Help You Decide How to Build It"}
              subtitle={
                lang === "zh"
                  ? "從刀材選用到成型穩定度，我們協助您找到適合的製作方式。"
                  : "From blade selection to forming stability, we help you find the right production method."
              }
            />
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {caps.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 shrink-0 bg-ember" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href={link(lang, "capabilities")}
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ember hover:text-ember-dark"
            >
              {lang === "zh" ? "了解技術能力" : "Explore Capabilities"} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 5. 案例預覽 ---------------- */
export function CasesPreview({ lang }: { lang: Lang }) {
  return (
    <section className="bg-slate-100 py-16">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            kicker={lang === "zh" ? "刀模案例" : "Cases"}
            title={lang === "zh" ? "近期作品" : "Recent Works"}
          />
          <Link
            href={link(lang, "cases")}
            className="hidden shrink-0 text-sm font-semibold text-ember hover:text-ember-dark sm:inline-flex"
          >
            {lang === "zh" ? "查看全部 →" : "View All →"}
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.slice(0, 6).map((c) => (
            <div key={c.id} className="card-lift overflow-hidden rounded-lg border border-slate-200 bg-white">
              <FrameImage src={c.image} alt={c.title[lang]} ratio="4/3" className="rounded-none border-0" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-ember">
                  {c.title[lang]}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {c.short[lang]}
                </p>
                <div className="mt-4">
                  <AskLink lang={lang} label={t.cta.askSimilar[lang]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 6. 商品預覽 ---------------- */
export function ProductsPreview({ lang }: { lang: Lang }) {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            kicker={lang === "zh" ? "商品目錄" : "Products"}
            title={lang === "zh" ? "刀模商品與耗材" : "Die-Making Products"}
          />
          <Link
            href={link(lang, "products")}
            className="hidden shrink-0 text-sm font-semibold text-ember hover:text-ember-dark sm:inline-flex"
          >
            {lang === "zh" ? "查看全部 →" : "View All →"}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="card-lift overflow-hidden rounded-lg border border-slate-200 bg-white">
              <FrameImage src={p.image} alt={p.name[lang]} ratio="1/1" className="rounded-none border-0" />
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-steel">{p.name[lang]}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                  {p.application[lang]}
                </p>
                <div className="mt-3">
                  <AskLink lang={lang} label={t.cta.askProduct[lang]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 7. 影片預覽 ---------------- */
export function VideosPreview({ lang }: { lang: Lang }) {
  return (
    <section className="bg-slate-100 py-16">
      <Container>
        <SectionHeading
          kicker={lang === "zh" ? "影片展示" : "Videos"}
          title={lang === "zh" ? "製作過程與設備" : "Process & Equipment"}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {videos.slice(0, 3).map((v) => (
            <Link
              key={v.id}
              href={link(lang, "videos")}
              className="card-lift group relative overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <div className="relative">
                <FrameImage src={v.thumbnail} alt={v.title[lang]} ratio="16/9" className="rounded-none border-0" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#E8590C" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-steel">{v.title[lang]}</h3>
                <p className="mt-1 text-xs text-slate-500">{v.short[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 8. 詢價流程 ---------------- */
export function ProcessPreview({ lang }: { lang: Lang }) {
  const steps =
    lang === "zh"
      ? [
          ["提供圖檔與需求", "AI / PDF / DXF / CAD 圖檔與基本需求。"],
          ["確認尺寸、材料與用途", "一起確認規格與應用情境。"],
          ["評估刀模製作方式", "建議適合的刀材與製作方法。"],
          ["製作、打樣與修正", "必要時打樣確認後再量產。"],
          ["交付與後續支援", "交付並提供後續配合。"],
        ]
      : [
          ["Send files & requirements", "AI / PDF / DXF / CAD files and basic needs."],
          ["Confirm size, material & use", "Confirm specs and application together."],
          ["Evaluate the die method", "Recommend suitable blades and approach."],
          ["Make, prototype & correct", "Prototype first when needed, then produce."],
          ["Delivery & support", "Deliver with ongoing support."],
        ];

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          kicker={lang === "zh" ? "詢價流程" : "Quote Process"}
          title={lang === "zh" ? "從詢價到交付，五個步驟" : "From Inquiry to Delivery in Five Steps"}
          align="center"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, desc], i) => (
            <li key={i} className="relative">
              <div className="font-display text-3xl font-bold text-slate-200">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-sm font-bold text-steel">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <Link
            href={link(lang, "quote")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember hover:text-ember-dark"
          >
            {lang === "zh" ? "查看完整詢價流程" : "See Full Quote Process"} →
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- 9. 最後 CTA ---------------- */
export function FinalCTA({ lang }: { lang: Lang }) {
  const copy = {
    zh: {
      title: "有刀模製作或相關商品需求嗎？",
      sub: "歡迎提供圖檔、尺寸、材料、用途與預計交期，我們將協助您評估適合的製作方式與報價方向。",
    },
    en: {
      title: "Need a custom die-cutting mold or die-making product?",
      sub: "Send us your drawing files, dimensions, material, application, and expected lead time. We will help evaluate the suitable production method and quotation details.",
    },
  }[lang];

  return (
    <section className="bg-steel py-16">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
          {copy.sub}
        </p>
        <div className="mt-8 flex justify-center">
          <InquiryButtons lang={lang} size="lg" dark />
        </div>
      </Container>
    </section>
  );
}
