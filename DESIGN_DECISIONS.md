# Pasha Amarellia — design decision record

**Lazarus Design OS:** v4 (`lazarus-design-os`, consulted 2026-11-17)  
**Chosen visual direction:** Tactile Organic Atelier  
**Executed identity:** *A Little Field Notes*  
**Client truth:** S1 Pendidikan Tata Boga UNNES; small business Savorita; skills in pastry, carving, Canva and Office; an interest in entrepreneurship and crochet; organizational responsibilities; botanical and outdoor photographs supplied by the user.

## Evidence ledger

| ID | Verified source evidence | Consequence |
|---|---|---|
| F01 | CV: Pasha Amarellia Setyanto; Education, UNNES Aug 2023 onward | Full professional name and education are clear, not invented |
| F02 | CV: Savorita Feb–Jul 2025, production, marketing, packing and distribution of putri salju | One authentic project gets editorial prominence even without a pastry photo |
| F03 | CV: business experience includes crochet | Crochet photograph can illustrate the creative interest; no claim that *this exact pictured bouquet* was sold |
| F04 | CV: staff expert, Engineering Research Club, Entrepreneurship Development from Feb 2025 | Clear evidence of BMC guidance and event/business research |
| F05 | CV: KPMDB UNNES Public Relations from Dec 2025 | Secondary organization entry |
| F06 | CV: actual hard and soft skills plus Huawei certificates | Plain spoken capability section and ledger |
| F07 | Five JPEG photos, daisy artwork and one ~19-second MP4 uploaded by user | Real media sets the visual character; no AI replacement of the client identity |
| F08 | User-selected style: Tactile Organic Atelier; user-selected tone: santai dan natural | Handworked material direction with warm conversational copy |

**Ambiguity:** the CV calls Pasha a semester-5 student despite a 2023 enrollment date; the site intentionally omits an up-to-the-minute semester number. CV entries marked “sekarang” are shown as the document describes them and need client review when out of date. Exact ownership/authorship of the pictured bouquet and precise contexts of personal travel photos are not established solely from the upload. No invented employment history, recipe results, endorsements or project metrics.

## Identity thesis

> The website takes the form of a botanical field notebook because Pasha's authentic story moves between culinary practice, entrepreneurship, handwork and learning, and internship/collaboration readers need to understand that relationship without mistaking interests for formal achievements.

## Seven structurally different proposals (concept stage)

| ID | Composition / evidence order | Reading grammar | Image treatment | Main interaction | Cost / reason |
|---|---|---|---|---|---|
| A — Field Notes | Personal introduction → contextual self-description → two real practices → glimpses of life → dated ledger → skills notes → contact | Asymmetric field-book folio, variable rhythm, margin notes, tall evidence spreads | Authentic portraits and original botanical drawing, receipt illustration for Savorita | Open nav, manual video play, native anchor exploration | **Chosen**: uniquely connects food and crochet without inventing food photography; requires rigorous mobile editorial reflow |
| B — Recipe Index | One-page index → separate skill “recipes” → dated ingredients/process → contact | Dense recipe headings, column measures, numbered procedure | Handwritten paper labels, minimal portrait | Accordion indexes | Could mislabel personal life as a culinary recipe and diminish work credibility |
| C — Student Dossier | Name/credential → chronological experience → skills matrix → certificates → images → contact | Small-print archival scan with high density | Cropped factual headshots | Filterable subject archive | Practical but too institutional for supplied expressive photos |
| D — Moving Postcards | Media-led opening → location-led personal memories → reflective captions → professional appendix | Photographic captions and postcard reverse sides | Outdoor footage full-bleed | Scroll-controlled media postcards | Overemphasizes travel; source cannot verify exact trip contexts |
| E — Studio Shelf | Crochet artefact → product practice → tools → organization → brief profile → contact | Gallery labels and craft taxonomy | Pictured bouquet as primary artefact | Shelf “open” micro-interactions | Implies a developed craft shop; CV remains much broader |
| F — Apprenticeship Map | Education → institution/organization network → skills → independent work → contact | Flowchart with annotation and text notes | Sparse visual dividers and portraits | Clickable journey nodes | Strong for internships but an overly engineered representation of modest data |
| G — Personal Letter | Opening letter → story → dated short appendix → small media strip → reply | Longform narrative letter with generously spaced prose | 1–2 quiet portrait breaks | Fixed compose/reply call to action | Warm but requires more first-person wording not directly supplied by client |

## Chosen signature and tradeoff

**Signature:** work is displayed as **two contrasting handmade journal leaves**: a constructed paper recipe/receipt for Savorita (because no real pastry photo is available) and the supplied real crochet bouquet photograph. It teaches the difference between documented business activity and a broader creative practice. Fallback: both leaves remain complete, legible articles with no JavaScript; their meaning is maintained in linear phone reading order. Visual risk: a paper collage can look childish or make factual content inaccessible, addressed by restrained typographic hierarchy, limited visual flourishes and explicit real dates.

**Why not an off-the-shelf editorial clone:** the page is not hero → 3 project cards → skills chips → CTA. The actual work determines an asymmetric two-chapter spread, a five-entry dated ledger, a real personal-life interlude, and a contact invitation. Typography follows two reading modes: expressive opening and plainly legible source-backed evidence. User media is not rebranded as fabricated commercial work.

## Visual and typography choices

- **Paper:** ivory / faded warm cream to reflect the supplied daisy and crochet poster, but avoid brand-independent beige “luxury” defaults.
- **Ink:** deep botanical olive, with dried-terracotta markings only where they help readers scan.
- **Display:** Young Serif (SIL OFL) chosen for rounded forms resembling hand-printed field notes; human body copy via DM Sans (SIL OFL), hand marginalia via Caveat (SIL OFL). Font fallback always legible.
- **Photo policy:** client-supplied JPEGs and video only. No unapproved AI client portrait or generated “portfolio photography”.
- **Animation:** occasional wordmark rotation and a purely optional ticker; video is explicitly user-initiated, pausable and paused when out of view.

## Comparative audit

Known previous Lazarus materials include the original Surrealist Digital identity and typographically monumental original study pages, but those do not license copied visuals. Pasha's journal grammar deliberately avoids colossal centered mastheads, digital surrealism scenery, hero two-button template, generic testimonial cards, or faux 3D product worlds.

## Unresolved approvals

1. Pasha has not individually approved the drafted first-person conversational copy, public display of selected photos and contact channels; the website owner should confirm before broad distribution.
2. The source's current status/date expressions require later updates as needed.
3. Browser QA is local. No external human design review, device lab, or automated Lighthouse evaluation has been performed.

## Revisi visual — 17 November 2026

- **Zero-noise pass:** membuang SVG panah dan coretan dekoratif tanpa tugas; mempertahankan sketsa Savorita karena mengilustrasikan kue putri salju yang tercatat dalam CV, dan favicon sebagai identitas.
- **Editorial copy:** menghapus nomor seri, panah hiasan, filler bilingual, dan watermark studio; menggantinya dengan label karya, pengalaman, organisasi, serta konteks yang ditopang dokumen.
- **Video:** menjaga berkas video dan kontrol pemutaran asli; menampilkan video 480×854 dalam frame kertas berukuran maksimal 300 CSS px agar tidak diperbesar melebihi resolusi praktis.
- **Floral motif:** menempatkan ulang ilustrasi daisy milik klien pada intro, crochet, dan frame video untuk meneruskan karakter bunga pada karya rajut, bukan menambah SVG acak.
- **Mobile:** polaroid dipindahkan ke alur dokumen agar tidak menimpa paragraf; navigation dan kontrol video dipertahankan.
- **QA sebelum commit:** halaman statis diuji dengan Chromium/Playwright pada lebar 320, 390, 640, 768, 832, 1024, 1440; tidak ada horizontal overflow, missing image, maupun page script errors; menu mobile, Escape, dan pemutaran video lolos. Simulasi zoom 200% tidak menghasilkan overflow. Reduced-motion ticker menjadi nonanimasi. Ini pengujian lokal, bukan klaim audit aksesibilitas penuh.
