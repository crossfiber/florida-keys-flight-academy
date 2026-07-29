# Florida Keys Flight Academy — Design Direction (v2, "Reef & Registry")

## Step 1: Live site research

Two-airport operation: Marathon (KMTH, 9850 Overseas Hwy) and Key West (KEYW, 3471 S Roosevelt Blvd). Phone 844-KEYS-AIR / 844-539-7247. Email fkfaoffice@gmail.com. Seven indexed pages, two of which 404 from their own navigation.

**Verified through independent sources (not the client's site):**
- **Owner: Sol Bradman.** Flying the Keys since 1984, instructed at the academy before buying it, owner since November 2020. Operates above the EAA Air Museum at Marathon. Confirmed across two Keys Weekly articles, FlightAware and islandwarbirds.com.
- **Ten aircraft** registered to FLORIDA KEYS FLIGHT ACADEMY LLC in the FAA Aircraft Registry, from a 1942 Vultee BT-13A through a 1980 Cessna 172RG, including a Cessna 310Q twin.
- **Community programmes:** Young Eagles for ages 8-17, 200+ children flown free annually, an aviation club at Key West High School, no deposits, Buzza Foundation scholarships.
- **Named student outcomes** in local reporting: Ethan Sauders (CFI at 19), Aaron Anstett (PPL and instrument rating at 17), Courtney Grabus (18), Eagan Cunningham (17).
- **Prices:** Discovery $298; instruction from $265/hr; flight review from $265; rental checkout $265. Tours $299 / $399 / $499 / $449 per the tours page.

**Could not be verified, so not used:** Google, Yelp and Facebook ratings (all robots-disallowed); hours of operation (six sources, four different answers, none on the official site); exact founding year; Part 61 vs 141 status; warbird pricing.

**Existing brand assets:** the logo is a transparent PNG at only 248x141 with navy wordmark, blue wing bars and a green palm roundel. It needs a light background and must never be inverted. Type on the live site is WordPress default (Roboto / Noto Sans). No brand typography exists.

## Step 2: Diagnosis of the current site

1. **Nothing on the site proves the business is real.** No owner, no instructors, no faces, no reviews, no fleet. Flight training is a high-trust, four-figure purchase and the site offers no evidence.
2. **The best asset in the business is invisible.** Ten aircraft including a 1942 warbird, and the homepage does not mention a single one.
3. **Three audiences are blended into one wall of copy.** Career students, tourists and current pilots all get the same paragraph.
4. **The prices contradict each other across their own pages** by $50 to $100 per tour.
5. **The copy is pure platitude.** "The sky isn't the limit, it's just the beginning." "Train with experienced instructors." Nothing specific, nothing provable.
6. **Two live 404s in the sitewide footer nav**, one of them the aircraft-rentals page.
7. **A celebrity photograph** beside an aircraft the business does not own, on the contact page.
8. **Visual identity is a 2014 WordPress theme.** The Keys are the most photogenic coastline in America and the site looks like a hobby blog.
9. **Mobile is a shrunken desktop.**

**Worth preserving:** the real photography (aerials, first solo, the warbird, the simulator, the WWII briefing room), the vanity phone number, the two-airport geographic moat, the honestly competitive prices, and the warbird itself.

## Step 3: Competitive research

**Flight schools examined:** ATP (`aktiv-grotesk`, `#012E5C` navy + `#B08B1C` gold + `#CC2222` red CTA), Epic (system fonts, `#036EB7` + `#44C8F5` cyan), AeroGuard (Avenir, `#F8991D` orange + Bootstrap 3 defaults), LIFT (brandon-grotesque + museo-sans, `#00263A`), Sunrise (Trebuchet MS, `#0A317C`).

**Air tour operators examined:** Blue Hawaiian (Roboto, `#E31C79` magenta), Papillon (Roboto Flex, unmodified Bootswatch Sandstone), Maverick (Montserrat, `#00C295` teal), Mauna Loa Helicopters (Lato, unmodified X/Pro theme default `#FF2A13`).

**Warbird operators:** Stallion 51 (`#0C3859` navy + `#FFC926` yellow drawn from P-51 nose art, no prices, no booking), Collings (MuseoSlab, faded museum palette), CAF Rise Above (Oswald, `#206177` + `#C1272C`).

**What the whole category shares, and what this build breaks from:**
- Cold blue, universally. Not one warm palette in eleven aviation sites.
- Neutral geometric sans with no display personality, or no webfont at all.
- Airline-uniform photography: pilots in epaulets, fleet lineups, cadets in polos. Nobody photographs the view out the window.
- The credentials avalanche: rows of unlabelled, unsourced numbers.
- The metronome: ATP has twelve near-identical centred sections, Epic ten, AeroGuard twelve.
- No published prices. Sunrise is the sole exception, on a 2003 site.
- Career-pipeline framing. Every school sells a job. **None of them sell flying.**

**The white space, and the strategy:** Mauna Loa Helicopters is the closest analogue in the world, a flight school that also sells tours, and it solved the dual-audience problem by burying tours four levels deep under "Services". Nobody has built a site around the fact that a scenic tour and a first lesson are the same flight. That is the mechanism this build leads with.

## Step 4: Design Direction Declaration

**The tone is warm, editorial and evidentiary, closer to a destination adventure brand than a flight school.** It is rooted in two facts: this business teaches over the only living coral reef in North America, and its fleet is a genuine 1942-to-1980 registry rather than a rental line. Colour is sampled from the academy's own logo and its own aerial photography, which puts it in the one part of the category nobody occupies, warm rather than cold.

**The signature element is The Flight Line:** all ten aircraft by FAA tail number, year and role, from the 1942 BT-13A to the 1980 Cutlass. It could not sit on another business's site, because no other flight school has this fleet and most would hide it. Here it is the argument: you learn the airplane, not the screen.

**Deliberately avoided:** the corporate flight-school cliché (navy plus sky blue plus a neutral sans plus a hangar photo); the generic Keys tourism palette (unearned turquoise, coral, palm-tree icons); the SaaS stats bar; the decorative sectional-chart map the previous build used as its centrepiece, which was ornament rather than evidence; and any rating or hours figure that could not be verified.

## Copy mechanism

**"A scenic tour and a flying lesson are the same forty minutes."** Every tour route is a training route. The airplane, the water and the view are identical. The difference is who holds the controls and whether it goes in a logbook. This runs from the hero through the mechanism statement, the three-doors routing section and the FAQ. It routes all three audiences without a quiz and without hiding either product.

Secondary mechanism, on the warbird: the BT-13 is not a fighter, it is a classroom. It was the WWII basic trainer, and eighty years later it is still at a flight school teaching people to fly. No warbird operator in the audit tells this story.

## Section architecture and structural variation

| # | Section | Entry pattern | Layout | Differs from neighbours |
|---|---|---|---|---|
| 1 | Nav | utility | solid from load, logo left, phone + CTA right | n/a |
| 2 | Hero | photo-led, no eyebrow | full-bleed aerial, content bottom-left, dual CTA | breaks the centred default |
| 3 | Credential strip | overlaps hero by 58px | 3 asymmetric cells, one phrased as a sentence, no big-number grid | deliberately not a stats bar |
| 4 | Mechanism | asymmetric, no eyebrow | H2 + pull-note left, body right | statement, not cards |
| 5 | Three doors | **eyebrow 1** | 3 cards, first at 1.22fr with more weight | first card grid |
| 6 | **The Flight Line** | huge display year, no eyebrow | dark full-bleed, two-column registry roster | a roster, not cards |
| 7 | Training ladder | pull quote, no eyebrow | 4 alternating full-bleed photo bands | bands, not a grid |
| 8 | Already a pilot | plain H2 | 4-column spec row with rules | spec row, not cards |
| 9 | Tours | **eyebrow 2** | featured horizontal card, then a uniform 2x2 | featured is its own layout, never a span |
| 10 | Filmstrip | small H3 | horizontal scroll-snap | horizontal, zero vertical cost |
| 11 | Warbird | mono registration line, no eyebrow | dark photo band, spec list, real quote | photo band |
| 12 | Sol and community | pull quote leads | editorial 2-col + sidebar list | editorial |
| 13 | Proof | plain H3 | one large quote + a press-cited outcome list | not a testimonial grid |
| 14 | Locations | title beside cards | 2 side-by-side | comparison pair |
| 15 | FAQ | **eyebrow 3** | intro left, accordion right | accordion |
| 16 | Contact | rule + H2 | form left, dark sidebar right | form |
| 17 | Footer | utility | 4-col, logo on a light plate | n/a |

Eyebrows: exactly 3. Container-breaking sections: hero, flight line, training bands, warbird. Overlap: the credential strip over the hero. No two content sections use structurally identical grids.

## Blacklist temptations and how each was avoided

1. **The SaaS stats bar.** Strong pull with ten aircraft and 200 kids a year to brag about. Avoided: the credential strip leads with a full sentence, and the fleet count lives inside a roster rather than a counter row.
2. **The Comfort 15 icons.** 47 unique icons; exactly one (`fa-arrow-right`, on a gallery arrow) is from the comfort list. Aviation-specific choices throughout: `fa-tower-control`, `fa-jet-fighter`, `fa-bridge-water`, `fa-fish-fins`, `fa-child-reaching`, `fa-file-signature`, `fa-cloud-bolt`.
3. **The orphan featured card.** The 7 Mile Bridge Run is the flagship tour. Rather than spanning it across a uniform grid, it was given its own horizontal layout above a symmetric 2x2 of the other four.
4. **The generic hero headline.** "Learn to fly over the only living coral reef in North America" cannot run on a Phoenix flight school.
5. **The section metronome.** Hard cap of three eyebrows, enforced and verified.
6. **Fabricated credibility.** The strongest temptation on this build: a third-party scraper reported roughly 4.7 stars from 35 reviews. It was not used, and no `aggregateRating` was emitted at all.
7. **The em dash tell.** Zero, verified by script across markup, CSS, JS, meta and JSON-LD.
8. **The retroactive palette.** Every hex was sampled from a real file with a script before any CSS was written.

## Mobile

Designed separately, not derived. The training ladder becomes an accordion below 900px with the first step open, cutting that section from 2,823px to 1,551px. Long copy carries `.m-trim` spans that drop secondary clauses. Photo aspect ratios shorten. Full page height at 390px went from 24,670px to 19,364px, roughly 29 swipes down to 23.

That is above the 8-10 swipe guideline, and it is a deliberate call: the remaining length is the fleet registry, the training ladder, the warbird story, the proof and a ten-question FAQ, all of which are conversion assets for a four-figure considered purchase. The padding bloat is gone; what is left is substance. Tours stayed a comparison grid rather than a carousel so a buyer can see all four prices at once.

Conversion is reachable from anywhere: a phone button sits in the nav bar at every breakpoint, and the drawer footer carries a white phone pill above an amber CTA. No sticky bottom bar.
