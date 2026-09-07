const o=`---\r
title: Organize filament storage\r
description: Name the shelves, bins, and dry boxes your spools live in, and use NFC tags to file spools with a tap.\r
order: 2\r
status: published\r
updated: 2026-08-05\r
keywords:\r
  - where are my spools\r
  - find spools\r
  - tag a shelf\r
  - tag a bin\r
  - organize storage\r
  - set up storage\r
  - file spools\r
  - physical organization\r
  - dry box\r
  - nfc\r
  - storage locations\r
  - link nfc tag\r
  - move spool\r
  - organise storage\r
  - organise spools\r
  - organisation\r
  - orgenize\r
  - filamant\r
  - stag a shelf\r
platforms:\r
  - all\r
---\r
\r
Naming the places your filament lives — shelves, bins, dry boxes — turns the inventory into something you can search and trust, and on supported devices with NFC it lets a tap file each spool where it belongs. This page is for collectors and frequent users who want a repeatable physical organization system.\r
\r
> **Before you begin —** You have at least one spool in your inventory. If you do not, see [Bring your existing data](/docs/getting-started/bring-your-existing-data/) first. NFC steps require a supported iPhone, iPad, or Android device with NFC available. Spool Hoarder NFC features are not available on Mac or Windows.\r
\r
## Steps\r
\r
### 1. Plan the physical location structure\r
\r
Walk the room. Name every place filament lives — wall racks, labeled drawers, dry boxes, the bin of partials. Decide whether you want codes (R1, R2, B1) alongside names. You can rename and merge later, so do not over-engineer the first pass.\r
\r
### 2. Create the locations in Spool Hoarder\r
\r
Open **Settings → Storage Locations**, tap **+**, and add each location. Drag to reorder so the list reflects how you actually walk the room. See [Storage locations](/docs/organizing/storage-locations/) for create, rename, merge, and delete mechanics.\r
\r
### 3. Assign existing spools individually or in bulk\r
\r
For one spool, open it and set the **Inventory Location** field. For a batch on the same shelf, enter selection mode on the inventory and use **Move** to reassign them at once. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/) for the four batch actions.\r
\r
### 4. Optionally link NFC tags to locations\r
\r
> **Platform note —** NFC steps require a supported iPhone, iPad, or Android device with NFC available.\r
\r
For each location you want to file spools into by tap, stick an NFC tag on the shelf or bin and link it. Open **Settings → Storage Locations**, open the location's menu, and choose **Link NFC tag**. See [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/) for the link, scan, and reassign flow.\r
\r
### 5. Open a tagged location and file a tagged spool into it\r
\r
From the inventory, tap the location's NFC tag against your device to open its contents view. Then tap **Scan a spool tag to move it here** and hold the spool's tag against the device. Confirm **Move here**. Spool Hoarder records the spool's last known location as this one.\r
\r
### 6. Establish a repeatable move-and-return routine\r
\r
Pick one habit and stick to it — for example, every time a spool goes back on the shelf, tap it against that shelf's location tag. The contents view updates immediately, so you can confirm at a glance that the spool is filed. If you move a spool without scanning it, update its location manually so its last known location stays accurate.\r
\r
> **Important limitation —** Spool Hoarder stores the last location you confirmed. It does not track spools live, so an untapped move does not update the inventory.\r
\r
## Check your work\r
\r
- Every shelf, bin, and dry box you care about has a location entry under **Settings → Storage Locations**.\r
- Each location has a recognizable name and (optionally) a short code.\r
- Spools you have already filed show the correct location on their card and detail screen.\r
- (Optional) Tapping a linked location tag against your device opens its contents view.\r
- (Optional) Tapping a spool's tag while a location is open files the spool to that location.\r
\r
## Alternative routes\r
\r
- **NFC is unavailable on this device.** Skip the NFC steps. Individual location assignment and bulk **Move** work without NFC.\r
- **Prefer to assign locations from desktop.** Open the inventory, enter selection mode, and use **Move to Location**. See [Multi-select and batch actions](/docs/inventory/multi-select-actions/).\r
- **Don't want to tag individual spools.** Link location tags only and assign spools manually. The location-tag tap still opens the contents view; you just update each spool's location by hand when you file it.\r
\r
## Related pages\r
\r
- [Storage locations](/docs/organizing/storage-locations/)\r
- [Tagging locations with NFC](/docs/organizing/tagging-locations-with-nfc/)\r
- [Reading NFC tags](/docs/scanning/nfc-tags/)\r
- [Multi-select and batch actions](/docs/inventory/multi-select-actions/)\r
- [An NFC tag will not read](/docs/troubleshooting/nfc-tag-wont-read/)\r
`;export{o as default};
