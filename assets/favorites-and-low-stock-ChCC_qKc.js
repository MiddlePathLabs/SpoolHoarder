const o=`---\r
title: Favorites and low stock\r
description: Pin the spools you reach for most, and get warned before you run out.\r
order: 9\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - favourite\r
  - favorite\r
  - star a spool\r
  - low stock\r
  - running out\r
  - threshold\r
  - warning\r
  - running low\r
  - reorder favorites\r
platforms:\r
  - all\r
---\r
\r
Two small features make a big inventory easier to manage: favorites let you pin the spools you reach for most, and low-stock warnings flag the ones about to run out.\r
\r
## Favorites\r
\r
Tap the star on any spool card (or the heart on the spool detail screen) to favorite it. The flag is the same either way — tap again to remove it.\r
\r
Favorites surface in a few places:\r
\r
- A **Favorites** filter chip in the filter sheet, to show only the spools you have pinned.\r
- A favorites count on the Stats tab.\r
- A custom drag order, when you want to arrange your pinned spools by hand.\r
\r
### Rearranging favorites by hand\r
\r
You can drag favorited spools into your own order when all of these are true: the **Favorites** filter is on, the list is **Flat** (not grouped), you are not in compact list mode, and selection mode is off. A **Drag to reorder favorites** hint appears when this is available. Your custom order is remembered between sessions.\r
\r
In any other mode — grouped, sorted by something other than date added, or on the compact list — favorites follow the sort you have chosen.\r
\r
## Low stock\r
\r
Spool Hoarder flags spools that are running low so you can reorder in time. A **Low stock** badge appears on the card, a warning pill shows on the spool detail screen, and the Stats tab counts them and offers a **View in Inventory** shortcut. There is also a **Low Stock** option under the **Needs Attention** filters to list only the affected spools.\r
\r
Low stock does not send notifications — it is purely an in-app indicator.\r
\r
### Setting the threshold\r
\r
Open Settings → Preferences and find the low-stock setting. You pick from four thresholds: **50g**, **100g**, **150g**, or **200g**. The default is 100g.\r
\r
A spool counts as low stock when its remaining weight falls below your chosen threshold **or** below 10% of its spool size, whichever is the larger cut-off. So a 1000g spool with the 50g threshold still warns at 100g (10% of 1000), while a 200g spool warns at 50g.\r
\r
Low stock is available to everyone on every platform.\r
\r
## Related pages\r
\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
`;export{o as default};
