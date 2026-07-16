"use client";

import { useState } from "react";
import { Lang, t } from "@/data/translations";
import { products, productCategories, ProductCategory } from "@/data/products";
import { FrameImage, AskLink } from "@/components/ui";

export default function ProductsGrid({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterChip active={active === "all"} onClick={() => setActive("all")} label={t.label.allCategories[lang]} />
        {productCategories.map((cat) => (
          <FilterChip
            key={cat.id}
            active={active === cat.id}
            onClick={() => setActive(cat.id)}
            label={cat.label[lang]}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="card-lift overflow-hidden rounded-lg border border-slate-200 bg-white">
            <FrameImage src={p.image} alt={p.name[lang]} ratio="1/1" className="rounded-none border-0" />
            <div className="p-4">
              <h3 className="font-display text-sm font-bold text-steel">{p.name[lang]}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{p.application[lang]}</p>
              <dl className="mt-3 space-y-1 text-xs text-slate-500">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-steel">{t.label.scope[lang]}</dt>
                  <dd>{p.scope[lang]}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-steel">{t.label.specs[lang]}</dt>
                  <dd>{p.specs[lang]}</dd>
                </div>
              </dl>
              <div className="mt-3">
                <AskLink lang={lang} label={t.cta.askProduct[lang]} />
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
        active ? "border-ember bg-ember text-white" : "border-slate-300 text-slate-600 hover:border-steel"
      }`}
    >
      {label}
    </button>
  );
}
