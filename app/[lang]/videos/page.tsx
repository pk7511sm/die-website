import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui";
import { PageHero, PageCTA } from "@/components/PageParts";
import VideoGallery from "@/components/VideoGallery";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = normalizeLang(params.lang);
  return buildMetadata({
    lang,
    path: "videos",
    title: { zh: "影片展示", en: "Videos" },
    description: {
      zh: "工廠設備、刀模製作過程、雷射切割、彎刀加工與紙盒成型示範影片。",
      en: "Videos of factory equipment, die-making, laser cutting, steel rule bending, and carton forming.",
    },
  });
}

export default function VideosPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  return (
    <>
      <PageHero
        lang={lang}
        kicker={lang === "zh" ? "影片展示" : "Videos"}
        title={lang === "zh" ? "製作過程與設備影片" : "Process & Equipment Videos"}
        subtitle={
          lang === "zh"
            ? "點擊縮圖即可觀看。為維持網站速度，影片在點擊後才載入。"
            : "Click a thumbnail to watch. Videos load only on click to keep the site fast."
        }
      />
      <section className="py-16">
        <Container>
          <VideoGallery lang={lang} />
        </Container>
      </section>
      <PageCTA lang={lang} />
    </>
  );
}
