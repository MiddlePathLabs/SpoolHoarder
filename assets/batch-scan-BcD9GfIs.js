const n=`---\r
title: Batch scanning many spools\r
description: Working through a shelf of spools in one pass, then reviewing them together.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - batch scan\r
  - bulk scan\r
  - scan many spools\r
  - scan whole shelf\r
  - multiple spools at once\r
  - review scanned spools\r
platforms:\r
  - all\r
---\r
\r
Batch scan lets you capture one spool after another without leaving the camera,\r
then review and save the whole group at once. It is the fastest way to load a\r
shelf or a fresh delivery into inventory.\r
\r
On iPhone, iPad, and Android the camera does the capture. On Mac and Windows\r
there is no in-app camera — you upload photos or drive a hardware barcode\r
scanner.\r
\r
## The flow\r
\r
1. Open batch scan from the inventory scan action. The screen is titled\r
   **Scan Spools**.\r
2. Capture a photo for each spool (or pick from the gallery). A shutter button\r
   is in the center, flash is on the left, and the NFC button is on the right\r
   when your device supports it.\r
3. After each capture you get a short toast confirming what was read — the\r
   brand, material, color, and weight — and a running count,\r
   **N spools scanned**.\r
4. When you have everything, tap **Review N** to open the review screen.\r
\r
Nothing reaches your inventory from the capture screen. Saving happens on the\r
review screen.\r
\r
## Capturing several spools in one photo\r
\r
When you use managed credits, a single photo can return up to four spools. Each\r
one becomes its own review card. If a visible spool could not be read clearly,\r
the toast tells you so — for example, "Added 2 readable spools. Skipped the one\r
on the right because the label was blurry. Scan missing spools individually."\r
Photo-only spools also show a **Photo: left** style badge so you can tell which\r
was which.\r
\r
## The review screen\r
\r
The review screen (titled **Review Scanned Spools**) lists every captured spool\r
as a card with its thumbnail, the fields that were read, and a confidence badge.\r
From here you can:\r
\r
- **Edit** any card to fix a field, one tap per spool.\r
- **Remove** a spool you do not want to keep.\r
- Change the **quantity** (from 1 up to 10) when you have several identical\r
  spools. Each unit becomes its own spool in inventory.\r
- Tap **Identify with Open Filament Database** to match a spool to a known\r
  product for cleaner data.\r
\r
A banner at the top counts how many scans **need your review**. Check those\r
before saving.\r
\r
## Confidence badges\r
\r
Every card carries a confidence badge:\r
\r
- **High confidence · N%** — green check. Likely correct.\r
- **Needs review · N%** — orange or red. Check the fields before saving.\r
\r
Spools looked up by barcode show a match percentage instead, like **92% match**.\r
Medium-confidence and low-confidence scans are the ones the banner asks you to\r
check.\r
\r
## Saving\r
\r
When the list looks right, tap **Add All N Spools**. Spool Hoarder does a final\r
catalog match to fill any gaps, then writes every spool in one pass. You land\r
back on inventory with a confirmation: **Added N spools**.\r
\r
Two things will block the save until you fix them:\r
\r
- A spool with no brand. The card shows **Brand required** — tap it and add one.\r
- A price without a confirmed currency. The card flags\r
  **currency needs confirmation**.\r
\r
If you have reached the free-tier spool limit, an upgrade prompt appears\r
instead of saving.\r
\r
## If a capture fails\r
\r
When the scanner is briefly unavailable, a panel appears with the photo\r
attached and three choices: **Retry Scan**, **Retake** (or **Choose Another** on\r
desktop), or **Discard**. Your photo is kept until you decide, so a busy moment\r
does not cost you the shot.\r
\r
## Leaving without saving\r
\r
If you back out with unsaved scans, Spool Hoarder asks\r
**Discard scanned spools?** so you do not lose a session by accident. Choose\r
**Keep scanning** to stay, or **Discard** to throw the batch away.\r
\r
## Hardware barcode scanners in batch scan\r
\r
A USB or Bluetooth barcode scanner works inside batch scan with no extra setup.\r
On a phone it runs quietly behind the camera, so you can mix photos and barcode\r
pulls freely. On Windows and Mac desktop it becomes a full-screen scanning\r
station — scan a code and the matching spool is added to the batch\r
automatically. See [Scanning barcodes](/docs/scanning/barcode-scanning/) for\r
what the lookup does.\r
\r
## Related pages\r
\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Scanning barcodes](/docs/scanning/barcode-scanning/)\r
- [Getting better scan results](/docs/scanning/improving-scan-accuracy/)\r
`;export{n as default};
