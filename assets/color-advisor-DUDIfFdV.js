const e=`---\r
title: Color Advisor\r
description: Suggestions for filaments that pair well with a color you already own.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - colour\r
  - color\r
  - colour advisor\r
  - color advisor\r
  - pairing\r
  - complementary\r
  - complementary colour\r
  - analogous\r
  - triadic\r
  - what prints with\r
  - matching filament\r
  - colour theory\r
platforms:\r
  - all\r
---\r
\r
The Color Advisor looks at the spool you are viewing and suggests other filaments\r
from your inventory whose colors pair well with it, using classic color theory.\r
It is a planning aid for multi-color prints, not a scanner or an inventory rule.\r
\r
## Where suggestions appear\r
\r
- On a spool's detail screen, in the **Color Suggestions** card.\r
- When you add filament to a project, as a suggestion strip inside the picker.\r
\r
The same switch governs both. Turn it off with **Settings → Preferences → Color\r
Advisor Suggestions** if you would rather pick colors yourself.\r
\r
## What drives a suggestion\r
\r
The advisor resolves the base spool's color — most accurate when the spool has a\r
hex code, and still workable from its color family or name — then scores every\r
other in-stock spool by how closely it lands on a harmonic target for the base.\r
Candidates have to be compatible: the advisor only pairs like with like (same\r
material), allows ABS with ASA, and skips support filaments such as PVA and HIPS.\r
Visually identical colors are deduplicated, so a strip shows distinct options.\r
\r
Each palette shows the in-stock spools that fill it, and, for the colors you are\r
missing, a shop suggestion drawn from the filament catalog. Those shop chips are\r
marked as not in your inventory; opening one leaves Spool Hoarder for a retailer\r
site, and the dialog notes that the link may be an affiliate link.\r
\r
When a color was inferred from the spool's name rather than a hex code, the chip\r
notes that the exact shade may vary.\r
\r
## What the palette names mean\r
\r
Each suggestion belongs to one color-theory palette:\r
\r
- **Complementary** — the color opposite on the wheel, for bold contrast.\r
- **Analogous** — neighboring shades that blend naturally.\r
- **Triadic** — three hues evenly spaced around the wheel, lively and balanced.\r
- **Split-complementary** — almost opposite, striking but a little softer.\r
- **Monochromatic** — the same color in lighter and darker tones.\r
- **Square tetradic** and **Rectangle tetradic** — four-hue palettes built from\r
  two complementary pairs.\r
\r
For a neutral base (black, white, or gray) there is no hue to harmonize with, so\r
the advisor offers two special palettes instead: **Pop of color**, a vivid accent\r
that stands out against the neutral, and **Neutral tones**, a lighter or darker\r
neutral for a clean tonal pairing.\r
\r
The strip shows a few palettes at first; choose **See all palettes** to expand it.\r
\r
## Why a spool may have no suggestions\r
\r
- **The base spool has no usable color data.** Add a hex code, a color family,\r
  or a descriptive color name and suggestions return.\r
- **Nothing in stock is compatible.** The advisor will not mix materials that do\r
  not print together, so a spool with no same-material companions has no matches.\r
- **No color lands close enough to a harmony target.** The advisor would rather\r
  show nothing than a weak pairing.\r
- **Color Advisor Suggestions is off.** Turn it back on in\r
  **Settings → Preferences**.\r
\r
## Related pages\r
\r
- [Holiday palette](/docs/planning/holiday-palette/)\r
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)\r
- [Spool details](/docs/inventory/spool-details/)\r
- [Preferences](/docs/settings/preferences/)\r
`;export{e as default};
