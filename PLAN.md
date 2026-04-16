# Copilot Handoff Plan

## Current State

- Repository: `jim-auto/jim-github-io`
- Site: `https://jim-auto.github.io/jim-github-io/`
- Stack: static GitHub Pages site using plain `index.html`, `style.css`,
  `app.js`, and `tweets.js`.
- There is no build step, package manager, framework, or server-side code.
- Latest pushed commit before this handoff:
  `ed15ab8 Update project listing`

## Recent Changes

- Added `AGENTS.md` with repository working guidelines.
- Updated `index.html` project section.
- Added `Body Type Analyzer` card:
  `https://jim-auto.github.io/body-type-analyzer/`
- Confirmed `https://jim-auto.github.io/body-type-analyzer/` returned HTTP
  `200`.
- Changed the project section heading to the Japanese label meaning
  "Projects (buzz order)".
- Reordered project cards with a heuristic "Twitter/X buzz" priority:
  1. Body Type Analyzer
  2. Charm Ranking
  3. Sokusuu Ranking
  4. Music Ranking
  5. Trend Dashboard
  6. HOTEMAP
  7. Door2Door Map
  8. Tribeau Analysis
  9. Tainyu Analysis

## Intent

The goal is to make the portfolio/repo listing feel ordered by sites that got
attention on Twitter/X.

The current order is not based on measured engagement data. It is a practical
manual ordering based on likely topic appeal and the user's request.

## Suggested Next Work

1. Verify the deployed GitHub Pages site after the next push finishes.
2. If actual Twitter/X metrics are available, replace the heuristic ordering
   with an engagement-based ordering and document the source/date.
3. If projects will be added often, consider moving project card data from
   repeated HTML into a small JavaScript data array. Keep the site
   dependency-free.
4. Do not normalize or rewrite existing mojibake/legacy Japanese text unless
   explicitly requested.
5. Leave `.claude/settings.local.json` uncommitted unless the owner explicitly
   wants local assistant settings tracked.

## Verification

Recommended checks:

```powershell
git status --short
git diff --check
python -m http.server 8000
```

Then open `http://localhost:8000/` and confirm:

- The `Body Type Analyzer` card appears first.
- The project cards open the expected external GitHub Pages links.
- The page has no obvious layout regression on desktop or mobile width.
