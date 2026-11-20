# José Antonio Hyeon

Bilingual personal portfolio built with Next.js static export.

- `npm ci`
- `npm run dev` (port 3002)
- `npm run build` (static output in out/)
- `npm run lint`

Spanish: /. English: /en. Copy: lib/copy.ts. Contact, product URLs and the canonical origin: lib/site.ts.

Canonical origin: https://joseahyeon.com, without www. `vercel.json` permanently redirects `jahyeon.vercel.app` and `www.joseahyeon.com` to that apex and keeps the path. Those rules do not match `joseahyeon.com`, so they do not loop. Deploy them only after https://joseahyeon.com serves this site over HTTPS. DNS and the Vercel domain are configured outside the repository.

The CV action requests the current document by email until an approved PDF is supplied.
