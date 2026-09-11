const e=`---\r
title: The app will not open\r
description: Recovering when Spool Hoarder crashes on launch, and getting your data back.\r
order: 7\r
status: published\r
updated: 2026-09-11\r
keywords:\r
  - crash\r
  - wont open\r
  - won't start\r
  - stuck on splash\r
  - corrupted\r
  - lost data\r
  - recover\r
  - something went wrong\r
  - app update required\r
  - reset local database\r
  - could not be unlocked\r
  - restore your inventory\r
  - recovery screen\r
  - encryption key\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
**Your spools are almost certainly still there.** A crash on launch does not\r
erase anything. Your inventory lives in a database file in the app's own\r
storage, next to up to three rolling backups, and none of it is touched by the\r
app failing to start. Restoring is the normal fix, and it usually takes a\r
minute.\r
\r
If the app cannot open its data at all, it now opens a recovery screen that\r
offers you a backup by name and restores it in one tap — see\r
[The recovery screen](#the-recovery-screen) below.\r
\r
Nothing on this page deletes data unless you explicitly choose it. Setting the\r
local data aside no longer erases it; it is moved into a quarantine folder and\r
kept. The two actions that genuinely replace or destroy data are **Restore**,\r
which replaces what is currently in the app, and uninstalling the app, which\r
takes the backups with it. Both are called out clearly below.\r
\r
## Try these first, in this order\r
\r
1. **Force-quit and reopen.** On iPhone or iPad, swipe up from the bottom and\r
   flick the Spool Hoarder card away. On a Mac, press Cmd-Q, or use the Apple\r
   menu → Force Quit. On Windows, close the window, or end the task from Task\r
   Manager. Then open the app again.\r
2. **Restart the device.** This clears the surprising number of launch failures\r
   caused by something else on the device, not by Spool Hoarder.\r
3. **Install any available update.** The crash may already be fixed. Check the\r
   App Store on iPhone, iPad, and Mac, or the Microsoft Store on Windows. See\r
   [Install and first run](/docs/getting-started/install-and-first-run/) for the\r
   store links.\r
\r
If the app opens after any of these, you are done — nothing needs restoring.\r
\r
## "Something went wrong. Please restart the app."\r
\r
A plain screen with this message means one part of the app failed to draw.\r
Force-quit and reopen as above. If it comes back every single time, install the\r
latest update, and if it still happens,\r
[send us a report](/docs/troubleshooting/contacting-support/) describing what you\r
were doing just before it started.\r
\r
## "App update required"\r
\r
If the app opens but the inventory shows **App update required** with the\r
message **This app build is older than your local database. Update the app to\r
open your existing data safely.**, then your data was last written by a newer\r
version of Spool Hoarder — usually because another device synced to it, or you\r
restored a backup taken on a newer build.\r
\r
Nothing is wrong with your data. **Install the update and it opens normally.**\r
\r
Do not reset anything here. The app deliberately offers only **Try Again** on\r
this screen, because an older build could damage newer data if it forced its way\r
in.\r
\r
## The recovery screen\r
\r
If Spool Hoarder cannot open the data on this device, it no longer drops you on\r
an error screen with nowhere to go. Instead the app opens straight into a\r
recovery screen headed **Restore your inventory**, before the rest of the app\r
loads.\r
\r
It tells you what it found, in this shape:\r
\r
> **We found an automatic backup from September 3 at 4:15 PM containing 42\r
> current spools, 12 history records, and 3 projects.**\r
\r
That count is read out of the backup file itself, not guessed, so you can see\r
what you are about to get back before you commit to it.\r
\r
### Your options on that screen\r
\r
- **Restore this backup** — the main action. It restores the backup named on\r
  the screen and then shows you what came back. Nothing is deleted to make room\r
  for it: the data that would not open is moved aside first and kept.\r
- **Choose another backup** — shown when more than one of the three slots holds\r
  a restorable backup. You get the same one-line description of each, so you can\r
  pick an older one if the newest is from after the trouble started.\r
- **Sign in to recover synced data** — shown on platforms with\r
  [cloud sync](/docs/data/cloud-sync/). Sign-in happens on the recovery screen\r
  itself; you are not sent to Settings to finish. Once you are signed in, your\r
  synced data downloads and recovery finishes on its own.\r
- **Start with an empty inventory** — deliberately tucked under the other\r
  choices, and confirmed before it happens. It opens the app with nothing in it.\r
  The confirmation says it plainly: *Your existing data is kept on this device\r
  and is not deleted, but the app will open with nothing in it.* Nothing is\r
  erased, so you can still come back to a backup later.\r
\r
If a restore does not finish, the screen says so, says that your backup was not\r
changed, and offers **Try this backup again** — you are never left guessing\r
whether it half-worked.\r
\r
### If it asks which currency\r
\r
A backup taken before prices recorded their own currency is still restorable,\r
but the app has to be told what the amounts were in. If you see **Which currency\r
are these prices in?**, pick **USD** or **CAD** — those are the only two the app\r
ever wrote without a currency code — and the restore continues.\r
\r
### If no backup is found\r
\r
The screen says so directly: *We could not find a backup on this device to\r
restore from.* If you are signed in for cloud sync, **Sign in to recover synced\r
data** is still the way back. If not, and you have an export ZIP saved outside\r
the app, start with an empty inventory and then use\r
**Settings → Data & Backup → Import Data**. See\r
[Exporting your data](/docs/data/exporting-your-data/).\r
\r
## "Local data could not be unlocked"\r
\r
You may see this inside the app rather than on the recovery screen. It means the\r
data on this device is intact but encrypted, and the key that unlocks it is no\r
longer in the device's secure storage — the usual cause is a device restore or a\r
re-install that left the credential store behind.\r
\r
**Your file is not deleted, and it is not damaged.** There is no **Try Again**\r
on this screen on purpose: a key that has gone missing will still be missing a\r
second later, and repeatedly retrying is how people conclude the app is broken\r
and uninstall it — which is the one action that destroys the backups too.\r
\r
Restore from a backup, or sign in and pull your data down from\r
[cloud sync](/docs/data/cloud-sync/).\r
\r
## "Local data could not be opened"\r
\r
This one means the database file itself would not open. The screen offers **Try\r
Again**, **Set aside and start fresh**, and a link to this page.\r
\r
Work through it in this order:\r
\r
1. **Tap Try Again.** The file can be temporarily locked — by a sync that was\r
   interrupted, or by a copy of the app that has not fully closed. Retrying\r
   often just works.\r
2. **Force-quit the app and restart the device**, then try again once more.\r
3. **Only then, Set aside and start fresh.**\r
\r
### What "Set aside and start fresh" actually does\r
\r
It does **not** delete anything. The confirmation is titled **Reset Local\r
Database?** and says: *This moves the local database aside and starts a fresh\r
one. The original file is kept, so it can still be recovered if its encryption\r
key comes back.*\r
\r
The old database file is moved into a quarantine folder inside the app's own\r
storage and left there. A new, empty database is created in its place, and the\r
app confirms: *Local database reset. Your previous data was moved aside, not\r
deleted.* Your backup slots are untouched by this — they live in a separate\r
folder — so the full recovery is: set aside, then restore.\r
\r
## Restore from a backup\r
\r
Once the app opens, go to **Settings → Data & Backup → Backup & Restore**. You\r
have up to three slots to choose from — one manual and the two most recent\r
automatic backups — each showing when it was taken and how big it is, so you can\r
pick the newest one from before the trouble started.\r
\r
Restoring asks you to type **RESTORE** to confirm, and takes a safety backup of\r
the current state first. Full details are in\r
[Backup and restore](/docs/data/backup-and-restore/).\r
\r
## Reinstalling is the last resort\r
\r
**Read this before you uninstall anything.** Uninstalling removes the app's\r
storage on your device. That means the database **and all three backup slots**\r
go with it. Reinstalling gives you a clean, empty app — it does not bring your\r
inventory back, and there is no copy on our servers to pull down unless you are\r
a Pro subscriber with [cloud sync](/docs/data/cloud-sync/) already switched on.\r
\r
So, before you uninstall:\r
\r
- **If the app opens at all**, even to a broken screen, use\r
  **Settings → Data & Backup → Export** to write a copy of your data somewhere\r
  outside the app — a Files folder, a Documents folder, a cloud drive. See\r
  [Exporting your data](/docs/data/exporting-your-data/).\r
- **If it does not open at all**, and you are on Windows, see the section below.\r
- **On iPhone, iPad, or Mac, contact us before uninstalling.** Once the app is\r
  gone, so is the data, and we cannot recover it for you.\r
\r
Only reinstall once you have a copy you are happy with, or once you have\r
accepted that the data on this device is going.\r
\r
## Rescuing your files by hand (Windows only, advanced)\r
\r
Treat this as a last resort, when the app will not open far enough to export and\r
you are about to reinstall.\r
\r
On **Windows**, Spool Hoarder keeps its files in a **Spool Hoarder** folder\r
inside your **Documents** folder. Inside it, a **backups** folder holds the\r
backup slots as \`.zip\` files.\r
\r
- **Copy** those ZIP files somewhere safe — the desktop, a USB drive, a cloud\r
  folder. Copy them; do not move, open, or edit the originals in place.\r
- Each ZIP holds your spools, projects, and usage logs as ordinary\r
  spreadsheets, plus your thumbnails. It is a genuinely portable copy.\r
- To bring one back after reinstalling, open\r
  **Settings → Data & Backup → Import Data**, which accepts a ZIP bundle or a\r
  CSV file.\r
\r
**Ignore the \`.sqlite\` file.** It is encrypted with a key held in this device's\r
own secure credential store. It will not open in any database tool, it will not\r
work on another machine, and we cannot decrypt it for you either. The backup\r
ZIPs are the only thing worth copying.\r
\r
On **iPhone and iPad**, this is not possible. Spool Hoarder's storage is\r
sandboxed and the app does not publish its folder to the Files app, so there is\r
no way to reach the database or the backups by hand — with or without a\r
computer. On a **Mac**, the files sit inside the app's sandbox container rather\r
than anywhere you would normally browse. On both, talk to us instead of going\r
hunting.\r
\r
## When none of this works\r
\r
[Contact support](/docs/troubleshooting/contacting-support/) — but use the\r
[website form](/support.html), not the in-app one. The in-app form can attach\r
diagnostic logs automatically, and that is exactly what you cannot reach when the\r
app will not start. The website form works from any browser with no sign-in.\r
\r
Crashes are reported to us automatically on iPhone, iPad, and Mac. They are\r
**not** on Windows, so if you are on Windows your description is the only thing\r
we have to go on.\r
\r
Tell us:\r
\r
- **Your platform and app version**, and your OS version.\r
- **Exactly what you see** — a blank screen, an instant close, a spinner that\r
  never ends, or one of the messages above, quoted.\r
- **When it started**, and whether the app worked before.\r
- **What happened just before**, especially an app update, an OS update, a\r
  restore, an import, or a first sync to a new device.\r
- **Whether it happens every time** or only sometimes.\r
\r
Please do not uninstall before you write to us. Once the app is removed, the\r
on-device data goes with it, and the options get much narrower.\r
\r
## Related pages\r
\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
- [Moving to a new device](/docs/data/moving-to-a-new-device/)\r
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
