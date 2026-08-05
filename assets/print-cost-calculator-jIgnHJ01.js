const e=`---
title: Print cost calculator
description: Estimate what a planned print will cost before you run it.
order: 1
status: published
updated: 2026-08-04
keywords:
  - calculator
  - cost
  - estimate
  - price
  - quote
  - electricity
  - depreciation
  - markup
  - profit
  - shipping
  - platform fees
  - how much will it cost
  - price a print
platforms:
  - all
---

The Print cost calculator lives on the **Calculator** tab. It estimates what a
single print job will cost before you commit to it — filament, power, printer
wear, your time, and the business costs you choose to layer on top.

Filling in the form changes nothing in your inventory. The estimate is a number
on the screen until you act on it. The only action that touches your stock is
**Log Print**, which walks you through choosing a project first.

## What you put in

The form is grouped into cards. Only the printer and the filament weights are
essential; everything else refines the estimate.

- **Job Setup** — Pick the printer and the spools the print uses, then enter the
  **Grams used** for each spool (your slicer reports this after slicing). Add
  **Print time (hrs)** and a **Quantity** for batch prints.
- **Production Costs** — **Electricity ($/kWh)** and **Printer watts** drive the
  power cost. Switch on the advanced rows to add **depreciation** (the printer's
  purchase price spread over its lifetime), **labour**, a **Failure rate (%)**
  buffer for wasted filament, and a **Markup (%)** for profit.
- **Business Expenses** — Optionally add **shipping** (estimated from origin and
  destination ZIP codes, or a manual figure), **packaging**, **misc costs**, and
  **platform fees** with templates for Etsy, Shopify, and Amazon.

Every money field carries its own currency. When your spools are priced in
different currencies, the calculator converts them if an exchange rate is
available; otherwise it shows one total per currency rather than guess.

## What you get back

The **Cost Breakdown** — or the **Live Pricing** panel on wide screens — updates
as you type. It lists each cost line (Filament, Electricity, Depreciation,
Labour, Shipping, Packaging, Platform fees, Failure buffer, and the rest) with a
stacked bar showing each one's share, then a **Subtotal**, the **Markup**, and
the **Total**. For batch prints, a **Per item** figure divides the total by the
quantity.

Tap the help icon in the app bar, **How to use this calculator**, for plain-
language guidance on every field.

## How a printer profile feeds the estimate

Picking a printer in **Job Setup** copies that printer's settings into the form —
wattage, purchase price, lifetime hours, electricity rate, failure rate, and
markup. Anything you leave blank on the printer falls back to the app-wide
defaults from **Settings**. There is no separate "overhead multiplier"; the
printer simply supplies the real numbers the estimate is built from.

See [Printer profiles](/docs/planning/printer-profiles/) to set those values.

## What you can do with a result

- **Save** — creates a new project from the spools and weights in this estimate.
- **Save to Project** — appears when you reach the calculator through **Price
  Project** on an existing project. It stores the estimate on that project,
  where it shows as the project's **Estimate**.
- **Log Print** — records the filament as usage against a project you choose
  (your **Personal Log** or any active project) and deducts the weight from each
  spool. Use it once the print has actually run.
- **Save as defaults** (app bar) — remembers the current cost settings as the
  starting point for next time.

For the difference between this estimate and the actual cost that builds up as
you log usage, see [Project costs](/docs/projects/project-costs/).

## Related pages

- [Printer profiles](/docs/planning/printer-profiles/)
- [Project costs](/docs/projects/project-costs/)
- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Creating a project](/docs/projects/creating-a-project/)
- [Units, currency, and language](/docs/settings/units-currency-and-language/)
`;export{e as default};
