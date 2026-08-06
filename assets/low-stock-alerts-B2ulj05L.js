const e=`---
title: Low stock alerts
description: Set a threshold so you can reorder before a spool runs dry.
order: 3
status: published
updated: 2026-08-04
keywords:
  - low stock
  - running out
  - threshold
  - reorder
  - running low
  - low filament warning
  - out of filament
  - alert
platforms:
  - all
---

Spool Hoarder flags spools that are about to run out so you can reorder in time.
You pick a weight threshold, and any spool that drops below it is marked low stock
throughout the app.

## Setting the threshold

Open **Settings → Preferences** and look for **Low stock warning threshold
(grams)**. Pick one of the chips: **50g**, **100g**, **150g**, or **200g**. The
default is **100g**.

This setting is available to everyone on every platform.

## How low stock is decided

A spool is low stock when its remaining weight falls below the threshold. There is
one twist: the threshold is always compared against 10% of the spool's original
size, and the larger of the two wins.

In practice:

- A **250g** spool with the threshold at **100g** goes low at **100g**, because
  100g beats 25g (10% of 250g).
- A **1000g** spool with the threshold at **100g** goes low at **100g** — the two
  values match.
- A **2000g** spool with the threshold at **100g** goes low at **200g**, because
  10% of 2000g is larger than your threshold.

The rule protects large spools from draining almost dry before the warning fires,
while never letting a tiny sample spool slip past your chosen floor.

A spool with no remaining weight recorded is never flagged. Once a spool reaches
zero it is shown as out of filament rather than low stock.

## Where low stock shows up

- **Inventory** — low stock spools carry a warning indicator on their cards, and a
  **Low Stock** filter narrows the list to just the ones that need attention.
- **Stats → Overview** — the **Inventory health** row counts low stock spools, and
  the **Needs Attention** list names them.
- **Stats → Inventory tab** — a dedicated **Low Stock** attention card lists them,
  the summary metric is tappable straight into the filtered inventory, and each
  entry can offer a purchase link. Outbound purchase links may be affiliate links,
  and Spool Hoarder asks you to confirm before opening one.

The detailed Stats views are a Pro feature. The low stock indicator and filter on the
Inventory tab itself are available to everyone.

## Related pages

- [Statistics dashboard](/docs/insights/statistics-dashboard/)
- [Understanding your costs](/docs/insights/understanding-your-costs/)
- [Share cards](/docs/insights/share-cards/)
`;export{e as default};
