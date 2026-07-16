"use client";

import { useState } from "react";
import { Lang, t } from "@/data/translations";
import { videos, videoCategories } from "@/data/videos";
import { FrameImage } from "@/components/ui";

export default function VideoGallery({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <VideoCard key={v.id} lang={lang} video={v} />
      ))}
    </div>
  );
}

function VideoCard({
  lang,
  video,
}: {
  lang: Lang;
  video: (typeof videos)[number];
}) {
  const [playing, setPlaying] = useState(false);
  const catLabel = videoCategories.find((c) => c.id === video.category)?.label[lang];

  // 點擊行為：
  //  - 有 youtubeId → 內嵌播放（點擊後才載入 iframe，不影響初始速度）
  //  - 有 externalUrl → 另開新分頁
  //  - 都沒有（尚未設定）→ 不動作，顯示「即將推出」
  const hasYoutube = Boolean(video.youtubeId);
  const hasExternal = Boolean(video.externalUrl);
  const isPlaceholder = !hasYoutube && !hasExternal;

  return (
    <div className="card-lift overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="relative">
        {playing && hasYoutube ? (
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title[lang]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (hasYoutube) setPlaying(true);
              else if (hasExternal) window.open(video.externalUrl, "_blank", "noopener,noreferrer");
            }}
            disabled={isPlaceholder}
            className="group relative block w-full"
            aria-label={video.title[lang]}
          >
            <FrameImage src={video.thumbnail} alt={video.title[lang]} ratio="16/9" className="rounded-none border-0" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform ${
                  isPlaceholder ? "bg-white/70" : "bg-white/90 group-hover:scale-110"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8590C" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            {isPlaceholder && (
              <span className="absolute bottom-2 right-2 rounded bg-ink/70 px-2 py-0.5 text-xs text-white">
                {lang === "zh" ? "即將推出" : "Coming soon"}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="p-4">
        <span className="inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-steel">
          {catLabel}
        </span>
        <h3 className="mt-2 font-display text-base font-bold text-steel">{video.title[lang]}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{video.short[lang]}</p>
      </div>
    </div>
  );
}
