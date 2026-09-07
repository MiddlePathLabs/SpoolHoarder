const n=`---\r
title: Tagging locations with NFC\r
description: Stick an NFC tag on a bin so you can scan spools into it.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - nfc\r
  - location tag\r
  - bin\r
  - move spool\r
  - scan location\r
  - tag shelf\r
  - tap to move\r
  - nfc sticker\r
platforms:\r
  - ios\r
  - ipados\r
  - android\r
---\r
\r
Stick an NFC tag on a shelf, bin, or dry box and link it to a storage location.\r
Then, when you put a spool away, scan the spool's tag to confirm it has moved\r
there — no menus, no typing.\r
\r
This feature requires a supported iPhone, iPad, or Android device with NFC available.\r
\r
You need at least one [storage location](/docs/organizing/storage-locations/)\r
before you can link a tag.\r
\r
## Link a tag to a location\r
\r
1. Open **Settings → Storage Locations**.\r
1. Open the location's menu and choose **Link NFC tag**.\r
1. Hold an NFC tag against your device when prompted.\r
\r
The tag now opens that location's contents whenever it is scanned. The **Link NFC\r
tag** option only appears when your device has NFC available and switched on.\r
\r
If the tag already belongs to another location, or to a spool, Spool Hoarder asks\r
before reassigning it:\r
\r
- **Move NFC tag?** — the tag is linked to another location. Confirm to move it.\r
- **Replace linked NFC tag?** — the location already has a tag. Confirm to swap\r
  in the new one.\r
\r
To detach a tag later, open the location's menu and choose **Unlink NFC tag**.\r
\r
## Scan a location tag\r
\r
Tap a linked tag against your device from the inventory. Spool Hoarder opens that\r
location's contents view, listing every spool last recorded there.\r
\r
If the location is empty, you see a note that no spools are recorded there yet.\r
The list is *last known* information — it reflects what you have confirmed, not\r
live tracking.\r
\r
## Move a spool in\r
\r
Once a location tag has opened the contents view, scan a spool's NFC tag to file\r
it there:\r
\r
1. Tap **Scan a spool tag to move it here** (the NFC icon in the app bar).\r
1. Hold the spool's NFC tag against your device.\r
1. Confirm **Move here**.\r
\r
Spool Hoarder updates the spool's last known location and the contents list\r
refreshes. Scanning another location tag, or a tag that is not linked to a spool,\r
shows a message explaining what went wrong rather than moving anything.\r
\r
## What you need\r
\r
- A supported iPhone, iPad, or Android device with NFC available.\r
- One NFC tag per location. Cheap NTAG stickers work well for bins and shelves.\r
\r
## Related pages\r
\r
- [Organize filament storage](/docs/organizing/organize-filament-storage/)\r
- [Storage locations](/docs/organizing/storage-locations/)\r
- [Reading NFC tags](/docs/scanning/nfc-tags/)\r
- [An NFC tag will not read](/docs/troubleshooting/nfc-tag-wont-read/)\r
`;export{n as default};
