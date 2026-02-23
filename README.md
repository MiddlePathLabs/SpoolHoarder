![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)
![Issues Welcome](https://img.shields.io/badge/Issues-Welcome-brightgreen?style=for-the-badge&logo=github)

<p align="left">
  <img src="logo.png" alt="Spool Hoarder" width="128">
</p>

# Spool Hoarder

Spool Hoarder tracks filament inventory and usage for serious 3D printing.

See what you own, how much remains, what it's worth, and where it's used.

No spreadsheets. No guessing. No duplicate purchases.

---

## Inventory Overview

Track every spool in one place.

<p align="left">
  <img src="filament.png" alt="Spool Hoarder" width="512">
</p>

- Brand, material, and color with exact hex swatches (single-color and multi-color gradients)
- Remaining weight with visual progress indicator
- Storage location
- Spool size (1kg, 750g, etc.)
- Purchase price
- Technical parameters (flow ratio, K-factor, diameter, extruder/bed temperatures, transmission distance)
- Favorite any spool to pin it to the top of your inventory
- Tag spools and filter by tag to group related filaments

See at a glance which spools are full, low, or depleted.

---

## Precise Weight Tracking

Each spool includes a live remaining-weight slider.

- Adjust usage in seconds
- Quick-adjust buttons (−50g, −10g, +10g, +50g)
- See exact grams remaining
- Prevent accidental overuse

No mental math required.

---

## AI-Powered Spool Recognition

Point your camera at a spool. Spool Hoarder does the rest.

- Photograph a spool label to extract brand, material, name, color, hex codes, diameter, and temperatures automatically
- Supports Google Gemini, Anthropic Claude, and OpenAI vision APIs
- API keys stored securely in the system keychain
- Extracted data populates the Add Spool form for your review before saving
- Brand and material names are normalized against the global filament catalog after scanning

---

## Batch Scanning

Scan an entire shelf of spools without slowing down.

- Live camera preview with per-spool scan feedback
- On-device OCR for iOS and macOS (no internet required for supported devices)
- Review all scanned results at once with confidence indicators
- Edit any entry before bulk-adding to inventory

Scan a box of twenty spools in minutes, not hours.

---

## SpoolmanDB Integration

Spool Hoarder connects to the SpoolmanDB global filament catalog.

- Brand and material autocomplete pulls from thousands of real products
- Selecting a filament auto-fills hex color codes, diameter, density, and temperature ranges
- CSV imports are automatically normalized: casing corrected, missing fields filled from catalog data
- Catalog cached locally; works offline and refreshes in the background when stale

---

## Project-Based Usage Logging

<p align="left">
  <img src="projects.png" alt="Spool Hoarder" width="512">
</p>

Track filament usage per project.

- Assign multiple filament specifications to a project (brand, material, color, required weight)
- Log exact grams consumed per spool
- Automatic inventory deduction — spool weight updates immediately
- Visual warnings when a selected spool doesn't match a project's target filament
- Usage history with date, spool, and grams per entry
- Project status tracking (active, complete, paused)
- Total weight consumed displayed per project
- Add a thumbnail photo from your camera or gallery
- Tag projects and filter the project list by tag
- Track estimated vs actual filament cost per project
- View spool usage across projects from the spool detail screen ("Used in Projects" with quick navigation)
- Automatic Personal Log project for quick standalone usage tracking

Every print becomes documented. Every gram accounted for.

---

## Data Backup & Restore

Keep your full dataset portable across devices.

- Export a ZIP data bundle with spools, projects, project filaments, usage logs, and thumbnails
- Choose whether to include soft-deleted data for complete archival backups
- Import preview summarizes exactly what will be added or updated
- Reference validation blocks imports with broken project/spool links before writing data
- Optional "Apply Weight Deductions" during usage-log import to update spool/project totals

Works for full backup/restore workflows and device migration.

---

## Smart Search, Filter, and Sort

Find any spool instantly.

- Full-text search across brand, material, name, notes, and features
- Filter by material, color family, brand, diameter, depleted status, and favorites
- Filter counts show how many spools match each option (e.g. "PLA (15)")
- Sort by brand, material, color family, weight, price, favorites, or date added
- Sort direction toggles with a second tap

---

## Inventory Grouping

View your inventory the way that makes sense for your setup.

- **Flat** — every spool listed individually
- **Product** — identical filaments grouped into expandable cards with combined weight
- **State** — groups by spool status (full, partial, depleted)

Switch modes from the inventory screen or set a default in Settings.

---

## Statistics & Cost Analysis

<p align="left">
  <img src="stats.png" alt="Spool Hoarder" width="512">
</p>

Spool Hoarder doesn't just track weight. It shows the big picture.

- Total spool count
- Active vs depleted inventory
- Total inventory value
- Total remaining weight in kg and lbs
- Average cost per kg and per gram
- Value and weight breakdown by material
- Low-stock warnings

You know not just what you have — but what it's worth.

---

## CSV Import & Export

Your data, your way.

- Export your inventory to a standards-compliant CSV file
- Import from CSV to migrate data from other trackers or update in bulk
- Import preview shows exactly what will be added or updated before you commit
- Conflict detection flags spools that would be overwritten
- Per-row error reporting surfaces problems without failing the entire import
- Works with files exported from other tracking tools

---

## Color Advisor Suggestions

Get compatible, in-stock color ideas from your existing inventory.

- Color theory suggestions shown on spool detail
- Suggestions limited to compatible materials
- Scored recommendations with quick explanations
- Optional toggle in Settings

---

## Print Cost Calculator

Estimate the cost of a print before you start.

- Enter filament weight and select a spool to pull its price automatically
- See cost per gram and total estimated cost instantly
- Useful for quoting jobs or deciding which spool to use

---

## Customizable Display

Configure Spool Hoarder to match your workflow.

- Choose which fields appear on spool cards: price, temperatures, location, size, diameter, features, and more
- Set a default spool size used when adding new spools
- Dark mode with System/Light/Dark toggle

---

## Platforms

- Windows
- macOS
- iOS

Availability varies by platform.

---

## Why Spool Hoarder?

Filament adds up.

Weight.
Cost.
Storage space.

Spool Hoarder gives you control over all three.
