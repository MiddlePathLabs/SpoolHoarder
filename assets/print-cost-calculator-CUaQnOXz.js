const e=`---\r
title: Print cost calculator\r
description: Estimate what a planned print will cost before you run it.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - calculator\r
  - cost\r
  - estimate\r
  - price\r
  - quote\r
  - electricity\r
  - depreciation\r
  - markup\r
  - profit\r
  - shipping\r
  - platform fees\r
  - how much will it cost\r
  - price a print\r
platforms:\r
  - all\r
---\r
\r
The Print cost calculator lives on the **Calculator** tab. It estimates what a\r
single print job will cost before you commit to it — filament, power, printer\r
wear, your time, and the business costs you choose to layer on top.\r
\r
Filling in the form changes nothing in your inventory. The estimate is a number\r
on the screen until you act on it. The only action that touches your stock is\r
**Log Print**, which walks you through choosing a project first.\r
\r
## What you put in\r
\r
The form is grouped into cards. Only the printer and the filament weights are\r
essential; everything else refines the estimate.\r
\r
- **Job Setup** — Pick the printer and the spools the print uses, then enter the\r
  **Grams used** for each spool (your slicer reports this after slicing). Add\r
  **Print time (hrs)** and a **Quantity** for batch prints.\r
- **Production Costs** — **Electricity ($/kWh)** and **Printer watts** drive the\r
  power cost. Switch on the advanced rows to add **depreciation** (the printer's\r
  purchase price spread over its lifetime), **labor**, a **Failure rate (%)**\r
  buffer for wasted filament, and a **Markup (%)** for profit.\r
- **Business Expenses** — Optionally add **shipping** (estimated from origin and\r
  destination ZIP codes, or a manual figure), **packaging**, **misc costs**, and\r
  **platform fees** with templates for Etsy, Shopify, and Amazon.\r
\r
Every money field carries its own currency. When your spools are priced in\r
different currencies, the calculator converts them if an exchange rate is\r
available; otherwise it shows one total per currency rather than guess.\r
\r
## What you get back\r
\r
The **Cost Breakdown** — or the **Live Pricing** panel on wide screens — updates\r
as you type. It lists each cost line (Filament, Electricity, Depreciation,\r
Labor, Shipping, Packaging, Platform fees, Failure buffer, and the rest) with a\r
stacked bar showing each one's share, then a **Subtotal**, the **Markup**, and\r
the **Total**. For batch prints, a **Per item** figure divides the total by the\r
quantity.\r
\r
Tap the help icon in the app bar, **How to use this calculator**, for plain-\r
language guidance on every field.\r
\r
## How a printer profile feeds the estimate\r
\r
Picking a printer in **Job Setup** copies that printer's settings into the form —\r
wattage, purchase price, lifetime hours, electricity rate, failure rate, and\r
markup. Anything you leave blank on the printer falls back to the app-wide\r
defaults from **Settings**. There is no separate "overhead multiplier"; the\r
printer simply supplies the real numbers the estimate is built from.\r
\r
See [Printer profiles](/docs/planning/printer-profiles/) to set those values.\r
\r
## What you can do with a result\r
\r
- **Save** — creates a new project from the spools and weights in this estimate.\r
- **Save to Project** — appears when you reach the calculator through **Price\r
  Project** on an existing project. It stores the estimate on that project,\r
  where it shows as the project's **Estimate**.\r
- **Log Print** — records the filament as usage against a project you choose\r
  (your **Personal Log** or any active project) and deducts the weight from each\r
  spool. Use it once the print has actually run.\r
- **Save as defaults** (app bar) — remembers the current cost settings as the\r
  starting point for next time.\r
\r
For the difference between this estimate and the actual cost that builds up as\r
you log usage, see [Project costs](/docs/projects/project-costs/).\r
\r
## Related pages\r
\r
- [Printer profiles](/docs/planning/printer-profiles/)\r
- [Project costs](/docs/projects/project-costs/)\r
- [Logging filament usage](/docs/projects/logging-filament-usage/)\r
- [Creating a project](/docs/projects/creating-a-project/)\r
- [Units, currency, and language](/docs/settings/units-currency-and-language/)\r
`;export{e as default};
