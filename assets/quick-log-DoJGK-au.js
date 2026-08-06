const e=`---\r
title: Quick log\r
description: Log filament usage straight from a spool, without opening a project.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - quick log\r
  - log usage\r
  - fast\r
  - shortcut\r
  - sheet\r
  - without project\r
  - personal log\r
  - deduct\r
  - swipe\r
platforms:\r
  - all\r
---\r
\r
Quick log is the fast way to record filament usage. It starts from a spool in\r
your inventory, so you do not need to open a project first. The spool is already\r
chosen; you just enter the grams.\r
\r
## Where to find it\r
\r
Quick log lives on a spool in the **Inventory** tab. With a spool that still has\r
filament on it:\r
\r
- Swipe the spool card and tap **Log**, or\r
- Open the card's actions and choose **Log Usage**.\r
\r
Either one opens the **Log Usage** sheet with that spool already filled in. The\r
sheet shows how many grams are left on the spool and its brand and material, so\r
you can confirm you have the right one.\r
\r
## What it captures\r
\r
- **Grams used** — the amount to deduct. It must be greater than zero and cannot\r
  exceed what is left on the spool. Tap **Use all remaining (Ng)** to fill in the\r
  whole remaining weight at once.\r
- **Print time (hours)** — optional. Leave it blank or enter zero.\r
- **Project** — optional. Pick a project to attach the usage to, or leave it at\r
  **No Project**, which records the usage against the built-in **Personal Log**.\r
- **Notes** — optional, through **Add notes**.\r
\r
If you have saved tuned print settings for that spool and printer, a chip\r
appears reading **Tuned for** followed by the printer's name, so you can recall\r
the nozzle, bed, flow, and K-factor values.\r
\r
Tap **Log Usage** to save. The grams come off the spool, the usage is recorded,\r
and an **Undo** option appears in case you tapped through by mistake.\r
\r
## What it skips\r
\r
Quick log is spool-first and single-entry. Compared with\r
[logging usage from inside a project](/docs/projects/logging-filament-usage/),\r
it skips:\r
\r
- **Picking the spool** — it is fixed to the card you started from.\r
- **Project context** — there is no filament plan to match against, so nothing is\r
  pre-selected by brand, material, or color.\r
- **Planned grams and stock checks** — those belong to a project's filaments.\r
\r
Use Quick log when you just printed something and want the weight gone. Use a\r
project's **Log Usage** when you are tracking a planned job with specific\r
filaments and totals.\r
\r
## Related pages\r
\r
- [Logging filament usage](/docs/projects/logging-filament-usage/)\r
- [Creating a project](/docs/projects/creating-a-project/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
`;export{e as default};
