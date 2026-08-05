const e=`---
title: Camera or file access is blocked
description: Restoring camera, photo, and file permissions when a scan or import will not start.
order: 6
status: published
updated: 2026-08-04
keywords:
  - permission
  - camera denied
  - camera not working
  - photos access
  - files access
  - allow camera
  - camera access denied
  - grant permission
  - reauthorize folder
  - screen time camera
platforms:
  - ios
  - ipados
  - macos
  - windows
---

Only one permission can actually block you, and only on one kind of device: the
camera, on iPhone and iPad. Choosing photos and picking files never need a
permission, and the Mac and Windows builds do not use the camera at all.

The important thing to know up front: **Spool Hoarder cannot ask you a second
time.** There is no "try again" prompt and no button that jumps you to system
settings. Once the camera is denied, the only way back is the system Settings
app, and this page is the map.

## What a blocked camera looks like

Spool Hoarder does not show one single error. What you see depends on where you
were:

- **Scan Spools** (the batch scanner) is the only place that names the problem.
  The preview area stays dark and reads **Camera access denied** and
  **Grant permission in device Settings**, with **You can still scan by
  uploading photos** underneath. The **Scan** button keeps working — it just
  opens your photo library instead of the camera.
- **Scan with AI → Take Photo** on the Add Spool screen says only **Scan failed.
  Please try again.** Trying again will not help while the camera is blocked.
  **Choose from Gallery** still works, so scan a photo you have already taken.
- **Scan with Camera** on a spool's **Known Barcodes** field shows a black
  screen reading **Camera not available**. Back out and choose **Use Hardware
  Scanner** instead, or type the barcode in.

If nothing at all happens when you tap, check that you are not looking at the
gallery picker waiting behind another window.

## Restore camera access on iPhone or iPad

Either route works — they are two views of the same switch.

1. Open the system **Settings** app.
2. Scroll down the list of apps to **Spool Hoarder**.
3. Turn **Camera** on.

Or, coming at it from the other direction:

1. Open **Settings → Privacy & Security → Camera**.
2. Turn **Spool Hoarder** on.

iOS closes an app when you change one of its permissions, so open Spool Hoarder
again afterwards. If Spool Hoarder is not in either list at all, it has never
asked for the camera yet — open the batch scanner once and answer the prompt.

### The Camera switch is missing or will not move

That is a device restriction, not an app problem. Open
**Settings → Screen Time → Content & Privacy Restrictions**, and in the list of
allowed apps and features, turn **Camera** back on. You need the Screen Time
passcode to change it.

On a phone or tablet handed to you by a school or an employer, camera access can
be locked by a management profile that you cannot override. Ask whoever manages
the device.

## Mac and Windows never ask for the camera

Neither desktop build uses the camera, so there is no permission to grant and
nothing to repair.

**On a Mac**, camera access is switched off in the app itself. Spool Hoarder
will not appear under **System Settings → Privacy & Security → Camera**, and
that is expected — do not go looking for it there. Everything has a
camera-free path:

- **Scan with AI** opens a file picker so you can choose a photo you already
  have.
- **Scan Spools** opens the scanning-station view, which listens for a USB or
  Bluetooth barcode scanner and offers **Upload spool image** for photos.
- For a barcode, choose **Use Hardware Scanner** rather than **Scan with
  Camera**.

**On Windows**, there is no in-app camera either. **Scan Spools** opens the same
scanning-station view with **Upload spool image**, and AI photo scanning is not
offered at all — you will see the notice **Photo scanning is available on
Android, iOS, and macOS.**

## Photos and files do not need a permission

This trips people up, so to be explicit: there is no Photos permission to fix.

- On **iPhone and iPad**, picking an existing photo uses the system photo
  picker. Spool Hoarder never gets access to your library — it only receives the
  one picture you hand it. Nothing to grant, nothing to deny.
- On **Mac and Windows**, **Choose from Gallery** is an ordinary file open
  dialog.
- **Importing** a CSV or ZIP, **exporting**, and saving a backup all go through
  the system file picker. Choosing the file is what grants access to it, so
  there is no separate setting.

If a picker opens and then closes with nothing selected, the import was simply
cancelled. See [An import failed or skipped rows](/docs/troubleshooting/import-problems/)
for problems with the file itself.

## The one file-access thing that does break: the Print Library on a Mac

The Print Library ([Mac and Windows only](/docs/organizing/print-library/))
remembers the folder you pointed it at. After a restart, macOS sometimes
withdraws that access, and Spool Hoarder cannot take it back on its own.

Open **Settings → Print Library**. The setup card shows **macOS needs you to
reauthorize this library folder once. Choose the same folder again to restore
preview and scan access after restart.**, and the **Choose Folder** button
becomes **Reauthorize Folder**. Tap it and pick the **same folder** you were
using before. Model previews that are affected show **Reauthorize this library
folder to restore previews.** until you do.

Picking the same folder is what restores access. Nothing in the folder is moved
or re-scanned from scratch.

## Access is granted but the camera still will not open

- **Another app has the camera.** Close anything else that might be holding it —
  a video call, the Camera app, a scanner app running in the background — then
  reopen Spool Hoarder.
- **You just used NFC.** On iPhone, the camera and NFC cannot run at the same
  time. Spool Hoarder shuts the camera down for an NFC scan and starts it again
  afterwards, which takes a moment. Wait for the preview to come back rather
  than tapping repeatedly.
- **Restart the device.** A camera left in a bad state by another app usually
  clears on a restart.
- **Check the lens.** A case, a privacy slider, or a sticker over the rear camera
  produces a black preview that looks exactly like a permission problem.

If the preview is still dark after all of that,
[contact support](/docs/troubleshooting/contacting-support/) from inside the app
so the diagnostic logs come with it.

## Related pages

- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Barcode scanning](/docs/scanning/barcode-scanning/)
- [Print Library](/docs/organizing/print-library/)
- [Contacting support](/docs/troubleshooting/contacting-support/)
`;export{e as default};
