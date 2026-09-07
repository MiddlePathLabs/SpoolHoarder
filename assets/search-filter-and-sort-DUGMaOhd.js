const e=`---\r
title: Search, filter, and sort\r
description: Find the spool you need in a large inventory using search, filters, and sort orders.\r
order: 4\r
status: published\r
updated: 2026-08-26\r
keywords:\r
  - search\r
  - find spool\r
  - filter\r
  - sort\r
  - sort by remaining\r
  - sort by price\r
  - low stock filter\r
  - status filter\r
  - show sold spools\r
  - find used up spools\r
  - by material\r
  - by brand\r
platforms:\r
  - all\r
---\r
\r
The toolbar at the top of the inventory list has three tools for narrowing a large collection down: **Search**, **Filter**, and **Sort**.\r
\r
## Search\r
\r
Type into the **Search spools** field to match against brand, material, product name, color and color family, product family, features, notes, and inventory location. Multiple words use AND matching — every word must appear somewhere on the spool.\r
\r
Search does not match barcodes, prices, or spool IDs.\r
\r
There is one special case: type a hex color code like \`#59E9FF\` and Spool Hoarder switches to visual color matching, ranking your spools by how close their color is to the one you typed, closest first.\r
\r
## Filter\r
\r
Tap the **Filter** button to open the **Filter Inventory** sheet. Filters are grouped into sections:\r
\r
- **Status** — a **Current inventory** chip (the default), one chip per status with a count (**Active**, **Used up**, **Sold**, **Gifted**, **Discarded**), plus **Favorites** and **In Active Projects**.\r
- **Needs Attention** — **Low Stock**, **Missing Printer Assignment**, **Missing Location**, **Missing Technical Settings**, **Missing Dry History**, and **Missing Price**. Pick one at a time to find spools that need a look.\r
- **Material Category** — PLA, PETG, Engineering, Flexible, Support, Specialty, and Other, each with a count.\r
- **Material**, **Brand**, **Product Family**, and **Color Family** — pick any number of values within each. Each chip shows how many spools match.\r
- **Diameter** — choose one diameter.\r
- **Color match** — type a hex color to filter visually by closest colors.\r
\r
### The status facet\r
\r
By default the list shows your **current inventory**: active spools only. When something you own has left inventory, a removable **Current inventory** chip appears above the list to say so — close it and every status is shown at once.\r
\r
Picking specific status chips inside the filter sheet narrows to exactly those, so **Sold** on its own is the list of everything you have sold. Each chip carries a count, so you can see what is there before you filter to it.\r
\r
Filters combine with AND across sections, and within a section you can select several values (any of which matches). The filter button shows a count of how many filters are active.\r
\r
Two controls clear filters, and they don't do quite the same thing: **Reset to defaults** inside the sheet (and the **Clear Filters** pill above the list) returns you to the default scope — current inventory, no other filters — while closing the **Current inventory** chip only drops the status restriction and leaves your other filters alone.\r
\r
## Sort\r
\r
Tap the **Sort** button to open the **Sort Inventory** sheet. The sort orders available are:\r
\r
- **Date Added**\r
- **Remaining Weight**\r
- **Brand**\r
- **Material**\r
- **Color Family**\r
- **Price**\r
- **Count**\r
\r
The default is **Date Added**, newest first. Tap the selected option again to flip between ascending and descending. Regardless of which sort you choose, spools in your current inventory always appear above ones that have left it.\r
\r
On desktop, you can also sort by clicking any column header in the table view, which exposes a few extra fields such as nozzle temperature and location.\r
\r
### What persists\r
\r
Your **grouping** choice persists between sessions (see [Grouping and tags](/docs/inventory/grouping-and-tags/)). Your search query, filters, and sort order reset each time you restart the app — they apply for the current session only.\r
\r
## Related pages\r
\r
- [Grouping and tags](/docs/inventory/grouping-and-tags/)\r
- [Multi-select and batch actions](/docs/inventory/multi-select-actions/)\r
- [Customizing spool cards](/docs/inventory/customizing-spool-cards/)\r
`;export{e as default};
