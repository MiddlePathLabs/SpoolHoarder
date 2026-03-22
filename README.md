![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)
![Issues Welcome](https://img.shields.io/badge/Issues-Welcome-brightgreen?style=for-the-badge&logo=github)

<p align="left">
  <img src="logo.png" alt="Spool Hoarder" width="128">
</p>

# Spool Hoarder

Spool Hoarder tracks filament inventory and usage for 3D printing. See what you own, how much remains, what it's worth, and where it's used.

---

## Inventory

Track everything in one place. Each spool shows brand, material, color (exact hex codes, including gradients), remaining weight, storage location, spool size, purchase price, drying history, and technical print parameters. Full, partial, and empty spools look distinct—see at a glance what's ready to print. Favorite spools pin to the top.

Technical parameters include flow ratio, K-factor, diameter, extruder and bed temperatures, and transmission distance.

---

## Weight Tracking

After a print, log what you used with a slider. Quick buttons (−50g, −10g, +10g, +50g) make it fast. Exact grams are always visible, and the slider stops you from accidentally recording more than the spool contains.

---

## AI Spool Recognition

Point your camera at a spool label. The app extracts brand, material, name, color, hex codes, diameter, and temperatures.

Choose Google Gemini, Anthropic Claude, OpenAI, or on-device Apple Intelligence (iOS/macOS). API keys stay in your system keychain. The app populates the Add Spool form for review before saving, normalizing brand and material names against the global filament catalog.

---

## Batch Scanning

Clear a shelf in one pass. The camera preview shows real-time feedback for each spool. On iOS and macOS, OCR runs on-device—no internet required. Review everything together, fix errors, then bulk-add.

Working through a box of twenty spools takes a few minutes.

---

## SpoolmanDB Integration

Spool Hoarder connects to the SpoolmanDB global filament catalog. Autocomplete pulls from thousands of real products. Select a filament and hex codes, diameter, density, and temperature ranges fill in automatically. CSV imports use the catalog to normalize casing and fill missing data.

The catalog caches locally for offline use.

---

## Projects

Track filament usage per project. Define what each project needs (brand, material, color, weight), then log grams from specific spools. Weights update automatically.

You'll get a warning if you pick a spool that doesn't match what your project specified. Usage history shows date, spool, and grams per entry. Track status (active, complete, paused), total weight consumed, estimated vs actual cost. Add thumbnails, tag projects for filtering. View where each spool has been used across all projects.

A Personal Log project provides quick standalone tracking.

---

## Backup & Restore

Export everything to a ZIP—spools, projects, usage logs, thumbnails. Optionally include deleted data for archival imports. The import preview shows what will change before you commit. Reference validation blocks imports with broken links. Rolling auto-backup keeps your data safe for regular backups or moving to a new device.

---

## Search, Filter, Sort

Search across brand, material, name, notes, features. Filter by material, color family, brand, diameter, depletion, favorites (with counts). Sort by brand, material, color family, weight, price, favorites, or date added.

---

## Inventory Views

Three options:

- **Flat** – every spool listed
- **Product** – identical filaments grouped with combined weight
- **State** – grouped by full, partial, or depleted

---

## Statistics

Total spool count, active vs depleted inventory, total value, remaining weight (kg and lbs), average cost per kg and gram, material breakdown, low-stock warnings.

---

## CSV Import & Export

Export to CSV, import to migrate or bulk-update. The preview shows what changes. Conflict detection flags overwrites. Errors appear per row. Handles exports from other tracking tools, including SpoolStock CSV compatibility.

---

## Shareable Cards

Generate polished spool profile, project summary, usage breakdown, and hoard summary cards you can share or save.

---

## Color Advisor

On the spool detail screen, get color suggestions from your own inventory based on color theory. Limited to compatible materials, scored by relevance, with explanations. Toggle in Settings.

---

## QR & NFC

Read filament metadata from spool tags. QR codes from OpenSpool, Spoolman, OpenTag3D. NFC via OpenSpool (NTAG), OpenPrintTag/Prusa (NFC-V), OpenTag3D. Bambu Lab RFID works on Android (MIFARE Classic).

Tag data maps to spool fields and integrates into batch scanning.

---

## UPC Barcode Scanning

Scan a filament barcode to create a spool. Reads UPC-A, EAN-13, EAN-8. The local catalog learns from your scans—repeat barcodes are instant. Cross-references SpoolmanDB, falls back to AI vision if unrecognized.

---

## Print Cost Calculator

Enter filament weight, pick a spool to pull its price, set quantity for batch prints, and see per-item and total cost.

---

## Printer Profiles

Store printer details: manufacturer, model, wattage, purchase cost, expected lifetime. Cost estimates include electricity, depreciation, failure rate, markup. Track maintenance with intervals and notes. Assign printers to projects and usage logs.

---

## Display Options

Choose which fields appear on spool cards. Set a default spool size. Toggle dark mode (System/Light/Dark). Color palettes: Copper, Dragon Hoard (teal), Twilight Mist, Obsidian (warm gray).

---

## Platforms

iOS, macOS, Windows.

---

## Why Spool Hoarder?

Filament accumulates. It takes up space, costs money, and eventually you buy three spools of the same shade of blue.
