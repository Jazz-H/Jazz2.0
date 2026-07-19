# Jazz 2.0 — Personal Dashboard PWA

A single-file mobile web app consolidating the Jazz 2.0 series (previously separate
Word docs) into one tabbed, installable PWA: **Skin/Hair, Style, Fitness, Wants.**

## Files
- `jazz2.0.html` — the entire app (HTML/CSS/JS, no build step, no framework)
- `manifest.json` — PWA manifest (name, icons, standalone display)
- `sw.js` — service worker, caches all 5 files for offline use
- `icon-192.png` / `icon-512.png` — generated app icons (dark charcoal bg, olive "J2" monogram)

## Status / how to deploy
This only becomes a real installable PWA once hosted on an actual http(s) origin
(manifest + service worker won't register from a local file or sandboxed preview).
To deploy: enable GitHub Pages on this repo (Settings → Pages → Deploy from branch →
main → root), then open the live URL on mobile and "Add to Home Screen."

## Design system
- Dark charcoal theme: bg `#18191b`, surface `#232427`, surface-2 `#2b2c30`, line `#37383c`
- Text: `#ededee` primary, `#95979d` dim
- Accents: gold `#c8a24a` (AM / skincare), navy `#3a4a6b` (PM), olive `#7c8a63` (primary
  interactive accent — checkboxes, active tab, progress bar), danger `#a4573f`
- Bottom tab bar (app-style), swipe left/right between tabs supported
- Standardized chevron pattern for ALL collapsible sections (rules cards, day
  accordions, capsule need/owned cards, fitness day cards) — same SVG path, same
  180° rotate-on-open behavior
- Every collapsible section shows an "insight" (count/progress) in its header

## Data / storage
Uses plain `localStorage`, one JSON blob per tab: `style-state`, `fitness-state`,
`wants-state`. (Originally used `window.storage`, an artifact-only API from Claude's
in-browser preview environment; migrated to `localStorage` now that the app runs on
its own hosted origin — this also resolved the intermittent "Storage set failed"
errors, since saves no longer go through Anthropic's artifact storage bridge at all.)

## Tab-by-tab content
**Skin/Hair:** Mon–Sun day-by-day accordion, gold AM band / navy PM band per day,
auto-detects and opens "today," badges it. Key rules card (Vitamin C/Glycolic Acid
same-day-different-session rule, SPF always last AM step, lash serum always last PM
step).

**Style:** Fit rules card (front-tuck, Tall/Long inseam, size-to-hips, no oversized/
drop-shoulder, ankle dress pants = business casual only w/ no-show socks + loafers
never sneakers). Sizing reference grid (Tops XS–S, Outerwear XXS, Bottoms 4 Tall/Long,
Denim 4/27 Long, Shoes 7.5M, Ring 5–7 w/ footnote: Oura confirmed at 7). Capsule
wardrobe: "Still need" and "In closet" as separate collapsible cards, both grouped by
category (Tops/Bottoms/Shoes/Outerwear/Accessories), tappable to move between them,
persisted. Progress bar showing % of capsule owned.

**Fitness:** 3-day split (Sunday Crunch/machines/pull, weekday busy-gym/free-weights/
push, Friday home/dumbbells). Per-exercise checkboxes that persist until manually
reset — NOT auto-reset weekly (explicit user preference). "Reset week" button clears
all three days at once, now with a confirm() prompt since it's destructive/no-undo.

**Wants:** Cytac holster ($24.99), Instant Pot Duo 3qt ($59.99), North Face Antora
jacket gray XXS ($130, Dick's), Timberland Linden Woods boot black 7.5M ($139.99,
Rack Room), Oura Ring 5 + membership ($468.99), brown leather belt square buckle
(~$20 est., unconfirmed, pending decision on whether to merge with the style capsule's
separate brown/cognac belt line item). Pending/Purchased sections each show a running
total, plus a grand list total. Links now point to direct product pages (Amazon,
Dick's, Rack Room Shoes, Instant Pot's own site) picked to match the noted spec
(color/size) as closely as possible from search results — retailer sites block
automated fetch/scrape verification (403s across the board, the same issue the
original build hit trying to capture a Dick's cart-share link), so double-check size,
color, and current price at checkout before buying. The brown belt still has no link;
its price is a rough estimate pending the merge decision below.

## Known open items / suggested next steps
1. Search/filter for the capsule list (explicitly deferred, not built)
2. Consider a 5th "Home/overview" tab (today's skin/hair + today's fitness at a glance)
3. Confirm whether the Crest Whitestrips course (should've finished ~mid-July) needs
   any remaining reference in the Skin/Hair routine, or is fully done
4. Resolve the brown belt merge question (wants list vs. style capsule) — once
   resolved, add its product link too

## User context (for tone/preferences if continuing this project)
Goes by Jazz, Charlotte NC, business casual job, "Glow Up Season" self-improvement
project. Prefers Claude to make judgment calls and show finished output rather than
asking permission upfront; gives targeted correction rather than wanting full rewrites.
Aesthetic: clean, minimal, masculine-leaning.
