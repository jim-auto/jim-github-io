# Repository Guidelines

## Project Overview

This repository is a small static GitHub Pages site for
`https://jim-auto.github.io/jim-github-io/`.

There is no package manager, build system, framework, or server-side code in
this repo. The site is served directly from the root `index.html` with plain
CSS and JavaScript.

## File Layout

- `index.html`: Main page markup and project links.
- `style.css`: All site styling and responsive layout rules.
- `app.js`: Client-side rendering for the tweet list.
- `tweets.js`: Tweet data consumed by `app.js`.
- `README.md`: Short project/readme link.
- `collect_log.txt`: Historical collection log; do not treat it as source code.
- `.claude/`: Local assistant configuration. Avoid editing unless explicitly
  requested.

## Development Notes

- Keep the site dependency-free unless the user explicitly asks for a tooling
  change.
- Prefer direct edits to the existing HTML, CSS, and JavaScript rather than
  introducing a framework.
- Preserve the current visual style unless the task is specifically about
  redesigning it.
- Some existing Japanese text may appear mojibake/garbled depending on the file
  encoding and viewer. Do not rewrite, normalize, or "fix" that content unless
  the user explicitly asks for text or encoding cleanup.
- When adding tweet entries, keep the `TWEETS` array shape consistent:
  `date`, `text`, `likes`, and `images`.
- Escape any user-visible dynamic text through the existing escaping path in
  `app.js`; avoid injecting untrusted HTML into tweet text.

## Local Verification

Because this is a static site, a quick browser check is usually enough.

Recommended checks after changes:

- Open `index.html` directly in a browser, or serve the directory with a simple
  static server if iframe/browser behavior needs it.
- Confirm the page loads without console errors.
- Confirm project cards, external links, and tweet rendering still work.
- Check the responsive layout around mobile width (`480px`) when editing CSS.

Useful optional command:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Git Hygiene

- Do not commit local assistant settings or unrelated generated files.
- Do not overwrite unrelated user edits.
- Keep changes scoped to the requested task.
