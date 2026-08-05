const e=`---
title: An import failed or skipped rows
description: Reading the row-error report on the import preview, and fixing the source file.
order: 3
status: published
updated: 2026-08-04
keywords:
  - import failed
  - import skipped rows
  - csv import error
  - csv problem
  - rows not imported
  - missing header
  - duplicate id
  - invalid number
  - import blocked
platforms:
  - all
---

Imports run from **Settings → Data & Backup → Import Data**. You can import a single CSV file or a ZIP bundle. After you pick a file, Spool Hoarder shows an **Import Preview** that lists what it found and flags anything it could not read.

## How errors appear

Each section of the preview — Spools, Projects, Project Filaments, Usage Logs — shows a count and, next to it, an error count when rows failed.

Below the counts, a red card tells you what the errors mean:

- For a **CSV file**, the card reads **N row(s) had errors and will be skipped**. The import goes ahead without those rows.
- For a **ZIP bundle**, the card reads **N row(s) had errors and block this ZIP import**. You must fix the file before the import can run.

Tap **Review row errors** to see every failed row. Each entry shows the row number (or **File-level error** for problems with the whole file), the message explaining what went wrong, and the raw data from that row so you can copy it.

There is no in-app retry button. To re-import, close the preview, fix the source file, and start **Import Data** again. You can download a correctly formatted starting point with **Download CSV Template** on the same Data & Backup screen.

## Required fields

A spool CSV needs only two columns: **brand** and **material**. If either header is missing, every row fails with **Missing required header: brand** or **Missing required header: material**. If a row has those headers but the cell is empty, that row fails with **Missing required field: brand** or **Missing required field: material**.

A project CSV needs only a **name** column.

Header names are not case-sensitive. \`Brand\`, \`BRAND\`, and \`brand\` all work. Unknown columns are ignored rather than reported, so extra columns do no harm.

## Common row errors

| Message | Cause | Fix |
|---|---|---|
| **Missing required field: brand** / **material** | The cell is empty. | Fill in a brand and material for that row. |
| **Invalid spoolSize: must be non-negative** (or **remainingWeight**, **price**) | A number is negative. | Make weights, sizes, and prices zero or positive. |
| **Invalid colorHexCodes: ...** | A colour code is malformed. | Use hex codes like \`#FF8800\`, separated by semicolons. |
| **Date parse error for createdAt: ...** | A date is not a recognised format. | Use an ISO date such as \`2026-08-04\`. |
| **A price currency is required.** | A row has a price but no currency. | Add a **priceCurrency** value such as \`USD\`. |
| **Duplicate spool ID "..." within CSV file.** | The same ID appears twice. | Keep one copy. The first is imported; the rest are skipped. |
| **Duplicate project ID "..." within CSV file.** | The same project ID appears twice. | Remove the duplicate rows. |
| **Failed to parse CSV file: ...** | The file is not valid CSV. | Re-save the file as CSV from your spreadsheet app. |

## File requirements

- The file must end in **.csv**. Anything else is rejected with **Invalid file type**.
- The file must be **2 MB or smaller**. Larger files are rejected with **File too large**.
- CSV import is not available on Web. Use a desktop or mobile build.

## Tips for a clean file

- Export your existing spools first with **Settings → Data & Backup → Export** to see the exact column order Spool Hoarder expects.
- Open the CSV in a plain text editor if your spreadsheet mangles dates or numbers. Some locales swap commas and decimals, which breaks numeric fields.
- Keep one row per spool and a unique ID in the **spoolId** column for each.
- Empty rows are skipped silently, so they will not clutter the report.

## Related pages

- [Contacting support](/docs/troubleshooting/contacting-support/)
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)
`;export{e as default};
