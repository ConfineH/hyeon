import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { Language } from "@/lib/copy";

export function pageMetadata(language: Language): Metadata {
  const title = "José Antonio Hyeon | Client Solutions Architect";
  const description = language === "en" ? site.descriptionEn : site.description;
  const path = language === "en" ? "/en/" : "/";
  return {
    metadataBase: new URL(site.url), title, description,
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.svg" },
    alternates: { canonical: path, languages: { es: "/", en: "/en/", "x-default": "/" } },
    openGraph: { type: "profile", locale: language === "en" ? "en_US" : "es_ES",
      alternateLocale: language === "en" ? ["es_ES"] : ["en_US"],
      url: path, siteName: site.name, title, description,
      images: [{ url: site.photo, width: site.photoWidth, height: site.photoHeight, alt: site.name }] },
    twitter: { card: "summary", title, description, images: [site.photo] },
  };
}
