const r=`---\r
title: Printer profiles\r
description: Describe each printer so cost estimates use its real power, price, and waste rate.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - printer\r
  - profile\r
  - equipment\r
  - wattage\r
  - depreciation\r
  - maintenance\r
  - failure rate\r
  - markup\r
  - overhead\r
  - loaded spool\r
  - add printer\r
platforms:\r
  - all\r
---\r
\r
A printer profile holds the numbers that make a cost estimate match your actual\r
machine — its power draw, purchase price, expected lifetime, electricity rate,\r
and the failure and markup rates you want to apply. Find it under\r
**Settings → Equipment**.\r
\r
You can add as many printers as you need. The free tier is capped at **1 printer\r
profile**; the trial and Pro subscriptions lift that cap. See\r
[Free tier, trial, and limits](/docs/account/free-trial-and-limits/).\r
\r
## What a profile stores\r
\r
Each profile keeps:\r
\r
- **Name**, **Manufacturer**, and **Model**, so you can tell printers apart.\r
- **Wattage (W)**, **Purchase Price**, and **Lifetime Hours** — used to work out\r
  power cost and depreciation.\r
- **Electricity Rate** — your local per-kWh price.\r
- **Failure Rate (%)** and **Markup (%)** — optional per-printer overrides of the\r
  app-wide defaults.\r
- **Maintenance Interval (hours)** and free-form **Notes**.\r
\r
When you add a printer, the **Preset Printer** list can pre-fill the\r
manufacturer, model, wattage, and price for common machines. Everything it fills\r
stays editable.\r
\r
## How to pick the cost numbers\r
\r
There is no single "overhead factor". The estimate is built from real inputs, so\r
set them to match your real world:\r
\r
- **Failure Rate** — the share of prints that fail on average. A typical starting\r
  point is 5–10%. Once you have logged enough prints, Spool Hoarder can estimate\r
  this from your own usage history and show that figure as a hint when you edit\r
  the printer.\r
- **Markup** — your profit margin on top of all costs. Leave it at 0 for personal\r
  prints; use 20–40% when you are selling.\r
- **Lifetime Hours** — how long you expect the printer to last before major\r
  service or replacement. 3,000 hours is a hobbyist baseline; 5,000 or more\r
  suits a workhorse.\r
\r
Leave **Failure Rate** or **Markup** blank on the printer to inherit the app-wide\r
defaults from **Settings**, and override them here only when one machine behaves\r
differently from the rest.\r
\r
## Maintenance tracking\r
\r
Set a **Maintenance Interval** and the printer records its total print hours\r
against it. A profile shows a progress bar toward the next service, flags **DUE**\r
when you cross the interval, and offers **Mark Maintenance Done** to log what you\r
did and reset the clock. The Equipment list badges any machine that is overdue.\r
\r
## Linking spools to a printer\r
\r
A spool carries a **Loaded on** value showing which machine it currently sits on.\r
Set it from the spool's detail screen; the printer's profile then lists those\r
spools under **Loaded spools**. Removing a printer clears the link on every spool\r
that referenced it.\r
\r
The loaded-printer link is device-specific. It is not part of the spool\r
[CSV export](/docs/data/exporting-your-data/), but it does travel with\r
[cloud sync](/docs/data/cloud-sync/).\r
\r
## Related pages\r
\r
- [Print cost calculator](/docs/planning/print-cost-calculator/)\r
- [Adding a spool](/docs/inventory/adding-a-spool/)\r
- [Free tier, trial, and limits](/docs/account/free-trial-and-limits/)\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
`;export{r as default};
