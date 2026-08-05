const e=`---
title: Importing a CSV
description: Bring a spreadsheet of spools in, read the preview, and commit only what you want.
order: 1
status: published
updated: 2026-08-04
keywords:
  - csv
  - import
  - spreadsheet
  - excel
  - upload
  - import spools
  - migrate
  - numbers
  - google sheets
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Importing a CSV is the quickest way to load a batch of spools you already have
in a spreadsheet. Spool Hoarder reads the file, shows you exactly what it found,
and only writes to your inventory when you confirm.

Import and export are not available in the web app. They work on iPhone, iPad,
Mac, Windows, and Android.

## Start with the template

In **Settings → Data & Backup → Download CSV Template**, Spool Hoarder saves a
file called \`spool_hoarder_template.csv\`. Open it in Excel, Numbers, or Google
Sheets and fill in one row per spool. The template ships with the correct column
headers and one example row, so it is the shortest path to a file the importer
will accept.

Only two columns are required:

- **brand**
- **material**

Every other column is optional, including the spool's name, color, weight, and
price. Column headers are matched case-insensitively, so \`Brand\`, \`BRAND\`, and
\`brand\` are all accepted. Unknown columns are ignored rather than rejected.

## Import the file

1. Open **Settings → Data & Backup → Import Data**.
2. Pick your CSV file (or a [ZIP bundle](/docs/data/exporting-your-data/) — the
   same picker handles both and detects which is which).
3. Review the preview, then confirm.

Files are limited to 50 MB. If you have unsaved spools sitting in the scan tray,
Spool Hoarder asks **Discard scanned spools?** before importing, because
importing replaces your working data — choose **Import** to continue or
**Cancel** to go back and save those scans first.

### SpoolStock and other apps

The importer recognises exports from SpoolStock automatically. If your file's
headers include \`filament.brand.name\`, the columns are remapped to Spool Hoarder
fields on the way in, including hex codes and feature lists. You do not need to
reformat a SpoolStock export by hand. See
[Importing from other apps](/docs/data/importing-from-other-apps/) for what
typically carries across.

## Read the preview

The **Import Preview** screen summarises what was found, with a count and an
error count for each kind of record: spools, projects, project filaments, usage
logs, and thumbnails.

- **For a CSV**, rows that cannot be read are skipped and counted as errors. The
  import still proceeds with the rows that are valid.
- **For a ZIP bundle**, row errors block the import until you fix them, because a
  bundle is meant to restore everything as a unit.

Tap **Review row errors** to see each problem row by row number, with the reason
it was rejected and the original cell contents, so you can correct the source
file and try again.

### How duplicates are handled

Rows are matched by their spool ID. If the same ID already exists in your
inventory, the incoming row **updates** the existing spool; if the ID is new, it
is **inserted**. A duplicate ID inside the same file is reported as an error and
only the first occurrence is kept.

### Deducting weight for imported usage

If your file includes usage logs, a **Deduct inventory for imported usage**
toggle appears:

- **On** (default) — imported usage reduces the linked spool's remaining weight.
  The import stops if any spool does not have enough weight left.
- **Off** — usage history and project totals come in, but spool weights stay
  exactly where they are.

### Free-tier limits still apply

On iPhone, iPad, Mac, Windows, and Android, the free tier holds up to 50 spools.
If an import would push you past your current limit, the preview shows
**Upgrade required to import this preview** and offers an upgrade prompt before
anything is written. A paid Pro subscription removes the limit.

## After you import

A completion summary reports how many records were new versus updated, how many
thumbnails were restored, and any notes the importer flagged (for example, rows
that were saved without catalog enrichment). Tap **Done** to return to Settings.

## Related pages

- [Exporting your data](/docs/data/exporting-your-data/)
- [Importing from other apps](/docs/data/importing-from-other-apps/)
- [Moving to a new device](/docs/data/moving-to-a-new-device/)
`;export{e as default};
