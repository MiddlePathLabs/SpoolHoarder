const e=`---
title: Bring your existing data
description: Pick the right import route for where your inventory lives today.
order: 5
status: published
updated: 2026-08-04
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
platforms:
  - all
---

You do not have to retype your shelf. Spool Hoarder reads the data you already have, shows you a preview, and lets you confirm before it writes anything.

All of the routes below live under **Settings → Data & Backup**.

## Pick a route

**You have a CSV.** A spreadsheet, or an export from another filament tracker, works. Open **Import Data**, choose the file, and the app detects whether it is a CSV or a ZIP and shows a preview. Only **brand** and **material** are required; other columns are optional. If you are starting from a blank spreadsheet, **Download CSV Template** hands you a file with the right columns to fill in.

**You have a full backup bundle.** A Spool Hoarder ZIP, from Export Data or a backup on another device, contains spools, projects, filaments, usage logs, thumbnails, and settings. Open **Import Data** and choose the ZIP. The preview lists everything inside before you commit.

**You have an order confirmation email.** Open **Import Order**, paste the email, and the app extracts the spools for you to review. This is the fastest path when you just bought a batch and have the receipt handy.

**You just want to look around.** From the Getting Started screen, **Import sample data** drops in a set of demo spools and projects you can delete later. It only works while your inventory is empty.

## What to check before a large import

- **Required columns.** A spool CSV needs at least \`brand\` and \`material\`. Missing rows are reported, not silently dropped.
- **Conflicts.** If a spool ID in your file already exists locally, the preview marks it as an update. The import overwrites that spool's existing data.
- **Usage logs and weight.** When a bundle includes usage logs, you choose whether to deduct that weight from each spool. Leave it off to import history without changing current weights.
- **Free-tier limits.** On iPhone, iPad, Mac, and Windows, the free tier holds 50 spools. A large import that pushes you over the limit will prompt you to upgrade. See [Free trial and limits](/docs/account/free-trial-and-limits/).

## Where to go for the detailed steps

- Import a CSV, field by field: [/docs/data/importing-a-csv/](/docs/data/importing-a-csv/)
- Move from another app: [/docs/data/importing-from-other-apps/](/docs/data/importing-from-other-apps/)
- Paste an order confirmation: [/docs/data/order-import/](/docs/data/order-import/)
- Restore from a backup bundle: [/docs/data/backup-and-restore/](/docs/data/backup-and-restore/)
`;export{e as default};
