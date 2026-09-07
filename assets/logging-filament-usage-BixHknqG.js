const e=`---\r
title: Logging filament usage\r
description: Record what a print actually used and watch each spool update.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - usage\r
  - log usage\r
  - grams used\r
  - deduct\r
  - after printing\r
  - delete usage\r
  - undo\r
  - restore weight\r
  - remaining weight\r
  - print time\r
platforms:\r
  - all\r
---\r
\r
Logging usage is how a project moves from a plan to a record. Each entry takes\r
grams off a spool, adds to the project's total, and feeds the project's cost. You\r
log usage after a print finishes, once for each spool you actually used.\r
\r
## Logging usage from a project\r
\r
1. Open the project and find the **Usage Log** section.\r
2. Tap **Log Usage**.\r
3. Pick the **spool**. If the project has filaments planned, Spool Hoarder\r
   pre-selects the spool that matches the filament's brand, material, and color.\r
4. Enter **Grams used**. The amount must be greater than zero.\r
5. Optionally enter **Print time (hours)**. Leave it blank if you do not track\r
   time, or enter zero for a print that took less than an hour.\r
6. Optionally add **Notes (optional)** for anything worth remembering about this\r
   entry.\r
7. Tap **Save**.\r
\r
The note text "Reprint" is set aside for the Reprint action, so you cannot type\r
it yourself here. Use a project's **Reprint** action to log a repeat of the whole\r
job at once.\r
\r
For a faster, spool-first flow that skips opening a project, see\r
[Quick log](/docs/projects/quick-log/).\r
\r
## How the linked spool changes\r
\r
When you save, the grams are removed from the spool's remaining weight and the\r
project's running total goes up by the same amount. Print time, if you entered\r
it, is added to the printer's hour totals.\r
\r
Two things are worth knowing:\r
\r
- **The price is captured at log time.** Spool Hoarder works out a per-gram price\r
  from the spool when you log, and stores it with the entry. Editing the spool's\r
  price later does not change what an existing entry cost. See\r
  [Project costs](/docs/projects/project-costs/).\r
- **You cannot log more than the spool holds.** If the grams exceed the spool's\r
  remaining weight, the save fails with an error and nothing is changed.\r
\r
## Removing a log\r
\r
If an entry is wrong, delete it and the weight comes back.\r
\r
1. In the **Usage Log** list, choose delete on the entry.\r
2. Confirm the prompt. Deleting several entries at once asks you to confirm the\r
   total grams first.\r
3. The grams are returned to the spool, the print time is removed from the\r
   printer's totals, and the project total is recalculated.\r
\r
Right after deleting, an **Undo** option appears. Use it to put the entry back,\r
which re-deducts the grams from the spool. Undo only works while the spool still\r
has enough filament to cover it; if the spool no longer exists or is too light,\r
the undo cannot complete.\r
\r
Deleting an entire project does the same thing for every entry on it: each\r
spool's weight is restored before the project is removed.\r
\r
## Related pages\r
\r
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)\r
- [Quick log](/docs/projects/quick-log/)\r
- [Project costs](/docs/projects/project-costs/)\r
- [Completing a project](/docs/projects/completing-a-project/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
`;export{e as default};
