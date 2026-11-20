# Contracts
lib/site.ts owns contact details, verified product links and the canonical origin https://joseahyeon.com. Do not derive canonicals from VERCEL_URL or NEXT_PUBLIC_SITE_URL.
Fachada points to https://fachada.app. www.fachada.app redirects there. fachada.vercel.app is a different app.
English is /en, Spanish is /. /en/ currently redirects to /en. Both have independent root layouts sharing SiteDocument, so html lang is correct without client-side switching.

# Architecture
Static Next.js export; next/image remains unoptimized.
Shared server component: components/portfolio.tsx. Bilingual copy: lib/copy.ts.
Route-group layouts delegate fonts, JSON-LD and document structure to components/site-document.tsx.
Metadata factory: lib/metadata.ts.
Existing portrait is retained for social metadata, not used in the hero.
Real product captures are in public/projects. Migajas shows only the catalogue, with the account header excluded. Meant To shows the public landing page.

# Direction
The owner approved a professional portfolio mockup on 17 November 2026. Supersedes previous portrait-first, Migajas-only CTA requirements.
No supplied CV PDF: CV action is explicitly an email request.
