const e=`---\r
title: The app will not open\r
description: Recovering when Spool Hoarder crashes on launch, and getting your data back.\r
order: 7\r
status: published\r
updated: 2026-08-04\r
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
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
---\r
\r
**Your spools are almost certainly still there.** A crash on launch does not\r
erase anything. Your inventory lives in a database file in the app's own\r
storage, next to up to three rolling backups, and none of it is touched by the\r
app failing to start. Restoring is the normal fix, and it usually takes a\r
minute.\r
\r
Nothing on this page deletes data unless you explicitly choose it. The three\r
actions that do — **Reset Local Database**, **Restore**, and uninstalling the\r
app — are called out clearly below.\r
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
## "Local data could not be opened"\r
\r
This is the one that sounds alarming. The inventory shows **Local data could not\r
be opened** with the message **Your database file may be damaged or unreadable.\r
You can try again, or reset local data and restore from a backup.**, and two\r
buttons: **Try Again** and **Reset Local Database**.\r
\r
Work through it in this order:\r
\r
1. **Tap Try Again.** The file can be temporarily locked — by a sync that was\r
   interrupted, or by a copy of the app that has not fully closed. Retrying\r
   often just works.\r
2. **Force-quit the app and restart the device**, then try again once more.\r
3. **Only then, Reset Local Database.**\r
\r
### Before you tap Reset Local Database\r
\r
**Reset Local Database** deletes the database file and creates an empty one. The\r
confirmation dialog is titled **Reset Local Database?** and explains: *This will\r
delete the local database file and recreate it. If you have a backup ZIP, you\r
can restore it from Settings.*\r
\r
The reassuring part: **it does not touch your backups.** It removes the database\r
file only. All three backup slots stay exactly where they are, ready to restore\r
from. So the full recovery is: reset, then restore.\r
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
