const e=`---\r
title: Backup and restore\r
description: The automatic backups you already have, and how to roll back to one.\r
order: 6\r
status: published\r
updated: 2026-09-11\r
keywords:\r
  - backup\r
  - restore\r
  - recover\r
  - rollback\r
  - slots\r
  - safety\r
  - undo\r
  - automatic backup\r
  - recovery\r
  - spool limit on restore\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Spool Hoarder keeps rolling backups on your device automatically, so you almost\r
always have something to roll back to. You can also take a manual backup any\r
time, and restoring is deliberately a typed, confirmed action because it\r
replaces everything.\r
\r
Open **Settings → Data & Backup → Backup & Restore**.\r
\r
## The three backup slots\r
\r
There are three slots, each holding one backup:\r
\r
- **Manual Backup** — written when you tap **Create Manual Backup**. Taking a new\r
  manual backup replaces the previous one in this slot.\r
- **Auto Backup (Latest)** — the most recent automatic backup.\r
- **Auto Backup (Previous)** — the one before it.\r
\r
Each slot shows whether a backup is available, when it was created, and its size,\r
so you know exactly what you would be restoring.\r
\r
## When automatic backups are written\r
\r
Automatic backups are created when your data changes, at most once every 24\r
hours. Writing a new automatic backup rotates the previous one into the\r
**Previous** slot, so you always keep the two most recent automatic snapshots.\r
This happens in the background — there is no progress banner for it.\r
\r
## Take a manual backup\r
\r
**Create Manual Backup** writes a fresh snapshot to the Manual slot right now,\r
regardless of when the last automatic backup ran. Use it before you do something\r
you want a clean undo point for — a big [import](/docs/data/importing-a-csv/),\r
a bulk edit, or clearing all data.\r
\r
## Restore\r
\r
The **Restore** section has one button per slot: **Restore Manual Backup**,\r
**Restore Auto Backup (Latest)**, and **Restore Auto Backup (Previous)**. Each\r
button is disabled until that slot has a backup.\r
\r
Restoring is destructive, so it is gated twice:\r
\r
1. A confirmation dialog explains that **all** current spools, projects, and\r
   usage logs will be permanently deleted and replaced by the backup, and asks\r
   you to type **RESTORE** to confirm.\r
2. Before the restore runs, Spool Hoarder automatically takes a safety backup of\r
   your current data. If that safety backup fails, you are warned and asked\r
   whether to continue without a safety net.\r
\r
Only the restore itself replaces data. The safety backup gives you a way back\r
even after a restore you change your mind about.\r
\r
### The free-plan limit and restores\r
\r
Where the free-tier spool cap applies — see\r
[Free tier, trial, and limits](/docs/account/free-trial-and-limits/) — a restore\r
is refused if it would leave you over it. That count is **your current inventory\r
after the restore** — spools you\r
have marked used up, sold, gifted, or discarded come back with the rest of the\r
backup and do not count toward it. A long history costs you nothing here. If a\r
restore is refused, the message names the projected count, your current count,\r
and the limit.\r
\r
A restore that the app performs during\r
[recovery](/docs/troubleshooting/app-wont-open/) — from a backup slot it wrote\r
itself, because your local data would not open — is never refused by the limit.\r
Your data comes back in full. Adding or reinstating a further spool while over\r
the limit is still blocked, as it is everywhere else.\r
\r
## What is and is not in a backup\r
\r
Backups include all spools, projects, usage logs, thumbnails, and selected app\r
settings. Spools that have left your inventory are included with their status\r
and exit details intact, so a restore brings back what you sold, gifted,\r
discarded, or used up alongside your current inventory. Secure credentials and sign-in data are never backed up — you will\r
need to sign in again after a restore that lands on a fresh state.\r
\r
## Backups are what recovery restores from\r
\r
If Spool Hoarder ever cannot open your data on this device, it opens a recovery\r
screen that reads these same slots, tells you which backup it found, when it was\r
taken, and how many current spools, history records, and projects are in it, and\r
restores it in one tap — without deleting the data that would not open. That is\r
why the slots are worth keeping. See\r
[The app will not open](/docs/troubleshooting/app-wont-open/).\r
\r
## Backups are local to this device\r
\r
Backup slots live inside this device's app storage. They do not travel with you\r
to a new phone or computer on their own.\r
\r
On iPhone and iPad they **are** included in the device's own backup, and are\r
meant to be: a backup ZIP is self-contained and restores anywhere. The app's\r
database file is deliberately left out of the device backup, because it is\r
encrypted with a key that the device backup does not carry — restoring it onto a\r
new device would produce a file nothing could read.\r
\r
To move your full library between\r
devices, use [Exporting your data](/docs/data/exporting-your-data/) and\r
[Importing a CSV](/docs/data/importing-a-csv/), or use\r
[Cloud sync](/docs/data/cloud-sync/) if you have a Pro subscription.\r
\r
## Related pages\r
\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
- [Cloud sync](/docs/data/cloud-sync/)\r
- [The app will not open](/docs/troubleshooting/app-wont-open/)\r
- [Free tier, trial, and limits](/docs/account/free-trial-and-limits/)\r
`;export{e as default};
