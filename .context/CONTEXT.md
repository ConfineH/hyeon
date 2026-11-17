# Contracts
lib/site.ts owns contact details and verified product links. Production origin is chosen from NEXT_PUBLIC_SITE_URL, VERCEL_PROJECT_PRODUCTION_URL, VERCEL_URL, then https://jahyeon.vercel.app.
Fachada points to https://www.fachada.app; fachada.vercel.app is a different app.
English is /en/, Spanish is /. Both have independent root layouts sharing SiteDocument, so html lang is correct without client-side switching.

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
