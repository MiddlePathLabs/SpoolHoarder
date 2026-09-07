const n=`---\r
title: Reading NFC tags\r
description: Which spool tag formats are supported and how to read them.\r
order: 5\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - nfc\r
  - nfc tag\r
  - openspool\r
  - openprinttag\r
  - prusa nfc\r
  - opentag3d\r
  - rfid\r
  - tap tag\r
platforms:\r
  - ios\r
  - ipados\r
  - android\r
---\r
\r
Some spools carry an NFC tag with their identity written to it. Hold your device\r
to the tag and Spool Hoarder reads the brand, material, color, and temperatures\r
straight off it — no photo, no network, no credits. It is the fastest scan when\r
the tag exists.\r
\r
NFC reading requires a supported iPhone, iPad, or Android device with NFC available. Spool Hoarder NFC features are not available on Mac, Windows, or the web.\r
\r
## Tag formats supported\r
\r
| Format | Used by | What it carries |\r
|---|---|---|\r
| **OpenSpool** | Generic open standard | Brand, material, color, extruder temperature range |\r
| **OpenPrintTag** | Prusa | Filament identity |\r
| **OpenTag3D** | Open standard | Filament identity |\r
| **Generic NDEF** | Spoolman and others | A text or URL record, including Spoolman \`SM:SPOOL=\` codes |\r
\r
## What you need\r
\r
- A supported iPhone, iPad, or Android device with NFC available.\r
- The spool's tag placed against the device's NFC antenna. Antenna position\r
  varies by device — on iPhone, near the top back.\r
\r
On iPhone and iPad the system NFC sheet appears when you start a read. On Android you\r
hold the device to the tag directly.\r
\r
## Reading a tag\r
\r
You can read an NFC tag from several places:\r
\r
- While **adding a spool**, where the tag fills the form.\r
- From the **batch scan** screen — the **Scan NFC tag** button appears when your\r
  device supports it, and the read spool joins the batch for review.\r
- From a **storage location**, to confirm which spools are sitting on a rack\r
  that has its own linked location tag.\r
\r
Hold the device to the tag until the read completes. The tag's data fills the\r
add form the same way an AI photo scan does, and nothing is saved until you\r
review and tap **Save**.\r
\r
## Writing tags\r
\r
You can also write an OpenSpool tag to a spool from the spool's detail screen.\r
The tag needs a material and a brand first. An optional **Add Spool Hoarder\r
companion link** setting (in **Settings → Preferences**) appends a record that\r
opens the spool directly in Spool Hoarder. Some OpenSpool readers may not\r
support tags that carry extra records, so existing tags are left untouched until\r
you rewrite them.\r
\r
## When a read fails\r
\r
If the device cannot read the tag you will see a message such as **NFC is\r
unavailable or disabled on this device** or **An NFC scan is already in\r
progress**. Cancelling the system sheet simply ends the read with nothing saved.\r
\r
## Related pages\r
\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [Scanning barcodes](/docs/scanning/barcode-scanning/)\r
- [Batch scanning many spools](/docs/scanning/batch-scan/)\r
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)\r
`;export{n as default};
