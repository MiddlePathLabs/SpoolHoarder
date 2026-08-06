const n=`---
title: Reading NFC tags
description: Which spool tag formats are supported and how to read them.
order: 5
status: published
updated: 2026-08-04
keywords:
  - nfc
  - nfc tag
  - openspool
  - openprinttag
  - prusa nfc
  - opentag3d
  - bambu nfc
  - rfid
  - tap tag
platforms:
  - ios
  - ipados
  - android
---

Some spools carry an NFC tag with their identity written to it. Hold your device
to the tag and Spool Hoarder reads the brand, material, color, and temperatures
straight off it — no photo, no network, no credits. It is the fastest scan when
the tag exists.

NFC reading requires a supported iPhone, iPad, or Android device with NFC available. Spool Hoarder NFC features are not available on Mac, Windows, or the web.

## Tag formats supported

| Format | Used by | What it carries |
|---|---|---|
| **OpenSpool** | Generic open standard | Brand, material, color, extruder temperature range |
| **OpenPrintTag** | Prusa | Filament identity |
| **OpenTag3D** | Open standard | Filament identity |
| **Bambu Lab** | Bambu Lab spools | Filament identity (encrypted) |
| **Generic NDEF** | Spoolman and others | A text or URL record, including Spoolman \`SM:SPOOL=\` codes |

Bambu Lab tags are encrypted (MIFARE Classic) and can only be read on Android,
which supports that tag type. Other formats work on supported iPhone, iPad, and Android devices.

## What you need

- A supported iPhone, iPad, or Android device with NFC available.
- The spool's tag placed against the device's NFC antenna. Antenna position
  varies by device — on iPhone, near the top back.

On iPhone and iPad the system NFC sheet appears when you start a read. On Android you
hold the device to the tag directly.

## Reading a tag

You can read an NFC tag from several places:

- While **adding a spool**, where the tag fills the form.
- From the **batch scan** screen — the **Scan NFC tag** button appears when your
  device supports it, and the read spool joins the batch for review.
- From a **storage location**, to confirm which spools are sitting on a rack
  that has its own linked location tag.

Hold the device to the tag until the read completes. The tag's data fills the
add form the same way an AI photo scan does, and nothing is saved until you
review and tap **Save**.

## Writing tags

You can also write an OpenSpool tag to a spool from the spool's detail screen.
The tag needs a material and a brand first. An optional **Add Spool Hoarder
companion link** setting (in **Settings → Preferences**) appends a record that
opens the spool directly in Spool Hoarder. Some OpenSpool readers may not
support tags that carry extra records, so existing tags are left untouched until
you rewrite them.

## When a read fails

If the device cannot read the tag you will see a message such as **NFC is
unavailable or disabled on this device** or **An NFC scan is already in
progress**. Cancelling the system sheet simply ends the read with nothing saved.

## Related pages

- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
- [Scanning barcodes](/docs/scanning/barcode-scanning/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)
`;export{n as default};
