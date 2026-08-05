const e=`---
title: Multi-select and batch actions
description: Select several spools at once to mark empty, move, edit, or delete them together.
order: 6
status: published
updated: 2026-08-04
keywords:
  - multi select
  - select multiple
  - batch
  - bulk edit
  - bulk delete
  - move spools
  - mark empty
platforms:
  - all
---

When you need to change several spools at once, selection mode lets you act on a whole batch in one step.

## Entering selection mode

There are three ways in:

- **Long-press** any spool card. This works on touch and with a mouse.
- Tap **Select** in the toolbar on desktop and wide layouts.
- Open the **View Options** menu on a compact screen and choose **Select Spools**.

Once active, the top bar shows how many spools you have selected, with **Select None** and **Select Visible** to manage the selection. Tap spools to add or remove them, and tap the close button or **Exit batch mode** when you are done.

## Batch actions

A bar at the bottom offers four actions that apply to everything selected:

- **Mark Empty** — flags every selected spool as depleted and zeroes its weight.
- **Move** — opens a **Move to Location** dialog to reassign the storage location of all selected spools at once.
- **Edit** — opens the **Edit Shared Fields** dialog with three tabs (**Identity**, **Inventory**, **Technical**). Set a value and it applies to every selected spool. Fields where the selected spools already differ show **Mixed values**, so you can tell before you overwrite.
- **Delete** — removes every selected spool.

## What happens if something fails

Each batch action runs as a single all-or-nothing operation. If it cannot complete, nothing is changed and a message tells you to try again — you never end up with half a batch done.

After **Delete** and **Mark Empty**, an **Undo** link appears in the message for a few seconds. **Move** and **Edit** cannot be undone, so review the confirmation prompts before confirming.

## Related pages

- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)
- [Grouping and tags](/docs/inventory/grouping-and-tags/)
`;export{e as default};
