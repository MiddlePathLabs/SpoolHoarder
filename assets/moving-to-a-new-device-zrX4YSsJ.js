const e=`---
title: Moving to a new device
description: The safest order of operations when you switch machines.
order: 8
status: published
updated: 2026-08-04
keywords:
  - new device
  - transfer
  - migrate
  - new phone
  - new computer
  - move
  - switch device
  - reinstall
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Moving Spool Hoarder to a new phone or computer is straightforward, but the
order matters. The key thing to know up front: **automatic backups and manual
backups live on the device that made them.** They do not move with you on their
own. To carry your library across, use an export bundle or cloud sync.

## Without cloud sync (recommended for everyone)

This works on every platform and does not need a subscription.

1. **On the old device**, open **Settings → Data & Backup → Export Data**.
   Leave **Export All** on so spools, projects, usage logs, your barcode catalog,
   locations, and thumbnails all go into the bundle, then tap **Export**. Save
   the \`.zip\` somewhere the new device can reach — email it to yourself, drop it
   in a cloud drive, or use AirDrop / Quick Share.
2. **Install Spool Hoarder** on the new device and finish first-run setup.
3. **On the new device**, open **Settings → Data & Backup → Import Data** and
   pick the \`.zip\` file.
4. Read the **Import Preview**: confirm the counts look right and tap
   **Review row errors** if anything is flagged. For a ZIP bundle, row errors
   block the import until the file is fixed.
5. Confirm the import.

## With cloud sync (Pro)

If you have a paid Pro subscription, sync does the transfer for you:

1. Make sure the old device has synced — **Settings → Account & Subscription →
   Sync Now** — so the latest data is in the cloud.
2. Install Spool Hoarder on the new device and sign in with the same account.
3. When prompted, choose how to handle any data already on the new device
   (typically **review and replace** it with your cloud data).
4. **Sync Now** to pull everything down.

See [Cloud sync](/docs/data/cloud-sync/) for the details.

## After you land on the new device

Check a few things before you wipe or sell the old one:

- **Spool counts match** what you expected.
- **Projects and usage logs** are present, with their thumbnails.
- **Storage locations** carried over and spools are still assigned to them.
- **Currency** on prices is correct — multi-currency data should come through
  intact from a ZIP bundle.
- Sign back in to any accounts and re-enter anything that is intentionally never
  backed up (credentials, API keys).

Once everything checks out, the old device is safe to reset. If you want an
extra copy for peace of mind, take a **Create Manual Backup** on the new device
first — see [Backup and restore](/docs/data/backup-and-restore/).

## Related pages

- [Exporting your data](/docs/data/exporting-your-data/)
- [Importing a CSV](/docs/data/importing-a-csv/)
- [Cloud sync](/docs/data/cloud-sync/)
- [Backup and restore](/docs/data/backup-and-restore/)
`;export{e as default};
