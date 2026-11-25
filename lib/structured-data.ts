import { copy, type Language } from "@/lib/copy";
import { site } from "@/lib/site";

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

function pageUrl(language: Language) {
  const path = site.pages[language].path;
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function structuredData(language: Language) {
  const page = site.pages[language];
  const url = pageUrl(language);
  const t = copy[language];
  const works = [
    {
      name: "Migajas",
      url: site.links.migajas,
      description: `${t.migajasProblem} ${t.migajasBuilt} ${t.migajasDetail} ${t.migajasStatus}`,
    },
    {
      name: "Meant To",
      url: site.links.meantTo,
      description: `${t.meantProblem} ${t.meantBuilt} ${t.meantDetail} ${t.meantStatus}`,
    },
    {
      name: "Fachada",
      url: site.links.fachada,
      description: `${t.fachadaProblem} ${t.fachada} ${t.fachadaDetail} ${t.fachadaStatus}`,
    },
  ].map((work) => ({
    "@type": "CreativeWork",
    "@id": `${work.url}#work`,
    name: work.name,
    url: work.url,
    description: work.description,
    creator: { "@id": personId },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        alternateName: ["José A. Hyeon", "joseahyeon.com"],
        inLanguage: ["es", "en"],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: language,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
        mentions: works.map((work) => ({ "@id": work["@id"] })),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        givenName: "José Antonio",
        familyName: "Hyeon",
        alternateName: [...site.alternateNames],
        url: site.url,
        image: `${site.url}${site.photo}`,
        email: `mailto:${site.email}`,
        jobTitle: site.jobTitle,
        description: page.description,
        worksFor: {
          "@type": "Organization",
          name: "NielsenIQ",
          url: "https://nielseniq.com",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidad de Navarra",
          alternateName: "University of Navarra",
          url: "https://www.unav.edu",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Professional Scrum Product Owner I",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Scrum.org" },
        },
        knowsAbout:
          language === "en"
            ? [
                "Law and Economics",
                "Financial audit",
                "Requirements and acceptance criteria",
                "Client and data work",
                "Digital products",
              ]
            : [
                "Derecho y Economía",
                "Auditoría financiera",
                "Requisitos y criterios de aceptación",
                "Trabajo con clientes y datos",
                "Productos digitales",
              ],
        knowsLanguage: ["Spanish", "English"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Madrid",
          addressCountry: "ES",
        },
        sameAs: [site.links.linkedin],
      },
      ...works,
    ],
  };
}
