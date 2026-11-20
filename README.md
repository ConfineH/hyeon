# José Antonio Hyeon

Bilingual personal portfolio built with Next.js static export.

- `npm ci`
- `npm run dev` (port 3002)
- `npm run build` (static output in out/)
- `npm run lint`

Spanish: /. English: /en. Copy: lib/copy.ts. Contact, product URLs and the canonical origin: lib/site.ts.

Canonical origin: https://joseahyeon.com, without www. Vercel redirects www to that apex. `vercel.json` permanently redirects only `jahyeon.vercel.app`, keeps the path, and does not match the apex or www.

The CV action requests the current document by email until an approved PDF is supplied.
