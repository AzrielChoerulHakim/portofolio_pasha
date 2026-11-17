# Pasha — mobile art-direction specification and inspection

**Reading order:** `beranda` (name, plain-language intro, portrait) → `tentang` (core profile) → `karya` (Savorita fact sheet then crochet) → `momen` (real portraits and optional video) → `perjalanan` (evidence and dates) → `kemampuan` (skills) → `kontak` (email/WhatsApp).

**Breakpoints:** 900px for collapse of noncritical spreads; 700px for mobile-specific order and navigation; 390px for especially narrow type/prose and collage spacing.

**Risk areas and mitigations:**
- Hero flower/notes overlap with subject's head: decorative photo notes remain outside the main text block; mobile hero switches to vertical story then image.
- Recipe collage could cover primary evidence: Savorita factual text lives in a separate semantic article before the mock recipe page.
- Crochet image carries text already embedded in the user-supplied photograph: any additional note must not cover essential text or claim authorship beyond the CV.
- Fixed navigation may hide anchor headings: `scroll-padding-top` and semantic section anchors; menu is keyboard dismissible.
- Long names (`Pasha Amarellia Setyanto`, `Entrepreneurship Development`) may wrap: no `white-space: nowrap` except short hero first name; ledger reflows into one column at 390px.
- Video on a phone is optional and initially paused. `poster` is a real frame from the supplied footage; explicit play/pause button. No automatic video playback or heavy scroll-driven motion.
- Contact daisy is a transparent decorative asset behind content; contrast is preserved in buttons and main text.

**Motion fallback:** all essential text/photos are initially visible without JavaScript; `prefers-reduced-motion` disables ticker and movement. No scrolling lock, custom cursor or reveal gate.

## Recorded local browser checks (2026-11-17)

Playwright with headless Chromium. Due sandbox navigation restrictions, the HTML/CSS/JS and user assets were loaded into Chromium as matching data URIs via `set_content()` rather than using a public HTTP origin; this tests layout and client-side controls but not GitHub Pages hosting behavior. External font hosts were unavailable, so fallback families rendered. The source code was locally tested at 320, 390, 640, 768, 1024, 1440px and short landscape at 832×384px. `proof/full-*.png` contains full-height captures, and `proof/<section>-320.png`, `proof/<section>-390.png` contains section crops.

**Preliminary evidence:** zero document-level horizontal overflow on all listed widths; zero JS exceptions; all local image data loaded; mobile menu open/Escape close; video toggle played the supplied clip in the data-URI test; 200%-zoom proxy did not create document-level horizontal overflow; reduced-motion ticker duration became negligible. Real-device, screen-reader, user-level text-spacing, color contrast automation, external font network and true 200% browser zoom remain **not tested**. No claim of independent WCAG certification.
