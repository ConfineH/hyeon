# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Someone who already has a name, a thread, or a reason to look Jose Antonio up: a person in product, a collaborator, someone who heard about Migajas. They open this on a phone. They need three facts: who he is, what he is building, and how to write him.

This is not a customer-acquisition landing page for a studio.

## Product Purpose

A one-page personal site. Success: after one short visit, the reader can say who Jose Antonio is, understand the intention shared by his products, name what he is building now (Migajas), and send an email without hunting.

## Positioning

A person page, not a holding, studio, agency portfolio, or blog. The primary action is to open Migajas. Email is secondary and must not look like a twin button.

The products share one belief: useful information should be within reach of the person who needs it. They try to improve something concrete in health, housing, or close relationships. Show this through the work; never claim generic “positive impact”.

## Operating Context

Static Next.js, deployed as its own Vercel project. Domain is `*.vercel.app` until a custom domain exists. No CMS, auth, Supabase, or Neon. LinkedIn is `https://www.linkedin.com/in/joseahyeon/` as a text link in the close. GitHub stays off until he supplies it.

## Constraints

- Spanish. Direct. Warm. No agency voice.
- One route. Nav is name + Escribir. No `/about`, `/work`, `/contact`.
- Hero photo is only `public/jose-antonio-hyeon.jpg` (cap and glasses). No blazer headshot, no café photo.
- Do not invent social profiles, metrics, testimonials, or growth stories.
- Sí Quiero (2026) is a learning case: discontinued after customer discovery. Do not present it as a success. Problem was real; market scale and distribution economics were not. No live CTA.
- Fachada public URL confirmed live as `https://fachada-tau.vercel.app` (`fachada.vercel.app` is a different product).
- Migajas public URL confirmed live as `https://migajas.vercel.app`.
- Meant To public URLs: `https://www.mnto.app` / `https://app.mnto.app`. On this page it is listed, not heroed.

## Voice

First person. Short sentences. Concrete. No “impulsamos”, no “soluciones”, no “ecosistema”.

## Brand commitments

- Name in the nav is the name, not a studio mark.
- Primary CTA label names Migajas.
- Secondary contact is a mailto text link, then LinkedIn as another text link.

## Accessibility

Body type is Atkinson Hyperlegible on purpose: the hero line is about products you can actually use. Contrast on night surfaces must stay WCAG AA. Tap targets ≥44px. Respect `prefers-reduced-motion`.

## Open

Custom domain. GitHub. Whether Fachada should move off the `fachada-tau` Vercel slug.
