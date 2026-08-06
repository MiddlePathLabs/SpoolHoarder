const n=`---
title: Tagging locations with NFC
description: Stick an NFC tag on a bin so you can scan spools into it.
order: 3
status: published
updated: 2026-08-04
keywords:
  - nfc
  - location tag
  - bin
  - move spool
  - scan location
  - tag shelf
  - tap to move
  - nfc sticker
platforms:
  - ios
  - ipados
  - android
---

Stick an NFC tag on a shelf, bin, or dry box and link it to a storage location.
Then, when you put a spool away, scan the spool's tag to confirm it has moved
there — no menus, no typing.

This feature requires a supported iPhone, iPad, or Android device with NFC available. Bambu Lab MIFARE Classic tags can be read on Android only.

You need at least one [storage location](/docs/organizing/storage-locations/)
before you can link a tag.

## Link a tag to a location

1. Open **Settings → Storage Locations**.
1. Open the location's menu and choose **Link NFC tag**.
1. Hold an NFC tag against your device when prompted.

The tag now opens that location's contents whenever it is scanned. The **Link NFC
tag** option only appears when your device has NFC available and switched on.

If the tag already belongs to another location, or to a spool, Spool Hoarder asks
before reassigning it:

- **Move NFC tag?** — the tag is linked to another location. Confirm to move it.
- **Replace linked NFC tag?** — the location already has a tag. Confirm to swap
  in the new one.

To detach a tag later, open the location's menu and choose **Unlink NFC tag**.

## Scan a location tag

Tap a linked tag against your device from the inventory. Spool Hoarder opens that
location's contents view, listing every spool last recorded there.

If the location is empty, you see a note that no spools are recorded there yet.
The list is *last known* information — it reflects what you have confirmed, not
live tracking.

## Move a spool in

Once a location tag has opened the contents view, scan a spool's NFC tag to file
it there:

1. Tap **Scan a spool tag to move it here** (the NFC icon in the app bar).
1. Hold the spool's NFC tag against your device.
1. Confirm **Move here**.

Spool Hoarder updates the spool's last known location and the contents list
refreshes. Scanning another location tag, or a tag that is not linked to a spool,
shows a message explaining what went wrong rather than moving anything.

## What you need

- A supported iPhone, iPad, or Android device with NFC available.
- One NFC tag per location. Cheap NTAG stickers work well for bins and shelves.
- For Bambu Lab spool tags, an Android device — their MIFARE Classic encryption
  cannot be read on iOS.

## Related pages

- [Organize filament storage](/docs/organizing/organize-filament-storage/)
- [Storage locations](/docs/organizing/storage-locations/)
- [Reading NFC tags](/docs/scanning/nfc-tags/)
- [An NFC tag will not read](/docs/troubleshooting/nfc-tag-wont-read/)
`;export{n as default};
