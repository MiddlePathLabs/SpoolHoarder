const e=`---
title: HueForge export
description: Export your filaments in the CSV format HueForge expects.
order: 5
status: published
updated: 2026-08-04
keywords:
  - hueforge
  - export
  - filament library
  - td
  - transmission distance
  - color
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Spool Hoarder can write your inventory out as a HueForge-compatible CSV, so you
can load your filaments straight into HueForge without retyping them. Open
**Settings → Data & Backup → Export for HueForge**.

This exporter is not available in the web app.

## What it produces

The file uses HueForge's column layout: **Brand**, **Type**, **Color**, **Name**,
**TD**, **Tags**, **Secondary_Type**, **Secondary_Color**, **Secondary_Strength**,
**Owned**, and **Uuid**. Load it in HueForge through its filament-library import
to bring the list in.

A spool is only included when it has the three things HueForge needs:

- a **color** (a hex code, or a color family Spool Hoarder can resolve to one),
- a **name**, and
- a **transmission distance (TD)**.

Spools missing any of these are skipped and counted in the result message.

## Multicolor filaments are always excluded

HueForge's format models a single primary color, so multicolor filaments are
excluded from every export. A spool counts as multicolor if it has more than one
hex code, more than one color name, a **Multi** color family, or a multi-color
direction set. The result message tells you how many were skipped for this
reason.

## Choosing the export scope

You can scope the export three ways:

- **All** — every non-deleted spool in your inventory history.
- **TD1 Confirmed Only** — only filaments you have confirmed with a TD1 scan.
  Use this when you want HueForge to trust your measured transmission distances.
- **Material** — a single material such as PLA or PETG. Pick the material from
  the dropdown; this option requires a selection before you can export.

## The Owned flag

HueForge's **Owned** column is set to **true** for active, non-depleted spools
and **false** for depleted spools you have kept in your inventory history. That
lets HueForge show what you still have on hand separately from what you have
used up.

## After the export

The result message reports how many rows were exported and how many were skipped
(multicolor, or missing required fields). If zero spools matched, the export is
cancelled with a clear message rather than writing an empty file.

The file is saved the same way as other exports — share sheet on iPhone, iPad,
and Android, save dialog on Windows.

## Related pages

- [Exporting your data](/docs/data/exporting-your-data/)
- [Importing a CSV](/docs/data/importing-a-csv/)
`;export{e as default};
