import type { MetadataRoute } from "next";
import type { Language } from "@/lib/copy";
import { site } from "@/lib/site";

export const dynamic = "force-static";

function absolute(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

const languages = {
  es: absolute("/"),
  en: absolute("/en"),
  "x-default": absolute("/"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(site.pages) as Language[]).map((language) => {
    const path = site.pages[language].path;
    return {
      url: absolute(path),
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.9,
      alternates: { languages },
    };
  });
}
