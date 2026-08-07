import Link from "next/link";
import { Lang } from "@/data/translations";
import { site, buildMailto } from "@/data/site";
import { t } from "@/data/translations";

/* ---------------- 容器 ---------------- */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ---------------- 區塊標題 ---------------- */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {kicker && (
        <p
          className={`kicker-line text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-metal" : "text-ember"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl ${
          light ? "text-white" : "text-steel"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-200" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------- 主要 CTA：Email 詢價（橘色） ---------------- */
export function EmailButton({
  lang,
  size = "md",
  className = "",
}: {
  lang: Lang;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={buildMailto(lang)}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-ember font-semibold text-white transition-colors hover:bg-ember-dark ${pad} ${className}`}
    >
      <MailIcon />
      {t.cta.email[lang]}
    </a>
  );
}

/* ---------------- 次要：社群連結（FB / IG） ---------------- */
export function SocialLinks({
  lang,
  size = "md",
  dark = false,
}: {
  lang: Lang;
  size?: "md" | "lg";
  dark?: boolean;
}) {
  const pad = size === "lg" ? "px-5 py-3 text-sm" : "px-4 py-2 text-xs";
  const style = dark
    ? "border border-white/20 text-white/80 hover:bg-white/10"
    : "border border-slate-300 text-slate-600 hover:border-steel";
  return (
    <div className="flex gap-2">
      <a
        href={site.facebookPage}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-md transition-colors ${style} ${pad}`}
      >
        <FbIcon />
        {t.cta.followFb[lang]}
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-md transition-colors ${style} ${pad}`}
      >
        <IgIcon />
        {t.cta.followIg[lang]}
      </a>
    </div>
  );
}

/* ---------------- 詢價按鈕組合（Email 為主 + 社群） ---------------- */
export function InquiryButtons({
  lang,
  size = "md",
  dark = false,
}: {
  lang: Lang;
  size?: "md" | "lg";
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <EmailButton lang={lang} size={size} />
      <SocialLinks lang={lang} size={size} dark={dark} />
    </div>
  );
}

/* ---------------- 小型詢價連結（卡片用，導向 Email） ---------------- */
export function AskLink({
  lang,
  label,
}: {
  lang: Lang;
  label: string;
}) {
  return (
    <a
      href={buildMailto(lang)}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors hover:text-ember-dark"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

/* ---------------- Placeholder 圖 ---------------- */
export function FrameImage({
  src,
  alt,
  ratio = "4/3",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: "16/9" | "4/3" | "1/1" | "21/9";
  priority?: boolean;
  className?: string;
}) {
  const ratioClass =
    ratio === "16/9"
      ? "aspect-video"
      : ratio === "1/1"
      ? "aspect-square"
      : ratio === "21/9"
      ? "aspect-[21/9]"
      : "aspect-[4/3]";
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-slate-200 bg-slate-100 ${ratioClass} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* ---------------- 圖示 ---------------- */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
