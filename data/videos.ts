import { Localized } from "./translations";
import videosJson from "@/content/videos.json";

export type VideoCategory = "equipment" | "process" | "laser" | "bending" | "product" | "forming";

export const videoCategories: { id: VideoCategory; label: Localized }[] = [
  { id: "equipment", label: { zh: "設備介紹", en: "Equipment" } },
  { id: "process", label: { zh: "刀模製作", en: "Die Making" } },
  { id: "laser", label: { zh: "雷射切割", en: "Laser Cutting" } },
  { id: "bending", label: { zh: "彎刀加工", en: "Steel Rule Bending" } },
  { id: "product", label: { zh: "商品介紹", en: "Products" } },
  { id: "forming", label: { zh: "紙盒成型", en: "Carton Forming" } },
];

export type VideoItem = {
  id: string;
  category: VideoCategory;
  title: Localized;
  short: Localized;
  thumbnail: string;
  youtubeId?: string;
  externalUrl?: string;
};

export const videos: VideoItem[] = videosJson.items as VideoItem[];
