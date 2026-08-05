const n=`---
title: Batch scanning many spools
description: Working through a shelf of spools in one pass, then reviewing them together.
order: 3
status: published
updated: 2026-08-04
keywords:
  - batch scan
  - bulk scan
  - scan many spools
  - scan whole shelf
  - multiple spools at once
  - review scanned spools
platforms:
  - all
---

Batch scan lets you capture one spool after another without leaving the camera,
then review and save the whole group at once. It is the fastest way to load a
shelf or a fresh delivery into inventory.

On iPhone, iPad, and Android the camera does the capture. On Mac and Windows
there is no in-app camera — you upload photos or drive a hardware barcode
scanner.

## The flow

1. Open batch scan from the inventory scan action. The screen is titled
   **Scan Spools**.
2. Capture a photo for each spool (or pick from the gallery). A shutter button
   is in the center, flash is on the left, and the NFC button is on the right
   when your device supports it.
3. After each capture you get a short toast confirming what was read — the
   brand, material, color, and weight — and a running count,
   **N spools scanned**.
4. When you have everything, tap **Review N** to open the review screen.

Nothing reaches your inventory from the capture screen. Saving happens on the
review screen.

## Capturing several spools in one photo

When you use managed credits, a single photo can return up to four spools. Each
one becomes its own review card. If a visible spool could not be read clearly,
the toast tells you so — for example, "Added 2 readable spools. Skipped the one
on the right because the label was blurry. Scan missing spools individually."
Photo-only spools also show a **Photo: left** style badge so you can tell which
was which.

## The review screen

The review screen (titled **Review Scanned Spools**) lists every captured spool
as a card with its thumbnail, the fields that were read, and a confidence badge.
From here you can:

- **Edit** any card to fix a field, one tap per spool.
- **Remove** a spool you do not want to keep.
- Change the **quantity** (from 1 up to 10) when you have several identical
  spools. Each unit becomes its own spool in inventory.
- Tap **Identify with Open Filament Database** to match a spool to a known
  product for cleaner data.

A banner at the top counts how many scans **need your review**. Check those
before saving.

## Confidence badges

Every card carries a confidence badge:

- **High confidence · N%** — green check. Likely correct.
- **Needs review · N%** — orange or red. Check the fields before saving.

Spools looked up by barcode show a match percentage instead, like **92% match**.
Medium-confidence and low-confidence scans are the ones the banner asks you to
check.

## Saving

When the list looks right, tap **Add All N Spools**. Spool Hoarder does a final
catalog match to fill any gaps, then writes every spool in one pass. You land
back on inventory with a confirmation: **Added N spools**.

Two things will block the save until you fix them:

- A spool with no brand. The card shows **Brand required** — tap it and add one.
- A price without a confirmed currency. The card flags
  **currency needs confirmation**.

If you have reached the free-tier spool limit, an upgrade prompt appears
instead of saving.

## If a capture fails

When the scanner is briefly unavailable, a panel appears with the photo
attached and three choices: **Retry Scan**, **Retake** (or **Choose Another** on
desktop), or **Discard**. Your photo is kept until you decide, so a busy moment
does not cost you the shot.

## Leaving without saving

If you back out with unsaved scans, Spool Hoarder asks
**Discard scanned spools?** so you do not lose a session by accident. Choose
**Keep scanning** to stay, or **Discard** to throw the batch away.

## Hardware barcode scanners in batch scan

A USB or Bluetooth barcode scanner works inside batch scan with no extra setup.
On a phone it runs quietly behind the camera, so you can mix photos and barcode
pulls freely. On Windows and Mac desktop it becomes a full-screen scanning
station — scan a code and the matching spool is added to the batch
automatically. See [Scanning barcodes](/docs/scanning/barcode-scanning/) for
what the lookup does.

## Related pages

- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Scanning barcodes](/docs/scanning/barcode-scanning/)
- [Getting better scan results](/docs/scanning/improving-scan-accuracy/)
`;export{n as default};
