const r=`---\r
title: Importing from other apps\r
description: Move a library in from Spoolman, SpoolStock, or a homegrown sheet.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - spoolman\r
  - spoolstock\r
  - migrate\r
  - switch\r
  - transfer\r
  - import\r
  - move from\r
  - another app\r
  - spreadsheet\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Spool Hoarder's importer is built to recognize files that came out of other\r
tools, so you do not usually need to reformat anything by hand. The single\r
**Import Data** action in **Settings → Data & Backup** reads both plain CSV and\r
full ZIP bundles, and detects which is which automatically.\r
\r
## What the importer recognizes\r
\r
The importer looks at the file, not the filename, and routes it to the right\r
parser:\r
\r
- **Spool Hoarder CSV** — a spool list or a project list, identified by its\r
  column headers. Required columns are **brand** and **material** for spools.\r
- **Spool Hoarder ZIP bundle** — a complete export produced by **Export Data**,\r
  containing spools, projects, filaments, usage logs, thumbnails, your barcode\r
  catalog, storage locations, and selected app settings.\r
- **SpoolStock CSV** — detected automatically when the headers include\r
  \`filament.brand.name\`. The dot-notation columns are remapped to Spool Hoarder\r
  fields, and JSON-style color and feature arrays are converted to the\r
  semicolon-separated format Spool Hoarder uses.\r
\r
If a CSV's headers do not match a known format, the importer reports an\r
"Unrecognized CSV format" error rather than guessing. Wrapping the data in a\r
Spool Hoarder ZIP bundle is the way to bring in other record types like projects\r
and usage logs.\r
\r
## What gets normalized against the catalog\r
\r
As rows are read, blank fields are filled in from the shared filament catalog\r
(brands, materials, color families, print temperatures, and transmission\r
distance). Catalog enrichment only ever fills empty fields — it never overwrites\r
a value you supplied. This is the same enrichment that powers autocomplete when\r
you add a spool by hand.\r
\r
## What typically does not carry across\r
\r
Some details depend on features the source app does not store, or that Spool\r
Hoarder stores differently, and usually need a manual pass after import:\r
\r
- **Storage locations** — a plain CSV only carries a location name. The importer\r
  matches that name against your storage locations and links the spool if a match\r
  exists; otherwise the spool lands without a location for you to assign.\r
- **Thumbnails and sample prints** — these are images, not text, so they only\r
  travel inside a ZIP bundle. A CSV import cannot bring them along.\r
- **Print settings and custom fields** — anything the source export does not\r
  include (for example flow ratio, K-factor, or dry-cycle history) arrives blank.\r
- **Currency** — price fields keep their currency code when one is present. If an\r
  older Spool Hoarder export predates multi-currency, the importer applies your\r
  confirmed legacy currency so amounts stay consistent.\r
\r
## The recommended path\r
\r
1. Export a CSV from your other app (or a Spool Hoarder ZIP if you already have\r
   one).\r
2. In **Settings → Data & Backup → Import Data**, pick the file.\r
3. On the preview, check the counts and tap **Review row errors** for anything\r
   that did not parse.\r
4. Confirm the import, then walk the inventory list and fill in the gaps.\r
\r
Full step-by-step details on the preview, duplicates, and weight deduction are in\r
[Importing a CSV](/docs/data/importing-a-csv/).\r
\r
## Related pages\r
\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
`;export{r as default};
