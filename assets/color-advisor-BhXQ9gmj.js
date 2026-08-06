const e=`---
title: Color Advisor
description: Suggestions for filaments that pair well with a color you already own.
order: 3
status: published
updated: 2026-08-04
keywords:
  - colour
  - color
  - colour advisor
  - color advisor
  - pairing
  - complementary
  - complementary colour
  - analogous
  - triadic
  - what prints with
  - matching filament
  - colour theory
platforms:
  - all
---

The Color Advisor looks at the spool you are viewing and suggests other filaments
from your inventory whose colors pair well with it, using classic color theory.
It is a planning aid for multi-color prints, not a scanner or an inventory rule.

## Where suggestions appear

- On a spool's detail screen, in the **Color Suggestions** card.
- When you add filament to a project, as a suggestion strip inside the picker.

The same switch governs both. Turn it off with **Settings → Preferences → Color
Advisor Suggestions** if you would rather pick colors yourself.

## What drives a suggestion

The advisor resolves the base spool's color — most accurate when the spool has a
hex code, and still workable from its color family or name — then scores every
other in-stock spool by how closely it lands on a harmonic target for the base.
Candidates have to be compatible: the advisor only pairs like with like (same
material), allows ABS with ASA, and skips support filaments such as PVA and HIPS.
Visually identical colors are deduplicated, so a strip shows distinct options.

Each palette shows the in-stock spools that fill it, and, for the colors you are
missing, a shop suggestion drawn from the filament catalog. Those shop chips are
marked as not in your inventory; opening one leaves Spool Hoarder for a retailer
site, and the dialog notes that the link may be an affiliate link.

When a color was inferred from the spool's name rather than a hex code, the chip
notes that the exact shade may vary.

## What the palette names mean

Each suggestion belongs to one color-theory palette:

- **Complementary** — the color opposite on the wheel, for bold contrast.
- **Analogous** — neighboring shades that blend naturally.
- **Triadic** — three hues evenly spaced around the wheel, lively and balanced.
- **Split-complementary** — almost opposite, striking but a little softer.
- **Monochromatic** — the same color in lighter and darker tones.
- **Square tetradic** and **Rectangle tetradic** — four-hue palettes built from
  two complementary pairs.

For a neutral base (black, white, or gray) there is no hue to harmonize with, so
the advisor offers two special palettes instead: **Pop of color**, a vivid accent
that stands out against the neutral, and **Neutral tones**, a lighter or darker
neutral for a clean tonal pairing.

The strip shows a few palettes at first; choose **See all palettes** to expand it.

## Why a spool may have no suggestions

- **The base spool has no usable color data.** Add a hex code, a color family,
  or a descriptive color name and suggestions return.
- **Nothing in stock is compatible.** The advisor will not mix materials that do
  not print together, so a spool with no same-material companions has no matches.
- **No color lands close enough to a harmony target.** The advisor would rather
  show nothing than a weak pairing.
- **Color Advisor Suggestions is off.** Turn it back on in
  **Settings → Preferences**.

## Related pages

- [Holiday palette](/docs/planning/holiday-palette/)
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)
- [Spool details](/docs/inventory/spool-details/)
- [Preferences](/docs/settings/preferences/)
`;export{e as default};
