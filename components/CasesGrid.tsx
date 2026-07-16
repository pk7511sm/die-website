"use client";

import { useState } from "react";
import { Lang, t } from "@/data/translations";
import { cases, caseCategories, CaseCategory } from "@/data/cases";
import { FrameImage, AskLink } from "@/components/ui";

export default function CasesGrid({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<CaseCategory | "all">("all");
  const filtered = active === "all" ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      {/* 分類篩選 */}
      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={active === "all"}
          onClick={() => setActive("all")}
          label={t.label.allCategories[lang]}
        />
        {caseCategories.map((cat) => (
          <FilterChip
            key={cat.id}
            active={active === cat.id}
            onClick={() => setActive(cat.id)}
            label={cat.label[lang]}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <div key={c.id} className="card-lift overflow-hidden rounded-lg border border-slate-200 bg-white">
            <FrameImage src={c.image} alt={c.title[lang]} ratio="4/3" className="rounded-none border-0" />
            <div className="p-5">
              <span className="inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-steel">
                {caseCategories.find((x) => x.id === c.category)?.label[lang]}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-steel">{c.title[lang]}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.short[lang]}</p>
              <dl className="mt-3 space-y-1 text-xs text-slate-500">
                <div className="flex gap-2">
                  <dt className="font-semibold text-steel">{t.label.materials[lang]}</dt>
                  <dd>{c.materials[lang]}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-steel">{t.label.industries[lang]}</dt>
                  <dd>{c.industries[lang]}</dd>
                </div>
              </dl>
              <div className="mt-4">
                <AskLink lang={lang} label={t.cta.askSimilar[lang]} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-ember bg-ember text-white"
          : "border-slate-300 text-slate-600 hover:border-steel"
      }`}
    >
      {label}
    </button>
  );
}
