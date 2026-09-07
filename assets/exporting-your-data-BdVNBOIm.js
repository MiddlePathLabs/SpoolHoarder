const e=`---\r
title: Exporting your data\r
description: Get a CSV or a full bundle out of the app, whenever you want.\r
order: 4\r
status: published\r
updated: 2026-08-26\r
keywords:\r
  - export\r
  - csv\r
  - zip\r
  - bundle\r
  - download\r
  - backup\r
  - save data\r
  - get my data\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Your data is yours. Spool Hoarder exports a complete, portable bundle you can\r
save anywhere, open on any device, or keep as an off-app backup. There is no\r
lock-in.\r
\r
On iPhone, iPad, and Android the file is\r
offered through the system share sheet so you can save it to Files, a cloud\r
drive, or send it to someone. On Windows you get a standard save\r
dialog.\r
\r
## What you can export\r
\r
Open **Settings → Data & Backup → Export Data** and choose what to include. The\r
export is always a single \`.zip\` file.\r
\r
- **Export All** — toggles every category below at once.\r
- **Spools** — your filament inventory, including spools that have left it. Each row carries the spool's status, the date it changed, the weight it had when it left, any status note, and — for a sold spool — the amount received.\r
- **Projects** — includes each project's filaments, usage logs, and thumbnails.\r
- **UPC Catalog** — your barcode scan history and learned product mappings.\r
- **Include Deleted Data** — also bundles soft-deleted rows, for a complete\r
  backup. Leave this off for a clean, current snapshot.\r
\r
The bundle carries storage locations, selected app settings, and checksums so\r
the [importer](/docs/data/importing-a-csv/) can verify nothing was corrupted.\r
Sample-print images and project thumbnails are embedded in the bundle when they\r
exist; if a file is missing you get a "media warning" notice and the export\r
continues without it.\r
\r
The file is named with the date and time, for example\r
\`spoolhoarder_export_20260804_141522.zip\`.\r
\r
## Where to use it\r
\r
The export bundle can be imported on any device running Spool Hoarder through\r
**Settings → Data & Backup → Import Data** — the same picker handles ZIP bundles\r
and plain CSV. That makes it the right tool for\r
[moving to a new device](/docs/data/moving-to-a-new-device/) or for keeping a\r
copy outside the app.\r
\r
## Exporting just for HueForge\r
\r
If you use HueForge, there is a dedicated exporter at\r
**Settings → Data & Backup → Export for HueForge** that writes the filament list\r
in HueForge's own CSV format. See [HueForge export](/docs/data/hueforge-export/).\r
\r
## Related pages\r
\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [HueForge export](/docs/data/hueforge-export/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
`;export{e as default};
