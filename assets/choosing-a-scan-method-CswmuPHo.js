const n=`---
title: Choosing how to add spools
description: Choose the fastest way to add one spool, a multipack, or a full filament delivery.
order: 1
status: published
updated: 2026-08-05
keywords:
  - scan
  - which scan
  - compare scan methods
  - best way to add spool
  - photo vs barcode vs nfc
  - add spool fast
  - new spools
  - add a box
  - just bought
  - fresh delivery
  - bulk add
  - multipack
  - receipt
  - add spools without typing
  - order import
  - batch scan
  - ai photo scan
  - manual entry
  - scaning
  - barcod
  - multipak
platforms:
  - all
---

When new filament arrives, Spool Hoarder gives you several ways to add it without typing every field. This guide is for hobbyists, collectors, and frequent users choosing the best route for one spool, a multipack, or a full delivery.

## Pick a route

| What you have | Best route | What it reads |
|---|---|---|
| A receipt or order-confirmation email | [Importing from an order confirmation](/docs/data/order-import/) | Product lines in the order text |
| Boxed spools with retail barcodes | [Scanning barcodes](/docs/scanning/barcode-scanning/) | UPC or EAN barcode |
| One loose spool with a readable label | [Scanning a label with AI](/docs/scanning/ai-photo-scan/) | Printed label details |
| Several spools or a full delivery | [Batch scanning many spools](/docs/scanning/batch-scan/) | Labels, barcodes, and NFC tags in one session |
| A spool with a supported NFC tag | [Reading NFC tags](/docs/scanning/nfc-tags/) | Data written to the tag |
| One spool with no readable label or tag | [Adding a spool](/docs/inventory/adding-a-spool/) | Details you enter manually |
| Existing records in a spreadsheet | [Importing a CSV](/docs/data/importing-a-csv/) | Structured CSV data |

## The full sequence

\`\`\`text
[Choose a route] -> [Scan, import, or enter] -> [Review] -> [Confirm quantity] -> [Save] -> [Put away]
\`\`\`

Every route shows you what it found or what you entered before committing records. The Quantity selector — available on scan, NFC, and manual-entry routes — lets one entry create several identical spools; CSV import creates one spool per row instead.

## Order import

Paste the order-confirmation email or receipt text and Spool Hoarder extracts each filament line item — brand, material, color, spool size, quantity, and price — for you to review before saving. Each parse costs 1 AI credit. See [Importing from an order confirmation](/docs/data/order-import/) for the details.

## Barcode scanning

Most spools ship with a UPC or EAN barcode on the packaging. Scan it and Spool Hoarder looks the code up in a shared community catalog — no AI, no credits, no photo sent. Camera scanning works on iPhone, iPad, and Android; a USB or Bluetooth hardware scanner works on every platform including Mac and Windows. See [Scanning barcodes](/docs/scanning/barcode-scanning/) for the details.

## AI photo scan

Point the camera at a spool label or pick a photo, and Spool Hoarder reads the brand, material, color, weight, and temperatures off it. Available on iPhone, iPad, Mac, and Android; not available on Windows. Requires a recognition mode set in **Settings → Preferences → AI Spool Recognition** — On-Device (free), Managed credits, or your own API key. See [Scanning a label with AI](/docs/scanning/ai-photo-scan/) for the details.

## Batch scanning

Batch scan turns the camera into a conveyor belt — capture one photo after another, extract up to four spools per shot, review the whole group, and save in one pass. A plugged-in barcode scanner works here too. On desktop, upload photos or drive a hardware scanner. This is the fastest route for a shelf or a fresh delivery of many spools. See [Batch scanning many spools](/docs/scanning/batch-scan/) for the details.

## NFC tags

Some spools carry an NFC tag with their identity written to it — OpenSpool, Prusa's OpenPrintTag, OpenTag3D, Bambu Lab, or a generic Spoolman tag. Hold the device to the tag and the details appear, ready to save. Requires a supported iPhone, iPad, or Android device with NFC available. Bambu Lab MIFARE Classic tags can be read on Android only. See [Reading NFC tags](/docs/scanning/nfc-tags/) for the details.

## Manual entry

For one spool with no readable barcode, label, receipt, or NFC tag, open the Add Spool form and type. Only brand and material are required; everything else is optional. See [Adding a spool](/docs/inventory/adding-a-spool/) for the details.

## Multipacks and identical spools

Use the Quantity selector rather than repeating the same scan or entry. On the Add Spool form and in batch-scan review, Quantity goes up to 10. In order-import review, the per-line stepper goes up to 999. Each created spool is an independent inventory record with its own spool ID — shared product details do not mean shared spool identity. After saving, confirm the inventory count matches the physical delivery.

## When CSV import is the better route

If your spools already exist in a spreadsheet or another structured source, scanning them one at a time is unnecessary. CSV import reads every row at once, shows a preview, and commits only what you confirm. See [Importing a CSV](/docs/data/importing-a-csv/) for field-by-field details, or [Bring your existing data](/docs/getting-started/bring-your-existing-data/) for the full migration pipeline.

## Check your work

- Every spool you intended to add appears in the **Inventory** tab.
- Brand, material, color, and starting weight match the physical spool or packaging.
- The number of records created for a multipack matches the number of physical spools.
- No scan or import remains unsaved in a review screen.
- Each spool has a storage location assigned if you are putting it away immediately.

## Alternative routes

- **A large existing collection.** Use [Bring your existing data](/docs/getting-started/bring-your-existing-data/) for the full migration pipeline.
- **Records already in a spreadsheet.** Use [Importing a CSV](/docs/data/importing-a-csv/) instead of scanning.
- **No readable information on the spool.** Use [Adding a spool](/docs/inventory/adding-a-spool/) to type the details.
- **NFC unavailable on this device.** Use barcode scanning, AI photo scan, order import, or manual entry instead.

## Related pages

- [Importing from an order confirmation](/docs/data/order-import/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [Scanning barcodes](/docs/scanning/barcode-scanning/)
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Reading NFC tags](/docs/scanning/nfc-tags/)
- [Adding a spool](/docs/inventory/adding-a-spool/)
- [Organize filament storage](/docs/organizing/organize-filament-storage/)
`;export{n as default};
