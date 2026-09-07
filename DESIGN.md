---
name: Jose Antonio Hyeon
description: Night-plaza personal page. Person first, one live product, a way to write.
colors:
  night: "#120f0c"
  night-raised: "#1c1814"
  stone: "#f3ebe0"
  stone-dim: "#c4b5a0"
  khaki: "#c4a574"
  khaki-deep: "#a88858"
  ink: "#120f0c"
  focus: "#e8d4b0"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 3.75rem)"
    fontWeight: 560
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  product:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
  body:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  kicker:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  photo: "2px"
  button: "2px"
spacing:
  page-x: "1.25rem"
  section: "4.5rem"
  cluster: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone}"
    rounded: "{rounded.button}"
    padding: "0.9rem 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "#000000"
    textColor: "{colors.stone}"
  nav-link:
    textColor: "{colors.stone}"
    padding: "0.75rem 0"
---

## Overview

The page is a night plaza: warm black ground, one lit face, khaki from the shirt as the only large color field (Ahora). It is a letter from a person, not a studio system. The photo is an object at human scale, square, almost no radius — a print, not an avatar.

## Colors

Night (`#120f0c`) is the page. Stone (`#f3ebe0`) is type and the learning-case field. Khaki (`#c4a574`) belongs to the active-product slab and small domain labels. Do not introduce a second accent. No cream-paper + terracotta default.

## Typography

Bricolage Grotesque is for named things: the hero name (`display`), every section title at the same `section` size (Ahora, El mismo hilo, el caso de Sí Quiero, Cómo trabajo, Escríbeme), and product names. Atkinson Hyperlegible is body, lead, nav, button, and contact links. Kickers are domain labels (Vínculos, Vivienda), not section titles. Escríbeme matches the other h2s; the email and LinkedIn stay at `lead` size, not display.

## Layout

Mobile first. Measure ~38–42rem. Nav is name | Escribir. Hero stacks photo then name then line. Ahora is a full-bleed khaki band. From `md`, most sections split on the same axis as the hero (~28rem rail | body): kicker or title under the print, reading column aligned with the name. “El mismo hilo” uses editorial rows with hairline rules, not a card grid. The Sí Quiero learning case changes the pace with a stone field and a three-part validation summary before the story. “Cómo trabajo” is three numbered principles (the method, not page chrome). Cierre leads with one spoken line, then the email and LinkedIn as text links at lead size.

From `md`, hero becomes photo | text, still top-aligned, photo never a circle. The print still hangs into the khaki band.

## Elevation & Depth

The portrait is a print: offset shadow (`18px 36px`), hangs into the khaki band, plaza light as a radial behind it. The khaki is a lit slab, not a flat strip. The Migajas button has a short offset shadow and a press scale. No zero-offset glow.

## Shapes

Radius 2px. Buttons are rectangular, not pills. The photo is square.

## Components

One button: Entrar en Migajas. Email and LinkedIn are underlined text links, not twin buttons. Active projects use editorial rows with a domain label, linked name, and one concrete outcome. Sí Quiero has no CTA: its result is the decision, not a product to enter.

## Do's and Don'ts

- Do let the photo carry the first memory of the page.
- Do keep Migajas as the only button.
- Don’t add a logo, wordmark, or “Hyeon Studio”.
- Don’t use equal project cards, numbered sections, or a second primary button.
- Don’t swap the portrait.
