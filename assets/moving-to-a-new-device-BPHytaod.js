const e=`---\r
title: Moving to a new device\r
description: The safest order of operations when you switch machines.\r
order: 8\r
status: published\r
updated: 2026-09-11\r
keywords:\r
  - new device\r
  - transfer\r
  - migrate\r
  - new phone\r
  - new computer\r
  - move\r
  - switch device\r
  - reinstall\r
  - icloud backup\r
  - device backup\r
  - restored iphone\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Moving Spool Hoarder to a new phone or computer is straightforward, but the\r
order matters. The key thing to know up front: **automatic backups and manual\r
backups live on the device that made them.** They do not move with you on their\r
own. To carry your library across, use an export bundle or cloud sync.\r
\r
**Restoring a new iPhone or iPad from a device backup does not carry your\r
inventory across.** Spool Hoarder's database is encrypted with a key held in the\r
device's own secure storage, and a device backup does not carry that key — so\r
the app deliberately leaves the database out of the device backup rather than\r
restoring a file the new device could never open. The app's own backup slots\r
*are* carried across, so if you land on a new device with an empty app, open\r
**Settings → Data & Backup → Backup & Restore** and restore the most recent\r
slot. Doing the export below on the old device first is still the reliable\r
route, and the only one that works between platforms.\r
\r
## Without cloud sync (recommended for everyone)\r
\r
This works on every platform and does not need a subscription.\r
\r
1. **On the old device**, open **Settings → Data & Backup → Export Data**.\r
   Leave **Export All** on so spools, projects, usage logs, your barcode catalog,\r
   locations, and thumbnails all go into the bundle, then tap **Export**. Save\r
   the \`.zip\` somewhere the new device can reach — email it to yourself, drop it\r
   in a cloud drive, or use AirDrop / Quick Share.\r
2. **Install Spool Hoarder** on the new device and finish first-run setup.\r
3. **On the new device**, open **Settings → Data & Backup → Import Data** and\r
   pick the \`.zip\` file.\r
4. Read the **Import Preview**: confirm the counts look right and tap\r
   **Review row errors** if anything is flagged. For a ZIP bundle, row errors\r
   block the import until the file is fixed.\r
5. Confirm the import.\r
\r
## With cloud sync (Pro)\r
\r
If you have a paid Pro subscription, sync does the transfer for you:\r
\r
1. Make sure the old device has synced — **Settings → Account & Subscription →\r
   Sync Now** — so the latest data is in the cloud.\r
2. Install Spool Hoarder on the new device and sign in with the same account.\r
3. When prompted, choose how to handle any data already on the new device\r
   (typically **review and replace** it with your cloud data).\r
4. **Sync Now** to pull everything down.\r
\r
See [Cloud sync](/docs/data/cloud-sync/) for the details.\r
\r
## After you land on the new device\r
\r
Check a few things before you wipe or sell the old one:\r
\r
- **Spool counts match** what you expected.\r
- **Projects and usage logs** are present, with their thumbnails.\r
- **Storage locations** carried over and spools are still assigned to them.\r
- **Currency** on prices is correct — multi-currency data should come through\r
  intact from a ZIP bundle.\r
- Sign back in to any accounts and re-enter anything that is intentionally never\r
  backed up (credentials, API keys).\r
\r
Once everything checks out, the old device is safe to reset. If you want an\r
extra copy for peace of mind, take a **Create Manual Backup** on the new device\r
first — see [Backup and restore](/docs/data/backup-and-restore/).\r
\r
## Related pages\r
\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Importing a CSV](/docs/data/importing-a-csv/)\r
- [Cloud sync](/docs/data/cloud-sync/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [The app will not open](/docs/troubleshooting/app-wont-open/)\r
`;export{e as default};
