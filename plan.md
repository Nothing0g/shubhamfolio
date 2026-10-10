# Shubham Portfolio — implementation plan

## Scope
Build a static, content-driven React + Vite + TypeScript portfolio for Shubham. The site has Home, About, Work, Contact, Accessibility, 404, and dynamic `/work/:slug` case-study routes for three original case studies grounded in the supplied RetainOS, Uber Fare Lock, and Prism-Metric reference data. It is front-end only and will be compatible with free static hosting such as GitHub Pages.

## Design direction
- **Design movement:** warm editorial product-design portfolio with playful hand-drawn system accents.
- **Core principles:** make complexity legible; use calm copy with expressive visual rhythm; show craft through real interface-like data; keep every interaction accessible and reversible.
- **Color philosophy:** warm cream and soft surface tones create reassurance; ink-dark bands provide focus; cobalt communicates trust and navigation; coral is reserved for the main action; yellow is decorative energy.
- **Layout paradigm:** asymmetric editorial composition on a 12-column grid, with offset case cards, overlapping illustration layers, sticky selected-work cards, and narrow article measure for long-form reading.
- **Signature elements:** coral marker underline, palette-colored illustration placeholders with ink outlines, and Kalam annotations/stickers.
- **Interaction philosophy:** motion clarifies hierarchy and continuity rather than delaying reading. Cards lift, filters reflow, drawers trap focus, and pause controls are visible for loops.
- **Animation:** expressive on desktop, lighter on mobile, and static under reduced motion. CSS transitions plus scoped GSAP/Lenis hooks support hero reveals, sticky work cards, marquee, and route transitions without hiding content in CSS.
- **Typography:** Bricolage Grotesque for expressive hierarchy, Plus Jakarta Sans for readable body copy, Kalam for short annotations only.
- **Brand essence:** Product designer who turns complex problems into calm, premium interfaces; clear, warm, exacting.
- **Brand voice:** direct and steady. Example lines: “Complex products don’t have to feel complicated.” “Here’s what I owned, what got in the way, and what changed.”
- **Wordmark:** lowercase `shubham` in the heading face with a coral dot; the real logo can replace this one component later.
- **Signature brand color:** cobalt `--color-primary`, used as the trust and navigation anchor.

## Implementation
- Create W3C Design Tokens in `src/styles/tokens.json`; generate and commit `tokens.css` with `scripts/build-tokens.mjs`.
- Keep brand data in `src/config/brand.ts`, page copy in `src/content`, image briefs in `src/content/images.ts`, and one case-study file per entry in `src/content/work`.
- Build shared layout and accessible navigation first, then page sections as prop-driven BEM components with colocated CSS.
- Use inline SVG icons and CSS/SVG illustration placeholders rather than copied or generic stock imagery.
- Use a small `useSeo` hook to set page metadata and JSON-LD; generate `public/sitemap.xml`, `public/robots.txt`, `public/manifest.webmanifest`, and favicon assets.
- Configure Vite for GitHub Pages-friendly relative assets. The static output is compatible with GitHub Pages and the managed Preview.
- Add a minimal Vitest/RTL suite covering route rendering, form validation, drawer behavior, heading-level rendering, filter behavior, and reduced-motion visibility.

## Project structure
- `src/components`: reusable layout, controls, illustration and page sections; each section has its own CSS file.
- `src/pages`: one route file per page, plus `CaseStudyPage.tsx` for the dynamic template.
- `src/content`: SEO-aware page content, images, and case-study entries.
- `src/styles`: token source, generated CSS, and global reset/base styles.
- `src/config`: global brand/navigation/social data.
- `scripts`: token and SEO asset generators.
- `public`: static route manifest, icons, sitemap, robots, and manifest.

## Free hosting
The built output is static and can be published on GitHub Pages. The existing `Nothing0g/nothing0g.github.io` repository is the compatible free-host target; the managed Preview remains available for review during development.
