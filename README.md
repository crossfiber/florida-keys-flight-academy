# Florida Keys Flight Academy — Redesign Build (v2, "Reef & Registry")

**Source site:** https://floridakeysflightacademy.com/
**Build date:** 2026-07-29 (full rebuild, replaces the 2026-05-06 v1 build)
**GitHub repo:** https://github.com/crossfiber/florida-keys-flight-academy
**Live URL:** https://crossfiber.github.io/florida-keys-flight-academy/

## What changed from v1

v1 was gutted and rebuilt. It carried the AI tells the brief exists to eliminate: six eyebrow labels against a cap of three, an icon set that was 30 percent `fa-check` and `fa-chevron-down`, an invented sectional-chart palette with no traceable source, and a signature hero element (a decorative SVG map) that any coastal flight school could have used. It also shipped almost no verified business fact beyond prices, because the research had not been done.

v2 is built on a verified research pass. The single biggest change is that the site now has proof in it.

## Fonts (all verified on Google Fonts)
- **Fraunces** 600/700/900 — headlines. https://fonts.google.com/specimen/Fraunces
- **Hanken Grotesk** 400/500/600/700/800 — body. https://fonts.google.com/specimen/Hanken+Grotesk
- **JetBrains Mono** 500/700 — N-numbers and aircraft data only. https://fonts.google.com/specimen/JetBrains+Mono

Fraunces was chosen because the competitive audit found zero display faces with character anywhere in the flight-school or air-tour category. Every competitor runs a neutral geometric sans (Aktiv Grotesk, Avenir, Brandon Grotesque, Lato) or no webfont at all. A high-contrast editorial serif reads vintage-travel-poster and heritage-aviation at once, which is exactly this business.

## Colour palette — every value sampled from a real asset

| Token | Hex | Source |
|---|---|---|
| `--navy` | `#00486C` | Sampled directly from the academy's own logo PNG |
| `--deep` | `#04293A` | Atlantic water in the Seven Mile Bridge aerial, darkened for large fields |
| `--reef` | `#0A8C78` | Sampled from the water in the Sombrero Reef Lighthouse photo |
| `--reef-lite` | `#4FBFA9` | The same reef colour lightened for type and icons on dark |
| `--sun` | `#B85519` | Sunset horizon (`#E68200`) from the Sunset Celebration photo, darkened to clear 4.8:1 against white. CTA and interactive elements only |
| `--sun-hot` | `#A84A10` | CTA hover |
| `--sun-brt` | `#E68C00` | The exact sampled sunset horizon. Rules and icons on dark only |
| `--sand` / `--sand-2` / `--shell` | `#F4EFE6` / `#FAF7F1` / `#EAE2D5` | Warm paper neutrals |
| `--ink` / `--ink-soft` | `#14211F` / `#4E5F5D` | Warm near-black text |

Discipline: navy and reef are the same water at two depths and read as one brand family. Sunset amber is the only accent and appears exclusively on interactive elements. Neutrals carry roughly 60 percent of the page.

The competitive audit is what drove the warm accent: every aviation site examined (ATP `#012E5C`, Epic `#036EB7`, Sunrise `#0A317C`, Stallion 51 `#0C3859`, LIFT `#00263A`) anchors on cold navy or corporate blue. Warm is the category's unoccupied space, and here it is traceable to the brand's own sunset asset rather than being a trend pick.

## The signature element

**The Flight Line** — a registry of all ten aircraft, by tail number, pulled from the FAA Aircraft Registry under Florida Keys Flight Academy LLC. It runs 1942 to 1980 and includes a twin and a complex retractable. No competitor can copy it, because no competitor has this fleet, and most would consider a 1956 Cessna a liability rather than a feature. The section reframes it as the reason to train here: you learn the airplane, not the screen.

## Verified facts now on the site that were not on the old one

- Owner **Sol Bradman**, flying the Keys since 1984, owner since November 2020, operating above the EAA Air Museum at Marathon
- All ten aircraft with N-numbers, years and roles (FAA Aircraft Registry)
- The BT-13's history as the WWII basic trainer, the "Vultee Vibrator"
- Real named student outcomes from Keys Weekly reporting (Ethan Sauders, Aaron Anstett, Courtney Grabus, Eagan Cunningham)
- Young Eagles, 200+ children flown free annually, the Key West High School aviation club, Buzza Foundation scholarships, no deposits
- A verbatim TripAdvisor review with attribution and a link to the source

## Placeholders requiring client input

- `[HOURS TO CONFIRM]` — six sources give four different answers and the official site publishes none. Nothing was guessed.
- `[VERIFIED RATING NEEDED]` — Google, Yelp and Facebook ratings could not be verified (all robots-disallowed). **No `aggregateRating` was placed in the JSON-LD.** Rating markup would be fabricated data and was deliberately omitted until the owner confirms real numbers.
- Warbird mission pricing — not published anywhere; the site says "call".
- Exact founding year — press says "early 2000s" only. The site says "since 1984" about Sol personally, which is verified, and avoids a false founding claim.
- Part 61 vs Part 141 status — no source states it, so the site does not claim either.

## Issues found in the client's own data (flag to the owner)

1. **Tour prices contradict across their own pages.** `/gift-cards` lists $199/$299/$399/$399; `/sightseeing-airplane-tours` lists $299/$399/$499/$449. This build uses the tours page as canonical. **The owner must confirm before this goes to a real domain.**
2. **`/aircraft-rentals` is linked sitewide in the footer and 404s.**
3. **`/student-resources` 404s**; the content lives at `/renter-student-insurance`.
4. **Two Yelp listings** (Marathon and Key West) splitting review equity, plus **four TripAdvisor listings**, three of them empty duplicates. One is titled after their web vendor.
5. **`harrison-ford-pilot-1.jpg` on the contact page** is a celebrity photo beside an aircraft that is not theirs. Legal and credibility risk. Not reused.
6. **`taildragger-1.jpg`** shows N9231E over arid mountains with no FAA record. Not the Keys, not their fleet. Not reused.
7. The Key Hopping tour card on the live site is missing its booking buttons.
8. Three different contact email addresses are in circulation.

## Assets

All photography is the academy's own, self-hosted on their WordPress (no Squarespace/Wix/Shopify hotlink risk). Every image was downloaded, re-encoded and optimised into `assets/`. `FIRST-SOLO.jpg` was 8.1 MB on the live site and is 310 KB here. `og-share.png` is a purpose-built 1200x630 card.

## Notes
- See `design-direction.md` for research, diagnosis, competitive audit and rationale
- See `borrowed-patterns.md` for patterns referenced from the Big Truck A/C Shop build
- `credentials.md` is local only and gitignored
