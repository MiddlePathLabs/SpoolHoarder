const e=`---
title: Cloud sync
description: Keep the same inventory on more than one device.
order: 7
status: published
updated: 2026-08-04
keywords:
  - sync
  - cloud
  - multi device
  - sign in
  - account
  - backup
  - second device
  - sync across devices
platforms:
  - pro
---

Cloud sync keeps your inventory, projects, and history identical across every
device you sign in on. You edit on one machine and the next pull brings those
changes everywhere else.

Cloud sync is a Pro feature. You need an active paid Pro subscription and a
Spool Hoarder account to use it.

## What syncs

Sync covers your full library: spools, projects and their filaments, usage logs,
printers, storage locations, your barcode (UPC) catalog, and confirmed filament
details. Soft-deletes propagate too, so removing a spool on one device removes
it on the others — records are never hard-deleted through sync.

Sign-in credentials and other secure data are never synced; you sign in on each
device separately.

## Turning it on

Sync is built into **Settings → Account & Subscription**. Sign in with whichever
method you prefer first — **Apple**, **Google**, or **email and password** — and
then link the others so every sign-in method opens the same cloud account. Once
you are signed in and on a paid Pro plan, use **Sync Now** to push and pull.

If you are in the free trial or on the free tier, the account section shows that
cloud sync starts once you become a paid Pro subscriber. Sync is unavailable for
free accounts.

Sync must also be enabled in your build and connected to a configured cloud
backend. If your copy of Spool Hoarder was built without sync, the account
section will not appear at all.

## How conflicts are resolved

Sync uses last-write-wins. Every record carries a timestamp that updates on each
edit, and when the same record was changed on two devices, the one with the
newer timestamp wins. There are no merge prompts to answer.

## Adding a second device

The first time you sign in on a new device, Spool Hoarder checks what is already
on this device and what is in the cloud, then helps you choose:

- If the device has existing local data, you can **link it to this account** or
  **review and replace** it with cloud data.
- If the device's local data is linked to a different account, sync pauses to
  protect that data until you sign out or resolve it.

Once linked, **Sync Now** (and automatic syncs) keeps the device up to date.

## Deleting your account

**Delete Account** permanently removes your Spool Hoarder cloud account, your
synced cloud data, and account-linked support uploads. Your local spools on this
device are not affected. Because deleting the account does not cancel an App
Store or Microsoft Store subscription, you are warned to cancel the subscription
first to avoid being charged again.

## Sync is not a substitute for export

Sync mirrors live data between signed-in devices. It is not an offline archive.
For a portable file you control, or for moving to a device you do not want to
sign in on, use [Exporting your data](/docs/data/exporting-your-data/).

## Related pages

- [Moving to a new device](/docs/data/moving-to-a-new-device/)
- [Exporting your data](/docs/data/exporting-your-data/)
- [Backup and restore](/docs/data/backup-and-restore/)
`;export{e as default};
