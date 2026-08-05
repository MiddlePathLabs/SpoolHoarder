const t=`---
title: What is Spool Hoarder
description: What Spool Hoarder tracks, who it is for, and why it works without an account.
order: 1
status: published
updated: 2026-08-04
keywords:
  - what is spool hoarder
  - filament inventory app
  - 3d printing filament tracker
  - spool tracker
  - what does it do
  - overview
  - features
  - who is it for
  - do i need an account
platforms:
  - all
---

Spool Hoarder is a filament inventory app for 3D printing. It tracks what you have, what you have used, and what each print costs, so you stop guessing about the shelf in front of you.

It is built for hobbyists, print farms, and anyone who has lost track of a spool. If you have ever opened a drawer of filament and wondered how much was left, or whether a color was still printable, this is the app for you.

## What it tracks

- **Spools** — remaining weight, brand, material, color, purchase price, storage location, print temperatures, and drying history.
- **Projects** — planned prints with the filaments you intend to use.
- **Usage** — the grams you pulled from each spool, deducted from its remaining weight.
- **Costs** — what you spent on filament, and what each project cost in material.
- **Printers** — printer profiles that drive cost estimates and per-printer settings.

Add spools by hand, or photograph a label and let the app fill the fields. Everything lives in one place instead of a spreadsheet.

## Local first, no account

Spool Hoarder stores your data in a local database on your device. It works offline, in a garage or a print room with no signal, and never requires an account. The inventory belongs to you.

Cloud sync is optional. If you want the same inventory on a second device, see [/docs/data/cloud-sync/](/docs/data/cloud-sync/).

## What it does not do

- It does not slice files or drive your printer.
- It does not collect analytics or telemetry.
- It does not require a sign-in.

## Where to go next

- Install the app and run through setup: [/docs/getting-started/install-and-first-run/](/docs/getting-started/install-and-first-run/)
- Add your first spool: [/docs/getting-started/add-your-first-spool/](/docs/getting-started/add-your-first-spool/)
- Bring in data you already have: [/docs/getting-started/bring-your-existing-data/](/docs/getting-started/bring-your-existing-data/)
`;export{t as default};
