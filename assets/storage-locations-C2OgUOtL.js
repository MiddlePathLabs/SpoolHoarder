const o=`---\r
title: Storage locations\r
description: Name the shelves, bins, and dry boxes your spools live in.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - location\r
  - storage\r
  - shelf\r
  - bin\r
  - dry box\r
  - where are my spools\r
  - organise spools\r
  - organize spools\r
  - move spool\r
  - assign location\r
platforms:\r
  - all\r
---\r
\r
Storage locations are optional names for the places you keep filament — a wall\r
rack, a dry box, a labeled drawer. Assign a spool to a location and Spool Hoarder\r
remembers where it lives, so you can find it again without digging through every\r
spool.\r
\r
Locations are purely organizational. Adding them changes nothing about your spool\r
data, and you can ignore them entirely if you do not need them.\r
\r
## Create and edit locations\r
\r
Open **Settings → Storage Locations**. The list starts empty with a single\r
**Add Location** button. Tap the **+** icon in the app bar to add one from\r
anywhere in the list.\r
\r
Each location has two fields:\r
\r
- **Name** (required) — what the location is called, for example \`Wall Rack A\`.\r
- **Code** (optional) — a short label shown under the name, for example \`R1\`.\r
\r
Tap any location in the list to rename it or change its code. The same dialog\r
creates a new location the first time and edits it after that.\r
\r
## Reorder locations\r
\r
Drag a location up or down the list to change its order. The sequence you set\r
here is the sequence used wherever locations appear, such as the assignment field\r
on a spool.\r
\r
## Assign a spool to a location\r
\r
A spool picks up its location from the **Inventory Location** field on the add or\r
edit form. Start typing and Spool Hoarder suggests your existing locations; pick\r
one or type a new name. A name you type for the first time is created as a\r
location automatically, so you do not have to set it up in advance.\r
\r
To move several spools at once, select them in the inventory, then choose\r
**Move to Location** and type the destination name.\r
\r
## Merge one location into another\r
\r
When two locations describe the same shelf, merge them rather than editing each\r
spool by hand. Open the location's menu and choose **Merge into…**, then pick the\r
location to keep. Every spool in the source moves to the target, and the source\r
is removed.\r
\r
## Delete a location\r
\r
Deleting a location never deletes the spools inside it. If the location holds\r
spools, Spool Hoarder asks you to decide what happens to them first:\r
\r
- **Clear their location** — the spools stay, but they no longer have a location.\r
- **Move to** another location — every spool reassigns to the one you pick.\r
\r
If the location is empty, it is removed straight away.\r
\r
## See what is in a location\r
\r
On a phone or tablet with NFC, you can stick a tag on a bin and scan it to open\r
a live view of its contents. See [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/).\r
\r
The contents view always reflects the *last known* location recorded for each\r
spool. Spool Hoarder does not track spools in real time, so it shows what you last\r
confirmed.\r
\r
## Related pages\r
\r
- [Organize filament storage](/docs/organizing/organize-filament-storage/)\r
- [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/)\r
`;export{o as default};
