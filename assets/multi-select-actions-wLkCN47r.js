const e=`---\r
title: Multi-select and batch actions\r
description: Select several spools at once to mark them used up, sold, gifted, discarded, moved, edited, or deleted.\r
order: 6\r
status: published\r
updated: 2026-08-26\r
keywords:\r
  - multi select\r
  - select multiple\r
  - batch\r
  - bulk edit\r
  - bulk delete\r
  - move spools\r
  - mark empty\r
  - mark used up\r
  - bulk sold\r
  - batch sale\r
platforms:\r
  - all\r
---\r
\r
When you need to change several spools at once, selection mode lets you act on a whole batch in one step.\r
\r
## Entering selection mode\r
\r
There are three ways in:\r
\r
- **Long-press** any spool card. This works on touch and with a mouse.\r
- Tap **Select** in the toolbar on desktop and wide layouts.\r
- Open the **View Options** menu on a compact screen and choose **Select Spools**.\r
\r
Once active, the top bar shows how many spools you have selected, with **Select None** and **Select Visible** to manage the selection. Tap spools to add or remove them, and tap the close button or **Exit batch mode** when you are done.\r
\r
## Batch actions\r
\r
A bar at the bottom offers seven actions that apply to everything selected. On a phone the bar scrolls sideways to reach them all.\r
\r
- **Mark Used Up** — flags every selected spool as used up.\r
- **Sold** — records the whole selection as sold. The dialog takes a shared note and an optional **Amount received per spool**; leave the amount blank and fill it in per spool later.\r
- **Gifted** — records the selection as gifted, with an optional shared note.\r
- **Discarded** — records the selection as discarded, with an optional shared note.\r
- **Move** — opens a **Move to Location** dialog to reassign the storage location of all selected spools at once.\r
- **Edit** — opens the **Edit Shared Fields** dialog with three tabs (**Identity**, **Inventory**, **Technical**). Set a value and it applies to every selected spool. Fields where the selected spools already differ show **Mixed values**, so you can tell before you overwrite.\r
- **Delete** — removes every selected spool.\r
\r
**Mark Used Up**, **Sold**, **Gifted**, and **Discarded** all keep the spools and their history; only **Delete** removes them. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/) for what each status means.\r
\r
## What happens if something fails\r
\r
Each batch action runs as a single all-or-nothing operation. If it cannot complete, nothing is changed and a message tells you to try again — you never end up with half a batch done.\r
\r
After **Delete**, **Mark Used Up**, and the three exit statuses, an **Undo** link appears in the message for a few seconds. **Move** and **Edit** cannot be undone, so review the confirmation prompts before confirming.\r
\r
## Related pages\r
\r
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)\r
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)\r
- [Grouping and tags](/docs/inventory/grouping-and-tags/)\r
`;export{e as default};
