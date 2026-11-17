import Image from "next/image";
import { site } from "@/lib/site";
import { copy, type Language } from "@/lib/copy";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function Portfolio({ language }: { language: Language }) {
  const t = copy[language];
  const cv = `mailto:${site.email}?subject=${encodeURIComponent(t.cvSubject)}&body=${encodeURIComponent(t.cvBody)}`;
  const projects = [
    { name: "Migajas", category: t.education, image: "/projects/migajas.jpg", alt: t.migajasAlt, caption: t.migajasCaption, description: t.migajas, built: t.migajasBuilt, decision: t.migajasDecision, detail: t.migajasDetail, url: site.links.migajas, width: 760, height: 570 },
    { name: "Meant To", category: t.relationships, image: "/projects/meant-to.jpg", alt: t.meantAlt, caption: t.meantCaption, description: t.meant, built: t.meantBuilt, decision: t.meantDecision, detail: t.meantDetail, url: site.links.meantTo, width: 1170, height: 760 },
  ];
  return (
    <>
      <a className="skip-link" href="#contenido">{t.skip}</a>
      <header className="site-header">
        <nav className="wrap navigation" aria-label={t.navigation}>
          <a className="wordmark" href={language === "es" ? "/" : "/en/"}>José Antonio Hyeon</a>
          <div className="nav-links">
            <a href="#proyectos">{t.projects}</a><a href="#trayectoria">{t.experience}</a><a href="#escribir">{t.contact}</a>
          </div>
          <div className="language-switch" aria-label={t.language}>
            <a href="/" hrefLang="es" lang="es" aria-label="Español" aria-current={language === "es" ? "page" : undefined}>ES</a>
            <span aria-hidden="true">/</span>
            <a href="/en/" hrefLang="en" lang="en" aria-label="English" aria-current={language === "en" ? "page" : undefined}>EN</a>
          </div>
        </nav>
      </header>
      <main id="contenido">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">{t.role}</p><h1 id="hero-title">{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">{t.primary}<span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href={cv}>{t.cv}<Arrow /></a>
            </div>
          </div>
          <ol className="method" aria-label={language === "es" ? "Mi enfoque" : "My approach"}>
            {t.method.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}
          </ol>
        </section>
        <section id="proyectos" className="light-section section" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-heading"><h2 id="projects-title">{t.selected}</h2><p>{t.selectedIntro}</p></div>
            <div className="project-grid">
              {projects.map(project => <article className="project-card" key={project.name}>
                <figure>
                  <a href={project.url} className="project-image-link" aria-label={`${t.visit}: ${project.name}`}>
                    <Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1160px) 45vw, 510px" className="project-image" />
                  </a>
                  <figcaption>{project.caption}</figcaption>
                </figure>
                <div className="project-copy">
                  <p className="eyebrow">{project.category} · {t.personal}</p><h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p><p className="project-built">{project.built}</p>
                  <p className="decision">{project.decision}</p>
                  <details><summary>{t.decision}</summary><p>{project.detail}</p></details>
                  <a className="text-link" href={project.url}>{t.visit}<Arrow /></a>
                </div>
              </article>)}
            </div>
            <article className="project-row"><h3>Fachada</h3><p>{t.fachada}</p><a className="text-link" href={site.links.fachada}>{t.visit}<Arrow /></a></article>
          </div>
        </section>
        <section className="case-section section" aria-labelledby="case-title">
          <div className="wrap">
            <p className="eyebrow">{t.stopLabel}</p><h2 id="case-title">{t.stopTitle}</h2>
            <div className="case-copy"><p>{t.stopIntro}</p><p>{t.stopDetail}</p></div>
            <ol className="case-steps">{t.stopSteps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
          </div>
        </section>
        <section id="trayectoria" className="light-section section" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title">{t.background}</h2>
            <div className="experience-row"><h3>NielsenIQ</h3><p className="experience-role">Client Solutions Architect</p><p>{t.niq}</p></div>
            <div className="experience-row"><h3>Deloitte</h3><p className="experience-role">{t.deloitteRole}</p><p>{t.deloitte}</p></div>
            <div className="credentials"><p>{t.educationLine}</p><p>{t.qualification}</p></div>
          </div>
        </section>
      </main>
      <footer id="escribir" className="section">
        <div className="wrap">
          <div className="footer-main"><div><h2>{t.closing}</h2><p>{t.closingText}</p></div><div className="contact-links"><a className="text-link" href={`mailto:${site.email}`}>{site.email}<Arrow /></a><a className="text-link" href={site.links.linkedin} rel="me">LinkedIn<Arrow /></a><a className="text-link" href={cv}>{t.cv}<Arrow /></a></div></div>
          <p className="footer-note">{t.footer}</p>
        </div>
      </footer>
    </>
  );
}

