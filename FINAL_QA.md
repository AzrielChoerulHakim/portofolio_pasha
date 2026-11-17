# Pasha · final visual & scrolling QA — 17 November 2026

## Scope
Target: Pasha's Tactile Organic Atelier portfolio. Original assets and factual content retained. Final pass addresses bouquet crop, decorative overlays, contrast and meaningful scroll behavior.

## Changes
- Bouquet is a square photograph. The presentation now has a 1:1 frame and a center crop, with no letterboxing, pseudo-vignette, duplicate caption or extra daisy sticker on this photograph.
- Removed large pale daisy overlay behind the contact text. The caption on the hero photograph has an opaque dark background and stays in the foreground.
- Darkened warm and olive small-text tokens where light backgrounds had insufficient contrast. Warm accent `#874833` has calculated WCAG contrast of approximately 5.0:1 against the lightest relevant green backgrounds and at least 5.6:1 against the warm ivory section.
- Sticky header now displays unobtrusive reading-progress state. Navigation has an additional working anchor for the moments section and indicates the section being read.
- Personal photo prints settle subtly into their final place on entry. Active timeline row follows the reader. Original native scroll behavior remains intact; no forced snapping, scroll locking, hijacking, or external animation dependency.
- Video remains muted autoplay + loop without a pause button. Browsers may still restrict autoplay.

## QA evidence — local Chromium render of exact staged source
- Widths tested: 320, 390, 640, 768, 1024, 1440 CSS px, plus 832×384 short viewport.
- No page JavaScript errors, broken images or document-level horizontal overflow in those widths.
- Bouquet frame: 284×284 px at 320; 354×354 px at 390; 591.8×591.8 px at 1440. Image dimensions match the frame. No top/bottom bars.
- Mobile menu opens and closes with Escape; video runs without a toggle.
- Scroll progress advances; active navigation becomes `#perjalanan` with direct jump into journey; exactly one journey row highlights when in reading position.
- Reduced-motion: entrance treatment not initialized. At 640px with 200% body zoom (320px equivalent) no horizontal document overflow.
- Background-bound color checks conducted for primary small-text tokens. Screen-captured contact and hero checked for image/text collisions.

## Remaining limitations
- Browser automation is not a substitute for real-phone review, comprehensive WCAG audit, or the user's visual approval.
- Exact font web loading may depend on browser network access; local tests used available fallback fonts.
- Intrinsic behavior of browser-native scroll and autoplay is governed by user settings and browser policy.
