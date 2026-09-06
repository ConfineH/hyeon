export const site = {
  name: "Jose Antonio Hyeon",
  jobTitle: "Product Manager",
  description:
    "Jose Antonio Hyeon construye productos para mejorar la vida de alguien. Ahora trabaja en Migajas, un curso para personas con diabetes.",
  locale: "es_ES",
  email: "joseahyeon@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyeon.vercel.app",
  photo: "/jose-antonio-hyeon.jpg",
  photoWidth: 598,
  photoHeight: 598,
  links: {
    migajas: "https://migajas.vercel.app",
    meantTo: "https://www.mnto.app",
    fachada: "https://fachada-tau.vercel.app",
    siQuiero: "https://siquiero.vercel.app",
  },
} as const;
