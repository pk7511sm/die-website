import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "進利雷射 | Jinli Laser Die-Cutting",
  description: "精準刀模製作、紙盒刀模、泡棉刀模、特殊刀模與客製化刀模商品。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
