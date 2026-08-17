const e=`---
title: Grouping and tags
description: Group the inventory list by product or exact match, and use the Features field to label spools.
order: 5
status: published
updated: 2026-08-17
keywords:
  - group
  - grouping
  - combine spools
  - tags
  - features
  - organise
  - categorise
  - flat list
  - by product
platforms:
  - all
---

When your inventory grows, grouping collapses identical or near-identical spools into a single card with a count, so the list stays readable.

## Grouping modes

There are three modes:

- **Flat list** — every spool shown on its own.
- **Group by product** — combines spools with the same brand, material, product family, name, and color. This is the default.
- **Group by exact match** — also matches remaining weight and status, so only truly identical spools combine.

Switch modes from the **Group** control on the inventory toolbar (desktop) or the **View Options** menu (compact screens). You can also set the default in Settings → Appearance → **Default View** → **Inventory Grouping**, choosing **Flat**, **Product**, or **State**.

Your grouping choice is remembered between sessions. A grouped card shows the total count and a representative weight; tap it to expand and see the individual spools.

A grouped card's menu also has its own **Add another spool** action, which creates new spools from the fields shared across the group rather than a full copy of any one member — see [Add another spool](/docs/inventory/spool-details/#add-another-spool).

## Labeling spools with features

Spool Hoarder does not have a separate tag system for spools. The closest equivalent is the **Features** field on each spool — a free-text line for traits like "glow-in-dark, silk, matte".

The **Features** field is:

- **Searchable** — typing a feature into the search box finds matching spools.
- **Shown on cards** — you can turn it on under [Customizing spool cards](/docs/inventory/customizing-spool-cards/).
- **Editable in bulk** — select several spools and use the batch **Edit** action to set the same features on all of them at once. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/).

You do not need to bulk-edit just to change one spool's features — open that spool and edit its **Features** text directly, the same as any other field. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).

Features are not a filter of their own. To narrow by a trait, type it into search instead.

## How favorites interact with grouping

Favorites are not pinned to the top of the list by default. When you turn on the **Favorites** filter and use a flat list, you can drag your favorited spools into a custom order — see [Favorites and low stock](/docs/inventory/favorites-and-low-stock/) for the details. In any other mode, favorites follow whatever sort you have chosen.

## Related pages

- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)
- [Customizing spool cards](/docs/inventory/customizing-spool-cards/)
- [Favorites and low stock](/docs/inventory/favorites-and-low-stock/)
`;export{e as default};
