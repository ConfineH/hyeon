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
  jobTitle: "Client Solutions Architect",
  description:
    "José Antonio Hyeon, Client Solutions Architect en NielsenIQ. Experiencia con clientes y datos, proyectos propios y decisiones de producto.",
  descriptionEn:
    "José Antonio Hyeon, Client Solutions Architect at NielsenIQ. Client and data experience, independent projects and product decisions.",
  locale: "es_ES",
  email: "joseahyeon@gmail.com",
  url: siteOrigin(),
  photo: "/jose-hyeon-portrait.jpg",
  photoWidth: 800,
  photoHeight: 800,
  links: {
    migajas: "https://migajas.vercel.app",
    meantTo: "https://www.mnto.app",
    fachada: "https://www.fachada.app",
    siQuiero: "https://siquiero.vercel.app",
    linkedin: "https://www.linkedin.com/in/joseahyeon/",
  },
} as const;

