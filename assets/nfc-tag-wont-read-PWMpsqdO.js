const e=`---
title: An NFC tag will not read
description: Why a tag scan fails, and how to get a reliable read.
order: 2
status: published
updated: 2026-08-04
keywords:
  - nfc not reading
  - nfc tag failed
  - nfc unsupported
  - tag wont scan
  - openspool
  - prusa tag
  - spoolman qr
  - nfc not working
platforms:
  - ios
  - ipados
  - android
---

NFC scanning requires a supported iPhone, iPad, or Android device with NFC available. Spool Hoarder NFC features are not available on Windows, macOS, Linux, or the web.

You start an NFC scan from the inventory screen, the batch scanner, a spool's detail page, or **Settings → Storage Locations**. It is not a button on the Add Spool screen itself. When you tap an unlinked tag from the inventory screen, Spool Hoarder opens Add Spool and links that tag to the new spool when you save.

## First, confirm your device can scan

On Android, open the system **Settings → Connected devices → Connection preferences → NFC** (the path varies by manufacturer) and make sure NFC is switched on. A dead battery-saver or a thick metal case can block reads.

On iPhone, NFC is always on. Hold the top back of the phone to the tag. On iPad, NFC is available on supported models; hold the device against the tag until the system sheet appears.

If the hardware check fails, you see **NFC is unavailable or disabled on this device.** Turn NFC back on in system settings and try again.

## Is the tag a format Spool Hoarder reads?

Spool Hoarder reads these tag formats:

- **OpenSpool** — JSON on NTAG215 and NTAG216 tags.
- **OpenPrintTag (Prusa)** — CBOR on NFC-V tags such as ICODE SLIX and SLIX2.
- **OpenTag3D** — fixed binary data on NTAG213, NTAG215, and NTAG216.
- **Generic NDEF** — text or URL records. This includes the Spoolman **SM:SPOOL=** format.

A plain blank tag, a hotel key, a payment card, or any tag in an unknown format produces **Unrecognized NFC tag format.** A tag Spool Hoarder recognizes but cannot read cleanly produces **Could not parse tag data.**

## The Spoolman tag did nothing

A tag carrying a Spoolman **SM:SPOOL=** ID only fetches data when you have a Spoolman server configured. Without a server URL set, the scan produces no fields. Check your Spoolman setup and try again.

## Read the messages

| Message | Cause | Fix |
|---|---|---|
| **NFC scan canceled** | You pulled the device away or the system session timed out. | Hold the device steady on the tag for the whole read. |
| **An NFC scan is already in progress** | A previous scan has not finished. | Wait for it to end, then scan again. |
| **This NFC tag does not expose a readable UID.** | The tag blocks UID reads. | Link it by writing to the tag instead, or add the spool manually. |
| **Unrecognized NFC tag format** | The tag is blank or an unsupported type. | Use a supported format, or write an OpenSpool payload to it. |
| **Could not parse tag data** | The tag is a known format but the data is damaged or partial. | Rewrite the tag from the spool's detail page. |
| **NFC is unavailable or disabled on this device** | NFC is off or missing. | Enable NFC in system settings. |

## Get a reliable read

NFC antennas live near the top back of most phones, not in the center. Hold that spot flat against the tag.

- Remove metal or magnetic device cases, or cards stuck to the back of the device. Metal blocks the NFC field.
- Hold still. Moving the device mid-read cancels the session.
- On spools with recessed tags, press the device firmly against the flat of the tag.
- If a read fails twice, lift the device away and set it down again. The reader needs a fresh tap to start over.

## Write a tag that scans reliably

From a spool's detail page, open the more menu and choose **NFC Tag → Write NFC Tag**. This writes a standard OpenSpool payload, which every part of the app reads. You can then **Link NFC Tag** to bind that physical tag to the spool.

If a tag is already linked elsewhere, Spool Hoarder asks whether to **Move** or **Replace** the link before it changes anything.

## Related pages

- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)
- [Contacting support](/docs/troubleshooting/contacting-support/)
`;export{e as default};
