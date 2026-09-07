const e=`---\r
title: Camera or file access is blocked\r
description: Restoring camera, photo, and file permissions when a scan or import will not start.\r
order: 6\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - permission\r
  - camera denied\r
  - camera not working\r
  - photos access\r
  - files access\r
  - allow camera\r
  - camera access denied\r
  - grant permission\r
  - reauthorize folder\r
  - screen time camera\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
---\r
\r
Only one permission can actually block you, and only on one kind of device: the\r
camera, on iPhone and iPad. Choosing photos and picking files never need a\r
permission, and the Mac and Windows builds do not use the camera at all.\r
\r
The important thing to know up front: **Spool Hoarder cannot ask you a second\r
time.** There is no "try again" prompt and no button that jumps you to system\r
settings. Once the camera is denied, the only way back is the system Settings\r
app, and this page is the map.\r
\r
## What a blocked camera looks like\r
\r
Spool Hoarder does not show one single error. What you see depends on where you\r
were:\r
\r
- **Scan Spools** (the batch scanner) is the only place that names the problem.\r
  The preview area stays dark and reads **Camera access denied** and\r
  **Grant permission in device Settings**, with **You can still scan by\r
  uploading photos** underneath. The **Scan** button keeps working — it just\r
  opens your photo library instead of the camera.\r
- **Scan with AI → Take Photo** on the Add Spool screen says only **Scan failed.\r
  Please try again.** Trying again will not help while the camera is blocked.\r
  **Choose from Gallery** still works, so scan a photo you have already taken.\r
- **Scan with Camera** on a spool's **Known Barcodes** field shows a black\r
  screen reading **Camera not available**. Back out and choose **Use Hardware\r
  Scanner** instead, or type the barcode in.\r
\r
If nothing at all happens when you tap, check that you are not looking at the\r
gallery picker waiting behind another window.\r
\r
## Restore camera access on iPhone or iPad\r
\r
Either route works — they are two views of the same switch.\r
\r
1. Open the system **Settings** app.\r
2. Scroll down the list of apps to **Spool Hoarder**.\r
3. Turn **Camera** on.\r
\r
Or, coming at it from the other direction:\r
\r
1. Open **Settings → Privacy & Security → Camera**.\r
2. Turn **Spool Hoarder** on.\r
\r
iOS closes an app when you change one of its permissions, so open Spool Hoarder\r
again afterward. If Spool Hoarder is not in either list at all, it has never\r
asked for the camera yet — open the batch scanner once and answer the prompt.\r
\r
### The Camera switch is missing or will not move\r
\r
That is a device restriction, not an app problem. Open\r
**Settings → Screen Time → Content & Privacy Restrictions**, and in the list of\r
allowed apps and features, turn **Camera** back on. You need the Screen Time\r
passcode to change it.\r
\r
On a phone or tablet handed to you by a school or an employer, camera access can\r
be locked by a management profile that you cannot override. Ask whoever manages\r
the device.\r
\r
## Mac and Windows never ask for the camera\r
\r
Neither desktop build uses the camera, so there is no permission to grant and\r
nothing to repair.\r
\r
**On a Mac**, camera access is switched off in the app itself. Spool Hoarder\r
will not appear under **System Settings → Privacy & Security → Camera**, and\r
that is expected — do not go looking for it there. Everything has a\r
camera-free path:\r
\r
- **Scan with AI** opens a file picker so you can choose a photo you already\r
  have.\r
- **Scan Spools** opens the scanning-station view, which listens for a USB or\r
  Bluetooth barcode scanner and offers **Upload spool image** for photos.\r
- For a barcode, choose **Use Hardware Scanner** rather than **Scan with\r
  Camera**.\r
\r
**On Windows**, there is no in-app camera either. **Scan Spools** opens the same\r
scanning-station view with **Upload spool image**, and AI photo scanning is not\r
offered at all — you will see the notice **Photo scanning is available on\r
Android, iOS, and macOS.**\r
\r
## Photos and files do not need a permission\r
\r
This trips people up, so to be explicit: there is no Photos permission to fix.\r
\r
- On **iPhone and iPad**, picking an existing photo uses the system photo\r
  picker. Spool Hoarder never gets access to your library — it only receives the\r
  one picture you hand it. Nothing to grant, nothing to deny.\r
- On **Mac and Windows**, **Choose from Gallery** is an ordinary file open\r
  dialog.\r
- **Importing** a CSV or ZIP, **exporting**, and saving a backup all go through\r
  the system file picker. Choosing the file is what grants access to it, so\r
  there is no separate setting.\r
\r
If a picker opens and then closes with nothing selected, the import was simply\r
canceled. See [An import failed or skipped rows](/docs/troubleshooting/import-problems/)\r
for problems with the file itself.\r
\r
## The one file-access thing that does break: the Print Library on a Mac\r
\r
The Print Library ([Mac and Windows only](/docs/organizing/print-library/))\r
remembers the folder you pointed it at. After a restart, macOS sometimes\r
withdraws that access, and Spool Hoarder cannot take it back on its own.\r
\r
Open **Settings → Print Library**. The setup card shows **macOS needs you to\r
reauthorize this library folder once. Choose the same folder again to restore\r
preview and scan access after restart.**, and the **Choose Folder** button\r
becomes **Reauthorize Folder**. Tap it and pick the **same folder** you were\r
using before. Model previews that are affected show **Reauthorize this library\r
folder to restore previews.** until you do.\r
\r
Picking the same folder is what restores access. Nothing in the folder is moved\r
or re-scanned from scratch.\r
\r
## Access is granted but the camera still will not open\r
\r
- **Another app has the camera.** Close anything else that might be holding it —\r
  a video call, the Camera app, a scanner app running in the background — then\r
  reopen Spool Hoarder.\r
- **You just used NFC.** On iPhone, the camera and NFC cannot run at the same\r
  time.   Spool Hoarder shuts the camera down for an NFC scan and starts it again\r
  afterward, which takes a moment. Wait for the preview to come back rather\r
  than tapping repeatedly.\r
- **Restart the device.** A camera left in a bad state by another app usually\r
  clears on a restart.\r
- **Check the lens.** A case, a privacy slider, or a sticker over the rear camera\r
  produces a black preview that looks exactly like a permission problem.\r
\r
If the preview is still dark after all of that,\r
[contact support](/docs/troubleshooting/contacting-support/) from inside the app\r
so the diagnostic logs come with it.\r
\r
## Related pages\r
\r
- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Barcode scanning](/docs/scanning/barcode-scanning/)\r
- [Print Library](/docs/organizing/print-library/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
