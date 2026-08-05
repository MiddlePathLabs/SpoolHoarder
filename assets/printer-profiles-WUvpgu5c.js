const e=`---
title: Printer profiles
description: Describe each printer so cost estimates use its real power, price, and waste rate.
order: 2
status: published
updated: 2026-08-04
keywords:
  - printer
  - profile
  - equipment
  - wattage
  - depreciation
  - maintenance
  - failure rate
  - markup
  - overhead
  - loaded spool
  - add printer
platforms:
  - all
---

A printer profile holds the numbers that make a cost estimate match your actual
machine — its power draw, purchase price, expected lifetime, electricity rate,
and the failure and markup rates you want to apply. Find it under
**Settings → Equipment**.

You can add as many printers as you need. On iPhone, iPad, Mac, Android, and
Windows the free tier is capped at **1 printer profile**; the trial and Pro
subscriptions lift that cap. The web app is unlimited. See
[Free tier, trial, and limits](/docs/account/free-trial-and-limits/).

## What a profile stores

Each profile keeps:

- **Name**, **Manufacturer**, and **Model**, so you can tell printers apart.
- **Wattage (W)**, **Purchase Price**, and **Lifetime Hours** — used to work out
  power cost and depreciation.
- **Electricity Rate** — your local per-kWh price.
- **Failure Rate (%)** and **Markup (%)** — optional per-printer overrides of the
  app-wide defaults.
- **Maintenance Interval (hours)** and free-form **Notes**.

When you add a printer, the **Preset Printer** list can pre-fill the
manufacturer, model, wattage, and price for common machines. Everything it fills
stays editable.

## How to pick the cost numbers

There is no single "overhead factor". The estimate is built from real inputs, so
set them to match your real world:

- **Failure Rate** — the share of prints that fail on average. A typical starting
  point is 5–10%. Once you have logged enough prints, Spool Hoarder can estimate
  this from your own usage history and show that figure as a hint when you edit
  the printer.
- **Markup** — your profit margin on top of all costs. Leave it at 0 for personal
  prints; use 20–40% when you are selling.
- **Lifetime Hours** — how long you expect the printer to last before major
  service or replacement. 3,000 hours is a hobbyist baseline; 5,000 or more
  suits a workhorse.

Leave **Failure Rate** or **Markup** blank on the printer to inherit the app-wide
defaults from **Settings**, and override them here only when one machine behaves
differently from the rest.

## Maintenance tracking

Set a **Maintenance Interval** and the printer records its total print hours
against it. A profile shows a progress bar toward the next service, flags **DUE**
when you cross the interval, and offers **Mark Maintenance Done** to log what you
did and reset the clock. The Equipment list badges any machine that is overdue.

## Linking spools to a printer

A spool carries a **Loaded on** value showing which machine it currently sits on.
Set it from the spool's detail screen; the printer's profile then lists those
spools under **Loaded spools**. Removing a printer clears the link on every spool
that referenced it.

The loaded-printer link is device-specific. It is not part of the spool
[CSV export](/docs/data/exporting-your-data/), but it does travel with
[cloud sync](/docs/data/cloud-sync/).

## Related pages

- [Print cost calculator](/docs/planning/print-cost-calculator/)
- [Adding a spool](/docs/inventory/adding-a-spool/)
- [Free tier, trial, and limits](/docs/account/free-trial-and-limits/)
- [Exporting your data](/docs/data/exporting-your-data/)
`;export{e as default};
