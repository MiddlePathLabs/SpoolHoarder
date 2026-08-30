const e=`---\r
title: Importing a CSV\r
description: Bring a spreadsheet of spools in, read the preview, and commit only what you want.\r
order: 1\r
status: published\r
updated: 2026-08-27\r
keywords:\r
  - csv\r
  - import\r
  - spreadsheet\r
  - excel\r
  - upload\r
  - import spools\r
  - migrate\r
  - numbers\r
  - google sheets\r
  - status column\r
  - import sold spools\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Importing a CSV is the quickest way to load a batch of spools you already have\r
in a spreadsheet. Spool Hoarder reads the file, shows you exactly what it found,\r
and only writes to your inventory when you confirm.\r
\r
Import and export work on iPhone, iPad, Mac, Windows, and Android.\r
\r
## Start with the template\r
\r
In **Settings → Data & Backup → Download CSV Template**, Spool Hoarder saves a\r
file called \`spool_hoarder_template.csv\`. Open it in Excel, Numbers, or Google\r
Sheets and fill in one row per spool. The template ships with the correct column\r
headers and one example row, so it is the shortest path to a file the importer\r
will accept.\r
\r
Only two columns are required:\r
\r
- **brand**\r
- **material**\r
\r
Every other column is optional, including the spool's name, color, weight, and\r
price. Column headers are matched case-insensitively, so \`Brand\`, \`BRAND\`, and\r
\`brand\` are all accepted. Unknown columns are ignored rather than rejected.\r
\r
### Status columns\r
\r
An export carries each spool's lifecycle status, and an import reads it back, so\r
a file exported from Spool Hoarder round-trips without losing which spools have\r
left your inventory. Five columns carry it:\r
\r
| Column | What it holds |\r
| --- | --- |\r
| \`status\` | \`active\`, \`depleted\` (used up), \`sold\`, \`gifted\`, or \`discarded\` |\r
| \`statusSince\` | When the status last changed, as an ISO-8601 timestamp |\r
| \`statusNote\` | Your note for the current status |\r
| \`exitWeightGrams\` | The weight left on the spool when it left inventory |\r
| \`exitAmount\` | What a sold spool brought in |\r
\r
The importer is forgiving about all five, so a spreadsheet you wrote by hand does\r
not need them:\r
\r
- A missing or empty \`status\` imports as **active**.\r
- A file from an older version that only has the legacy \`depleted\` column imports\r
  a \`depleted = true\` row as **used up**.\r
- A status this version does not recognize is kept exactly as written rather than\r
  being rewritten or stripped.\r
\r
For a status it does recognize, the other four columns are normalized to match:\r
an active spool clears its note, exit weight, and amount, and any status other\r
than sold clears \`exitAmount\`.\r
\r
See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)\r
for what each status means.\r
\r
## Import the file\r
\r
1. Open **Settings → Data & Backup → Import Data**.\r
2. Pick your CSV file (or a [ZIP bundle](/docs/data/exporting-your-data/) — the\r
   same picker handles both and detects which is which).\r
3. Review the preview, then confirm.\r
\r
Files are limited to 50 MB. If you have unsaved spools sitting in the scan tray,\r
Spool Hoarder asks **Discard scanned spools?** before importing, because\r
importing replaces your working data — choose **Import** to continue or\r
**Cancel** to go back and save those scans first.\r
\r
### SpoolStock and other apps\r
\r
The importer recognizes exports from SpoolStock automatically. If your file's\r
headers include \`filament.brand.name\`, the columns are remapped to Spool Hoarder\r
fields on the way in, including hex codes and feature lists. You do not need to\r
reformat a SpoolStock export by hand. See\r
[Importing from other apps](/docs/data/importing-from-other-apps/) for what\r
typically carries across.\r
\r
## Read the preview\r
\r
The **Import Preview** screen summarizes what was found, with a count and an\r
error count for each kind of record: spools, projects, project filaments, usage\r
logs, and thumbnails.\r
\r
- **For a CSV**, rows that cannot be read are skipped and counted as errors. The\r
  import still proceeds with the rows that are valid.\r
- **For a ZIP bundle**, row errors block the import until you fix them, because a\r
  bundle is meant to restore everything as a unit.\r
\r
Tap **Review row errors** to see each problem row by row number, with the reason\r
it was rejected and the original cell contents, so you can correct the source\r
file and try again.\r
\r
### How duplicates are handled\r
\r
Rows are matched by their spool ID. If the same ID already exists in your\r
inventory, the incoming row **updates** the existing spool; if the ID is new, it\r
is **inserted**. A duplicate ID inside the same file is reported as an error and\r
only the first occurrence is kept.\r
\r
### Deducting weight for imported usage\r
\r
If your file includes usage logs, a **Deduct inventory for imported usage**\r
toggle appears:\r
\r
- **On** (default) — imported usage reduces the linked spool's remaining weight.\r
  The import stops if any spool does not have enough weight left.\r
- **Off** — usage history and project totals come in, but spool weights stay\r
  exactly where they are.\r
\r
### Free-tier limits still apply\r
\r
The free tier holds up to 50 spools in your current inventory; spools that\r
have been marked used up, sold, gifted, or discarded do not count.\r
If an import would push you past your current limit, the preview shows\r
**Upgrade required to import this preview** and offers an upgrade prompt before\r
anything is written. A paid Pro subscription removes the limit.\r
\r
## After you import\r
\r
A completion summary reports how many records were new versus updated, how many\r
thumbnails were restored, and any notes the importer flagged (for example, rows\r
that were saved without catalog enrichment). Tap **Done** to return to Settings.\r
\r
## Related pages\r
\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Importing from other apps](/docs/data/importing-from-other-apps/)\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
`;export{e as default};
