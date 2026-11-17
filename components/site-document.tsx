import type { ReactNode } from "react";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/lib/site";
import type { Language } from "@/lib/copy";
import "@/app/globals.css";

const body = Atkinson_Hyperlegible({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export function SiteDocument({ children, language }: { children: ReactNode; language: Language }) {
  const person = {
    "@context": "https://schema.org", "@type": "Person",
    name: site.name, url: site.url, email: `mailto:${site.email}`,
    jobTitle: site.jobTitle, worksFor: { "@type": "Organization", name: "NielsenIQ" },
    description: language === "en" ? site.descriptionEn : site.description,
    image: `${site.url}${site.photo}`, sameAs: [site.links.linkedin],
  };
  return <html lang={language} className={`${body.variable} ${display.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
