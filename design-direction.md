# Florida Keys Flight Academy — Design Direction

## Step 1: Live Site Research (key findings)

**Business shape:** Two-airport (Marathon KMTH + Key West KEYW) flight academy that does flight training (PPL → CFI) AND sightseeing tours (Sombrero Lighthouse, Key Hopping, 7 Mile Bridge, Sunset, Vultee BT-13 Warbird) AND existing-pilot services (BFR, IPC, BYOP, Rental Checkout). Phone: 844-KEYS-AIR (844-539-7247). Email: fkfaoffice@gmail.com.

**Sitemap is tiny — only 7 indexed pages.** Massive content gap on team, testimonials, fleet, hours, FAQ.

**Discovery Flight:** $298 (verified, booked via FlightSchedulePro)

**Tours pricing (verified on /sightseeing-airplane-tours):** Sombrero Lighthouse $299, Key Hopping $399 (FAN FAVORITE), 7 Mile Bridge $499, Sunset $449, Warbird Experience [price needed]

**Existing assets:** Self-hosted WordPress images (NO Squarespace/Wix CDN risk). Best photos: 76A-RIDES-scaled.jpg (aerial), FIRST-SOLO.jpg (student moment), tour-specific photos for each package, Bahia Honda + Duck Key + Pigeon Key + Lighthouse aerial gallery.

**Logo:** `cropped-Florida-Keys-Flight-Academy-logo-Transp-3.png` (transparent PNG), saving locally.

**RED FLAG:** harrison-ford-pilot-1.jpg on /contact appears to be an unlicensed celebrity photo. NOT REUSING.

**Existing brand colors:** None. Site uses WordPress Twenty Fifteen defaults plus generic palette. Clean slate for the redesign — palette must be derived from the actual Keys brand environment (sunset, ocean, sand, sky), not from the existing template.

**Existing fonts:** Roboto / Roboto Slab / Noto Sans (WP defaults). No brand typography. Clean slate.

## Step 2: Diagnosis (what's broken on the current site)

1. **Conversion path is buried.** Discovery Flight ($298 — the natural top-of-funnel) is wedged into the middle of the /flight-school-pilot-training page, not surfaced on the homepage as a primary CTA.
2. **Mixed audiences are blended into one wall of copy.** The homepage tries to talk to career students AND tour buyers AND existing pilots in the same paragraph. Each audience would convert better with its own clear lane.
3. **No team, no instructors, no faces.** Flight training is a high-trust purchase. No instructor names, no bios, no photos of the people teaching. Major credibility hole.
4. **No testimonials, no rating, no social proof.** Yelp link in footer only. The reviews exist but aren't surfaced.
5. **Visual identity is generic WordPress.** The "Twenty Fifteen" theme makes a serious aviation business look like a 2014 hobby blog. The actual Keys brand environment (the sunsets, the aerials, the warbird) is not used to build a coherent visual identity.
6. **Two locations are mentioned in the footer only.** "Marathon AND Key West" is a competitive moat. Should be loud above the fold.
7. **Mobile is unusable.** WP Twenty Fifteen + Elementor on a 2014-era responsive layout. Mobile gets a green "Call Now" button but everything else is tiny.
8. **Stale pricing.** Tour prices on /gift-cards differ from /sightseeing-airplane-tours (probably last-updated years ago). Building from /sightseeing-airplane-tours as the canonical source.
9. **Broken /aircraft-rentals link in footer (404).** Will not reproduce.

**What's working that should be preserved:**
- Real photography of the actual aircraft, students, and Keys aerials (much better than stock)
- Vanity phone number (844-KEYS-AIR) is memorable
- The two-airport "Marathon AND Key West" geographic moat
- The price points are competitive (Discovery $298 is below most flight schools)
- The vintage Vultee BT-13 warbird is a genuinely unique offering

## Step 3: Competitive Research

**Looked at:** ATP Flight School, Epic Flight Academy, United Aviate, smaller boutique tropical flight schools, plus adventure tourism brands (Patagonia outdoor, premium charter aviation marketing).

**Patterns at corporate flight schools (ATP, Epic, United Aviate):** White backgrounds, sky blue accents, hangar/aircraft photography, sans-serif (Inter/Roboto-class), corporate timeline graphics. Clean but interchangeable. None of them feel like a place — they all look like they could be in Phoenix or Atlanta or Florida or Texas. Generic.

**What to steal from corporate flight schools:** The clear program tier structure (PPL → IFR → Commercial → CFI displayed as a journey, not a flat menu). The trust-stacked stats bar concept (without the SaaS template).

**What to reject from corporate flight schools:** Every single visual decision. White+sky-blue, hangar photo hero, Roboto/Inter typography, corporate stock pilots in pressed shirts. None of this fits the Keys.

**What to steal from adventure tourism brands (Patagonia / National Geographic / boutique resort):** Editorial photography given full-bleed real estate. Warm color palette derived from a place. Long-form storytelling sections that earn engagement instead of bullet-pointing features.

**Differentiation strategy:** Florida Keys Flight Academy should look NOTHING like a flight school. It should look like a destination adventure brand that happens to teach flight. Vintage tropical aviation poster aesthetic — 1960s Pan Am travel poster meets modern Patagonia adventure tourism. The visual concept ties to what FKFA actually is: aviation in the most beautiful place in America. Every other flight school sells the certificate. FKFA sells the certificate AND the place you'll earn it.

## Step 4: Design Direction Declaration

**The visual tone is vintage tropical aviation — 1960s Pan Am travel poster meets modern Patagonia adventure brand.** This is rooted in two business facts: FKFA trains pilots over the most photogenic coastline in America (the Keys), and FKFA's flagship tour aircraft is a 1940s Vultee BT-13 warbird. The brand's actual environment is warm — sunset oranges, deep ocean navy at dusk, sand, paper, salt air — not the corporate sky-blue+white that defines every other flight school site.

**The signature hero element is a stylized sectional-chart-inspired map of the Florida Keys archipelago,** anchoring both airports (KMTH and KEYW) with route lines drawn between the tour waypoints (Sombrero Lighthouse, Bahia Honda, 7 Mile Bridge, Pigeon Key, Duck Key, Sunset @ Mallory). The map sits in the hero alongside a real aerial photo of the Keys. It could only belong to a Keys flight school — swap it onto a Phoenix flight academy and it makes no sense.

**Deliberately avoiding:** the corporate flight school cliché (white + sky blue + Roboto + hangar photo); the trendy startup aesthetic (purple gradients, particle backgrounds, animated counters); the generic Keys tourism site (turquoise + coral + palm tree icons everywhere); the Squarespace template look (where colors are right but everything else is generic); JOTL's cream/cypress/amber color system and Caveat handwriting eyebrow.

## Color palette (derived from actual brand environment)

| Token | Hex | Source |
|---|---|---|
| `--ocean` | `#0B2540` | Deep ocean water at dusk around the Keys (primary brand) |
| `--ocean-deep` | `#051628` | Multiplied saturation of `--ocean` for footer/dark sections |
| `--sunset` | `#E26A41` | Sunset coral observed in PINK-SUNSET-LOGO photo (CTA accent — INTERACTIVE ONLY) |
| `--sunset-hot` | `#C8552E` | CTA hover state |
| `--sand` | `#F5EDDC` | Beach sand / paper feel (page bg) |
| `--sand-warm` | `#FBF7EE` | Alt section bg |
| `--lagoon` | `#5FA8A3` | Used very sparingly, only on the chart map element where it earns its place |
| `--ink` | `#1B1410` | Warm dark text on sand |
| `--bone` | `#F5EDDC` | Off-white text on ocean |
| `--line` | `rgba(27,20,16,0.10)` | Hairline borders on light sections |
| `--line-dark` | `rgba(245,237,220,0.14)` | Hairline borders on dark sections |

**Three-color discipline:** ocean (primary), sunset (CTA/accent — interactive ONLY), sand (neutral). Lagoon teal is a 4th color but reserved for the chart map only — won't appear on cards, sections, or general UI.

## Typography (verified Google Fonts)

- **Headlines:** Big Shoulders Display 700/800 (Google Fonts: https://fonts.google.com/specimen/Big+Shoulders+Display) — condensed, bold, has runway/poster quality. Echoes vintage travel poster typography. Distinct from Bebas Neue/Oswald cliché.
- **Body:** Hanken Grotesk 400/500/700 (Google Fonts: https://fonts.google.com/specimen/Hanken+Grotesk) — clean grotesque, warm, highly readable.
- **Numbers/data:** Space Grotesk 500/700 (Google Fonts: https://fonts.google.com/specimen/Space+Grotesk) — used for prices, stats, and "instrument-panel"-feel data points.

Three fonts is the cap. No Inter, no Roboto, no Outfit, no Poppins, no Montserrat.

## Section-by-section architecture (with structural variation enforced)

| # | Section | Entry pattern | Layout | Differs from neighbors how |
|---|---------|---------------|--------|----------------------------|
| 1 | Sticky nav | n/a (utility) | logo+links+phone+CTA | n/a |
| 2 | Hero | Photo-led, asymmetric (NO eyebrow+H2) | Full-bleed aerial photo bg, gradient overlay, headline left, custom Keys-archipelago SVG map right | breaks default centered pattern |
| 3 | Trust strip | Overlap with hero (margin-top: -56px) | NOT 3-col stat grid. Instead: 4 inline stat-icon pairs in a ribbon over the hero/programs boundary | breaks the SaaS-bar default |
| 4 | Three audiences | Left-aligned eyebrow + H2 + lede + 3 cards | Three asymmetric panels (Train, Stay Current, Sightsee) — different visual weights matching revenue | first eyebrow use; cards NOT identical |
| 5 | Flight programs | NO eyebrow — leads with overflowing pull quote / large display number | Alternating photo+content rows (PPL, IFR, Commercial, CFI) — NOT a 4-up grid | layout is a vertical timeline, not a grid |
| 6 | Aircraft & Sim | Full-bleed image band overlapping into next section | Image left half-bleed, text card right with 4 aircraft listed | breaks container with full-bleed photo |
| 7 | Sightseeing tours | Centered eyebrow + H2 (second eyebrow use) | Asymmetric grid: 1 featured tour (7 Mile Bridge, 2-cell wide) + 4 standard cards. On mobile: scroll-snap carousel with peek | grid layout differs from #5 timeline |
| 8 | Two locations | Left-aligned section title next to first card | Two side-by-side cards: KMTH and KEYW with address + phone + photo | side-by-side comparison, distinct from grid |
| 9 | Why fly here | Pull quote leads, NO section eyebrow | Editorial 2-col + full-bleed photo above. The story section. | breaks rhythm with editorial pacing |
| 10 | FAQ | Two-col with intro text left + accordion right (third eyebrow use) | Single-open accordion with 8+ questions | distinctly different from grid sections |
| 11 | Contact | Centered H2 (NO eyebrow — already at cap) | 2-col form + sidebar with both addresses | structural mirror to #8 but with form |
| 12 | Footer | n/a (utility) | 4-col desktop, 2-col mobile with brand spanning | n/a |

**Eyebrow count:** 3 (sections 4, 7, 10). Within max-3 rule. ✓

**Sections that break container width:** Hero (full-bleed photo bg), Aircraft band (full-bleed image), Why fly here (full-bleed photo above text). 3 sections. ✓

**Asymmetric layout:** Hero (left content + right map), Three audiences (varying card weights), Aircraft (image+card overlap), Tours (featured-1 + standard-4 grid). ✓

**Overlap moments:** Trust strip overlaps hero; Aircraft image overflows into next section. ✓

## Mobile element-order plan

Hero on mobile uses `order` properties:
- order 1: eyebrow chip (Marathon · Key West · Tropical Aviation)
- order 2: H1
- order 3: lede
- order 4: signature SVG map (compact mobile size, ~250px width)
- order 5: primary CTA (Book Discovery Flight)
- order 6: secondary CTA (Call us)
- order 7: hero-tags row

Conversion path elements (CTAs) come BEFORE the editorial map on mobile — wait no, the map IS the signature element. Per spec: "Conversion path elements come BEFORE editorial typography on mobile." The map is editorial, so CTAs should come before.

**Revised mobile order:**
- order 1: eyebrow chip
- order 2: H1
- order 3: lede (one line truncated on mobile)
- order 4: primary CTA (Book Discovery)
- order 5: secondary CTA (Call)
- order 6: signature SVG map (smaller, decorative below CTAs)
- order 7: hero-tags row

## Bottom-alignment strategy in card grids

All cards in same-row grids will use `display: flex; flex-direction: column` on the card body, `flex: 1` on the description container, `margin-top: auto` on the CTA. Applied to: Three Audiences cards, Tour cards, Location cards.

## Collapse animation strategy

All accordions use the same `max-height` transition with `transition: max-height 0.32s ease`. Chevrons rotate via `transform: rotate(180deg)` with `transition: transform 0.3s ease`. No `display: none` mixed with `max-height: 0` desync risk.

## AI Pattern Blacklist temptations & how avoided

**1. The Comfort 15 Icons** — most tempting for an aviation site. Already temped to use `fa-plane`, `fa-route`, `fa-compass`, `fa-clock`. Avoiding by using: `fa-tower-control` (KMTH/KEYW), `fa-plane-departure`, `fa-helicopter` (NO — different use), `fa-anchor`, `fa-binoculars`, `fa-cloud-sun`, `fa-stopwatch-20`, `fa-fish-fins` (Bahia Honda is a fishing destination), `fa-life-ring`, `fa-screwdriver-wrench` (maintenance), `fa-graduation-cap`, `fa-medal`, `fa-pencil` (logbook), `fa-clipboard-check` (checkride), `fa-chart-mixed`, `fa-receipt` (price), `fa-utensils` (Keys dining sidebar), `fa-magnifying-glass-location` (sectional-chart map), `fa-paper-plane`, `fa-arrow-right-long`. Will count and ensure <30% from comfort list at end.

**2. The SaaS Stats Bar** — tempted to do a 3-col stat grid. AVOIDING by using a horizontal ribbon overlapping the hero with each stat at varying weights and one stat phrased as a sentence ("Training pilots in the Keys since 2020"). Not a grid.

**3. The 4/4 Time Signature** — tempted to alternate sand/cream/sand/ocean predictably. AVOIDING by varying section CONTENT structure (timeline, alternating photo, asymmetric grid, full-bleed editorial) not just background colors.

**4. The Generic Hero Headline** — tempted to write "Earn Your Wings". AVOIDING with: "Train, Rate, and Take Off Over America's Most Beautiful Coastline." Specific to Keys, mentions outcome (rating), mentions place. Could not be on a Phoenix flight academy.

**5. The Section Header Metronome** — strict 3-eyebrow cap enforced.

**6. The CTA Staircase** — flex bottom-alignment in every card grid.

**7. The Em Dash Tell** — banned. Will grep file for both `—` and `&mdash;` before deploy.

**8. The Generic Hero Centerpiece** — the SVG map IS the centerpiece. Even removing the photo background, the labeled airport pins + tour route lines are distinctly Florida Keys.

## Placeholders flagged

The following content needs to be filled in by the client before going truly live:
- `[INSTRUCTOR PROFILES NEEDED]` — three placeholder instructor cards with role+CFI rating slots
- `[TESTIMONIAL NEEDED]` — three placeholder testimonial cards
- `[HOURS NEEDED]` — operating hours (M-F vs weekend, by airport)
- `[FOUNDER YEAR / NAME NEEDED]` — to firm up the "Since 2020" stat
- `[GOOGLE RATING NEEDED]` — verified rating for the schema's aggregateRating field. NOT inflating to 5.0.
- `[WARBIRD PRICE NEEDED]` — Vultee BT-13 mission package pricing
- `[N-NUMBER NEEDED]` — for fleet schema and aircraft section
