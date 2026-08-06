const o=`---
title: Favorites and low stock
description: Pin the spools you reach for most, and get warned before you run out.
order: 9
status: published
updated: 2026-08-04
keywords:
  - favourite
  - favorite
  - star a spool
  - low stock
  - running out
  - threshold
  - warning
  - running low
  - reorder favorites
platforms:
  - all
---

Two small features make a big inventory easier to manage: favorites let you pin the spools you reach for most, and low-stock warnings flag the ones about to run out.

## Favorites

Tap the star on any spool card (or the heart on the spool detail screen) to favorite it. The flag is the same either way — tap again to remove it.

Favorites surface in a few places:

- A **Favorites** filter chip in the filter sheet, to show only the spools you have pinned.
- A favorites count on the Stats tab.
- A custom drag order, when you want to arrange your pinned spools by hand.

### Rearranging favorites by hand

You can drag favorited spools into your own order when all of these are true: the **Favorites** filter is on, the list is **Flat** (not grouped), you are not in compact list mode, and selection mode is off. A **Drag to reorder favorites** hint appears when this is available. Your custom order is remembered between sessions.

In any other mode — grouped, sorted by something other than date added, or on the compact list — favorites follow the sort you have chosen.

## Low stock

Spool Hoarder flags spools that are running low so you can reorder in time. A **Low stock** badge appears on the card, a warning pill shows on the spool detail screen, and the Stats tab counts them and offers a **View in Inventory** shortcut. There is also a **Low Stock** option under the **Needs Attention** filters to list only the affected spools.

Low stock does not send notifications — it is purely an in-app indicator.

### Setting the threshold

Open Settings → Preferences and find the low-stock setting. You pick from four thresholds: **50g**, **100g**, **150g**, or **200g**. The default is 100g.

A spool counts as low stock when its remaining weight falls below your chosen threshold **or** below 10% of its spool size, whichever is the larger cut-off. So a 1000g spool with the 50g threshold still warns at 100g (10% of 1000), while a 200g spool warns at 50g.

Low stock is available to everyone on every platform.

## Related pages

- [The spool detail screen](/docs/inventory/spool-details/)
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
`;export{o as default};
