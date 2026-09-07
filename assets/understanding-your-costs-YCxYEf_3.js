const r=`---\r
title: Understanding your costs\r
description: Where the spend numbers come from and how to make them accurate.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - cost\r
  - spend\r
  - price per kg\r
  - money\r
  - budget\r
  - how much did filament cost\r
  - total value\r
  - project cost\r
  - pricing\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder shows two different money pictures, and it helps to know which is\r
which:\r
\r
- **Inventory value** — what your current spool stock cost to buy.\r
- **Project cost** — what the filament you have actually used in prints is worth.\r
\r
Both depend on the prices you enter on your spools. The richer your pricing, the\r
more accurate every number gets.\r
\r
The **Total Value** summary card is available to everyone. The deeper cost views\r
in the **Inventory** and **Projects** tabs are part of the detailed dashboard,\r
which is a Pro feature.\r
\r
## Inventory value\r
\r
**Total Value** appears on the summary cards and again in the **Inventory** tab's\r
summary panel. It is the sum of the purchase price field on every spool you own.\r
\r
What drives it:\r
\r
- Each spool's purchase price and its currency.\r
- A spool with no price contributes nothing — it is simply left out of the total.\r
\r
In the **Inventory** tab, the **Material Profile** section breaks that value down\r
by material (or by variant, with the toggle). For each material you see the spool\r
count, the remaining weight, and the combined value, so you can see where your\r
money is concentrated.\r
\r
### When currencies do not match\r
\r
Spool Hoarder does not convert between currencies. If your spools are priced in\r
more than one currency, money totals and averages show "Conversion unavailable"\r
instead of a misleading number. Price your spools in a single currency to get a\r
clean total.\r
\r
## Project cost (material consumed)\r
\r
The **Projects** tab values the filament that has actually moved through your\r
prints. Each usage log records grams pulled from a spool, and those grams are\r
valued against that spool's price.\r
\r
Two parts of the **Projects** tab surface this:\r
\r
- **Pricing Coverage**, under Project Health, sorts your projects into four\r
  buckets: fully priced, partial, estimate-only, and missing. It tells you at a\r
  glance how trustworthy the cost picture is.\r
- **Usage Momentum** may spotlight your highest-cost project. The card labels the\r
  source of the figure so you know how firm it is: **Actual**, **Partial actual**,\r
  **Saved**, or **Estimate**.\r
\r
The source label follows a priority order:\r
\r
1. **Actual** — real usage logs valued against spool prices.\r
2. **Partial actual** — some usage logs could not be priced, usually because a\r
   spool is missing its price.\r
3. **Saved** — a cost you entered manually on the project.\r
4. **Estimate** — derived from planned or required weight rather than actual\r
   usage.\r
\r
## Why a cost looks wrong or missing\r
\r
Almost every cost gap traces back to one of these:\r
\r
- **A spool has no price.** That spool drops out of inventory value, and any usage\r
  logged against it turns a project's cost partial or leaves it unpriced. Add the\r
  purchase price on the spool to fix both at once.\r
- **Prices are in mixed currencies.** Totals and averages show "Conversion\r
  unavailable." Pick one currency for your inventory.\r
- **A project has no usage logs.** Without logged grams there is nothing to value,\r
  so the project shows as missing or estimate-only until you record actual usage.\r
\r
## Related pages\r
\r
- [Statistics dashboard](/docs/insights/statistics-dashboard/)\r
- [Low stock alerts](/docs/insights/low-stock-alerts/)\r
- [Share cards](/docs/insights/share-cards/)\r
`;export{r as default};
