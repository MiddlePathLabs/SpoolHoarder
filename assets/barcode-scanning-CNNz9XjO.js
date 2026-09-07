const n=`---\r
title: Scanning barcodes\r
description: Using UPC barcodes on packaging, and hardware wedge scanners on desktop.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - barcode\r
  - upc\r
  - ean\r
  - scan barcode\r
  - hardware scanner\r
  - wedge scanner\r
  - usb scanner\r
  - qr code\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - android\r
  - windows\r
---\r
\r
Most filament spools ship with a UPC or EAN barcode on the packaging. Scan it\r
and Spool Hoarder looks the code up and fills the spool's details — no photo, no\r
AI, no credits. The lookup runs against a shared community catalog that every\r
Spool Hoarder user contributes to.\r
\r
## Code types recognized\r
\r
The camera recognizes the common retail and packaging codes:\r
\r
- **UPC-A and UPC-E** (12- and 8-digit North American barcodes)\r
- **EAN-8 and EAN-13** (international product barcodes)\r
- **Code 128, Code 39, Code 93, Codabar, and ITF** (linear packaging codes)\r
- **QR codes**, including Spoolman \`SM:SPOOL=\` tags\r
- Data Matrix codes\r
\r
Product barcodes (UPC/EAN) are preferred over QR codes when both appear.\r
\r
## Ways to scan\r
\r
- **With the camera** — on iPhone, iPad, and Android. Point at the code and\r
  capture.\r
- **With a hardware scanner** — a USB or Bluetooth barcode scanner that types\r
  the code followed by Enter or Tab works on every platform, including Windows\r
  and Mac desktop. No setup is needed.\r
\r
On Mac and Windows there is no in-app camera, so a hardware scanner or\r
the batch-scan upload path is the way in.\r
\r
## First scan versus later scans\r
\r
The first time a barcode is seen, Spool Hoarder checks the shared community\r
catalog for a confirmed match. If one exists, the brand, material, color,\r
weight, and temperatures fill in from the catalog — no AI scan charged, no photo\r
sent. You review the result and save.\r
\r
After you save, that barcode-to-spool mapping is cached on your device. The next\r
time you scan the same code, the details appear instantly and work offline.\r
\r
When you confirm a scan and save it, Spool Hoarder can also contribute your\r
mapping back to the community catalog so the next person gets the same fast\r
lookup. Price and purchase information are never shared. You can switch this off\r
in **Settings → Preferences → Community Barcode Catalog**.\r
\r
## Scanning from the camera\r
\r
1. Choose the barcode scan action (for example, **Scan Barcode** on a spool's\r
   detail screen, or the barcode option while adding).\r
2. If your device has a camera, pick **Scan with Camera**. Align the code inside\r
   the on-screen frame and tap the shutter.\r
3. If the code reads, the spool form fills and you confirm and save. If nothing\r
   is found, you see **No barcode detected. Please try again.**\r
\r
Where there is no camera, the app offers **Use Hardware Scanner** instead.\r
\r
## Using a hardware scanner\r
\r
A hardware wedge scanner behaves like a keyboard: it fires the digits and then\r
Enter. Two places accept it:\r
\r
- **Batch scan** — on phones it listens behind the camera, so a plugged-in\r
  scanner works without changing modes. On Windows and Mac it shows a full-screen\r
  **Ready to scan barcodes** station; each scan is added to the batch\r
  automatically.\r
- **The barcode method sheet** — pick **Use Hardware Scanner** and pull the\r
  trigger. The sheet reads **Ready for Scanner** and waits.\r
\r
Most USB and Bluetooth HID scanners work without any configuration. If yours\r
appends Tab instead of Enter, that terminates the scan the same way.\r
\r
## Related pages\r
\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [Batch scanning many spools](/docs/scanning/batch-scan/)\r
- [Reading NFC tags](/docs/scanning/nfc-tags/)\r
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)\r
`;export{n as default};
