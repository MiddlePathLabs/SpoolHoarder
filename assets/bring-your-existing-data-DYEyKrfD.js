const e=`---
title: Bring your existing data
description: Move a shelf, spreadsheet, or another app's collection into Spool Hoarder, end to end.
order: 5
status: published
updated: 2026-08-05
keywords:
  - migrate
  - import
  - spreadsheet
  - csv
  - import data
  - zip bundle
  - backup
  - switch from another app
  - spoolstock
  - order import
  - sample data
  - move my filament
  - transfer spools
  - load my shelf
  - from excel
  - from google sheets
  - from numbers
  - bring my data in
  - spoolman
  - restore from backup
  - organise spools
  - migrat
  - transfering
  - spreadshet
platforms:
  - all
---

If you already track filament somewhere else — a spreadsheet, another app, or a backup from another device — Spool Hoarder pulls it in without retyping. This page is for collectors with an established inventory and anyone migrating from a spreadsheet or another filament tracker.

> **Before you begin —** Spool Hoarder installed and opened. See [Install and first run](/docs/getting-started/install-and-first-run/). On iPhone, iPad, Mac, and Windows the free tier holds 50 spools; a large import prompts you to upgrade. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/).

## Pick your starting point

All intake routes live under **Settings → Data & Backup**.

| Where your collection lives | Best route | Best when |
|---|---|---|
| Spreadsheet or CSV export | [Importing a CSV](/docs/data/importing-a-csv/) | You already have the data in rows |
| Another filament tracker (Spoolman, SpoolStock) | [Importing from other apps](/docs/data/importing-from-other-apps/) | You are switching from a supported app |
| A Spool Hoarder backup from another device | [Backup and restore](/docs/data/backup-and-restore/) | You are moving to a new phone or computer |
| A fresh order email receipt | [Importing from an order confirmation](/docs/data/order-import/) | You just bought a batch and have the receipt |
| Physical spools with no digital list | [Batch scanning many spools](/docs/scanning/batch-scan/) | Your inventory only exists on the shelf |
| Just want to look around | Sample data (below) | Your inventory is empty and you want to explore |

## The full sequence

\`\`\`text
[Choose source] -> [Import or scan] -> [Review] -> [Bulk-correct] -> [Organize] -> [Back up]
\`\`\`

Each stage feeds the next. You can stop at any point and come back later.

## Review and correct

After import, Spool Hoarder shows an **Import Preview** listing every record it found and flagging any row it could not read. Fix or discard flagged rows, then confirm. See [Importing a CSV](/docs/data/importing-a-csv/) for the preview, duplicate-handling, and weight-deduction controls.

## Bulk-correct shared fields

Spools that arrive in a batch often share a brand, a material, a purchase source, or a storage location. Enter selection mode on the inventory and use **Move** or **Edit** to set those once across the whole batch. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/) for the four batch actions.

## Organize with storage locations

Once the spools are in, name the shelves and bins they live in. See [Organize filament storage](/docs/organizing/organize-filament-storage/) for the full setup, or [Storage locations](/docs/organizing/storage-locations/) for create, rename, merge, and delete mechanics.

## Back up or enable sync

Your shelf is now in Spool Hoarder. Protect it with a local backup or cloud sync. See [Backup and restore](/docs/data/backup-and-restore/) or [Cloud sync](/docs/data/cloud-sync/).

## Check your work

- Every spool you intended to import appears in the **Inventory** tab.
- The import preview's row-error count was zero, or every flagged row was fixed.
- Spools that share a brand, material, or location are consistent.
- Each spool that should live in a physical spot has a location assigned.
- A fresh backup exists under **Settings → Data & Backup**, or cloud sync is on.

## Related pages

- [Install and first run](/docs/getting-started/install-and-first-run/)
- [Add your first spool](/docs/getting-started/add-your-first-spool/)
- [Importing a CSV](/docs/data/importing-a-csv/)
- [Importing from other apps](/docs/data/importing-from-other-apps/)
- [Importing from an order confirmation](/docs/data/order-import/)
- [Backup and restore](/docs/data/backup-and-restore/)
- [Multi-select and batch actions](/docs/inventory/multi-select-actions/)
- [Organize filament storage](/docs/organizing/organize-filament-storage/)
`;export{e as default};
