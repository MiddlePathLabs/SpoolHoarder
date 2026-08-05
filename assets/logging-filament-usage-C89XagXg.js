const e=`---
title: Logging filament usage
description: Record what a print actually used and watch each spool update.
order: 3
status: published
updated: 2026-08-04
keywords:
  - usage
  - log usage
  - grams used
  - deduct
  - after printing
  - delete usage
  - undo
  - restore weight
  - remaining weight
  - print time
platforms:
  - all
---

Logging usage is how a project moves from a plan to a record. Each entry takes
grams off a spool, adds to the project's total, and feeds the project's cost. You
log usage after a print finishes, once for each spool you actually used.

## Logging usage from a project

1. Open the project and find the **Usage Log** section.
2. Tap **Log Usage**.
3. Pick the **spool**. If the project has filaments planned, Spool Hoarder
   pre-selects the spool that matches the filament's brand, material, and colour.
4. Enter **Grams used**. The amount must be greater than zero.
5. Optionally enter **Print time (hours)**. Leave it blank if you do not track
   time, or enter zero for a print that took less than an hour.
6. Optionally add **Notes (optional)** for anything worth remembering about this
   entry.
7. Tap **Save**.

The note text "Reprint" is set aside for the Reprint action, so you cannot type
it yourself here. Use a project's **Reprint** action to log a repeat of the whole
job at once.

For a faster, spool-first flow that skips opening a project, see
[Quick log](/docs/projects/quick-log/).

## How the linked spool changes

When you save, the grams are removed from the spool's remaining weight and the
project's running total goes up by the same amount. Print time, if you entered
it, is added to the printer's hour totals.

Two things are worth knowing:

- **The price is captured at log time.** Spool Hoarder works out a per-gram price
  from the spool when you log, and stores it with the entry. Editing the spool's
  price later does not change what an existing entry cost. See
  [Project costs](/docs/projects/project-costs/).
- **You cannot log more than the spool holds.** If the grams exceed the spool's
  remaining weight, the save fails with an error and nothing is changed.

## Removing a log

If an entry is wrong, delete it and the weight comes back.

1. In the **Usage Log** list, choose delete on the entry.
2. Confirm the prompt. Deleting several entries at once asks you to confirm the
   total grams first.
3. The grams are returned to the spool, the print time is removed from the
   printer's totals, and the project total is recalculated.

Right after deleting, an **Undo** option appears. Use it to put the entry back,
which re-deducts the grams from the spool. Undo only works while the spool still
has enough filament to cover it; if the spool no longer exists or is too light,
the undo cannot complete.

Deleting an entire project does the same thing for every entry on it: each
spool's weight is restored before the project is removed.

## Related pages

- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)
- [Quick log](/docs/projects/quick-log/)
- [Project costs](/docs/projects/project-costs/)
- [Completing a project](/docs/projects/completing-a-project/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
`;export{e as default};
