# Contracts

- `lib/site.ts` is the only place for URL, email, and photo path.
- `NEXT_PUBLIC_SITE_URL` overrides the canonical origin for metadata, OG, JSON-LD, sitemap, robots. Default: `https://hyeon.vercel.app` until the real Vercel slug exists.
- Fachada on this page points to `https://fachada-tau.vercel.app` because that host was live with the reviews product. `fachada.vercel.app` was a different app when checked.

# Architecture

App Router, one `app/page.tsx`. Static HTML via `output: "export"`. `next/image` is unoptimized because there is no image optimizer on static export.

# Rationale

Night plaza comes from the portrait (columns, cap, khaki shirt), not from a generic personal-site template. Atkinson Hyperlegible is the accessibility claim made visible. Migajas is the live product; Meant To is listed and not heroed.
