const e=`---\r
title: Grouping and tags\r
description: Group the inventory list by product or exact match, and use the Features field to label spools.\r
order: 5\r
status: published\r
updated: 2026-08-17\r
keywords:\r
  - group\r
  - grouping\r
  - combine spools\r
  - tags\r
  - features\r
  - organise\r
  - categorise\r
  - flat list\r
  - by product\r
platforms:\r
  - all\r
---\r
\r
When your inventory grows, grouping collapses identical or near-identical spools into a single card with a count, so the list stays readable.\r
\r
## Grouping modes\r
\r
There are three modes:\r
\r
- **Flat list** — every spool shown on its own.\r
- **Group by product** — combines spools with the same brand, material, product family, name, and color. This is the default.\r
- **Group by exact match** — also matches remaining weight and status, so only truly identical spools combine.\r
\r
Switch modes from the **Group** control on the inventory toolbar (desktop) or the **View Options** menu (compact screens). You can also set the default in Settings → Appearance → **Default View** → **Inventory Grouping**, choosing **Flat**, **Product**, or **State**.\r
\r
Your grouping choice is remembered between sessions. A grouped card shows the total count and a representative weight; tap it to expand and see the individual spools.\r
\r
A grouped card's menu also has its own **Add another spool** action, which creates new spools from the fields shared across the group rather than a full copy of any one member — see [Add another spool](/docs/inventory/spool-details/#add-another-spool).\r
\r
## Labeling spools with features\r
\r
Spool Hoarder does not have a separate tag system for spools. The closest equivalent is the **Features** field on each spool — a free-text line for traits like "glow-in-dark, silk, matte".\r
\r
The **Features** field is:\r
\r
- **Searchable** — typing a feature into the search box finds matching spools.\r
- **Shown on cards** — you can turn it on under [Customizing spool cards](/docs/inventory/customizing-spool-cards/).\r
- **Editable in bulk** — select several spools and use the batch **Edit** action to set the same features on all of them at once. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/).\r
\r
You do not need to bulk-edit just to change one spool's features — open that spool and edit its **Features** text directly, the same as any other field. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).\r
\r
Features are not a filter of their own. To narrow by a trait, type it into search instead.\r
\r
## How favorites interact with grouping\r
\r
Favorites are not pinned to the top of the list by default. When you turn on the **Favorites** filter and use a flat list, you can drag your favorited spools into a custom order — see [Favorites and low stock](/docs/inventory/favorites-and-low-stock/) for the details. In any other mode, favorites follow whatever sort you have chosen.\r
\r
## Related pages\r
\r
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)\r
- [Customizing spool cards](/docs/inventory/customizing-spool-cards/)\r
- [Favorites and low stock](/docs/inventory/favorites-and-low-stock/)\r
`;export{e as default};
