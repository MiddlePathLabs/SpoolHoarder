const n=`---
title: Appearance and themes
description: Light, dim, and dark modes, the colour palettes, and the display options that change how the inventory looks.
order: 2
status: published
updated: 2026-08-04
keywords:
  - theme
  - dark mode
  - light mode
  - dim mode
  - night mode
  - palette
  - colours
  - color
  - appearance
  - reduce motion
  - animations
  - display
  - density
  - spool card
  - inventory layout
  - grouping
platforms:
  - all
---

Open **Settings → Appearance** to change how Spool Hoarder looks. Everything here is cosmetic or affects how much detail the inventory shows — none of it changes your data.

## Theme

The **Theme** control sets how bright the app is. There are four options:

- **System** (the default) — follows your operating system's light or dark setting.
- **Light**
- **Dim** — a dark theme with softer, lower-contrast surfaces. A good middle ground if full dark is too stark.
- **Dark**

## Colour palette

**Palette** sets the accent colour used for buttons, switches, and highlights. There are four:

- **Copper** (the default) — warm brown.
- **Twilight** — purple.
- **Dragon** — teal.
- **Onyx** — near-monochrome grey. Colour only appears where it carries meaning, such as status indicators.

Each palette is tuned for light, dim, and dark, so you can combine any palette with any theme.

## Motion and card icons

- **Reduce Motion** minimises animations throughout the app.
- **Show Barcode Icon** displays a small barcode glyph on spool cards that have a saved barcode.

## Default inventory grouping

**Inventory Grouping** sets the grouping the inventory opens with each time you return to it:

- **Flat** — a single list, no grouping.
- **Product** (the default) — groups spools that share the same brand, material, name, and colour.
- **State** — a stricter version of **Product** that further splits each group by weight and status.

You can still change grouping on the fly from the inventory toolbar. See [Grouping and tags](/docs/inventory/grouping-and-tags/).

## Compact inventory layout

**Compact Inventory Layout** controls how the inventory looks on smaller screens, such as phones:

- **Auto** — Spool Hoarder picks cards or a denser list based on the screen.
- **Cards** — always show the larger card layout.
- **List** — always show the compact row layout.

## Spool card fields

**Spool Card Display Fields** chooses which extra details appear on each spool card. Brand, material, and colour are always shown. On top of those, you can pick up to **four** of:

- **Price**
- **TD** (transmission distance)
- **Location**
- **Spool Size**
- **Diameter**
- **Features**
- **Product Family**

Once four are selected, deselect one to choose another. See [Customising spool cards](/docs/inventory/customizing-spool-cards/).

## Preview

The **Preview** at the bottom of the screen shows a sample spool card with your current choices, so you can see the result before you leave the screen.

## Related pages

- [Customising spool cards](/docs/inventory/customizing-spool-cards/)
- [Grouping and tags](/docs/inventory/grouping-and-tags/)
- [Preferences](/docs/settings/preferences/)
`;export{n as default};
