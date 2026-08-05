const e=`---
title: The app will not open
description: Recovering when Spool Hoarder crashes on launch, and getting your data back.
order: 7
status: published
updated: 2026-08-04
keywords:
  - crash
  - wont open
  - won't start
  - stuck on splash
  - corrupted
  - lost data
  - recover
  - something went wrong
  - app update required
  - reset local database
platforms:
  - ios
  - ipados
  - macos
  - windows
---

**Your spools are almost certainly still there.** A crash on launch does not
erase anything. Your inventory lives in a database file in the app's own
storage, next to up to three rolling backups, and none of it is touched by the
app failing to start. Restoring is the normal fix, and it usually takes a
minute.

Nothing on this page deletes data unless you explicitly choose it. The three
actions that do — **Reset Local Database**, **Restore**, and uninstalling the
app — are called out clearly below.

## Try these first, in this order

1. **Force-quit and reopen.** On iPhone or iPad, swipe up from the bottom and
   flick the Spool Hoarder card away. On a Mac, press Cmd-Q, or use the Apple
   menu → Force Quit. On Windows, close the window, or end the task from Task
   Manager. Then open the app again.
2. **Restart the device.** This clears the surprising number of launch failures
   caused by something else on the device, not by Spool Hoarder.
3. **Install any available update.** The crash may already be fixed. Check the
   App Store on iPhone, iPad, and Mac, or the Microsoft Store on Windows. See
   [Install and first run](/docs/getting-started/install-and-first-run/) for the
   store links.

If the app opens after any of these, you are done — nothing needs restoring.

## "Something went wrong. Please restart the app."

A plain screen with this message means one part of the app failed to draw.
Force-quit and reopen as above. If it comes back every single time, install the
latest update, and if it still happens,
[send us a report](/docs/troubleshooting/contacting-support/) describing what you
were doing just before it started.

## "App update required"

If the app opens but the inventory shows **App update required** with the
message **This app build is older than your local database. Update the app to
open your existing data safely.**, then your data was last written by a newer
version of Spool Hoarder — usually because another device synced to it, or you
restored a backup taken on a newer build.

Nothing is wrong with your data. **Install the update and it opens normally.**

Do not reset anything here. The app deliberately offers only **Try Again** on
this screen, because an older build could damage newer data if it forced its way
in.

## "Local data could not be opened"

This is the one that sounds alarming. The inventory shows **Local data could not
be opened** with the message **Your database file may be damaged or unreadable.
You can try again, or reset local data and restore from a backup.**, and two
buttons: **Try Again** and **Reset Local Database**.

Work through it in this order:

1. **Tap Try Again.** The file can be temporarily locked — by a sync that was
   interrupted, or by a copy of the app that has not fully closed. Retrying
   often just works.
2. **Force-quit the app and restart the device**, then try again once more.
3. **Only then, Reset Local Database.**

### Before you tap Reset Local Database

**Reset Local Database** deletes the database file and creates an empty one. The
confirmation dialog is titled **Reset Local Database?** and explains: *This will
delete the local database file and recreate it. If you have a backup ZIP, you
can restore it from Settings.*

The reassuring part: **it does not touch your backups.** It removes the database
file only. All three backup slots stay exactly where they are, ready to restore
from. So the full recovery is: reset, then restore.

## Restore from a backup

Once the app opens, go to **Settings → Data & Backup → Backup & Restore**. You
have up to three slots to choose from — one manual and the two most recent
automatic backups — each showing when it was taken and how big it is, so you can
pick the newest one from before the trouble started.

Restoring asks you to type **RESTORE** to confirm, and takes a safety backup of
the current state first. Full details are in
[Backup and restore](/docs/data/backup-and-restore/).

## Reinstalling is the last resort

**Read this before you uninstall anything.** Uninstalling removes the app's
storage on your device. That means the database **and all three backup slots**
go with it. Reinstalling gives you a clean, empty app — it does not bring your
inventory back, and there is no copy on our servers to pull down unless you are
a Pro subscriber with [cloud sync](/docs/data/cloud-sync/) already switched on.

So, before you uninstall:

- **If the app opens at all**, even to a broken screen, use
  **Settings → Data & Backup → Export** to write a copy of your data somewhere
  outside the app — a Files folder, a Documents folder, a cloud drive. See
  [Exporting your data](/docs/data/exporting-your-data/).
- **If it does not open at all**, and you are on Windows, see the section below.
- **On iPhone, iPad, or Mac, contact us before uninstalling.** Once the app is
  gone, so is the data, and we cannot recover it for you.

Only reinstall once you have a copy you are happy with, or once you have
accepted that the data on this device is going.

## Rescuing your files by hand (Windows only, advanced)

Treat this as a last resort, when the app will not open far enough to export and
you are about to reinstall.

On **Windows**, Spool Hoarder keeps its files in a **Spool Hoarder** folder
inside your **Documents** folder. Inside it, a **backups** folder holds the
backup slots as \`.zip\` files.

- **Copy** those ZIP files somewhere safe — the desktop, a USB drive, a cloud
  folder. Copy them; do not move, open, or edit the originals in place.
- Each ZIP holds your spools, projects, and usage logs as ordinary
  spreadsheets, plus your thumbnails. It is a genuinely portable copy.
- To bring one back after reinstalling, open
  **Settings → Data & Backup → Import Data**, which accepts a ZIP bundle or a
  CSV file.

**Ignore the \`.sqlite\` file.** It is encrypted with a key held in this device's
own secure credential store. It will not open in any database tool, it will not
work on another machine, and we cannot decrypt it for you either. The backup
ZIPs are the only thing worth copying.

On **iPhone and iPad**, this is not possible. Spool Hoarder's storage is
sandboxed and the app does not publish its folder to the Files app, so there is
no way to reach the database or the backups by hand — with or without a
computer. On a **Mac**, the files sit inside the app's sandbox container rather
than anywhere you would normally browse. On both, talk to us instead of going
hunting.

## When none of this works

[Contact support](/docs/troubleshooting/contacting-support/) — but use the
[website form](/support.html), not the in-app one. The in-app form can attach
diagnostic logs automatically, and that is exactly what you cannot reach when the
app will not start. The website form works from any browser with no sign-in.

Crashes are reported to us automatically on iPhone, iPad, and Mac. They are
**not** on Windows, so if you are on Windows your description is the only thing
we have to go on.

Tell us:

- **Your platform and app version**, and your OS version.
- **Exactly what you see** — a blank screen, an instant close, a spinner that
  never ends, or one of the messages above, quoted.
- **When it started**, and whether the app worked before.
- **What happened just before**, especially an app update, an OS update, a
  restore, an import, or a first sync to a new device.
- **Whether it happens every time** or only sometimes.

Please do not uninstall before you write to us. Once the app is removed, the
on-device data goes with it, and the options get much narrower.

## Related pages

- [Backup and restore](/docs/data/backup-and-restore/)
- [Exporting your data](/docs/data/exporting-your-data/)
- [Moving to a new device](/docs/data/moving-to-a-new-device/)
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)
- [Contacting support](/docs/troubleshooting/contacting-support/)
`;export{e as default};
