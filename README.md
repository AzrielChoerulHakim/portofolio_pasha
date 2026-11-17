# Pasha Amarellia — A Little Field Notes

A source-bound, static personal portfolio for Pasha Amarellia Setyanto. Art direction: **Tactile Organic Atelier**, reframed as a botanical notebook rather than a reused page template.

## Local preview

```sh
python3 -m http.server 8000
# http://localhost:8000
```

No build step and no JS framework required. Deployment targets: GitHub Pages (branch `main`, folder `/`) or Vercel (framework: Other, root directory: `/`).

## Content provenance and editorial boundaries

Professional experience, education, skills and dates follow `CV Pasha Amarellia .pdf`, uploaded 17 November 2026. Names, scores, and organizations are preserved as written. The source's `semester 5` was **not** repeated as a present-day claim because it may be stale relative to the 2023 start year. `Feb 2025 – sekarang` and `Des 2025 – sekarang` reflect the uploaded CV, not independent verification. Do not interpret the picture contexts as proof of a specific event or professional role.

First-person introduction is **editorial draft** written for the requested casual and natural style, not an attributed quote or client-confirmed statement. Before publishing publicly, ask Pasha to review the personal copy, selected photos, and contact information.

## Assets

- The five supplied JPEGs: portrait/environment photos and crochet bouquet; one portrait is reused in a different place.
- Supplied botanical daisy illustration.
- Supplied 19-second portrait MP4, transcoded to a muted, web-optimized video (`assets/field-notes.mp4`) with a poster image.
- `assets/favicon.svg` is a custom vector icon, not an external trademark.

`/assets` is a build dependency: copy it alongside `index.html`, `styles.css`, and `app.js`. Do not use stock imagery or replace authentic Pasha images with generated people.

## Interaction and accessibility

- Native anchors, a keyboard-operable mobile navigation menu with Escape dismissal, and a manually activated video play/pause control (no automatic playback).
- `prefers-reduced-motion` disables running ticker and transition effects.
- Semantic section landmarks, localized Indonesian text, descriptive image alternatives and accessible focus indicators.
- This is not an independently certified accessibility pass. See `QA_REPORT.md` and screenshot tests.

## Design OS reference

Follow `https://github.com/AzrielChoerulHakim/lazarus-design-os` and the project-specific `DESIGN_DECISIONS.md`, `TYPE_SPEC.md`, `TONE_OF_VOICE.md`, `MOBILE_VISUAL_QA.md`, and `design-contract.json`. Original type specimen sheet is at `type-specimens.html`.