const r=`---\r
title: Bring your existing data\r
description: Move a shelf, spreadsheet, or another app's collection into Spool Hoarder, end to end.\r
order: 5\r
status: published\r
updated: 2026-08-05\r
keywords:\r
  - migrate\r
  - import\r
  - spreadsheet\r
  - csv\r
  - import data\r
  - zip bundle\r
  - backup\r
  - switch from another app\r
  - spoolstock\r
  - order import\r
  - sample data\r
  - move my filament\r
  - transfer spools\r
  - load my shelf\r
  - from excel\r
  - from google sheets\r
  - from numbers\r
  - bring my data in\r
  - spoolman\r
  - restore from backup\r
  - organise spools\r
  - migrat\r
  - transfering\r
  - spreadshet\r
platforms:\r
  - all\r
---\r
\r
If you already track filament somewhere else — a spreadsheet, another app, or a backup from another device — Spool Hoarder pulls it in without retyping. This page is for collectors with an established inventory and anyone migrating from a spreadsheet or another filament tracker.\r
\r
> **Before you begin —** Spool Hoarder installed and opened. See [Install and first run](/docs/getting-started/install-and-first-run/). The free tier holds 50 spools; a large import prompts you to upgrade. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/).\r
\r
## Pick your starting point\r
\r
All intake routes live under **Settings → Data & Backup**.\r
\r
| Where your collection lives | Best route | Best when |\r
|---|---|---|\r
| Spreadsheet or CSV export | [Importing a CSV](/docs/data/importing-a-csv/) | You already have the data in rows |\r
| Another filament tracker (Spoolman, SpoolStock) | [Importing from other apps](/docs/data/importing-from-other-apps/) | You are switching from a supported app |\r
| A Spool Hoarder backup from another device | [Backup and restore](/docs/data/backup-and-restore/) | You are moving to a new phone or computer |\r
| A fresh order email receipt | [Importing from an order confirmation](/docs/data/order-import/) | You just bought a batch and have the receipt |\r
| Physical spools with no digital list | [Batch scanning many spools](/docs/scanning/batch-scan/) | Your inventory only exists on the shelf |\r
| Just want to look around | Sample data (below) | Your inventory is empty and you want to explore |\r
\r
## The full sequence\r
\r
\`\`\`text\r
[Choose source] -> [Import or scan] -> [Review] -> [Bulk-correct] -> [Organize] -> [Back up]\r
\`\`\`\r
\r
Each stage feeds the next. You can stop at any point and come back later.\r
\r
## Review and correct\r
\r
After import, Spool Hoarder shows an **Import Preview** listing every record it found and flagging any row it could not read. Fix or discard flagged rows, then confirm. See [Importing a CSV](/docs/data/importing-a-csv/) for the preview, duplicate-handling, and weight-deduction controls.\r
\r
## Bulk-correct shared fields\r
\r
Spools that arrive in a batch often share a brand, a material, a purchase source, or a storage location. Enter selection mode on the inventory and use **Move** or **Edit** to set those once across the whole batch. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/) for the four batch actions.\r
\r
## Organize with storage locations\r
\r
Once the spools are in, name the shelves and bins they live in. See [Organize filament storage](/docs/organizing/organize-filament-storage/) for the full setup, or [Storage locations](/docs/organizing/storage-locations/) for create, rename, merge, and delete mechanics.\r
\r
## Back up or enable sync\r
\r
Your shelf is now in Spool Hoarder. Protect it with a local backup or cloud sync. See [Backup and restore](/docs/data/backup-and-restore/) or [Cloud sync](/docs/data/cloud-sync/).\r
\r
## Check your work\r
\r
- Every spool you intended to import appears in the **Inventory** tab.\r
- The import preview's row-error count was zero, or every flagged row was fixed.\r
- Spools that share a brand, material, or location are consistent.\r
- Each spool that should live in a physical spot has a location assigned.\r
- A fresh backup exists under **Settings → Data & Backup**, or cloud sync is on.\r
\r
## Related pages\r
\r
- [Install and first run](/docs/getting-started/install-and-first-run/)\r
- [Add your first spool](/docs/getting-started/add-your-first-spool/)\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [Importing from other apps](/docs/data/importing-from-other-apps/)\r
- [Importing from an order confirmation](/docs/data/order-import/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [Multi-select and batch actions](/docs/inventory/multi-select-actions/)\r
- [Organize filament storage](/docs/organizing/organize-filament-storage/)\r
`;export{r as default};
