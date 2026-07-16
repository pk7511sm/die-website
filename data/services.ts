import { Localized } from "./translations";

export type Service = {
  id: string;
  title: Localized;
  short: Localized; // 首頁卡片用短描述
  description: Localized; // 服務頁完整描述
  industries: Localized;
  materials: Localized;
  commonNeeds: Localized;
  image: string; // placeholder 圖片路徑
  imageHint: Localized; // 建議放什麼圖
};

/**
 * 新增服務：複製一個物件、改 id 與內容即可，版面會自動排版。
 */
export const services: Service[] = [
  {
    id: "paper-die",
    title: { zh: "紙盒刀模", en: "Paper Packaging Dies" },
    short: {
      zh: "彩盒、禮盒、電商包裝與各式紙器加工刀模。",
      en: "Dies for folding cartons, gift boxes, and e-commerce packaging.",
    },
    description: {
      zh: "適用於彩盒、禮盒、電商包裝、展示盒與各式紙器加工，可依 AI、PDF、DXF 或 CAD 圖檔製作。",
      en: "Custom die-cutting dies for folding cartons, gift boxes, e-commerce packaging, display boxes, and paperboard applications. Made from AI, PDF, DXF, or CAD files.",
    },
    industries: {
      zh: "印刷廠、包裝廠、紙器廠、品牌客戶",
      en: "Printing, packaging, paperboard converters, brand owners",
    },
    materials: {
      zh: "卡紙、瓦楞紙、灰紙板、特殊紙材",
      en: "Cardstock, corrugated board, greyboard, specialty papers",
    },
    commonNeeds: {
      zh: "彩盒成型、壓線、展示盒、結構盒型",
      en: "Carton forming, creasing, display boxes, structural box styles",
    },
    image: "/images/service-paper.svg",
    imageHint: {
      zh: "紙盒刀模特寫，或刀模與成品紙盒對照圖",
      en: "Close-up of a paper die, or die paired with finished carton",
    },
  },
  {
    id: "foam-die",
    title: { zh: "泡棉刀模", en: "Foam Cutting Dies" },
    short: {
      zh: "泡棉、緩衝材、包裝內襯與特殊材料裁切。",
      en: "Dies for foam, cushioning, and protective packaging inserts.",
    },
    description: {
      zh: "適用於泡棉、緩衝材、包裝內襯與特殊材料裁切需求。",
      en: "Cutting die solutions for foam, cushioning materials, inserts, protective packaging, and specialty material applications.",
    },
    industries: {
      zh: "泡棉加工廠、包裝廠、電子產品包裝",
      en: "Foam converters, packaging, electronics protective packaging",
    },
    materials: {
      zh: "EVA、PE 泡棉、EPE、緩衝材",
      en: "EVA, PE foam, EPE, cushioning materials",
    },
    commonNeeds: {
      zh: "內襯成型、緩衝包裝、特殊厚度裁切",
      en: "Insert forming, cushioning, thick-material cutting",
    },
    image: "/images/service-foam.svg",
    imageHint: {
      zh: "泡棉刀模或泡棉內襯成品照片",
      en: "Foam cutting die or finished foam insert",
    },
  },
  {
    id: "circular-die",
    title: { zh: "盤刀與彎刀加工", en: "Circular Dies & Steel Rule Bending" },
    short: {
      zh: "依材料與裁切需求客製，適合重複性加工。",
      en: "Custom circular dies and steel rule bending for production runs.",
    },
    description: {
      zh: "依照客戶材料、尺寸與裁切需求客製製作，適合特定材料與重複性加工需求。",
      en: "Custom circular dies and steel rule bending services for specific cutting requirements and repetitive production applications.",
    },
    industries: {
      zh: "包裝廠、特殊材料加工、量產客戶",
      en: "Packaging, specialty material processing, high-volume clients",
    },
    materials: {
      zh: "依加工材料客製，含薄膜、紙材、複合材",
      en: "Customized by material — films, paper, composites",
    },
    commonNeeds: {
      zh: "重複裁切、量產一致性、特定刀型",
      en: "Repetitive cutting, production consistency, specific blade profiles",
    },
    image: "/images/service-circular.svg",
    imageHint: {
      zh: "盤刀或彎刀加工設備特寫",
      en: "Close-up of circular die or steel rule bending equipment",
    },
  },
  {
    id: "special-die",
    title: { zh: "特殊刀模", en: "Special Cutting Dies" },
    short: {
      zh: "特殊材料、高刀與特殊刀材客製刀模。",
      en: "Custom dies for special materials, high rules, and specialty blades.",
    },
    description: {
      zh: "支援特殊材料、高刀、特殊刀材與客製化刀模需求。",
      en: "Custom die solutions for special materials, high cutting rules, specialty blades, and non-standard production requirements.",
    },
    industries: {
      zh: "鞋材加工、特殊材料客戶、文創開發者",
      en: "Footwear materials, specialty material clients, product developers",
    },
    materials: {
      zh: "皮革、橡膠、複合材、特殊厚材",
      en: "Leather, rubber, composites, thick specialty materials",
    },
    commonNeeds: {
      zh: "高刀裁切、非標準刀型、難裁材料",
      en: "High-rule cutting, non-standard profiles, hard-to-cut materials",
    },
    image: "/images/service-special.svg",
    imageHint: {
      zh: "特殊刀模或高刀刀材細節特寫",
      en: "Detail of a special die or high cutting rule",
    },
  },
  {
    id: "prototyping",
    title: { zh: "打樣與結構協助", en: "Prototyping & Structural Support" },
    short: {
      zh: "協助確認刀線、壓線與成型方式，降低風險。",
      en: "Reviewing cutting lines, creasing, and structure before production.",
    },
    description: {
      zh: "可協助客戶確認刀線、壓線、成型方式與材料應用，降低打樣與量產風險。",
      en: "We help review cutting lines, creasing lines, structure, materials, and production feasibility before prototyping or mass production.",
    },
    industries: {
      zh: "品牌客戶、文創開發者、新產品團隊",
      en: "Brand owners, product developers, new-product teams",
    },
    materials: {
      zh: "視專案材料而定",
      en: "Depends on project material",
    },
    commonNeeds: {
      zh: "結構確認、刀線修正、打樣評估",
      en: "Structure review, cutting-line correction, prototype evaluation",
    },
    image: "/images/service-prototype.svg",
    imageHint: {
      zh: "打樣盒、結構展開圖或刀線確認過程",
      en: "Prototype box, dieline drawing, or cutting-line review",
    },
  },
];
