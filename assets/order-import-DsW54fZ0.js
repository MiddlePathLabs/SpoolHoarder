const e=`---
title: Importing from an order confirmation
description: Paste a shop order email and let Spool Hoarder pull the spools out of it.
order: 3
status: published
updated: 2026-08-04
keywords:
  - order
  - receipt
  - email
  - paste
  - purchase
  - import order
  - invoice
  - confirmation
  - buy spools
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

If you just bought a batch of filament, paste the order confirmation email into
Spool Hoarder and it extracts the filament line items for you. Nothing is saved
to your inventory until you review it.

Open **Settings → Data & Backup → Import Order** to start. This is not available
in the web app.

## What you paste, and what comes out

Paste the order email, checkout confirmation, or retailer order details into the
text box. Include the product lines, quantities, and any visible variant names;
shipping, tax, and discount lines can stay in the text — the parser ignores
them.

Spool Hoarder uses AI to read the pasted text and returns one line item per
filament it recognises, with:

- brand, material, color, and product name
- spool size, quantity, unit price, and line price
- retailer, order date, and currency when available
- a confidence flag and per-item warnings where the reading is uncertain

The paste needs to be at least 20 characters, otherwise Spool Hoarder asks you to
paste a fuller confirmation before it will parse.

## Credits

Each parse costs **1 AI credit**. Your current balance is shown on the same
screen as "N credits remaining". Credits come with a Pro subscription (20 per
month) and the free trial (5 credits), and you can top up with a credit pack.

Parsing a new order always costs a credit. Re-opening an order you already
parsed — via **Resume Review** — does **not** cost another credit, so you can
step away and come back to it freely.

Because AI can make mistakes, review every item before saving.

## Review before you save

The review screen lists every extracted item. Anything that needs your attention
is highlighted:

- **Missing info** — brand and material are required, so an item missing either
  blocks the save until you fill them in.
- **Low confidence** — the parser was uncertain about the reading.
- **Warnings** — a specific field looks questionable.

For each item you can:

- **Edit** brand, material, name, color, spool size, quantity, unit price, and
  purchase source. As you type, Spool Hoarder suggests catalog matches for empty
  fields.
- **Change quantity** with the +/− stepper (1 to 999).
- **Remove** an item entirely.

Lines the parser deliberately excluded (shipping, tax, non-filament products)
are listed under **Excluded Lines** with the reason, so you can confirm nothing
was dropped by mistake.

## Saving to inventory

When everything looks right, tap **Save N Spools**. Spool Hoarder creates the
spools, applies catalog enrichment, and records the order details. If your
free-tier limit would be exceeded by the new spools, you will be offered an
upgrade prompt instead. On success you land on the inventory tab.

## Related pages

- [Importing a CSV](/docs/data/importing-a-csv/)
- [Importing from other apps](/docs/data/importing-from-other-apps/)
`;export{e as default};
