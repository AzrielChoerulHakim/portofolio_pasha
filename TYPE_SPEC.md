# Pasha Amarellia — typography specification

**Audience / reading task:** verify real study history and small-business/organization experience while receiving a genuine sense of the person.  
**Source:** uploaded CV, supplied photos, art-direction and tone decisions.  
**Language:** Indonesian (plus occasional English marginalia and certificate titles).  
**Typographic thesis:** a friendly personal field notebook needs two distinct layers—an expressive, slightly irregular display for a person, and a restrained evidence ledger for credentials. Typography must not falsely inflate modest source material.

## Three monochrome specimens

All three use the **same verified words**: name, current educational affiliation, an exact Savorita paragraph, work-history date, and the contact action. Compare in `type-specimens.html`.

| Specimen | Reading mode | Reason / drawback |
|---|---|---|
| A — Field notebook (**selected**) | Oversized friendly display with quiet margin cue → medium body text → ruled data row | Connects tactile/handmade photographic evidence with easy mobile comprehension; must keep annotations away from body |
| B — Editorial spread | High-contrast text columns and large opening phrase, separated date margin | Sophisticated but reads as an editorial magazine rather than her own diary |
| C — Archival index | Dense sans-serif chronology-first system with small section heads | Strong retrieval performance but eliminates the gentle personal character of the supplied references |

**Chosen:** A, because content benefits from a specific personal identity without burying the internship-relevant chronology. B and C rejected as mismatched structures, not because of color.

## Type roles

| Role | Verified or editorial copy | Face / license | CSS size / line-height | Measure/reflow |
|---|---|---|---|---|
| Hero | `Hai, aku Pasha.` | Young Serif, SIL OFL 1.1 | clamp(70px, 9.3vw, 175px), 1.09 | Mobile becomes its own line, no clipping at 320px |
| Chapter title | `Dari dapur. Ke hal-hal kreatif.` | Young Serif, SIL OFL 1.1 | clamp(42px, 6.7vw, 104px), ~1.12 | Natural breaks and one purposeful line offset |
| Lead | Document-grounded introductory paragraph | DM Sans, SIL OFL 1.1 | clamp(17px, 1.65vw, 24px), 1.63 | <=65ch; mobile ~16–17px |
| Body | Work and organization descriptions | DM Sans, SIL OFL 1.1 | 15–20px, 1.8–1.95 | Paragraphs are visibly separated |
| Date and ledger | `Februari — Juli 2025` | DM Sans bold, SIL OFL 1.1 | 11–12px, 1.5+ | On mobile, date precedes title rather than hiding |
| Marginalia | `a little about this human` | Caveat, SIL OFL 1.1 | 21–30px, normal | Decorative only; all information also present in body text |
| Navigation/buttons | `kirim email`, `tentang` | DM Sans 600/700, SIL OFL 1.1 | 13–18px, 1.3–1.7 | 44px+ mobile hit targets |

**Font source:** Google Fonts, Young Serif, DM Sans, Caveat; all distributed under SIL OFL, loaded via public CSS at runtime. No font binaries bundled or redistributed in this repo. The CSS stacks include Georgia/system sans/cursive fallbacks, all browser-resolved without required scripts. Real screenshots here show fallback because offline fonts were unavailable; hosted external font styling needs its own visual recheck.

**Numeric treatment:** dates are textual (not compared as numeric tables); no `tabular-nums` needed. The IPK is rendered as `3,77/4,00`. The `IOT` certificate capitalization follows source. Linguistic coverage is standard Indonesian Latin characters.

**Heading logic:** one h1; semantic h2 chapter titles; h3 for project and ledger entries. Decorative labels are non-heading text. All content remains readable in document order.

## Actual checks and limitations

See `proof/` and `MOBILE_VISUAL_QA.md` for captures at 320, 390, 640, 768, 1024, and 1440 CSS px, a short-height capture and 200% zoom proxy. There was no document-wide horizontal overflow in headless Chromium, and images loaded. Full text-spacing override and genuine 200% browser zoom, visual verification with external Google Fonts, independent reader tests, contrast automation and platform-specific fallback differences remain untested. **Sign-off: local candidate, not independent release certification.**
