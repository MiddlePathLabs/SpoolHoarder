const e=`---\r
title: An NFC tag will not read\r
description: Why a tag scan fails, and how to get a reliable read.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - nfc not reading\r
  - nfc tag failed\r
  - nfc unsupported\r
  - tag wont scan\r
  - openspool\r
  - prusa tag\r
  - spoolman qr\r
  - nfc not working\r
platforms:\r
  - ios\r
  - ipados\r
  - android\r
---\r
\r
NFC scanning requires a supported iPhone, iPad, or Android device with NFC available. Spool Hoarder NFC features are not available on Windows, macOS, Linux, or the web.\r
\r
You start an NFC scan from the inventory screen, the batch scanner, a spool's detail page, or **Settings → Storage Locations**. It is not a button on the Add Spool screen itself. When you tap an unlinked tag from the inventory screen, Spool Hoarder opens Add Spool and links that tag to the new spool when you save.\r
\r
## First, confirm your device can scan\r
\r
On Android, open the system **Settings → Connected devices → Connection preferences → NFC** (the path varies by manufacturer) and make sure NFC is switched on. A dead battery-saver or a thick metal case can block reads.\r
\r
On iPhone, NFC is always on. Hold the top back of the phone to the tag. On iPad, NFC is available on supported models; hold the device against the tag until the system sheet appears.\r
\r
If the hardware check fails, you see **NFC is unavailable or disabled on this device.** Turn NFC back on in system settings and try again.\r
\r
## Is the tag a format Spool Hoarder reads?\r
\r
Spool Hoarder reads these tag formats:\r
\r
- **OpenSpool** — JSON on NTAG215 and NTAG216 tags.\r
- **OpenPrintTag (Prusa)** — CBOR on NFC-V tags such as ICODE SLIX and SLIX2.\r
- **OpenTag3D** — fixed binary data on NTAG213, NTAG215, and NTAG216.\r
- **Generic NDEF** — text or URL records. This includes the Spoolman **SM:SPOOL=** format.\r
\r
A plain blank tag, a hotel key, a payment card, or any tag in an unknown format produces **Unrecognized NFC tag format.** A tag Spool Hoarder recognizes but cannot read cleanly produces **Could not parse tag data.**\r
\r
## The Spoolman tag did nothing\r
\r
A tag carrying a Spoolman **SM:SPOOL=** ID only fetches data when you have a Spoolman server configured. Without a server URL set, the scan produces no fields. Check your Spoolman setup and try again.\r
\r
## Read the messages\r
\r
| Message | Cause | Fix |\r
|---|---|---|\r
| **NFC scan canceled** | You pulled the device away or the system session timed out. | Hold the device steady on the tag for the whole read. |\r
| **An NFC scan is already in progress** | A previous scan has not finished. | Wait for it to end, then scan again. |\r
| **This NFC tag does not expose a readable UID.** | The tag blocks UID reads. | Link it by writing to the tag instead, or add the spool manually. |\r
| **Unrecognized NFC tag format** | The tag is blank or an unsupported type. | Use a supported format, or write an OpenSpool payload to it. |\r
| **Could not parse tag data** | The tag is a known format but the data is damaged or partial. | Rewrite the tag from the spool's detail page. |\r
| **NFC is unavailable or disabled on this device** | NFC is off or missing. | Enable NFC in system settings. |\r
\r
## Get a reliable read\r
\r
NFC antennas live near the top back of most phones, not in the center. Hold that spot flat against the tag.\r
\r
- Remove metal or magnetic device cases, or cards stuck to the back of the device. Metal blocks the NFC field.\r
- Hold still. Moving the device mid-read cancels the session.\r
- On spools with recessed tags, press the device firmly against the flat of the tag.\r
- If a read fails twice, lift the device away and set it down again. The reader needs a fresh tap to start over.\r
\r
## Write a tag that scans reliably\r
\r
From a spool's detail page, open the more menu and choose **NFC Tag → Write NFC Tag**. This writes a standard OpenSpool payload, which every part of the app reads. You can then **Link NFC Tag** to bind that physical tag to the spool.\r
\r
If a tag is already linked elsewhere, Spool Hoarder asks whether to **Move** or **Replace** the link before it changes anything.\r
\r
## Related pages\r
\r
- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
