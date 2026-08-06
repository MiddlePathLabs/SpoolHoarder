const e=`---\r
title: HueForge export\r
description: Export your filaments in the CSV format HueForge expects.\r
order: 5\r
status: published\r
updated: 2026-08-06\r
keywords:\r
  - hueforge\r
  - export\r
  - filament library\r
  - td\r
  - transmission distance\r
  - color\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Spool Hoarder can write your inventory out as a HueForge-compatible CSV, so you\r
can load your filaments straight into HueForge without retyping them. Open\r
**Settings → Data & Backup → Export for HueForge**.\r
\r
## What it produces\r
\r
The file uses HueForge's column layout: **Brand**, **Type**, **Color**, **Name**,\r
**TD**, **Tags**, **Secondary_Type**, **Secondary_Color**, **Secondary_Strength**,\r
**Owned**, and **Uuid**. Load it in HueForge through its filament-library import\r
to bring the list in.\r
\r
A spool is only included when it has the three things HueForge needs:\r
\r
- a **color** (a hex code, or a color family Spool Hoarder can resolve to one),\r
- a **name**, and\r
- a **transmission distance (TD)**.\r
\r
Spools missing any of these are skipped and counted in the result message.\r
\r
## Multicolor filaments are always excluded\r
\r
HueForge's format models a single primary color, so multicolor filaments are\r
excluded from every export. A spool counts as multicolor if it has more than one\r
hex code, more than one color name, a **Multi** color family, or a multi-color\r
direction set. The result message tells you how many were skipped for this\r
reason.\r
\r
## Choosing the export scope\r
\r
You can scope the export three ways:\r
\r
- **All** — every non-deleted spool in your inventory history.\r
- **TD1 Confirmed Only** — only filaments whose transmission distance and color\r
  you have confirmed with a TD1 scan. Use this when you want HueForge to trust\r
  your measured transmission distances. See\r
  [Scanning with a TD1](/docs/scanning/td1-scanner/).\r
- **Material** — a single material such as PLA or PETG. Pick the material from\r
  the dropdown; this option requires a selection before you can export.\r
\r
## The Owned flag\r
\r
HueForge's **Owned** column is set to **true** for active, non-depleted spools\r
and **false** for depleted spools you have kept in your inventory history. That\r
lets HueForge show what you still have on hand separately from what you have\r
used up.\r
\r
## After the export\r
\r
The result message reports how many rows were exported and how many were skipped\r
(multicolor, or missing required fields). If zero spools matched, the export is\r
canceled with a clear message rather than writing an empty file.\r
\r
The file is saved the same way as other exports — share sheet on iPhone, iPad,\r
and Android, save dialog on Windows.\r
\r
## Related pages\r
\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [Scanning with a TD1](/docs/scanning/td1-scanner/)\r
`;export{e as default};
