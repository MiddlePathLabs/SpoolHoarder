const e=`---
title: Add your first spool
description: A start-to-finish walkthrough of adding one spool by hand.
order: 4
status: published
updated: 2026-08-04
keywords:
  - first spool
  - add spool
  - new spool
  - walkthrough
  - tutorial
  - how to add filament
  - required fields
  - brand and material
  - add multiple spools
platforms:
  - all
---

This walkthrough adds one spool by hand. It takes two required fields and a save.

## Open the Add Spool screen

Go to the **Inventory** tab and tap the **+** button. The Add Spool screen opens on top of the tabs.

## Fill in the spool

Only two fields are required:

- **Brand** — the manufacturer, such as Polymaker or Bambu Lab.
- **Material** — the filament type, such as PLA, PETG, or ABS.

Everything else is optional, but a few are worth knowing about:

- **Color** — a free-text description, a color family, and hex codes. Pick a family and the app suggests a hex code.
- **Spool size** and **Remaining weight** — default to your preferred spool size if you leave them blank, so a brand-new full spool needs no typing.
- **Price** and **Purchase source** — what you paid and where you bought it.
- **Inventory location** — where the spool physically lives, if you track locations.
- **Print settings** — extruder and bed temperatures, flow ratio, and K-factor. These expand under an advanced section.

Need more than one of the same spool, like a multipack? Set the **Quantity** before you save, and the app creates that many identical entries.

## Scan instead of typing

If the spool has a printed label, scan it. Tap **Scan with AI** on the Add Spool screen, choose a photo, and the app reads the label and fills the empty fields. It never overwrites anything you have already typed.

Scan is fastest when you are entering a stack of new spools. For a single spool with a label you can read at a glance, typing the brand and material is just as quick. See [Choosing a scan method](/docs/scanning/choosing-a-scan-method/) for the full menu of scan options.

## Save

Tap **Save**. The screen closes and the spool appears in your Inventory list. The brand, material, and color you used now appear in autocomplete the next time you add a spool.

On licensed platforms (iPhone, iPad, Mac, and Windows), the free tier holds up to 50 spools. You are unlikely to hit that on your first spool, but the details live in [Free trial and limits](/docs/account/free-trial-and-limits/).

## Where to go next

- Log filament you actually used: [/docs/projects/logging-filament-usage/](/docs/projects/logging-filament-usage/)
- Edit or delete a spool: [/docs/inventory/editing-and-deleting-spools/](/docs/inventory/editing-and-deleting-spools/)
- Scan a whole batch of labels: [/docs/scanning/batch-scan/](/docs/scanning/batch-scan/)
`;export{e as default};
