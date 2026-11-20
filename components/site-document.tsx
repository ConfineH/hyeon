import type { ReactNode } from "react";
import { Manrope, Newsreader } from "next/font/google";
import type { Language } from "@/lib/copy";
import { structuredData } from "@/lib/structured-data";
import "@/app/globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Newsreader({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export function SiteDocument({ children, language }: { children: ReactNode; language: Language }) {
  const jsonLd = JSON.stringify(structuredData(language)).replace(/</g, "\\u003c");
  return <html lang={language} className={`${body.variable} ${display.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />{children}</body></html>;
}
