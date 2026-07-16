import { Localized } from "./translations";
import productsJson from "@/content/products.json";

export type ProductCategory = "consumables" | "creasing" | "stripping" | "baseboard" | "blades" | "custom";

export const productCategories: { id: ProductCategory; label: Localized }[] = [
  { id: "consumables", label: { zh: "刀模耗材", en: "Die Consumables" } },
  { id: "creasing", label: { zh: "壓線與壓痕用品", en: "Creasing Supplies" } },
  { id: "stripping", label: { zh: "清廢相關產品", en: "Waste Stripping" } },
  { id: "baseboard", label: { zh: "底板與鐵板", en: "Base Boards & Steel Plates" } },
  { id: "blades", label: { zh: "盤刀與特殊刀具", en: "Circular & Specialty Blades" } },
  { id: "custom", label: { zh: "客製化刀模配件", en: "Custom Die Accessories" } },
];

export type Product = {
  id: string;
  category: ProductCategory;
  name: Localized;
  application: Localized;
  scope: Localized;
  specs: Localized;
  image: string;
};

export const products: Product[] = productsJson.items as Product[];
