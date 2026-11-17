import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { copy, type Language } from "@/lib/copy";
import { Motion } from "@/components/motion";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;
const SectionLabel = ({ number, children }: { number: string; children: ReactNode }) => <p className="section-label"><span aria-hidden="true">{number}</span>{children}</p>;

export function Portfolio({ language }: { language: Language }) {
  const t = copy[language];
  const cv = `mailto:${site.email}?subject=${encodeURIComponent(t.cvSubject)}&body=${encodeURIComponent(t.cvBody)}`;
  const projects = [
    { name: "Migajas", category: t.education, image: "/projects/migajas-exercise.jpg", alt: t.migajasAlt, caption: t.migajasCaption, headline: t.migajas, body: t.migajasBuilt, decision: t.migajasDecision, detail: t.migajasDetail, url: site.links.migajas, width: 780, height: 600, theme: "sage" },
    { name: "Meant To", category: t.relationships, image: "/projects/meant-to.jpg", alt: t.meantAlt, caption: t.meantCaption, headline: t.meant, body: t.meantBuilt, decision: t.meantDecision, detail: t.meantDetail, url: site.links.meantTo, width: 1170, height: 760, theme: "rose" },
  ];
  return <>
    <Motion />
    <a className="skip-link" href="#contenido">{t.skip}</a>
    <header className="site-header"><nav className="wrap navigation" aria-label={t.navigation}>
      <a className="wordmark" href={language === "es" ? "/" : "/en/"}>José Antonio Hyeon<span className="wordmark-dot" aria-hidden="true">.</span></a>
      <div className="nav-links"><a href="#proyectos">{t.projects}</a><a href="#trayectoria">{t.experience}</a><a href="#escribir">{t.contact}<Arrow /></a></div>
      <div className="language-switch" aria-label={t.language}><a href="/" hrefLang="es" lang="es" aria-label="Español" aria-current={language === "es" ? "page" : undefined}>ES</a><span aria-hidden="true">/</span><a href="/en/" hrefLang="en" lang="en" aria-label="English" aria-current={language === "en" ? "page" : undefined}>EN</a></div>
    </nav></header>
    <main id="contenido">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">{t.role}</p><h1 id="hero-title">{t.title}<br /><em>{t.titleEnd}</em></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href="#proyectos">{t.primary}<span className="arrow" aria-hidden="true">↓</span></a><a className="text-link" href={cv}>{t.cv}<Arrow /></a></div></div>
        <figure className="hero-portrait"><div className="portrait-frame"><Image src="/jose-hyeon-retouched.jpg" alt="José Antonio Hyeon" width={1000} height={1000} sizes="(max-width: 700px) 200px, (max-width: 1000px) 280px, 360px" priority /></div><figcaption>{t.portraitCaption}</figcaption></figure>
        <div className="hero-foot" aria-hidden="true"><span>01 — {t.projects}</span><span>↓</span></div>
      </section>
      <section className="story-section section" aria-labelledby="story-title"><div className="wrap story-grid reveal"><div><SectionLabel number="01">{t.storyLabel}</SectionLabel><h2 id="story-title">{t.storyTitle}</h2></div><div className="story-copy"><p>{t.story}</p><p>{t.storyEnd}</p></div></div></section>
      <section id="proyectos" className="projects-section section" aria-labelledby="projects-title"><div className="wrap">
        <div className="section-heading reveal"><SectionLabel number="02">{t.projects}</SectionLabel><h2 id="projects-title">{t.selected}</h2><p>{t.selectedIntro}</p></div>
        {projects.map((project, index) => <article className={`project project-${project.theme} reveal`} key={project.name}>
          <figure className="project-visual"><a href={project.url} className="project-image-link" aria-label={`${t.visit}: ${project.name}`}><div className="visual-heading"><span>{project.name}</span><span aria-hidden="true">0{index + 1} / 03</span></div><div className="image-mat"><Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 700px) calc(100vw - 80px), 500px" className="project-image" /></div></a><figcaption>{project.caption}</figcaption></figure>
          <div className="project-copy"><p className="eyebrow">{project.category}</p><h3>{project.headline}</h3><p className="project-body">{project.body}</p><details><summary><span>{project.decision}</span><span className="details-icon" aria-hidden="true">+</span></summary><p>{project.detail}</p></details><a className="text-link" href={project.url}>{t.visit}<Arrow /></a></div>
        </article>)}
        <article className="fachada-row reveal"><div><p className="eyebrow">03 / Fachada</p><h3>{t.fachadaTitle}</h3></div><div><p>{t.fachada}</p><a className="text-link" href={site.links.fachada}>{t.visit}<Arrow /></a></div></article>
      </div></section>
      <section className="case-section section" aria-labelledby="case-title"><div className="wrap case-grid reveal"><div><SectionLabel number="03">{t.stopLabel}</SectionLabel><h2 id="case-title">{t.stopTitle}</h2><div className="case-rule" aria-hidden="true" /></div><div className="case-copy"><p>{t.stopIntro}</p><p>{t.stopDetail}</p><p className="case-conclusion">{t.stopConclusion}</p></div></div></section>
      <section className="approach-section section" aria-labelledby="approach-title"><div className="wrap"><div className="section-heading reveal"><SectionLabel number="04">{t.approachLabel}</SectionLabel><h2 id="approach-title">{t.approachTitle}</h2></div><ol className="approach-list">{t.approach.map((step, index) => <li className="reveal" key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
      <section id="trayectoria" className="experience-section section" aria-labelledby="experience-title"><div className="wrap"><div className="section-heading experience-heading reveal"><div><SectionLabel number="05">{t.experience}</SectionLabel><h2 id="experience-title">{t.background}</h2></div><p>{t.backgroundIntro}</p></div>
        <article className="experience-row reveal"><div className="company"><Image src="/companies/niq.svg" alt="" width={88} height={38} /><h3>NielsenIQ</h3></div><div className="experience-role"><h4>Client Solutions Architect</h4><p>{t.niqDate}</p></div><p>{t.niq}</p></article>
        <article className="experience-row reveal"><div className="company"><div className="deloitte-mark"><Image src="/companies/deloitte.svg" alt="Deloitte" width={116} height={22} /></div></div><div className="experience-role"><h4>{t.deloitteRole}</h4><p>{t.deloitteDate}</p></div><p>{t.deloitte}</p></article>
        <p className="earlier reveal">{t.earlier}</p><div className="credentials reveal"><p>{t.educationLine}</p><p>{t.qualification}<span>PSPO I</span></p></div>
      </div></section>
    </main>
    <footer id="escribir" className="section"><div className="wrap"><div className="footer-main reveal"><div><p className="eyebrow">{t.contact}</p><h2>{t.closing}</h2><p>{t.closingText}</p></div><div className="contact-links"><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<Arrow /></a><div><a className="text-link" href={site.links.linkedin} rel="me">LinkedIn<Arrow /></a><a className="text-link" href={cv}>{t.cv}<Arrow /></a></div></div></div><div className="footer-note"><span>{t.footer}</span><span>{t.footerNote}</span><span>Madrid · ES / EN</span></div></div></footer>
  </>;
}
