# Customize with Codex

You can describe changes in ordinary language. You do not need to edit these files yourself. Explain what should change and what you want to keep. Codex should make routine implementation decisions, preserve your existing content, and run the build.

## Change the color palette

> “Make the orange accent a softer terracotta. Keep the dark background, layout, and typography. Check that text and buttons remain readable.”

Shared colors are in `src/design/tokens.css`; Tailwind aliases use those same values. Project illustrations have separate palettes so a global color change need not recolor the artwork. You can specify hex values or describe the desired color.

## Replace a project screenshot

> “Use this attached image as Fixtape’s main screenshot. Keep the other projects unchanged and write suitable alt text.”

Attach the actual image. Codex can optimize it, save it under `public/media/`, and update `image`/`imageAlt` in `src/data/projects.ts`. Say whether the image is a cover, gallery image, or replacement for an existing image. You can similarly supply a portrait or CV and ask to update `src/data/personal.ts`.

## Add a project

> “Add [title] as the fourth project using these screenshots and notes. My role was [role]. Here are the team size, dates, tools, and game link. Mark anything I haven’t provided as missing.”

The typed projects array is the source of truth. Cards, project numbers, routes, and next-project links appear automatically. The first project is featured; ask to change the order if desired. New projects without screenshots use a clearly labeled neutral placeholder. No copied page or custom route is needed.

## Rewrite a case study

> “Rewrite Artifact Ambush’s process section using these notes. Make it clearer for recruiters, keep the facts accurate, and don’t add achievements or metrics.”

Specify the project and sections: overview, responsibilities, design challenges, process, production contributions, or results and lessons. Codex edits the project data, so the shared template remains consistent. Keep project URLs stable when changing titles.

## Change a page layout

> “On the homepage, make my portrait smaller and give my name more room. Keep the mobile layout, colors, and case-study pages unchanged.”

Homepage sections live in `src/sections/`, and their order is set in `src/pages/Home.tsx`. Project cards and case studies have separate shared components. Say whether a layout change should apply to all projects or one specific page. Visual changes should be checked on mobile and desktop.

## Add or remove animations

> “Remove the section entrance animation but keep button hover feedback. Respect reduced-motion preferences.”

> “Make project-card hover feedback subtler without moving the text.”

Reveal settings are centralized in `src/design/motion.ts`; `enabled: false` disables the reveals. Hover durations are in `src/design/tokens.css`, with effects in `src/styles.css`. Codex should reuse `Reveal` and preserve the reduced-motion safeguards.

## Add a new section

> “Add an Education section between About and Contact using these details. Include it in the navigation and keep the existing visual style.”

Codex creates a distinct section component, stores personal facts in the personal data file, composes the section into `Home.tsx`, and updates navigation if needed. Existing content and sections should stay intact unless you ask to remove them.

## Useful instructions to include

- “Only change this section.”
- “Keep the current design.”
- “Use these exact facts; ask if something essential is missing.”
- “Show missing content as a placeholder.”
- “Run the checks and explain what changed.”

A request to edit does not require a redesign. Tell Codex when you also want the changes committed and pushed. Publishing the cloud environment is separate from publishing the website. Website changes reach GitHub Pages after they are pushed and merged into `main`; see the README for the one-time Pages settings.

## Quick file map

| What you want to change                            | Where Codex will usually work                       |
| -------------------------------------------------- | --------------------------------------------------- |
| Colors, fonts, shared spacing, borders             | `src/design/tokens.css`                             |
| Reveal animations                                  | `src/design/motion.ts`, `src/components/Reveal.tsx` |
| Layout, hover effects, mobile rules                | `src/styles.css`                                    |
| Name, portrait, biography, contact, CV, socials    | `src/data/personal.ts`                              |
| Project facts, screenshots, ordering, case studies | `src/data/projects.ts`                              |
| Navigation                                         | `src/data/site.ts`, `src/components/Layout.tsx`     |
| Homepage section order                             | `src/pages/Home.tsx`                                |
| An individual homepage section                     | `src/sections/`                                     |
| All project cards                                  | `src/components/ProjectCard.tsx`                    |
| All case-study layouts                             | `src/components/CaseStudyTemplate.tsx`              |

Before committing, Codex should run `npm run check`, `npm run build`, and `git diff --check`, then perform browser checks suited to the change. A good completion message explains the result and any remaining missing content in plain English.
