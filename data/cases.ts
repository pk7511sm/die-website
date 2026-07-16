import { Localized } from "./translations";
import casesJson from "@/content/cases.json";

export type CaseCategory = "paper" | "foam" | "circular" | "special" | "high-rule" | "prototype";

export const caseCategories: { id: CaseCategory; label: Localized }[] = [
  { id: "paper", label: { zh: "紙盒刀模", en: "Paper Dies" } },
  { id: "foam", label: { zh: "泡棉刀模", en: "Foam Dies" } },
  { id: "circular", label: { zh: "盤刀", en: "Circular Dies" } },
  { id: "special", label: { zh: "特殊刀模", en: "Special Dies" } },
  { id: "high-rule", label: { zh: "高刀 / 特殊刀材", en: "High Rule / Specialty" } },
  { id: "prototype", label: { zh: "打樣與成型", en: "Prototype & Forming" } },
];

export type CaseItem = {
  id: string;
  category: CaseCategory;
  title: Localized;
  short: Localized;
  materials: Localized;
  industries: Localized;
  image: string;
};

export const cases: CaseItem[] = casesJson.items as CaseItem[];
