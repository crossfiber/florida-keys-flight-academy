# Borrowed Code Patterns

Reference builds are read for code-quality and structural standards ONLY — never for visual identity, brand colors, fonts, headlines, or signature visual elements.

## Reference: JOTL/index.html (`C:\Users\accc0\Downloads\JOTL\index.html`)

**Why this reference:** JOTL is a service-booking site with mixed audiences (premium and practical, repeat clients and event tourists). Florida Keys Flight Academy has the same shape: career flight students (long decision cycle, premium evaluation) AND tourist scenic-tour buyers (short decision, impulse purchase) AND existing pilots needing checkrides. JOTL's two-track architecture maps directly.

**Categorical NOT-borrows confirmed:**
- NOT borrowing the cream/cypress/amber palette (FKFA is tropical Keys, not country bar)
- NOT borrowing Caveat/Hanken/serif typography pairing (FKFA gets condensed-bold display + clean grotesque)
- NOT borrowing the marquee or partner-logo bands (different content shape)
- NOT borrowing the asymmetric "From a Pier on the Lake" hero copy structure (FKFA hero is photo+map, not display typography)

### Borrowed pattern 1: Mobile drawer + body scroll lock + safe-area-inset
**Source:** JOTL lines 250-330 (CSS), 1746-1767 (HTML), 2486-2518 (JS)
**Where in FKFA:** Mobile navigation drawer
**What:** Right-side drawer with `transform: translateX(100%)` open/close, `100dvh` height, `env(safe-area-inset-top/bottom)` padding, four close paths (X button, overlay click, link click, Escape key), `body.drawer-open { overflow: hidden }` body scroll lock, `aria-hidden`/`aria-expanded` sync.

### Borrowed pattern 2: Anchor link smooth-scroll without JS
**Source:** JOTL lines 73-79 (CSS), 2476-2483 (JS)
**Where in FKFA:** All in-page nav links
**What:** `html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-h) + 16px) }`, smaller `--nav-h-sm` at <768px breakpoint, `history.scrollRestoration = 'auto'` to fix Brave/Safari refresh-position regression.

### Borrowed pattern 3: Single-open accordion with max-height transition
**Source:** JOTL lines 1172-1218 (CSS), 2575-2591 (JS), 2197-2234 (HTML)
**Where in FKFA:** FAQ section, mobile-collapse training programs and tour packages
**What:** Open one closes others. Same `max-height` transition mechanism on header chevron and content panel (no `display: none` mixed with `max-height: 0` desync). `transform: rotate(180deg)` on chevron.

### Borrowed pattern 4: Mobile scroll-snap carousel for cards (with peek)
**Source:** JOTL lines 1584-1589, 836-842 (CSS)
**Where in FKFA:** Tour packages on mobile (5 sightseeing tours), gallery aerial photos
**What:** Same desktop grid markup → mobile flex+overflow-x with `flex: 0 0 78%` cards (next card peeks 22% to invite swipe), `scroll-snap-type: x mandatory`, `scroll-snap-align: start`, scrollbar hidden cross-browser, `-webkit-overflow-scrolling: touch` for iOS momentum.

### Borrowed pattern 5: Bottom-aligned CTAs in card grids
**Source:** JOTL lines 730-774, 894-966 (CSS)
**Where in FKFA:** Training program cards, tour cards, audience cards
**What:** `display: flex; flex-direction: column` on card + `flex: 1` on description container + `margin-top: auto` on CTA. Guarantees baseline alignment across rows with variable description lengths.

### Borrowed pattern 6: Sticky nav structure (BUT solid from page load)
**Source:** JOTL lines 1719-1743 (HTML), 107-212 (CSS), 2486-2493 (JS)
**Where in FKFA:** Top sticky nav
**What:** Logo left, links center, phone+CTA right, hamburger+phone-icon for mobile-actions cluster. **Modification:** I'm NOT borrowing JOTL's transparent-then-solid pattern — per the build spec the nav must be solid from page load. I keep the `.scrolled` class transition for box-shadow but the background starts solid.

### Borrowed pattern 7: iOS Safari hardening
**Source:** Various lines in JOTL
**Where in FKFA:** Site-wide
**What:** `<meta viewport content="...,viewport-fit=cover">`, `body { overflow-x: hidden }`, `min-width: 0` on flex children with text, `100dvh` everywhere viewport-locked (NOT `100vh`).

### Borrowed pattern 8: Section header variation system
**Source:** JOTL lines 1959-1964 (centered), 1797-1804 (left+CTA), 2185-2236 (two-col with intro)
**Where in FKFA:** Distributed across sections to avoid metronome
**What:** Three distinct section-header patterns rotated through the page so no two consecutive sections enter the same way.

### Borrowed pattern 9: Form with mailto fallback + status message
**Source:** JOTL lines 1245-1283 (CSS), 2245-2281 (HTML), 2593-2615 (JS)
**Where in FKFA:** Contact form
**What:** JS validation, branded inline error/success messages, mailto fallback that opens user's email client pre-filled. **Modification:** I'll add `novalidate` per FKFA build spec, plus on-input error clearing.

### Borrowed pattern 10: Pre-fill form field from CTA click
**Source:** JOTL lines 2520-2531
**Where in FKFA:** Tour CTAs auto-select tour type in contact form
**What:** `data-event-link="wedding"` on CTA → JS finds the form `<select>` and selects the matching `<option>` when user navigates to contact section.

### Borrowed pattern 11: Mobile-only collapsible cards with display:contents
**Source:** JOTL lines 785-796 (CSS desktop), 1531-1573 (CSS mobile), 2560-2573 (JS)
**Where in FKFA:** Training program detail cards on mobile
**What:** Same markup behaves as flat card on desktop and as button+collapsible on mobile via `display: contents` on the wrapper button. JS gated to mobile via `matchMedia('(max-width: 768px)')`.

### Borrowed pattern 12: Two-layer box-shadow for card depth
**Source:** JOTL `--shadow-sm` and `--shadow-md` tokens (lines 67-68)
**Where in FKFA:** All cards site-wide
**What:** `box-shadow: 0 1px 2px ..., 0 4px 14px ...` two-layer pattern for photographic depth instead of flat single-shadow look.
