# Shubham — Product Design Portfolio

A React + Vite + TypeScript portfolio for Shubham, built as a static front end and compatible with free hosting such as GitHub Pages. The visual language follows the supplied brief: warm editorial composition, calm copy, cobalt navigation, coral action fills, yellow annotations, and content-driven case studies.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run test
```

The production output is `dist/`. For GitHub Pages, deploy `dist/` from the `main` branch or use a Pages workflow that runs `npm ci && npm run build` and publishes `dist/`.

## Where to edit

- `src/content/` contains page and case-study copy. Add another case in `src/content/work/cases.ts`, then add its slug to `public/manus-routes.json` and `public/sitemap.xml`.
- `src/config/brand.ts` contains the global name, email, location, social links, and navigation.
- `src/content/images.ts` is the replaceable image registry. The current artwork is intentionally a visible placeholder graphic.
- `src/styles/tokens.json` is the single source of truth for colors, type, spacing, radii, and shadows. Run `node scripts/build-tokens.mjs` to regenerate `src/styles/tokens.css`.
- `src/App.tsx` contains shared shell and prop-driven section primitives. `Logo` is the one place where the placeholder wordmark can later be replaced by the real logo.

## CMS token mapping

| Token group | WordPress theme.json path | HubSpot theme setting |
|---|---|---|
| `color.*` | `settings.color.palette` | Colors |
| `font.*` | `settings.typography.fontFamilies` | Fonts |
| `size.*` | `settings.typography.fontSizes` | Typography |
| `space.*` | `settings.spacing.spacingSizes` | Spacing |
| `radius.*`, `shadow.*` | `styles.elements.button` and related element styles | Buttons and cards |

The first pass keeps motion lightweight and CSS-led so the static build remains fast and accessible. The case-study themes are based on the supplied RetainOS, Uber Fare Lock, and Prism-Metric reference site, with original copy and layouts.
