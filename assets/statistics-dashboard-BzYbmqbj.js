const r=`---\r
title: Statistics dashboard\r
description: Read the summary cards, tabs, and charts on the Stats tab.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - stats\r
  - statistics\r
  - dashboard\r
  - charts\r
  - overview\r
  - insights\r
  - analytics\r
  - how much filament do i have\r
  - inventory summary\r
  - total value\r
platforms:\r
  - all\r
---\r
\r
The Stats tab rolls your whole inventory and project history into one dashboard.\r
Open it from the Stats tab (the fourth tab). The screen is titled **Statistics**,\r
and a share button in the top corner lets you post an inventory snapshot — see\r
[Share cards](/docs/insights/share-cards/).\r
\r
If you have no spools yet, the tab shows an empty state with a link to add your\r
first one.\r
\r
## Summary cards\r
\r
A row of cards sits at the top and covers the basics:\r
\r
- **Total Spools** — every spool in your inventory, active and empty.\r
- **Active** — spools that still have filament on them.\r
- **Empty** — spools marked depleted.\r
- **Total Value** — the combined purchase price of your current stock. If your\r
  spools are priced in more than one currency, this shows "Conversion unavailable"\r
  because Spool Hoarder does not convert between currencies.\r
- **Total Remaining Weight** — the filament still sitting on your active spools.\r
\r
These cards are available to everyone, including the free tier.\r
\r
## The detailed tabs\r
\r
Below the summary cards, the dashboard splits into tabs: **Overview**,\r
**Inventory**, **Projects**, **Library** (on wide layouts), and **Printers**.\r
\r
These tabs are a premium feature. An active trial unlocks them just as a paid Pro\r
subscription does; on the free tier you see the summary cards and an upgrade\r
prompt where the tabs would be. See\r
[Free tier, trial, and limits](/docs/account/free-trial-and-limits/).\r
\r
### Overview\r
\r
A quick health check for your whole setup.\r
\r
- **Inventory health** — active spools, low stock, empty spools, missing\r
  locations, spools not loaded on a printer, and active projects.\r
- **Needs Attention** — specific spools that are low, missing a location, missing\r
  a technical profile, or missing a dry record, each with a link into the matching\r
  filtered inventory view.\r
- **What Changed** — recent movements across inventory, projects, library, and\r
  equipment.\r
- **Recent Activity** — the latest additions and usage logs.\r
\r
### Inventory\r
\r
The deepest view of your filament stock.\r
\r
- **Summary** — totals plus low stock and printer-loading counts.\r
- **Needs Attention** — cards for low stock, missing locations, missing technical\r
  profiles, and opened spools with no dry history.\r
- **System Readiness** — how completely you have adopted locations, printer\r
  assignments, technical profiles, and dry history tracking.\r
- **Inventory Lifecycle** — average age, opened versus unopened counts, and your\r
  oldest spool.\r
- **Traits** — favorites, refills, special finishes, and classification tags.\r
- **Material Profile** — weight and value broken down by material, with a toggle\r
  to switch to the variant view.\r
- **Distribution** — color families, top brands, and top storage locations. Tap a\r
  brand or color family to open a drill-down of the matching spools.\r
\r
### Projects\r
\r
Project throughput and the filament flowing through it.\r
\r
- **Project Health** — work status, print history, library links, pricing\r
  coverage, and printer context, each flagging what is missing.\r
- **Usage Momentum** — once you have at least three months of recorded usage, a\r
  monthly trend chart appears alongside a breakdown of material consumed. With\r
  less history, a current-usage summary and a spotlight on your most active\r
  project stand in.\r
- **Recent Activity** — the latest project usage logs.\r
\r
### Printers\r
\r
How well your equipment profiles are set up.\r
\r
- **Readiness** and **Needs Attention** — profile coverage, overdue maintenance,\r
  incomplete pricing, missing failure rates, and spools not assigned to printers.\r
- **Economics Coverage** — spotlights for highest base cost per hour, maintenance\r
  watch, and most utilized printer.\r
- **Profiles**, **Maintenance**, **Pricing**, and **Failure Context** cards\r
  summarize how completely each printer is configured for the cost calculator.\r
\r
### Library\r
\r
This tab only appears on supported desktop builds where the Print Library is\r
available. It covers library status, needs attention, health, workflow queues,\r
library activity, and model spotlights. On compact platforms the tab is hidden\r
entirely.\r
\r
## Filters and scope\r
\r
The tabs split the dashboard into focused areas, but there is no date-range\r
filter. Every number reflects your full inventory and entire project history.\r
\r
Two things work like filters:\r
\r
- The tabs themselves segment the view.\r
- The Material/Variant toggle in the **Inventory** tab switches the material\r
  breakdown between raw materials and specific variants.\r
\r
Many cards and rows are tappable. Brand rows, color families, attention cards,\r
and summary metrics jump to a filtered inventory or a drill-down so you can act\r
on what the chart is telling you.\r
\r
## Related pages\r
\r
- [Understanding your costs](/docs/insights/understanding-your-costs/)\r
- [Low stock alerts](/docs/insights/low-stock-alerts/)\r
- [Share cards](/docs/insights/share-cards/)\r
`;export{r as default};
