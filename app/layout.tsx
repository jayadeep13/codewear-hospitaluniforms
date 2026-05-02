import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codewear - Premium Hospital Textiles & Uniforms",
  description: "Suppliers & Manufacturers of premium hospital uniforms, OT gowns, bed linens, curtains and more. Pan India delivery. Bulk & small orders accepted.",
  openGraph: {
    title: "Codewear - Premium Hospital Textiles",
    description: "Premium hospital uniforms, OT gowns, linens & curtains. Pan India delivery.",
    url: "https://codewear.co.in",
  },
};

export const viewport: Viewport = {
  themeColor: "#f55a00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
