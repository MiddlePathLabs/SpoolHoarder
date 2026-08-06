const n=`---
title: Scanning barcodes
description: Using UPC barcodes on packaging, and hardware wedge scanners on desktop.
order: 4
status: published
updated: 2026-08-04
keywords:
  - barcode
  - upc
  - ean
  - scan barcode
  - hardware scanner
  - wedge scanner
  - usb scanner
  - qr code
platforms:
  - ios
  - ipados
  - macos
  - android
  - windows
---

Most filament spools ship with a UPC or EAN barcode on the packaging. Scan it
and Spool Hoarder looks the code up and fills the spool's details — no photo, no
AI, no credits. The lookup runs against a shared community catalog that every
Spool Hoarder user contributes to.

## Code types recognized

The camera recognizes the common retail and packaging codes:

- **UPC-A and UPC-E** (12- and 8-digit North American barcodes)
- **EAN-8 and EAN-13** (international product barcodes)
- **Code 128, Code 39, Code 93, Codabar, and ITF** (linear packaging codes)
- **QR codes**, including Spoolman \`SM:SPOOL=\` tags
- Data Matrix codes

Product barcodes (UPC/EAN) are preferred over QR codes when both appear.

## Ways to scan

- **With the camera** — on iPhone, iPad, and Android. Point at the code and
  capture.
- **With a hardware scanner** — a USB or Bluetooth barcode scanner that types
  the code followed by Enter or Tab works on every platform, including Windows
  and Mac desktop. No setup is needed.

On Mac and Windows there is no in-app camera, so a hardware scanner or
the batch-scan upload path is the way in.

## First scan versus later scans

The first time a barcode is seen, Spool Hoarder checks the shared community
catalog for a confirmed match. If one exists, the brand, material, color,
weight, and temperatures fill in from the catalog — no AI scan charged, no photo
sent. You review the result and save.

After you save, that barcode-to-spool mapping is cached on your device. The next
time you scan the same code, the details appear instantly and work offline.

When you confirm a scan and save it, Spool Hoarder can also contribute your
mapping back to the community catalog so the next person gets the same fast
lookup. Price and purchase information are never shared. You can switch this off
in **Settings → Preferences → Community Barcode Catalog**.

## Scanning from the camera

1. Choose the barcode scan action (for example, **Scan Barcode** on a spool's
   detail screen, or the barcode option while adding).
2. If your device has a camera, pick **Scan with Camera**. Align the code inside
   the on-screen frame and tap the shutter.
3. If the code reads, the spool form fills and you confirm and save. If nothing
   is found, you see **No barcode detected. Please try again.**

Where there is no camera, the app offers **Use Hardware Scanner** instead.

## Using a hardware scanner

A hardware wedge scanner behaves like a keyboard: it fires the digits and then
Enter. Two places accept it:

- **Batch scan** — on phones it listens behind the camera, so a plugged-in
  scanner works without changing modes. On Windows and Mac it shows a full-screen
  **Ready to scan barcodes** station; each scan is added to the batch
  automatically.
- **The barcode method sheet** — pick **Use Hardware Scanner** and pull the
  trigger. The sheet reads **Ready for Scanner** and waits.

Most USB and Bluetooth HID scanners work without any configuration. If yours
appends Tab instead of Enter, that terminates the scan the same way.

## Related pages

- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [Reading NFC tags](/docs/scanning/nfc-tags/)
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)
`;export{n as default};
