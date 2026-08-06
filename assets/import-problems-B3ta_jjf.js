const e=`---\r
title: An import failed or skipped rows\r
description: Reading the row-error report on the import preview, and fixing the source file.\r
order: 3\r
status: published\r
updated: 2026-08-06\r
keywords:\r
  - import failed\r
  - import skipped rows\r
  - csv import error\r
  - csv problem\r
  - rows not imported\r
  - missing header\r
  - duplicate id\r
  - invalid number\r
  - import blocked\r
  - file too large\r
  - missing required header\r
  - missing required field\r
  - must be non-negative\r
  - failed to parse csv file\r
  - duplicate spool id\r
  - a price currency is required\r
  - invalid colorhexcodes\r
  - date parse error\r
platforms:\r
  - all\r
---\r
\r
Imports run from **Settings → Data & Backup → Import Data**. You can import a single CSV file or a ZIP bundle. After you pick a file, Spool Hoarder shows an **Import Preview** that lists what it found and flags anything it could not read.\r
\r
## How errors appear\r
\r
Each section of the preview — Spools, Projects, Project Filaments, Usage Logs — shows a count and, next to it, an error count when rows failed.\r
\r
Below the counts, a red card tells you what the errors mean:\r
\r
- For a **CSV file**, the card reads **N row(s) had errors and will be skipped**. The import goes ahead without those rows.\r
- For a **ZIP bundle**, the card reads **N row(s) had errors and block this ZIP import**. You must fix the file before the import can run.\r
\r
Tap **Review row errors** to see every failed row. Each entry shows the row number (or **File-level error** for problems with the whole file), the message explaining what went wrong, and the raw data from that row so you can copy it.\r
\r
There is no in-app retry button. To re-import, close the preview, fix the source file, and start **Import Data** again. You can download a correctly formatted starting point with **Download CSV Template** on the same Data & Backup screen.\r
\r
## Required fields\r
\r
A spool CSV needs only two columns: **brand** and **material**. If either header is missing, every row fails with **Missing required header: brand** or **Missing required header: material**. If a row has those headers but the cell is empty, that row fails with **Missing required field: brand** or **Missing required field: material**.\r
\r
A project CSV needs only a **name** column.\r
\r
Header names are not case-sensitive. \`Brand\`, \`BRAND\`, and \`brand\` all work. Unknown columns are ignored rather than reported, so extra columns do no harm.\r
\r
## Common row errors\r
\r
| Message | Cause | Fix |\r
|---|---|---|\r
| **Missing required field: brand** / **material** | The cell is empty. | Fill in a brand and material for that row. |\r
| **Invalid spoolSize: must be non-negative** (or **remainingWeight**, **price**) | A number is negative. | Make weights, sizes, and prices zero or positive. |\r
| **Invalid colorHexCodes: ...** | A color code is malformed. | Use hex codes like \`#FF8800\`, separated by semicolons. |\r
| **Date parse error for createdAt: ...** | A date is not a recognized format. | Use an ISO date such as \`2026-08-04\`. |\r
| **A price currency is required.** | A row has a price but no currency. | Add a **priceCurrency** value such as \`USD\`. |\r
| **Duplicate spool ID "..." within CSV file.** | The same ID appears twice. | Keep one copy. The first is imported; the rest are skipped. |\r
| **Duplicate project ID "..." within CSV file.** | The same project ID appears twice. | Remove the duplicate rows. |\r
| **Failed to parse CSV file: ...** | The file is not valid CSV. | Re-save the file as CSV from your spreadsheet app. |\r
\r
## File requirements\r
\r
- The file picker accepts **.csv** and **.zip**. Spool Hoarder works out which one\r
  you handed it from the file itself, so a ZIP bundle and a plain CSV both go\r
  through the same **Import Data** action.\r
- The file must be **50 MB or smaller**. Larger files are rejected with **File too\r
  large**.\r
\r
## Tips for a clean file\r
\r
- Export your existing spools first with **Settings → Data & Backup → Export** to see the exact column order Spool Hoarder expects.\r
- Open the CSV in a plain text editor if your spreadsheet mangles dates or numbers. Some locales swap commas and decimals, which breaks numeric fields.\r
- Keep one row per spool and a unique ID in the **spoolId** column for each.\r
- Empty rows are skipped silently, so they will not clutter the report.\r
\r
## Related pages\r
\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)\r
`;export{e as default};
