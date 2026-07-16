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

/* ---------------- 區塊標題（含小標籤） ---------------- */
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

/* ---------------- 主要 CTA：FB 私訊 ---------------- */
export function MessengerButton({
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
      href={site.messenger}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-ember font-semibold text-white transition-colors hover:bg-ember-dark ${pad} ${className}`}
    >
      <MessengerIcon />
      {t.cta.messenger[lang]}
    </a>
  );
}

/* ---------------- 次要 CTA：Email ---------------- */
export function EmailButton({
  lang,
  size = "md",
  variant = "outline",
  className = "",
}: {
  lang: Lang;
  size?: "md" | "lg";
  variant?: "outline" | "ghost" | "dark";
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  const styles =
    variant === "dark"
      ? "border border-white/30 text-white hover:bg-white/10"
      : variant === "ghost"
      ? "text-steel hover:text-ember"
      : "border border-slate-300 text-steel hover:border-steel hover:bg-white";
  return (
    <a
      href={buildMailto(lang)}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors ${styles} ${pad} ${className}`}
    >
      <MailIcon />
      {t.cta.email[lang]}
    </a>
  );
}

/* ---------------- 詢價按鈕組合 ---------------- */
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
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <MessengerButton lang={lang} size={size} />
      <EmailButton lang={lang} size={size} variant={dark ? "dark" : "outline"} />
    </div>
  );
}

/* ---------------- 小型詢價連結（卡片用） ---------------- */
export function AskLink({
  lang,
  label,
}: {
  lang: Lang;
  label: string;
}) {
  return (
    <a
      href={site.messenger}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors hover:text-ember-dark"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

/* ---------------- Placeholder 圖（統一比例、lazy） ---------------- */
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
function MessengerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.5 3.7 7.2V22l3.4-1.9c.9.3 1.9.4 2.9.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1 12.4l-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
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
