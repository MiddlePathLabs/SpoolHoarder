const r=`---\r
title: Low stock alerts\r
description: Set a threshold so you can reorder before a spool runs dry.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - low stock\r
  - running out\r
  - threshold\r
  - reorder\r
  - running low\r
  - low filament warning\r
  - out of filament\r
  - alert\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder flags spools that are about to run out so you can reorder in time.\r
You pick a weight threshold, and any spool that drops below it is marked low stock\r
throughout the app.\r
\r
## Setting the threshold\r
\r
Open **Settings → Preferences** and look for **Low stock warning threshold\r
(grams)**. Pick one of the chips: **50g**, **100g**, **150g**, or **200g**. The\r
default is **100g**.\r
\r
This setting is available to everyone on every platform.\r
\r
## How low stock is decided\r
\r
A spool is low stock when its remaining weight falls below the threshold. There is\r
one twist: the threshold is always compared against 10% of the spool's original\r
size, and the larger of the two wins.\r
\r
In practice:\r
\r
- A **250g** spool with the threshold at **100g** goes low at **100g**, because\r
  100g beats 25g (10% of 250g).\r
- A **1000g** spool with the threshold at **100g** goes low at **100g** — the two\r
  values match.\r
- A **2000g** spool with the threshold at **100g** goes low at **200g**, because\r
  10% of 2000g is larger than your threshold.\r
\r
The rule protects large spools from draining almost dry before the warning fires,\r
while never letting a tiny sample spool slip past your chosen floor.\r
\r
A spool with no remaining weight recorded is never flagged. Once a spool reaches\r
zero it is shown as out of filament rather than low stock.\r
\r
## Where low stock shows up\r
\r
- **Inventory** — low stock spools carry a warning indicator on their cards, and a\r
  **Low Stock** filter narrows the list to just the ones that need attention.\r
- **Stats → Overview** — the **Inventory health** row counts low stock spools, and\r
  the **Needs Attention** list names them.\r
- **Stats → Inventory tab** — a dedicated **Low Stock** attention card lists them,\r
  the summary metric is tappable straight into the filtered inventory, and each\r
  entry can offer a purchase link. Outbound purchase links may be affiliate links,\r
  and Spool Hoarder asks you to confirm before opening one.\r
\r
The detailed Stats views are a Pro feature. The low stock indicator and filter on the\r
Inventory tab itself are available to everyone.\r
\r
## Related pages\r
\r
- [Statistics dashboard](/docs/insights/statistics-dashboard/)\r
- [Understanding your costs](/docs/insights/understanding-your-costs/)\r
- [Share cards](/docs/insights/share-cards/)\r
`;export{r as default};
