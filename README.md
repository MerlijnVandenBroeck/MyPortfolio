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

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for example natural-language prompts and a full editing map. [AGENTS.md](AGENTS.md) provides permanent guidance for future Codex tasks.

- `src/data/personal.ts`: personal facts, portrait, biography, CV, contact, and social links.
- `src/data/projects.ts`: typed project content and order. Cards, numbering, routes, and next-project links follow this array automatically.
- `src/data/site.ts`: navigation.
- `src/design/tokens.css`: shared colors, fonts, type sizes, spacing, borders, and hover timing.
- `src/design/motion.ts`: shared reveal settings and enable switch.
- `src/sections/`: separate homepage section components.
- `src/pages/`: homepage composition, project route lookup, and not-found page.
- `src/components/`: shared cards, case-study template, media, reveal wrapper, section label, and site shell.
- `src/styles.css`: layouts, responsive rules, and original placeholder illustration styles.
- `public/`: optimized screenshots, video, captions, portrait, and CV. Use relative paths such as `media/fixtape.webp`.
- `src/App.tsx`: routes and page-level navigation/title effects. `src/main.tsx`: providers and bundled font imports.
- `index.html`: default metadata and favicon.

There is no CMS or backend to maintain. Content is in plain TypeScript files, the visual system uses native CSS variables, and shared templates avoid one-off pages for each project.

## Content still needed

The existing Carrd portfolio could not be fetched during development (access denied). Only the supplied brief was used. No professional accomplishments or project outcomes were invented.

All three projects need real screenshots, descriptions, team sizes, dates, engine/tools, genre/platform, responsibilities, challenges, process, results, and external game links. Artifact Ambush's combined design/production role comes from the brief. Fixtape and Spindwich roles remain unverified placeholders.

Set `personal.photo` to a portrait image path to replace the homepage photo placeholder; update `personal.photoAlt` as needed.

Add verified background, skills, tools, education, email, profile URLs, and CV. Set each project's `image` and meaningful `imageAlt` to replace the clearly labeled abstract concept artwork. The `gallery` array supports additional image paths and alt text. For hero video, set `video`, optional `videoPoster`, and `videoCaptions` (a WebVTT file). The shared player has native controls and does not autoplay. Provide captions for spoken content. Do not treat the placeholder graphics as game screenshots.

## Automatic GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` validates pull requests to `main` without deploying them. Every push to `main`, including a merged pull request, runs `npm ci`, the TypeScript check, and the production build, then publishes `dist/` through the official GitHub Pages actions. A failed build prevents deployment. No personal token or separate hosting service is required.

### One-time GitHub settings

1. Open this repository on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Under **Settings → Actions → General**, ensure Actions are enabled and that your policy permits the `actions/*` actions used by the workflow.
4. If the **github-pages** environment has deployment protection rules, allow `main` to deploy. Required reviewers pause deployment; remove that requirement if you want publishing to be fully automatic.
5. Merge these configuration changes into `main`. Monitor **Actions → Build and deploy portfolio** for the build and deployment results. Future merged pull requests deploy automatically.

The workflow grants Pages write and OIDC permissions only to the deployment job. You do not need to enable broad repository write permissions. You do not need a `gh-pages` branch or a Deploy from a branch source.

Site: https://merlijnvandenbroeck.github.io/MyPortfolio/

### Paths and routing

Vite builds assets with the `/MyPortfolio/` base, matching this repository's Pages URL. Development remains at `/`. React Router uses `HashRouter`, so project links such as `https://merlijnvandenbroeck.github.io/MyPortfolio/#/work/fixtape` work when opened directly or refreshed; GitHub Pages needs no rewrite or custom 404 page.

Keep public image, video, and CV references relative (for example `media/fixtape.webp`), not root-relative (`/media/fixtape.webp`). Hash navigation preserves the `/MyPortfolio/` document path. If the repository is renamed or moved to a custom domain, update the production base in `vite.config.ts`.

To preview the production build locally:

```sh
npm run build
npm run preview
```

Open the `/MyPortfolio/` address reported by Vite (normally `http://localhost:4173/MyPortfolio/`). Manual deployment is also available through **Actions → Build and deploy portfolio → Run workflow**, selecting `main`. Running it from another branch will only build, not deploy.

## Interaction and accessibility

Mobile navigation exposes its expanded state. A skip link and visible focus states support keyboard use. All project links remain visible without hover. Motion reveals respect reduced-motion preferences; CSS animation and smooth scrolling are also disabled under that preference. Navigation and case studies share one template and data source.
