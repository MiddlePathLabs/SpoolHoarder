const e=`---\r
title: Importing from an order confirmation\r
description: Paste a shop order email and let Spool Hoarder pull the spools out of it.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - order\r
  - receipt\r
  - email\r
  - paste\r
  - purchase\r
  - import order\r
  - invoice\r
  - confirmation\r
  - buy spools\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
If you just bought a batch of filament, paste the order confirmation email into\r
Spool Hoarder and it extracts the filament line items for you. Nothing is saved\r
to your inventory until you review it.\r
\r
Open **Settings → Data & Backup → Import Order** to start.\r
\r
## What you paste, and what comes out\r
\r
Paste the order email, checkout confirmation, or retailer order details into the\r
text box. Include the product lines, quantities, and any visible variant names;\r
shipping, tax, and discount lines can stay in the text — the parser ignores\r
them.\r
\r
Spool Hoarder uses AI to read the pasted text and returns one line item per\r
filament it recognizes, with:\r
\r
- brand, material, color, and product name\r
- spool size, quantity, unit price, and line price\r
- retailer, order date, and currency when available\r
- a confidence flag and per-item warnings where the reading is uncertain\r
\r
The paste needs to be at least 20 characters, otherwise Spool Hoarder asks you to\r
paste a fuller confirmation before it will parse.\r
\r
## Credits\r
\r
Each parse costs **1 AI credit**. Your current balance is shown on the same\r
screen as "N credits remaining". Credits come with a Pro subscription (20 per\r
month) and the free trial (5 credits), and you can top up with a credit pack.\r
\r
Parsing a new order always costs a credit. Re-opening an order you already\r
parsed — via **Resume Review** — does **not** cost another credit, so you can\r
step away and come back to it freely.\r
\r
Because AI can make mistakes, review every item before saving.\r
\r
## Review before you save\r
\r
The review screen lists every extracted item. Anything that needs your attention\r
is highlighted:\r
\r
- **Missing info** — brand and material are required, so an item missing either\r
  blocks the save until you fill them in.\r
- **Low confidence** — the parser was uncertain about the reading.\r
- **Warnings** — a specific field looks questionable.\r
\r
For each item you can:\r
\r
- **Edit** brand, material, name, color, spool size, quantity, unit price, and\r
  purchase source. As you type, Spool Hoarder suggests catalog matches for empty\r
  fields.\r
- **Change quantity** with the +/− stepper (1 to 999).\r
- **Remove** an item entirely.\r
\r
Lines the parser deliberately excluded (shipping, tax, non-filament products)\r
are listed under **Excluded Lines** with the reason, so you can confirm nothing\r
was dropped by mistake.\r
\r
## Saving to inventory\r
\r
When everything looks right, tap **Save N Spools**. Spool Hoarder creates the\r
spools, applies catalog enrichment, and records the order details. If your\r
free-tier limit would be exceeded by the new spools, you will be offered an\r
upgrade prompt instead. On success you land on the inventory tab.\r
\r
## Related pages\r
\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [Importing from other apps](/docs/data/importing-from-other-apps/)\r
`;export{e as default};
