# Working on PLAY / WORK

## Purpose and identity

This is Merlijn Van den Broeck's personal portfolio as a Game Designer and Producer. It presents selected projects, biography, and contact information for studios, collaborators, and recruiters. The owner works through natural-language Codex requests and should not need to edit code manually.

Preserve the current PLAY / WORK identity: dark background, warm orange accents, off-white typography, editorial layouts, abstract project placeholders, and restrained game-menu interactions. The homepage is name + portrait, Selected Work, About, then Contact. The old “SERIOUS ABOUT PLAY” slogan and Design / Production toggle were deliberately removed; do not restore them without a request.

## Permanent rules

- Preserve the overall PLAY / WORK visual identity unless the user explicitly requests a redesign.
- Make focused changes based on the user's instructions.
- Avoid rewriting unrelated components.
- Prefer reusable components over duplicated code.
- Never invent facts about the owner's professional experience or projects.
- Do not remove working features without a clear reason.
- Always check that the website builds successfully.
- Explain changes in plain English.
- Make sensible implementation decisions independently.

Inspect Git status before editing. Preserve existing user changes, images, copy, project slugs, and functioning links. Read the relevant content and components before replacing anything. Missing content must stay clearly labeled or be omitted intentionally, never filled with fabricated claims. Do not replace actual game media with unrelated stock images. Do not reset or force-push to solve conflicts. Use the existing isolated checkout; do not create a worktree unless requested. Commit, push, merge, or deploy only within the user's authorized scope.

## Technology and structure

React 19, TypeScript, Vite, Tailwind CSS 4, Motion for React, Lucide, React Router. Static frontend; no backend, secrets, or CMS required. Fonts are locally bundled via Fontsource. Prefer the current small toolchain; don't add state frameworks, component libraries, or a CMS for ordinary content edits.

- `src/data/personal.ts`: name, role, portrait, biography (introduction, background, passions), email, CV, and social links. Blank URLs intentionally display unavailable labels.
- `src/data/projects.ts`: typed `Project` shape and all project content. Array order controls cards, numbering, and next-project navigation.
- `src/data/site.ts`: navigation labels and section IDs.
- `src/design/tokens.css`: semantic colors, typography, spacing, borders, focus treatment, and CSS motion timing.
- `src/design/motion.ts`: shared reveal enable switch, duration, distance, and viewport threshold.
- `src/styles.css`: global styles, layouts, responsive rules, and illustration-specific art styles.
- `src/sections/`: distinct `Hero`, `SelectedWork`, `About`, and `Contact` components.
- `src/pages/Home.tsx`: homepage composition/order.
- `src/pages/CaseStudy.tsx`: slug lookup and next-project selection.
- `src/components/ProjectCard.tsx` and `CaseStudyTemplate.tsx`: reusable project presentation.
- `src/components/Artwork.tsx`: image/video rendering or labeled original concept art.
- `src/components/Reveal.tsx`, `SectionLabel.tsx`, `Layout.tsx`: shared primitives and site shell.
- `src/App.tsx`: routes, titles, and section scrolling. `src/main.tsx`: providers and font imports.
- `public/`: optimized media, captions, and CV; the file paths are referenced from content.

## Design conventions

Default colors: background `#111318`, accent `#F8A36A`, text `#F1EEE8`, quiet gray `#767C87`. Use semantic variables such as `--bg`, `--accent`, `--text`, and `--line`; don't copy brand hex codes into components. Tailwind's ink/peach/paper aliases reference the same variables. Illustration palettes may stay local to the artwork CSS.

Space Grotesk is for headings, Inter for readable body copy, and Space Mono for interface details. Shared type sizes, spacing scale, page gutters, section spacing, and border/focus values live in tokens.css. Keep one source for reusable values; retain local geometry where it describes a specific layout or drawing. Existing responsive breakpoints are 900px and 640px; CSS variables do not work as native media-query thresholds, so keep those literal and consistent. Avoid changing typography or spacing merely as a side effect of refactoring.

Change shared hover durations in tokens.css and reveal behavior in motion.ts. Use the existing `Reveal` wrapper instead of repeating Motion configuration. Preserve reduced-motion handling in both React and CSS. Never hide essential content behind hover.

## Add or update a project

1. Update or add a complete typed object in `src/data/projects.ts`. Keep existing slugs stable; use a unique lowercase hyphenated slug for a new project.
2. Supply verified title, category, role, description, metadata, case-study text, and media. Unknown facts use explicit placeholders. Don't claim a result merely because the template has a field.
3. Add optimized files under `public/media/` and reference paths like `media/new-project.webp`, with meaningful `imageAlt`. Keep paths relative, without a leading slash, for GitHub Pages.
4. `image` and `imageAlt` control screenshots. Optional `video`, `videoPoster`, and `videoCaptions` support a native, non-autoplaying hero video; use captions for speech. `gallery` holds additional images and alt text. Leave `url` blank until a real external link exists.
5. Use `theme: 'neutral'` for a new project without media. The artifact/tape/spin themes belong to their existing projects; don't misrepresent another project with those drawings.
6. The first item is featured. Cards, case-study routes, numbers, and next-project links are generated automatically; do not add a fourth route or copy a page.
7. Check cards, the direct case-study URL, refresh, next-project navigation, and mobile layout.

For a new homepage section, create one component under `src/sections`, compose it in `Home.tsx`, and update navigation only if requested. Give anchor targets stable IDs. Keep personal and project facts in data files rather than JSX.

## Validation before committing

Use Node 24 (CI uses 24). Install from the lockfile with `npm ci` when needed. Run:

```sh
npm run check
npm run build
git diff --check
```

`build` also checks TypeScript. There is currently no unit-test or lint script; do not claim one ran. Run browser checks appropriate to the change: homepage and all affected case studies, navigation, direct URLs and refresh, keyboard use, mobile menu, and overflow at small phone/tablet/desktop widths. For refactors, compare before/after screenshots where possible. Report actual checks and distinguish local validation from a live GitHub deployment.

Production base is `/MyPortfolio/`; development runs at `/`. `HashRouter` keeps direct URLs and refresh working on static hosting (`/MyPortfolio/#/work/fixtape`). Validate production with `npm run preview` at `/MyPortfolio/`. Keep that base and hash routing unless hosting requirements change. The Pages workflow validates PRs and deploys pushes to `main`; don't publish a feature branch or merge without authorization.

## Accessibility and responsive behavior

Preserve semantic landmarks, one primary heading per page, heading order, the skip link, visible keyboard focus, descriptive link names, and the mobile menu's accessible name/expanded state. Use buttons for actions and links for navigation. Provide useful image alt text, hide purely decorative icons from assistive technology, retain native video controls, and don't autoplay media. Keep text readable and preserve contrast when changing colors. Respect `prefers-reduced-motion` for scrolling, hover effects, and reveals. Check at least 320/375px, 768px, and desktop widths, including longer titles and newly added cards. Don't add desktop-only information or interactions.
