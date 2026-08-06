const n=`---\r
title: Choosing how to add spools\r
description: Choose the fastest way to add one spool, a multipack, or a full filament delivery.\r
order: 1\r
status: published\r
updated: 2026-08-06\r
keywords:\r
  - scan\r
  - which scan\r
  - compare scan methods\r
  - best way to add spool\r
  - photo vs barcode vs nfc\r
  - add spool fast\r
  - new spools\r
  - add a box\r
  - just bought\r
  - fresh delivery\r
  - bulk add\r
  - multipack\r
  - receipt\r
  - add spools without typing\r
  - order import\r
  - batch scan\r
  - ai photo scan\r
  - manual entry\r
  - td1\r
  - transmission distance\r
  - scaning\r
  - barcod\r
  - multipak\r
platforms:\r
  - all\r
---\r
\r
When new filament arrives, Spool Hoarder gives you several ways to add it without typing every field. This guide is for hobbyists, collectors, and frequent users choosing the best route for one spool, a multipack, or a full delivery.\r
\r
## Pick a route\r
\r
| What you have | Best route | What it reads |\r
|---|---|---|\r
| A receipt or order-confirmation email | [Importing from an order confirmation](/docs/data/order-import/) | Product lines in the order text |\r
| Boxed spools with retail barcodes | [Scanning barcodes](/docs/scanning/barcode-scanning/) | UPC or EAN barcode |\r
| One loose spool with a readable label | [Scanning a label with AI](/docs/scanning/ai-photo-scan/) | Printed label details |\r
| Several spools or a full delivery | [Batch scanning many spools](/docs/scanning/batch-scan/) | Labels, barcodes, and NFC tags in one session |\r
| A spool with a supported NFC tag | [Reading NFC tags](/docs/scanning/nfc-tags/) | Data written to the tag |\r
| One spool with no readable label or tag | [Adding a spool](/docs/inventory/adding-a-spool/) | Details you enter manually |\r
| Existing records in a spreadsheet | [Importing a CSV](/docs/data/importing-a-csv/) | Structured CSV data |\r
| A spool whose TD or true color you need measured | [Scanning with a TD1](/docs/scanning/td1-scanner/) | Transmission distance and hex color from the filament itself |\r
\r
## The full sequence\r
\r
\`\`\`text\r
[Choose a route] -> [Scan, import, or enter] -> [Review] -> [Confirm quantity] -> [Save] -> [Put away]\r
\`\`\`\r
\r
Every route shows you what it found or what you entered before committing records. The Quantity selector — available on scan, NFC, and manual-entry routes — lets one entry create several identical spools; CSV import creates one spool per row instead.\r
\r
## Order import\r
\r
Paste the order-confirmation email or receipt text and Spool Hoarder extracts each filament line item — brand, material, color, spool size, quantity, and price — for you to review before saving. Each parse costs 1 AI credit. See [Importing from an order confirmation](/docs/data/order-import/) for the details.\r
\r
## Barcode scanning\r
\r
Most spools ship with a UPC or EAN barcode on the packaging. Scan it and Spool Hoarder looks the code up in a shared community catalog — no AI, no credits, no photo sent. Camera scanning works on iPhone, iPad, and Android; a USB or Bluetooth hardware scanner works on every platform including Mac and Windows. See [Scanning barcodes](/docs/scanning/barcode-scanning/) for the details.\r
\r
## AI photo scan\r
\r
Point the camera at a spool label or pick a photo, and Spool Hoarder reads the brand, material, color, weight, and temperatures off it. Available on iPhone, iPad, Mac, and Android; not available on Windows. Requires a recognition mode set in **Settings → Preferences → AI Spool Recognition** — On-Device (free), Managed credits, or your own API key. See [Scanning a label with AI](/docs/scanning/ai-photo-scan/) for the details.\r
\r
## Batch scanning\r
\r
Batch scan turns the camera into a conveyor belt — capture one photo after another, extract up to four spools per shot, review the whole group, and save in one pass. A plugged-in barcode scanner works here too. On desktop, upload photos or drive a hardware scanner. This is the fastest route for a shelf or a fresh delivery of many spools. See [Batch scanning many spools](/docs/scanning/batch-scan/) for the details.\r
\r
## NFC tags\r
\r
Some spools carry an NFC tag with their identity written to it — OpenSpool, Prusa's OpenPrintTag, OpenTag3D, Bambu Lab, or a generic Spoolman tag. Hold the device to the tag and the details appear, ready to save. Requires a supported iPhone, iPad, or Android device with NFC available. Bambu Lab MIFARE Classic tags can be read on Android only. See [Reading NFC tags](/docs/scanning/nfc-tags/) for the details.\r
\r
## TD1 scanning\r
\r
A TD1 is a different kind of scan: it does not identify a spool, it measures one.\r
Feed a strand of filament into an AJAX-3D TD1 and Spool Hoarder records the\r
transmission distance and true hex color, then marks those values as verified.\r
Use it when you need accurate numbers for HueForge or another layered-color\r
workflow, on top of whichever route you used to create the spool. See\r
[Scanning with a TD1](/docs/scanning/td1-scanner/) for the details.\r
\r
## Manual entry\r
\r
For one spool with no readable barcode, label, receipt, or NFC tag, open the Add Spool form and type. Only brand and material are required; everything else is optional. See [Adding a spool](/docs/inventory/adding-a-spool/) for the details.\r
\r
## Multipacks and identical spools\r
\r
Use the Quantity selector rather than repeating the same scan or entry. On the Add Spool form and in batch-scan review, Quantity goes up to 10. In order-import review, the per-line stepper goes up to 999. Each created spool is an independent inventory record with its own spool ID — shared product details do not mean shared spool identity. After saving, confirm the inventory count matches the physical delivery.\r
\r
## When CSV import is the better route\r
\r
If your spools already exist in a spreadsheet or another structured source, scanning them one at a time is unnecessary. CSV import reads every row at once, shows a preview, and commits only what you confirm. See [Importing a CSV](/docs/data/importing-a-csv/) for field-by-field details, or [Bring your existing data](/docs/getting-started/bring-your-existing-data/) for the full migration pipeline.\r
\r
## Check your work\r
\r
- Every spool you intended to add appears in the **Inventory** tab.\r
- Brand, material, color, and starting weight match the physical spool or packaging.\r
- The number of records created for a multipack matches the number of physical spools.\r
- No scan or import remains unsaved in a review screen.\r
- Each spool has a storage location assigned if you are putting it away immediately.\r
\r
## Alternative routes\r
\r
- **A large existing collection.** Use [Bring your existing data](/docs/getting-started/bring-your-existing-data/) for the full migration pipeline.\r
- **Records already in a spreadsheet.** Use [Importing a CSV](/docs/data/importing-a-csv/) instead of scanning.\r
- **No readable information on the spool.** Use [Adding a spool](/docs/inventory/adding-a-spool/) to type the details.\r
- **NFC unavailable on this device.** Use barcode scanning, AI photo scan, order import, or manual entry instead.\r
\r
## Related pages\r
\r
- [Importing from an order confirmation](/docs/data/order-import/)\r
- [Batch scanning many spools](/docs/scanning/batch-scan/)\r
- [Scanning barcodes](/docs/scanning/barcode-scanning/)\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Reading NFC tags](/docs/scanning/nfc-tags/)\r
- [Scanning with a TD1](/docs/scanning/td1-scanner/)\r
- [Adding a spool](/docs/inventory/adding-a-spool/)\r
- [Organize filament storage](/docs/organizing/organize-filament-storage/)\r
`;export{n as default};
