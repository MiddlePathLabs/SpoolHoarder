const n=`---
title: Choosing a scan method
description: A decision guide: photo scan, batch scan, barcode, or NFC tag.
order: 1
status: published
updated: 2026-08-04
keywords:
  - scan
  - which scan
  - compare scan methods
  - best way to add spool
  - photo vs barcode vs nfc
  - add spool fast
platforms:
  - all
---

Spool Hoarder can read a spool's details four ways: photograph the label, scan
a whole shelf in one pass, scan the barcode on the packaging, or tap an NFC
tag. Pick the one that matches what is in front of you.

## At a glance

| Method | Best for | Reads | Needs |
|---|---|---|---|
| **AI photo scan** | One new spool, no barcode | The printed label | A recognition mode set in Settings |
| **Batch scan** | A shelf of many spools | Labels, barcodes, and NFC tags in one session | A recognition mode for photos |
| **Barcode** | Spools in their retail packaging | The UPC/EAN code | Nothing extra |
| **NFC tag** | Smart spools with a tag | The data written to the tag | An NFC-capable phone |

## AI photo scan

Point the camera at the spool label (or pick a photo). Spool Hoarder reads the
brand, material, color, weight, diameter, price, and print temperatures off the
label and fills the add form for you.

Available on iOS, iPadOS, macOS, and Android. On Windows and the web, photo
scanning is not available.

The photo can be processed three different ways, and you choose which in
**Settings → Preferences → AI Spool Recognition**:

- **On-Device** — runs entirely on your Apple device, free, nothing leaves your
  phone. Requires a supported iPhone or Mac with Apple Intelligence.
- **Managed credits** — the included cloud scanner, paid for with scan credits
  that come with Pro. No setup.
- **Your own API key (BYOK)** — send the photo to Google Gemini, Anthropic
  Claude, or OpenAI under your own account. You manage the cost.

See [Scanning a label with AI](/docs/scanning/ai-photo-scan/) for the full
flow, and [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
for how each mode is billed.

## Batch scan

Batch scan turns the camera into a conveyor belt. Capture one photo after
another, and Spool Hoarder extracts every spool in each shot (up to four spools
per photo), flags the ones it is unsure about, and lets you review and save the
whole shelf at once. A plugged-in barcode scanner works here too.

On phones the camera does the capture; on desktop you upload photos or drive a
hardware barcode scanner. See
[Batch scanning many spools](/docs/scanning/batch-scan/).

## Barcode

Many spools ship with a UPC or EAN barcode on the box. Scan it and Spool Hoarder
looks the code up in a shared community catalog and fills the details — no AI,
no credits, no photo sent anywhere. The first time a code is seen it checks the
community catalog; after you save, that barcode is cached on your device so the
next scan is instant and works offline.

You can scan barcodes with the camera on iOS, iPadOS, macOS, and Android, or
with a USB or Bluetooth hardware scanner on any platform (including Windows).
See [Scanning barcodes](/docs/scanning/barcode-scanning/).

## NFC tag

Some spools carry an NFC tag with their identity written to it — OpenSpool,
Prusa's OpenPrintTag, OpenTag3D, Bambu Lab, or a generic Spoolman tag. Hold the
phone to the tag and the spool's details appear, ready to save. This is the
fastest method when the tag exists, and it works without a camera or a network.

NFC reading needs NFC hardware, so it is available on iPhone and Android only.
See [Reading NFC tags](/docs/scanning/nfc-tags/).

## Which should I use?

- **New, boxed spool with a barcode on the packaging** → barcode. Free and
  instant.
- **Loose spool with a readable label, adding one** → AI photo scan.
- **A whole shelf or a fresh delivery of many spools** → batch scan.
- **Spool that already has an NFC tag** → NFC.
- **No camera and no scanner (Windows, web)** → add the spool manually, or use a
  hardware barcode scanner.

## Related pages

- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [Scanning barcodes](/docs/scanning/barcode-scanning/)
- [Reading NFC tags](/docs/scanning/nfc-tags/)
- [Scan credits](/docs/scanning/scan-credits/)
`;export{n as default};
