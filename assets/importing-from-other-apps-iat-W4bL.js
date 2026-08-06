const e=`---
title: Importing from other apps
description: Move a library in from Spoolman, SpoolStock, or a homegrown sheet.
order: 2
status: published
updated: 2026-08-04
keywords:
  - spoolman
  - spoolstock
  - migrate
  - switch
  - transfer
  - import
  - move from
  - another app
  - spreadsheet
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Spool Hoarder's importer is built to recognize files that came out of other
tools, so you do not usually need to reformat anything by hand. The single
**Import Data** action in **Settings → Data & Backup** reads both plain CSV and
full ZIP bundles, and detects which is which automatically.

## What the importer recognizes

The importer looks at the file, not the filename, and routes it to the right
parser:

- **Spool Hoarder CSV** — a spool list or a project list, identified by its
  column headers. Required columns are **brand** and **material** for spools.
- **Spool Hoarder ZIP bundle** — a complete export produced by **Export Data**,
  containing spools, projects, filaments, usage logs, thumbnails, your barcode
  catalog, storage locations, and selected app settings.
- **SpoolStock CSV** — detected automatically when the headers include
  \`filament.brand.name\`. The dot-notation columns are remapped to Spool Hoarder
  fields, and JSON-style color and feature arrays are converted to the
  semicolon-separated format Spool Hoarder uses.

If a CSV's headers do not match a known format, the importer reports an
"Unrecognized CSV format" error rather than guessing. Wrapping the data in a
Spool Hoarder ZIP bundle is the way to bring in other record types like projects
and usage logs.

## What gets normalized against the catalog

As rows are read, blank fields are filled in from the shared filament catalog
(brands, materials, color families, print temperatures, and transmission
distance). Catalog enrichment only ever fills empty fields — it never overwrites
a value you supplied. This is the same enrichment that powers autocomplete when
you add a spool by hand.

## What typically does not carry across

Some details depend on features the source app does not store, or that Spool
Hoarder stores differently, and usually need a manual pass after import:

- **Storage locations** — a plain CSV only carries a location name. The importer
  matches that name against your storage locations and links the spool if a match
  exists; otherwise the spool lands without a location for you to assign.
- **Thumbnails and sample prints** — these are images, not text, so they only
  travel inside a ZIP bundle. A CSV import cannot bring them along.
- **Print settings and custom fields** — anything the source export does not
  include (for example flow ratio, K-factor, or dry-cycle history) arrives blank.
- **Currency** — price fields keep their currency code when one is present. If an
  older Spool Hoarder export predates multi-currency, the importer applies your
  confirmed legacy currency so amounts stay consistent.

## The recommended path

1. Export a CSV from your other app (or a Spool Hoarder ZIP if you already have
   one).
2. In **Settings → Data & Backup → Import Data**, pick the file.
3. On the preview, check the counts and tap **Review row errors** for anything
   that did not parse.
4. Confirm the import, then walk the inventory list and fill in the gaps.

Full step-by-step details on the preview, duplicates, and weight deduction are in
[Importing a CSV](/docs/data/importing-a-csv/).

## Related pages

- [Importing a CSV](/docs/data/importing-a-csv/)
- [Exporting your data](/docs/data/exporting-your-data/)
- [Moving to a new device](/docs/data/moving-to-a-new-device/)
`;export{e as default};
