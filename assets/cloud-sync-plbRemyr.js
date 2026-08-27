const n=`---\r
title: Cloud sync\r
description: Keep the same inventory on more than one device.\r
order: 7\r
status: published\r
updated: 2026-08-27\r
keywords:\r
  - sync\r
  - cloud\r
  - multi device\r
  - sign in\r
  - account\r
  - backup\r
  - second device\r
  - sync across devices\r
platforms:\r
  - pro\r
---\r
\r
Cloud sync keeps your inventory, projects, and history identical across every\r
device you sign in on. You edit on one machine and the next pull brings those\r
changes everywhere else.\r
\r
Cloud sync is a Pro feature. You need an active paid Pro subscription and a\r
Spool Hoarder account to use it.\r
\r
## What syncs\r
\r
Sync covers your full library: spools, projects and their filaments, usage logs,\r
printers, storage locations, your barcode (UPC) catalog, and confirmed filament\r
details. Each spool's status travels with it — mark a spool sold on your phone\r
and it shows as sold on your desktop, with its exit weight, note, and sale\r
amount. Soft-deletes propagate too, so removing a spool on one device removes\r
it on the others — records are never hard-deleted through sync.\r
\r
Sign-in credentials and other secure data are never synced; you sign in on each\r
device separately.\r
\r
## Turning it on\r
\r
Sync is built into **Settings → Account & Subscription**. Sign in with whichever\r
method you prefer first — **Apple**, **Google**, or **email and password** — and\r
then link the others so every sign-in method opens the same cloud account. Once\r
you are signed in and on a paid Pro plan, use **Sync Now** to push and pull.\r
\r
If you are in the free trial or on the free tier, the account section shows that\r
cloud sync starts once you become a paid Pro subscriber. Sync is unavailable for\r
free accounts.\r
\r
Sync must also be enabled in your build and connected to a configured cloud\r
backend. If your copy of Spool Hoarder was built without sync, the account\r
section will not appear at all.\r
\r
## How conflicts are resolved\r
\r
Sync uses last-write-wins. Every record carries a timestamp that updates on each\r
edit, and when the same record was changed on two devices, the one with the\r
newer timestamp wins. There are no merge prompts to answer.\r
\r
## Adding a second device\r
\r
The first time you sign in on a new device, Spool Hoarder checks what is already\r
on this device and what is in the cloud, then helps you choose:\r
\r
- If the device has existing local data, you can **link it to this account** or\r
  **review and replace** it with cloud data.\r
- If the device's local data is linked to a different account, sync pauses to\r
  protect that data until you sign out or resolve it.\r
\r
Once linked, **Sync Now** (and automatic syncs) keeps the device up to date.\r
\r
## Deleting your account\r
\r
**Delete Account** permanently removes your Spool Hoarder cloud account, your\r
synced cloud data, and account-linked support uploads. Your local spools on this\r
device are not affected. Because deleting the account does not cancel an App\r
Store or Microsoft Store subscription, you are warned to cancel the subscription\r
first to avoid being charged again.\r
\r
## Sync is not a substitute for export\r
\r
Sync mirrors live data between signed-in devices. It is not an offline archive.\r
For a portable file you control, or for moving to a device you do not want to\r
sign in on, use [Exporting your data](/docs/data/exporting-your-data/).\r
\r
## Related pages\r
\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [Working offline](/docs/getting-started/working-offline/)\r
`;export{n as default};
