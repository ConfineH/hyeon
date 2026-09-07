function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    return production.startsWith("http")
      ? production.replace(/\/$/, "")
      : `https://${production}`;
  }

  const deployment = process.env.VERCEL_URL?.trim();
  if (deployment) {
    return `https://${deployment.replace(/^https?:\/\//, "")}`;
  }

  return "https://jahyeon.vercel.app";
}

export const site = {
  name: "Jose Antonio Hyeon",
  jobTitle: "Product Manager",
  description:
    "Jose Antonio Hyeon construye productos para mejorar la vida de alguien. Ahora trabaja en Migajas, un curso para personas con diabetes.",
  locale: "es_ES",
  email: "joseahyeon@gmail.com",
  url: siteOrigin(),
  photo: "/jose-antonio-hyeon.jpg",
  photoWidth: 598,
  photoHeight: 598,
  links: {
    migajas: "https://migajas.vercel.app",
    meantTo: "https://www.mnto.app",
    fachada: "https://fachada-tau.vercel.app",
    siQuiero: "https://siquiero.vercel.app",
    linkedin: "https://www.linkedin.com/in/joseahyeon/",
  },
} as const;
