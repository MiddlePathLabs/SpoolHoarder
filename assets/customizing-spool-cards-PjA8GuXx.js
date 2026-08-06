const e=`---
title: Customizing spool cards
description: Choose which extra fields appear on each spool card in the inventory list, and how the list lays out.
order: 7
status: published
updated: 2026-08-04
keywords:
  - card display
  - customise cards
  - card fields
  - show price on card
  - compact list
  - layout
  - inventory view
platforms:
  - all
---

You control which details appear on each spool card and how the inventory list lays out, both under Settings → Appearance.

## Spool card fields

Open Settings → Appearance and find **Spool Card Display Fields**. Brand, material, and color are always shown. Beyond those, you can switch on up to **four** of the following:

- **Price**
- **TD** (transmission distance)
- **Location**
- **Spool Size**
- **Diameter**
- **Features**
- **Product Family**

A counter shows how many you have picked, and once you reach four a hint tells you to deselect one before choosing another. A live **Preview** shows the result as you change things.

These fields affect the inventory list only — cards, compact rows, and the desktop table. They do not change the spool detail screen, which always shows the full set of details.

On the desktop table view, every field above is available as a column except **Spool Size**.

## Default view

The **Default View** section in the same screen controls two things:

- **Inventory Grouping** — **Flat**, **Product**, or **State**. See [Grouping and tags](/docs/inventory/grouping-and-tags/).
- **Compact Inventory Layout** — how the list looks on smaller screens. Choose **Auto** (let Spool Hoarder decide), **Cards** (always show grid cards), or **List** (always show compact rows). The helper text reads "Controls how inventory looks on smaller screens."

On a phone, **Auto** uses compact rows for a flat list and cards for grouped lists. Forcing **Cards** always uses grid cards regardless of screen size.

## Related pages

- [Grouping and tags](/docs/inventory/grouping-and-tags/)
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)
- [Adding a spool](/docs/inventory/adding-a-spool/)
`;export{e as default};
