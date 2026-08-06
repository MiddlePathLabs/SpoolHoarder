const a=`---
title: Backup and restore
description: The automatic backups you already have, and how to roll back to one.
order: 6
status: published
updated: 2026-08-04
keywords:
  - backup
  - restore
  - recover
  - rollback
  - slots
  - safety
  - undo
  - automatic backup
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Spool Hoarder keeps rolling backups on your device automatically, so you almost
always have something to roll back to. You can also take a manual backup any
time, and restoring is deliberately a typed, confirmed action because it
replaces everything.

Open **Settings → Data & Backup → Backup & Restore**.

## The three backup slots

There are three slots, each holding one backup:

- **Manual Backup** — written when you tap **Create Manual Backup**. Taking a new
  manual backup replaces the previous one in this slot.
- **Auto Backup (Latest)** — the most recent automatic backup.
- **Auto Backup (Previous)** — the one before it.

Each slot shows whether a backup is available, when it was created, and its size,
so you know exactly what you would be restoring.

## When automatic backups are written

Automatic backups are created when your data changes, at most once every 24
hours. Writing a new automatic backup rotates the previous one into the
**Previous** slot, so you always keep the two most recent automatic snapshots.
This happens in the background — there is no progress banner for it.

## Take a manual backup

**Create Manual Backup** writes a fresh snapshot to the Manual slot right now,
regardless of when the last automatic backup ran. Use it before you do something
you want a clean undo point for — a big [import](/docs/data/importing-a-csv/),
a bulk edit, or clearing all data.

## Restore

The **Restore** section has one button per slot: **Restore Manual Backup**,
**Restore Auto Backup (Latest)**, and **Restore Auto Backup (Previous)**. Each
button is disabled until that slot has a backup.

Restoring is destructive, so it is gated twice:

1. A confirmation dialog explains that **all** current spools, projects, and
   usage logs will be permanently deleted and replaced by the backup, and asks
   you to type **RESTORE** to confirm.
2. Before the restore runs, Spool Hoarder automatically takes a safety backup of
   your current data. If that safety backup fails, you are warned and asked
   whether to continue without a safety net.

Only the restore itself replaces data. The safety backup gives you a way back
even after a restore you change your mind about.

## What is and is not in a backup

Backups include all spools, projects, usage logs, thumbnails, and selected app
settings. Secure credentials and sign-in data are never backed up — you will
need to sign in again after a restore that lands on a fresh state.

## Backups are local to this device

Backup slots live inside this device's app storage. They do not travel with you
to a new phone or computer on their own. To move your full library between
devices, use [Exporting your data](/docs/data/exporting-your-data/) and
[Importing a CSV](/docs/data/importing-a-csv/), or use
[Cloud sync](/docs/data/cloud-sync/) if you have a Pro subscription.

## Related pages

- [Exporting your data](/docs/data/exporting-your-data/)
- [Moving to a new device](/docs/data/moving-to-a-new-device/)
- [Cloud sync](/docs/data/cloud-sync/)
`;export{a as default};
