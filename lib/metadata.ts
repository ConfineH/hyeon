import type { Metadata } from "next";
import type { Language } from "@/lib/copy";
import { site } from "@/lib/site";

function absolute(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function pageMetadata(language: Language): Metadata {
  const page = site.pages[language];
  const canonical = absolute(page.path);
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: new URL(site.url),
    title: page.title,
    description: page.description,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical,
      languages: {
        es: absolute("/"),
        en: absolute("/en"),
        "x-default": absolute("/"),
      },
    },
    openGraph: {
      type: "profile",
      firstName: "José Antonio",
      lastName: "Hyeon",
      locale: language === "en" ? "en_US" : "es_ES",
      alternateLocale: language === "en" ? ["es_ES"] : ["en_US"],
      url: canonical,
      siteName: site.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: site.photo,
          width: site.photoWidth,
          height: site.photoHeight,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
      images: [site.photo],
    },
    ...(google ? { verification: { google } } : {}),
  };
}
