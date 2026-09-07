# Contracts

- `lib/site.ts` is the only place for URL, email, photo path, and LinkedIn.
- `NEXT_PUBLIC_SITE_URL` overrides the canonical origin for metadata, OG, JSON-LD, sitemap, robots. An empty value is ignored. On Vercel the build falls back to `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`.
- LinkedIn is `https://www.linkedin.com/in/joseahyeon/`, a text link in the close. GitHub stays off until supplied.
- Fachada on this page points to `https://fachada-tau.vercel.app` because that host was live with the reviews product. `fachada.vercel.app` was a different app when checked.

# Architecture

App Router, one `app/page.tsx`. Static HTML via `output: "export"`. `next/image` is unoptimized because there is no image optimizer on static export.

# Rationale

Night plaza comes from the portrait (columns, cap, khaki shirt), not from a generic personal-site template. Atkinson Hyperlegible is the accessibility claim made visible. Migajas is the live product; Meant To is listed and not heroed.
