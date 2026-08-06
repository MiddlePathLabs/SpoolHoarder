const e=`---
title: Exporting your data
description: Get a CSV or a full bundle out of the app, whenever you want.
order: 4
status: published
updated: 2026-08-04
keywords:
  - export
  - csv
  - zip
  - bundle
  - download
  - backup
  - save data
  - get my data
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Your data is yours. Spool Hoarder exports a complete, portable bundle you can
save anywhere, open on any device, or keep as an off-app backup. There is no
lock-in.

On iPhone, iPad, and Android the file is
offered through the system share sheet so you can save it to Files, a cloud
drive, or send it to someone. On Windows you get a standard save
dialog.

## What you can export

Open **Settings → Data & Backup → Export Data** and choose what to include. The
export is always a single \`.zip\` file.

- **Export All** — toggles every category below at once.
- **Spools** — your filament inventory.
- **Projects** — includes each project's filaments, usage logs, and thumbnails.
- **UPC Catalog** — your barcode scan history and learned product mappings.
- **Include Deleted Data** — also bundles soft-deleted rows, for a complete
  backup. Leave this off for a clean, current snapshot.

The bundle carries storage locations, selected app settings, and checksums so
the [importer](/docs/data/importing-a-csv/) can verify nothing was corrupted.
Sample-print images and project thumbnails are embedded in the bundle when they
exist; if a file is missing you get a "media warning" notice and the export
continues without it.

The file is named with the date and time, for example
\`spoolhoarder_export_20260804_141522.zip\`.

## Where to use it

The export bundle can be imported on any device running Spool Hoarder through
**Settings → Data & Backup → Import Data** — the same picker handles ZIP bundles
and plain CSV. That makes it the right tool for
[moving to a new device](/docs/data/moving-to-a-new-device/) or for keeping a
copy outside the app.

## Exporting just for HueForge

If you use HueForge, there is a dedicated exporter at
**Settings → Data & Backup → Export for HueForge** that writes the filament list
in HueForge's own CSV format. See [HueForge export](/docs/data/hueforge-export/).

## Related pages

- [Importing a CSV](/docs/data/importing-a-csv/)
- [HueForge export](/docs/data/hueforge-export/)
- [Backup and restore](/docs/data/backup-and-restore/)
- [Moving to a new device](/docs/data/moving-to-a-new-device/)
`;export{e as default};
