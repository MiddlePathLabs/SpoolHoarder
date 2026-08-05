const e=`---
title: Search, filter, and sort
description: Find the spool you need in a large inventory using search, filters, and sort orders.
order: 4
status: published
updated: 2026-08-04
keywords:
  - search
  - find spool
  - filter
  - sort
  - sort by remaining
  - sort by price
  - low stock filter
  - by material
  - by brand
platforms:
  - all
---

The toolbar at the top of the inventory list has three tools for narrowing a large collection down: **Search**, **Filter**, and **Sort**.

## Search

Type into the **Search spools** field to match against brand, material, product name, colour and colour family, product family, features, notes, and inventory location. Multiple words use AND matching — every word must appear somewhere on the spool.

Search does not match barcodes, prices, or spool IDs.

There is one special case: type a hex colour code like \`#59E9FF\` and Spool Hoarder switches to visual colour matching, ranking your spools by how close their colour is to the one you typed, closest first.

## Filter

Tap the **Filter** button to open the **Filter Inventory** sheet. Filters are grouped into sections:

- **Status** — **Active Only** (hide empties), **Empty Only**, **Favorites**, and **In Active Projects**.
- **Needs Attention** — **Low Stock**, **Missing Printer Assignment**, **Missing Location**, **Missing Technical Settings**, **Missing Dry History**, and **Missing Price**. Pick one at a time to find spools that need a look.
- **Material Category** — PLA, PETG, Engineering, Flexible, Support, Specialty, and Other, each with a count.
- **Material**, **Brand**, **Product Family**, and **Color Family** — pick any number of values within each. Each chip shows how many spools match.
- **Diameter** — choose one diameter.
- **Color match** — type a hex colour to filter visually by closest colours.

Filters combine with AND across sections, and within a section you can select several values (any of which matches). The filter button shows a count of how many filters are active.

Use **Reset all filters** inside the sheet, or the **Clear Filters** pill above the list, to start fresh.

## Sort

Tap the **Sort** button to open the **Sort Inventory** sheet. The sort orders available are:

- **Date Added**
- **Remaining Weight**
- **Brand**
- **Material**
- **Color Family**
- **Price**
- **Count**

The default is **Date Added**, newest first. Tap the selected option again to flip between ascending and descending. Regardless of which sort you choose, spools that are not empty always appear above depleted ones.

On desktop, you can also sort by clicking any column header in the table view, which exposes a few extra fields such as nozzle temperature and location.

### What persists

Your **grouping** choice persists between sessions (see [Grouping and tags](/docs/inventory/grouping-and-tags/)). Your search query, filters, and sort order reset each time you restart the app — they apply for the current session only.

## Related pages

- [Grouping and tags](/docs/inventory/grouping-and-tags/)
- [Multi-select and batch actions](/docs/inventory/multi-select-actions/)
- [Customising spool cards](/docs/inventory/customizing-spool-cards/)
`;export{e as default};
