# Borrowed Code Patterns

Reference builds are read for engineering and UX mechanics only. Never for visual identity, colour, type, headline copy or signature elements.

## Reference read in full: `Agency/Clients/BigTruck/index.html` (739 lines)

**Why this routing:** the project reference table sends single-location specialty trade and "newest build quality bar" to Big Truck, and it is the strongest engineering reference in the library. Florida Keys Flight Academy is a two-location business, so P&C Mobile Repair was consulted for the multi-location JSON-LD shape, but Big Truck carried the page architecture. **JOTL was explicitly excluded at the user's instruction.**

**Categorical NOT-borrows confirmed:**
- Not borrowing the steel/graphite/bone palette. FKFA's palette is sampled from its own logo and its own aerial photography.
- Not borrowing Hepta Slab + Archivo. FKFA uses Fraunces + Hanken Grotesk + JetBrains Mono.
- Not borrowing any headline, the "Our Shop Comes To You" mechanism, or the owner-timeline concept.
- Not borrowing the signature element. Big Truck's is a service-truck hero; FKFA's is the FAA fleet registry.

### Pattern 1: Alternating full-bleed service bands
**Source:** BigTruck lines 161-183 (CSS), 382-413 (HTML)
**Where in FKFA:** the four-step training ladder (Discovery, Private, Instrument, Commercial/CFI)
**What:** `.band` as a two-column full-bleed grid, `.band.right .band-photo{order:2}` to alternate sides, `.band.alt` for background rotation, `max-width` on `.band-text` with `margin-left:auto` on left-facing bands so text stays measured against a full-bleed photo. Collapses to a single column with `order:1 !important` on the photo at 900px.
**Re-skinned:** numbered eyebrows became mono "Step 01 / Start here" flight-brief labels in reef teal, and each band carries a real price row rather than a makes-and-models line. Photos are the academy's own cockpit, first-solo, simulator and student images.

### Pattern 2: Drawer, body scroll lock, safe-area insets
**Source:** BigTruck lines 104-122 (CSS), 328-346 (HTML), 658-668 (JS)
**Where in FKFA:** mobile navigation drawer
**What:** right-side drawer on `transform:translateX(100%)`, `100dvh`, `padding-top:env(safe-area-inset-top)` and `calc(20px + env(safe-area-inset-bottom))` on the footer, four close paths (X, overlay, link click, Escape), `body.drawer-open{overflow:hidden}` scroll lock, `body.drawer-open .mobile-actions{visibility:hidden}` so the trigger and the close X are never both visible, and `aria-hidden`/`aria-expanded` kept in sync.
**Re-skinned:** Big Truck's drawer is bone-on-bone and utilitarian. FKFA's is a deep Atlantic navy sheet with Fraunces links at 1.2rem, a reef-teal icon rail, and a white phone pill above an amber CTA in the footer. Same mechanics, entirely different surface.

### Pattern 3: Anchor handling, hash stripping, scroll restoration
**Source:** BigTruck lines 56-57 (CSS), 655-657, 670-680 (JS)
**Where in FKFA:** every in-page link
**What:** `scroll-padding-top:calc(var(--nav-h) + 20px)` with a smaller value at the mobile breakpoint, `history.scrollRestoration='auto'` set explicitly for Brave, intercepting `a[href^="#"]` to scroll programmatically then `history.replaceState(null,'',pathname)` to strip the hash, plus stripping any hash on load.
**Fixed beyond the reference:** the reference declares `--nav-h-sm` but never actually applies it to the nav element, so the mobile scroll-padding calculation is wrong by the difference. FKFA applies `nav.site-nav{height:var(--nav-h-sm)}` at the mobile breakpoint, verified by measurement: `#fleet` lands 84px down against a 66px nav, clear by 18px.

### Pattern 4: Single-open accordion on a max-height transition
**Source:** BigTruck lines 235-243 (CSS), 682-694 (JS)
**Where in FKFA:** the FAQ, and (adapted) the mobile training ladder
**What:** one mechanism throughout, `max-height:0` to `scrollHeight` with a matching easing, `fa-plus` rotating 45 degrees to a cross rather than a chevron. Never `display:none` mixed with `max-height:0`. Heights recalculated on a debounced resize.
**Extended:** FKFA adds a second accordion group for the training bands, gated to mobile by `matchMedia('(max-width:900px)')` with the first step open by default and a `change` listener that resets state cleanly when crossing the breakpoint. It uses the identical max-height mechanism so the two groups cannot desync. This cut the training section from 2,823px to 1,551px at 390px.

### Pattern 5: Scroll-snap filmstrip with peek
**Source:** BigTruck lines 223-228 (CSS), 696-703 (JS)
**Where in FKFA:** the Keys aerial gallery
**What:** `scroll-snap-type:x mandatory`, `scroll-snap-align:start` with matching `scroll-padding-left`, scrollbars hidden cross-browser, `-webkit-overflow-scrolling:touch`, arrows that measure a frame's actual width plus gap rather than assuming a fixed step, and arrows hidden below 900px.
**Re-skinned:** square frames became 14px-radius cards, and captions carry reef-teal place icons over a navy gradient.

### Pattern 6: Branded form validation with mailto fallback
**Source:** BigTruck lines 250-266 (CSS), 501-538 (HTML), 705-707, 718-736 (JS)
**Where in FKFA:** the contact form
**What:** `novalidate` plus JS validation so no native browser tooltips fire, per-field `.err` state with a branded message in the site's voice, errors cleared on `input`, and a status block that speaks plainly.
**Extended:** FKFA adds `change` listeners so the select clears its error too, composes a prefilled `mailto:` so the enquiry actually reaches `fkfaoffice@gmail.com` with no backend, and wires `data-want` on five CTAs so arriving from the warbird or instrument section preselects the matching enquiry type.

### Pattern 7: Bottom-aligned CTAs in card grids
**Source:** BigTruck's flex card pattern
**Where in FKFA:** the three-doors cards, the four tour cards, both location cards
**What:** `display:flex; flex-direction:column` on the card, `flex:1` on the description, `margin-top:auto` on the CTA, so buttons baseline-align regardless of copy length. Verified in render: all three door CTAs sit on the same baseline.

### Pattern 8: Two-layer shadow and section header variation
**Source:** BigTruck's shadow tokens and its rotation of centred, left-aligned and two-column section headers
**Where in FKFA:** `--sh-sm` / `--sh-md` on every card, and a header pattern that never repeats across consecutive sections.

## Consulted, not read in full: `Agency/Clients/P&C/pandc-mobile-repair/index.html`

Referenced only for the shape of per-location structured data. FKFA emits a separate `LocalBusiness` node for Marathon and for Key West, each with its own `@id`, address, geo, `areaServed` and `knowsAbout`, both pointing at a shared `Organization` node via `parentOrganization`, rather than one umbrella block. No markup, styling or copy was taken.
