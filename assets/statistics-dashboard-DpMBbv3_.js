const e=`---
title: Statistics dashboard
description: Read the summary cards, tabs, and charts on the Stats tab.
order: 1
status: published
updated: 2026-08-26
keywords:
  - stats
  - statistics
  - dashboard
  - charts
  - overview
  - insights
  - analytics
  - how much filament do i have
  - inventory summary
  - total value
platforms:
  - all
---

The Stats tab rolls your whole inventory and project history into one dashboard.
Open it from the Stats tab (the fourth tab). The screen is titled **Statistics**,
and a share button in the top corner lets you post an inventory snapshot — see
[Share cards](/docs/insights/share-cards/).

If you have no spools yet, the tab shows an empty state with a link to add your
first one.

## Summary cards

A row of cards sits at the top and covers the basics:

- **Total Spools** — every spool in your inventory, active and empty.
- **Active** — spools that still have filament on them.
- **Empty** — spools marked depleted.
- **Total Value** — the combined purchase price of your current stock. If your
  spools are priced in more than one currency, this shows "Conversion unavailable"
  because Spool Hoarder does not convert between currencies.
- **Total Remaining Weight** — the filament still sitting on your active spools.

These cards are available to everyone, including the free tier.

## The detailed tabs

Below the summary cards, the dashboard splits into tabs: **Overview**,
**Inventory**, **Projects**, **Library** (on wide layouts), and **Printers**.

These tabs are a premium feature. An active trial unlocks them just as a paid Pro
subscription does; on the free tier you see the summary cards and an upgrade
prompt where the tabs would be. See
[Free tier, trial, and limits](/docs/account/free-trial-and-limits/).

### Overview

A quick health check for your whole setup.

- **Inventory health** — active spools, low stock, empty spools, missing
  locations, spools not loaded on a printer, and active projects.
- **Needs Attention** — specific spools that are low, missing a location, missing
  a technical profile, or missing a dry record, each with a link into the matching
  filtered inventory view.
- **What Changed** — recent movements across inventory, projects, library, and
  equipment.
- **Recent Activity** — the latest additions and usage logs.

### Inventory

The deepest view of your filament stock.

- **Summary** — totals plus low stock and printer-loading counts.
- **Needs Attention** — cards for low stock, missing locations, missing technical
  profiles, and opened spools with no dry history.
- **System Readiness** — how completely you have adopted locations, printer
  assignments, technical profiles, and dry history tracking.
- **Inventory Lifecycle** — average age, opened versus unopened counts, and your
  oldest spool.
- **Traits** — favorites, refills, special finishes, and classification tags.
- **Material Profile** — weight and value broken down by material, with a toggle
  to switch to the variant view.
- **Distribution** — color families, top brands, and top storage locations. Tap a
  brand or color family to open a drill-down of the matching spools.
- **Left Inventory** — the exit ledger. It appears only once something has actually
  left your inventory, and covers how spools left (sold, gifted, discarded), what
  the sales brought in against what those spools cost, the value you gave away or
  wrote off, and the average filament still on a spool when it left. Sales with no
  recorded amount are called out separately, with a link to fill them in, because
  they sit outside every money figure here. Each card opens the matching filtered
  inventory.

### Projects

Project throughput and the filament flowing through it.

- **Project Health** — work status, print history, library links, pricing
  coverage, and printer context, each flagging what is missing.
- **Usage Momentum** — once you have at least three months of recorded usage, a
  monthly trend chart appears alongside a breakdown of material consumed. With
  less history, a current-usage summary and a spotlight on your most active
  project stand in.
- **Recent Activity** — the latest project usage logs.

### Printers

How well your equipment profiles are set up.

- **Readiness** and **Needs Attention** — profile coverage, overdue maintenance,
  incomplete pricing, missing failure rates, and spools not assigned to printers.
- **Economics Coverage** — spotlights for highest base cost per hour, maintenance
  watch, and most utilized printer.
- **Profiles**, **Maintenance**, **Pricing**, and **Failure Context** cards
  summarize how completely each printer is configured for the cost calculator.

### Library

This tab only appears on supported desktop builds where the Print Library is
available. It covers library status, needs attention, health, workflow queues,
library activity, and model spotlights. On compact platforms the tab is hidden
entirely.

## Filters and scope

The tabs split the dashboard into focused areas, but there is no date-range
filter. Every number reflects your full inventory and entire project history.

Two things work like filters:

- The tabs themselves segment the view.
- The Material/Variant toggle in the **Inventory** tab switches the material
  breakdown between raw materials and specific variants.

Many cards and rows are tappable. Brand rows, color families, attention cards,
and summary metrics jump to a filtered inventory or a drill-down so you can act
on what the chart is telling you.

## Related pages

- [Understanding your costs](/docs/insights/understanding-your-costs/)
- [Low stock alerts](/docs/insights/low-stock-alerts/)
- [Share cards](/docs/insights/share-cards/)
`;export{e as default};
