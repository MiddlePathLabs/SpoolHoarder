const n=`---
title: Quick log
description: Log filament usage straight from a spool, without opening a project.
order: 4
status: published
updated: 2026-08-04
keywords:
  - quick log
  - log usage
  - fast
  - shortcut
  - sheet
  - without project
  - personal log
  - deduct
  - swipe
platforms:
  - all
---

Quick log is the fast way to record filament usage. It starts from a spool in
your inventory, so you do not need to open a project first. The spool is already
chosen; you just enter the grams.

## Where to find it

Quick log lives on a spool in the **Inventory** tab. With a spool that still has
filament on it:

- Swipe the spool card and tap **Log**, or
- Open the card's actions and choose **Log Usage**.

Either one opens the **Log Usage** sheet with that spool already filled in. The
sheet shows how many grams are left on the spool and its brand and material, so
you can confirm you have the right one.

## What it captures

- **Grams used** — the amount to deduct. It must be greater than zero and cannot
  exceed what is left on the spool. Tap **Use all remaining (Xg)** to fill in the
  whole remaining weight at once.
- **Print time (hours)** — optional. Leave it blank or enter zero.
- **Project** — optional. Pick a project to attach the usage to, or leave it at
  **No Project**, which records the usage against the built-in **Personal Log**.
- **Notes** — optional, through **Add notes**.

If you have saved tuned print settings for that spool and printer, a
**Tuned for [printer]** chip appears so you can recall the nozzle, bed, flow, and
K-factor values.

Tap **Log Usage** to save. The grams come off the spool, the usage is recorded,
and an **Undo** option appears in case you tapped through by mistake.

## What it skips

Quick log is spool-first and single-entry. Compared with
[logging usage from inside a project](/docs/projects/logging-filament-usage/),
it skips:

- **Picking the spool** — it is fixed to the card you started from.
- **Project context** — there is no filament plan to match against, so nothing is
  pre-selected by brand, material, or colour.
- **Planned grams and stock checks** — those belong to a project's filaments.

Use Quick log when you just printed something and want the weight gone. Use a
project's **Log Usage** when you are tracking a planned job with specific
filaments and totals.

## Related pages

- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Creating a project](/docs/projects/creating-a-project/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
`;export{n as default};
