# 刀模廠雙語網站 — 交付與維護說明

一個長期可維護的 B2B 刀模廠展示與詢價網站。Next.js 14 靜態輸出、中英雙語、無資料庫、無後台、無檔案上傳，詢價導向 FB Messenger 與 Email。

---

## 一、快速開始

```bash
npm install        # 安裝套件
npm run dev        # 本機開發，開 http://localhost:3000
npm run build      # 產生靜態網站到 out/ 資料夾
```

`npm run build` 完成後，整個網站會輸出到 `out/`，這就是要上傳到 Cloudflare Pages 的內容。

---

## 二、最重要：改公司資料只需要改一個檔

打開 `data/site.ts`，把 placeholder 換成真實資料：

- 公司名稱、電話、Email、地址、營業時間
- Facebook 粉專網址與 Messenger 連結（`m.me/你的粉專ID`）
- Google Map 嵌入網址（Google 地圖 → 分享 → 嵌入地圖 → 複製 src 內的網址）
- `siteUrl`：部署後的正式網址（用於 SEO 與 sitemap）

改完存檔，全站的聯絡資訊、頁尾、CTA 按鈕都會自動更新。

> 安全提醒：`data/site.ts` 只放公開資訊（公開信箱、公開粉專）。不要在任何檔案放 API Key 或密碼。

---

## 三、日後新增內容（不需要改版面）

所有內容都在 `data/` 資料夾，新增時複製一個現有項目、改 id 與內容即可，版面會自動排版。

| 想新增 | 改這個檔 |
|---|---|
| 服務項目 | `data/services.ts` |
| 商品 | `data/products.ts` |
| 案例 | `data/cases.ts` |
| 影片 | `data/videos.ts` |
| 選單項目 | `data/navigation.ts` |
| 按鈕/介面文字 | `data/translations.ts` |

每個項目都是 `{ zh: "中文", en: "English" }` 的格式，中英文一起填。

### 新增影片的方式
在 `data/videos.ts` 新增一個項目：
- YouTube 影片：填 `youtubeId`（網址 `v=` 後面那串），點縮圖會內嵌播放
- Facebook 或其他影片：填 `externalUrl`，點縮圖會另開新分頁
- 兩者都留空：顯示「即將推出」

影片預設只載縮圖，點擊後才載入播放器，不會拖慢網站。

---

## 四、換圖片

目前所有圖片是 `public/images/` 裡的 SVG 示意圖。換成真實照片時：

1. 把照片放進 `public/images/`，建議轉成 WebP 格式並壓縮
2. 在對應的 `data/*.ts` 把 `image` 路徑改成新檔名

建議圖片比例（維持比例就不會破版）：
- 首頁 Hero：16:9
- 服務卡片 / 案例卡片：4:3
- 商品卡片：1:1
- 影片縮圖：16:9

各區塊建議放什麼圖，寫在 `data/services.ts` 的 `imageHint` 欄位可參考。

---

## 五、部署到 Cloudflare Pages

1. 把專案推上 GitHub
2. Cloudflare Pages → 連結 GitHub repo
3. 建置設定：
   - Framework preset：`Next.js (Static HTML Export)`
   - Build command：`npm run build`
   - Build output directory：`out`
4. 之後每次 push 到 GitHub 就會自動部署

安全標頭已寫在 `public/_headers`，Cloudflare 會自動套用（HTTPS、CSP、防點擊劫持等）。

---

## 六、關於字體（部署前可選）

開發環境若連得到網路，建議用 Google Fonts 取得更精緻的字體。目前 `app/layout.tsx` 為了能離線建置，改用系統字體 fallback（思源黑體 / 蘋方 / 微軟正黑體）。

若要啟用 Google Fonts（Archivo + Noto Sans TC），把 `app/layout.tsx` 換回以下版本即可（其餘檔案不用動，Tailwind 已設定好變數）：

```tsx
import type { Metadata } from "next";
import { Noto_Sans_TC, Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["500","700"], variable: "--font-archivo", display: "swap" });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-noto-sans-tc", display: "swap" });

export const metadata: Metadata = {
  title: "刀模工業 | Die-Cutting Mold Solutions",
  description: "精準刀模製作、紙盒刀模、泡棉刀模、特殊刀模與客製化刀模商品。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${archivo.variable} ${notoSansTC.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

啟用後，記得在 `app/globals.css` 的 `:root` 移除（或保留作為 fallback）那兩行 `--font-*` 定義，Google Fonts 注入的會優先生效。

---

## 七、頁面與檔案結構

```
app/
  layout.tsx            根 layout（字體、全域 metadata）
  page.tsx              / → 自動轉址到 /zh
  sitemap.ts            自動產生 sitemap.xml
  robots.ts             自動產生 robots.txt
  [lang]/
    layout.tsx          navbar + footer + 手機浮動 CTA
    page.tsx            首頁（9 大區塊）
    about/              關於我們
    services/           服務項目
    capabilities/       技術能力
    cases/              刀模案例（可分類篩選）
    products/           商品目錄（可分類篩選）
    videos/             影片展示
    quote/              詢價流程
    contact/            聯絡我們（含 Google Map）

components/             可重用元件（Navbar、Footer、卡片、CTA 按鈕等）
data/                   ★ 所有內容資料，日後主要改這裡
lib/                    工具函式（語言、連結、SEO）
public/images/          圖片（目前為 SVG 示意圖）
public/_headers         Cloudflare 安全標頭
```

---

## 八、SEO 已內建

每頁都有 title、meta description、Open Graph、雙語 hreflang。網站上線後，記得：
1. 在 `data/site.ts` 把 `siteUrl` 改成正式網址
2. 換上真實的 Open Graph 分享圖（`public/images/og-image.svg`，建議改成 1200×630 的 WebP/PNG）
3. 到 Google Search Console 提交 `你的網址/sitemap.xml`

---

## 九、未來若內容變多

第一版刻意不用 CMS，保持簡單。當案例/商品多到不方便手動編輯時，再考慮接 Headless CMS（如 Sanity）。因為內容已經跟版面分離（都在 `data/`），未來搬遷成本低，現在不需要先做。
