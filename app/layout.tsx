import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = "Jose Antonio Hyeon";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: site.url,
    siteName: title,
    title,
    description,
    images: [
      {
        url: site.photo,
        width: site.photoWidth,
        height: site.photoHeight,
        alt: "Jose Antonio Hyeon con gorra negra y gafas, de noche",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [site.photo],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.jobTitle,
  description: site.description,
  image: `${site.url}${site.photo}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${body.variable} ${display.variable} h-full`}>
      <body className="min-h-full bg-night font-sans text-stone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
