# Project Modular Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Restructure the SMP-PGRI8-Web project into a clean, modular folder structure that is easy to navigate for all developers.

**Architecture:** Group files by responsibility — layout, sections, forms, common components, services, and hooks — instead of a flat structure. All imports must be updated after each move.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Supabase, React Router v6

---

## Target Structure

```
src/
  assets/                        ← static assets (unchanged)
  components/
    common/                      ← shared reusable components
      NavLink.tsx                ← moved from components/
    forms/                       ← form components
      PPDBForm.tsx               ← moved from components/site/
    layout/                      ← layout/chrome components
      Navbar.tsx                 ← moved from components/site/
      PPDBNavbar.tsx             ← moved from components/site/
      TopBar.tsx                 ← moved from components/site/
      Footer.tsx                 ← moved from components/site/
    sections/                    ← page section components
      Hero.tsx
      About.tsx
      Facilities.tsx
      Gallery.tsx
      News.tsx
      Stats.tsx
      FAQ.tsx
      Contact.tsx
    ui/                          ← shadcn primitives (unchanged)
  hooks/                         ← custom hooks (remove duplicate use-toast.ts)
    use-mobile.tsx
    useCountUp.ts
    useKeyPress.ts
    useScrollTrigger.ts
  lib/                           ← utilities (unchanged)
    utils.ts
  pages/                         ← route-level pages (unchanged)
    Index.tsx
    PPDB.tsx
    NotFound.tsx
  services/                      ← external service integrations
    supabase/                    ← moved from integrations/supabase/
      client.ts
      types.ts
  styles/                        ← global styles
    index.css                    ← moved from src/
  types/                         ← shared TypeScript types (future use)
  App.tsx
  main.tsx
  vite-env.d.ts
```

---

## Task 1: Create new folder structure

**Files:**
- Create: `src/components/common/`
- Create: `src/components/forms/`
- Create: `src/components/layout/`
- Create: `src/components/sections/`
- Create: `src/services/`
- Create: `src/styles/`
- Create: `src/types/`

- [ ] Run:
```bash
mkdir -p src/components/common src/components/forms src/components/layout src/components/sections src/services/supabase src/styles src/types
```

---

## Task 2: Move layout components

Move Navbar, PPDBNavbar, TopBar, Footer → `src/components/layout/`

- [ ] Move files:
```bash
mv src/components/site/Navbar.tsx src/components/layout/
mv src/components/site/PPDBNavbar.tsx src/components/layout/
mv src/components/site/TopBar.tsx src/components/layout/
mv src/components/site/Footer.tsx src/components/layout/
```

- [ ] Update imports in all files that reference these components (pages/Index.tsx, pages/PPDB.tsx, etc.)

---

## Task 3: Move section components

Move Hero, About, Facilities, Gallery, News, Stats, FAQ, Contact → `src/components/sections/`

- [ ] Move files:
```bash
mv src/components/site/Hero.tsx src/components/sections/
mv src/components/site/About.tsx src/components/sections/
mv src/components/site/Facilities.tsx src/components/sections/
mv src/components/site/Gallery.tsx src/components/sections/
mv src/components/site/News.tsx src/components/sections/
mv src/components/site/Stats.tsx src/components/sections/
mv src/components/site/FAQ.tsx src/components/sections/
mv src/components/site/Contact.tsx src/components/sections/
```

- [ ] Update imports in pages/Index.tsx

---

## Task 4: Move form components

- [ ] Move PPDBForm:
```bash
mv src/components/site/PPDBForm.tsx src/components/forms/
```
- [ ] Update imports in pages/PPDB.tsx

---

## Task 5: Move NavLink to common

- [ ] Move:
```bash
mv src/components/NavLink.tsx src/components/common/
```
- [ ] Update any imports referencing `@/components/NavLink`

---

## Task 6: Move supabase integration to services

- [ ] Move:
```bash
mv src/integrations/supabase/client.ts src/services/supabase/
mv src/integrations/supabase/types.ts src/services/supabase/
```
- [ ] Update all imports referencing `@/integrations/supabase/`
- [ ] Remove empty `src/integrations/` folder

---

## Task 7: Move styles

- [ ] Move:
```bash
mv src/index.css src/styles/index.css
```
- [ ] Update import in `src/main.tsx` from `./index.css` to `./styles/index.css`

---

## Task 8: Clean up hooks

- [ ] Remove duplicate `use-toast.ts` from hooks (already exists in `components/ui/`):
```bash
rm src/hooks/use-toast.ts
```
- [ ] Verify no file imports from `@/hooks/use-toast` — if they do, update to `@/components/ui/use-toast`

---

## Task 9: Remove empty folders

- [ ] Remove `src/components/site/` after all files moved:
```bash
rm -rf src/components/site/
rm -rf src/integrations/
```

---

## Task 10: Verify build

- [ ] Run build to confirm no broken imports:
```bash
bun run build
```
Expected: Build completes with no errors.

---

## Task 11: Commit and push

- [ ] Stage and commit:
```bash
git add -A
git commit -m "refactor: restructure project into modular folder layout"
git push origin main
```
