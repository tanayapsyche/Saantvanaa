# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start dev server on http://localhost:3000
npm run build     # production build (use this to typecheck before committing)
npm run lint      # ESLint
```

There are no tests. `npm run build` is the primary correctness check — always run it after changes.

## Stack

- **Next.js 16.2.2** (App Router) — newer version; check `node_modules/next/dist/docs/` if behaviour seems off
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** — configured entirely via `src/app/globals.css` with `@theme inline {}`, **no** `tailwind.config.*` file
- **Framer Motion 12** for animations
- **react-hook-form** for the contact form
- **Formcarry** for form submission (endpoint in `src/lib/constants.ts`)

## Architecture

### Route → Content pattern
Every page under `src/app/` follows the same structure:
- `page.tsx` — thin server component, sets `metadata`, renders a `*Content` client component
- `*Content.tsx` — the actual UI, marked `"use client"`, lives alongside `page.tsx`

The home page (`src/app/page.tsx`) is the exception — it composes section components directly from `src/components/home/`.

### Data lives in constants
All copy, lists, and configuration (nav links, process steps, pricing tiers, FAQ items, testimonials, etc.) live in **`src/lib/constants.ts`**. Components import from there rather than inlining data. Add or edit content there first.

### Tailwind design tokens
All colours and fonts are CSS variables defined in `globals.css` and exposed as Tailwind utilities:

| Token | Value | Use |
|---|---|---|
| `accent` / `accent-dark` | terracotta | primary CTAs, highlights |
| `secondary` | warm sand | subtle borders, labels |
| `dark` / `dark-light` | near-black | body text |
| `light` / `warm-bg` | off-white | page/card backgrounds |
| `font-brand` | Amita | सांत्वना logo only |
| `font-display` / `font-serif` | Playfair Display | headings |
| `font-sans` | Inter | body |

### Shared UI primitives
- **`Button`** — renders a `<Link>` when `href` is passed, `<button>` otherwise; `variant` = primary / secondary / outline
- **`SectionHeading`** — label + title + subtitle; `light` prop inverts colours for dark backgrounds
- **`ExpandableParagraph`** — splits long text into `intro` (always visible) + `rest` (hidden on mobile behind "Read more", visible on `sm:`). Used across home and inner pages for mobile content reduction.

### Mobile content strategy
On `< sm` screens, content-heavy sections truncate via `ExpandableParagraph` (intro/rest split) or conditional `hidden sm:flex` with a "Show more" toggle (`IsThisForYou`). Desktop always shows full content. Apply the same pattern when adding new content-heavy cards or paragraphs.

### Animations
All scroll-triggered animations use `motion.div` with `whileInView` + `viewport={{ once: true }}`. Standard entry state: `initial={{ opacity: 0, y: 20 }}`.

### Contact & integrations
- **Formcarry endpoint** — `FORMCARRY_ENDPOINT` in `constants.ts` — handles contact form submissions
- **Calendly URL** — `CALENDLY_URL` in `constants.ts` — used on the contact page for booking embeds
- **Images** — local images go in `public/images/`; Unsplash remote images are whitelisted in `next.config.ts`
