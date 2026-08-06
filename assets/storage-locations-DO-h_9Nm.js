const o=`---
title: Storage locations
description: Name the shelves, bins, and dry boxes your spools live in.
order: 1
status: published
updated: 2026-08-04
keywords:
  - location
  - storage
  - shelf
  - bin
  - dry box
  - where are my spools
  - organise spools
  - organize spools
  - move spool
  - assign location
platforms:
  - all
---

Storage locations are optional names for the places you keep filament — a wall
rack, a dry box, a labeled drawer. Assign a spool to a location and Spool Hoarder
remembers where it lives, so you can find it again without digging through every
spool.

Locations are purely organizational. Adding them changes nothing about your spool
data, and you can ignore them entirely if you do not need them.

## Create and edit locations

Open **Settings → Storage Locations**. The list starts empty with a single
**Add Location** button. Tap the **+** icon in the app bar to add one from
anywhere in the list.

Each location has two fields:

- **Name** (required) — what the location is called, for example \`Wall Rack A\`.
- **Code** (optional) — a short label shown under the name, for example \`R1\`.

Tap any location in the list to rename it or change its code. The same dialog
creates a new location the first time and edits it after that.

## Reorder locations

Drag a location up or down the list to change its order. The sequence you set
here is the sequence used wherever locations appear, such as the assignment field
on a spool.

## Assign a spool to a location

A spool picks up its location from the **Inventory Location** field on the add or
edit form. Start typing and Spool Hoarder suggests your existing locations; pick
one or type a new name. A name you type for the first time is created as a
location automatically, so you do not have to set it up in advance.

To move several spools at once, select them in the inventory, then choose
**Move to Location** and type the destination name.

## Merge one location into another

When two locations describe the same shelf, merge them rather than editing each
spool by hand. Open the location's menu and choose **Merge into…**, then pick the
location to keep. Every spool in the source moves to the target, and the source
is removed.

## Delete a location

Deleting a location never deletes the spools inside it. If the location holds
spools, Spool Hoarder asks you to decide what happens to them first:

- **Clear their location** — the spools stay, but they no longer have a location.
- **Move to** another location — every spool reassigns to the one you pick.

If the location is empty, it is removed straight away.

## See what is in a location

On a phone or tablet with NFC, you can stick a tag on a bin and scan it to open
a live view of its contents. See [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/).

The contents view always reflects the *last known* location recorded for each
spool. Spool Hoarder does not track spools in real time, so it shows what you last
confirmed.

## Related pages

- [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/)
`;export{o as default};
