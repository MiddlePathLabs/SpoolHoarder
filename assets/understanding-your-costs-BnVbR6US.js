const e=`---
title: Understanding your costs
description: Where the spend numbers come from and how to make them accurate.
order: 2
status: published
updated: 2026-08-04
keywords:
  - cost
  - spend
  - price per kg
  - money
  - budget
  - how much did filament cost
  - total value
  - project cost
  - pricing
platforms:
  - all
---

Spool Hoarder shows two different money pictures, and it helps to know which is
which:

- **Inventory value** — what your current spool stock cost to buy.
- **Project cost** — what the filament you have actually used in prints is worth.

Both depend on the prices you enter on your spools. The richer your pricing, the
more accurate every number gets.

The **Total Value** summary card is available to everyone. The deeper cost views
in the **Inventory** and **Projects** tabs are part of the detailed dashboard,
which is a Pro feature on iPhone, iPad, Mac, Windows, and Android, and free on
the web and Linux.

## Inventory value

**Total Value** appears on the summary cards and again in the **Inventory** tab's
summary panel. It is the sum of the purchase price field on every spool you own.

What drives it:

- Each spool's purchase price and its currency.
- A spool with no price contributes nothing — it is simply left out of the total.

In the **Inventory** tab, the **Material Profile** section breaks that value down
by material (or by variant, with the toggle). For each material you see the spool
count, the remaining weight, and the combined value, so you can see where your
money is concentrated.

### When currencies do not match

Spool Hoarder does not convert between currencies. If your spools are priced in
more than one currency, money totals and averages show "Conversion unavailable"
instead of a misleading number. Price your spools in a single currency to get a
clean total.

## Project cost (material consumed)

The **Projects** tab values the filament that has actually moved through your
prints. Each usage log records grams pulled from a spool, and those grams are
valued against that spool's price.

Two parts of the **Projects** tab surface this:

- **Pricing Coverage**, under Project Health, sorts your projects into four
  buckets: fully priced, partial, estimate-only, and missing. It tells you at a
  glance how trustworthy the cost picture is.
- **Usage Momentum** may spotlight your highest-cost project. The card labels the
  source of the figure so you know how firm it is: **Actual**, **Partial actual**,
  **Saved**, or **Estimate**.

The source label follows a priority order:

1. **Actual** — real usage logs valued against spool prices.
2. **Partial actual** — some usage logs could not be priced, usually because a
   spool is missing its price.
3. **Saved** — a cost you entered manually on the project.
4. **Estimate** — derived from planned or required weight rather than actual
   usage.

## Why a cost looks wrong or missing

Almost every cost gap traces back to one of these:

- **A spool has no price.** That spool drops out of inventory value, and any usage
  logged against it turns a project's cost partial or leaves it unpriced. Add the
  purchase price on the spool to fix both at once.
- **Prices are in mixed currencies.** Totals and averages show "Conversion
  unavailable." Pick one currency for your inventory.
- **A project has no usage logs.** Without logged grams there is nothing to value,
  so the project shows as missing or estimate-only until you record actual usage.

## Related pages

- [Statistics dashboard](/docs/insights/statistics-dashboard/)
- [Low stock alerts](/docs/insights/low-stock-alerts/)
- [Share cards](/docs/insights/share-cards/)
`;export{e as default};
