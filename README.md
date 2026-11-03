# PLAY / WORK — Merlijn Van den Broeck

An editorial, responsive portfolio for a Game Designer & Producer. Built with React, TypeScript, Vite, Tailwind CSS, Motion, Lucide, and React Router. Static site; no backend or credentials required. Fonts are bundled locally.

## Preview locally

Use Node.js 22+ (validated with Node 24).

```sh
cd /workspace/MyPortfolio
npm ci
npm run dev
```

Vite reports the preview address and port (normally 5173). For a production preview, run `npm run build` followed by `npm run preview`. `npm run check` checks TypeScript.

## Continue through Codex

You can ask for ordinary changes in natural language, for example:

- “Make the orange slightly softer and reduce the hero headline.”
- “Here are my responsibilities on Artifact Ambush; update the case study.”
- “Add these screenshots to Fixtape with captions.”
- “Move Spindwich before Fixtape.”
- “Add my email, LinkedIn, and this CV.”

Codex can update the shared content and components without rebuilding each page separately.

## Where things live

- `src/data/portfolio.ts`: personal information, navigation, project order, project facts, discipline copy, contact URLs, and CV path. Empty links render as unavailable labels.
- `src/styles.css`: design tokens at the top, typography, layout, abstract artwork, responsive rules, and reduced-motion behavior. Tailwind is also available for future component work.
- `src/App.tsx`: homepage sections, shared case-study template, routing, and shared reveal animation settings.
- `src/components/Layout.tsx`: navigation, mobile menu, footer.
- `src/components/Artwork.tsx`: shared media rendering and original abstract placeholder graphics.
- `public/`: place optimized screenshots and CV here. Refer to them using paths such as `media/fixtape.webp` and `merlijn-cv.pdf` (no leading slash, so GitHub Pages subpaths work).
- `index.html`: site description, favicon, and default metadata. Page titles change per case study.

## Content still needed

The existing Carrd portfolio could not be fetched during development (access denied). Only the supplied brief was used. No professional accomplishments or project outcomes were invented.

All three projects need real screenshots, descriptions, team sizes, dates, engine/tools, genre/platform, responsibilities, challenges, process, results, and external game links. Artifact Ambush's combined design/production role comes from the brief. Fixtape and Spindwich roles remain unverified placeholders.

Add verified background, skills, tools, education, email, profile URLs, and CV. Set each project's `image` and meaningful `imageAlt` to replace the clearly labeled abstract concept artwork. The `gallery` array supports additional image paths and alt text. For hero video, set `video`, optional `videoPoster`, and `videoCaptions` (a WebVTT file). The shared player has native controls and does not autoplay. Provide captions for spoken content. Do not treat the placeholder graphics as game screenshots.

## GitHub Pages

`HashRouter` uses routes like `/#/work/fixtape`, so direct links and refreshes work without server rewrites. Vite's relative base supports repository subpaths. A GitHub Actions workflow builds and deploys `dist/` when changes are pushed to `main`, or when manually triggered. In repository Settings → Pages, select **GitHub Actions** as the build source. Deployment has not been performed by Codex.

## Interaction and accessibility

The discipline buttons use `aria-pressed`; both work with keyboard activation. Mobile navigation exposes its expanded state. A skip link and visible focus states support keyboard use. All project links remain visible without hover. Motion reveals respect reduced-motion preferences; CSS animation and smooth scrolling are also disabled under that preference. Navigation and case studies share one template and data source.
