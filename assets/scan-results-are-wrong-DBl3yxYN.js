const e=`---
title: Scan results are wrong or empty
description: What to check when a scan misses fields, gets them wrong, or fails outright.
order: 1
status: published
updated: 2026-08-04
keywords:
  - scan failed
  - scan wrong
  - scan empty
  - scan not working
  - ai scan inaccurate
  - wrong brand
  - wrong color
  - no spool detected
  - out of credits
  - batch scan
  - barcode not found
platforms:
  - all
---

Spool Hoarder has two ways to scan a spool, and they work differently. The fix depends on which one you used.

- **Scan with AI** (on the Add Spool screen) takes a photo and reads the label with AI. It fills the empty fields on the form.
- **Scan Spools** (the batch scanner) reads the **barcode** on the label and looks it up in the spool catalog. It does not read the printed text with AI.

If your batch scan found nothing, it is almost always because the photo had no readable barcode, not because the AI failed.

## The scan found nothing

### "No barcode found" (batch scan)

The batch scanner needs a visible barcode in the frame. Move closer, improve the lighting, and make sure the barcode is flat and in focus. The message **No barcode found. Try moving closer or improving lighting.** means no barcode was detected at all.

If the spool label has no barcode (some brands print only text), use **Scan with AI** on the Add Spool screen instead.

### "No text detected in image" (AI scan)

The on-device reader could not find any text. Take the photo straight on, fill the frame with the label, and avoid glare. The message **No text detected in image. Try a clearer photo.** appears when the on-device reader returns empty.

## The brand or colour is wrong

AI scans fill only the fields that are empty on your form, and they never overwrite values you already typed. If the brand or colour came through wrong, edit the field directly before you save.

Spool Hoarder checks every scan against the filament catalog and scores the result. Brand and material carry the most weight. When the catalog cannot confirm the brand, the scan drops to a lower confidence and the row is flagged for review.

Confidence shows in three bands:

- **High confidence** — 80% or above. Catalog confirmed the key fields.
- **Review recommended** — 50% to 79%. Something did not match the catalog. Check before saving.
- **Needs review** — below 50%. Treat the result as a starting point and verify the fields.

On the batch review screen, anything below high confidence is highlighted with a **Needs review** badge and a top banner reading **N scans needs your review**. Tap the spool to edit it.

## "No scan credits remaining"

This message means you ran out of the credits that come with the **Managed credits** recognition mode. You only spend credits when that mode is selected.

To scan again:

- Switch recognition mode to **On-Device** (Apple devices) or to a provider you supply your own key for. These do not use credits.
- Buy a 25-credit pack, or subscribe to Pro for 20 credits each month. See [A purchase or credits are missing](/docs/troubleshooting/missing-purchase-or-credits/).

Re-scanning the **same photo** right after a failed scan does not charge you twice. The scan is keyed to the photo, so a quick retry after a network blip costs nothing extra.

## The scan failed with an error

| Message | What it means | What to do |
|---|---|---|
| **Network error. Check your internet connection.** | The phone could not reach the AI service. | Check your connection and try again. |
| **Request timed out. Please try again.** | The request took too long. | Retry. Cloud scans can take up to 90 seconds. |
| **The AI service is busy right now. Please try again in a moment.** | The provider is rate-limiting requests. | Wait a minute and retry. |
| **The AI service is temporarily unavailable. Try again later.** | The provider returned a server error. | Retry shortly. |
| **Image is too large. Try a smaller photo.** | The photo exceeded the size limit. | Move back and let the app scale the photo down. |
| **Invalid API key. Please check your key in Settings.** | Your own key was rejected. | Open **Settings → Preferences → AI Spool Recognition** and correct the key. |
| **Could not parse the AI response. Try again with a clearer photo.** | The result came back unreadable. | Retake the photo with better lighting and focus. |
| **Scan failed. Please try again.** | A catch-all for anything unexpected. | Retry. If it persists, report it. |

In batch scan, network and busy errors are retryable. You get a **Scanner temporarily busy** panel with **Retry Scan**, **Retake**, and **Discard**. Your photo is kept until you decide.

## Scanning is unavailable on my device

### Photo scanning is unavailable on this platform

AI photo scanning runs on Android, iOS, and macOS only. On Windows, Web, and Linux the **Scan with AI** section is hidden and you see **Photo scanning is available on Android, iOS, and macOS.**

On Windows and Web the batch scanner also has no live camera. Use **Upload spool image** to pick a photo from your files instead.

### "On-device AI is unavailable on this device"

On-device scanning needs iOS 26 or later or macOS 26 or later on supported Apple hardware. The message tells you to switch to managed credits or a provider with your own key.

If Apple Intelligence is turned off, open the system **Settings → Apple Intelligence & Siri** and enable it. If the model is still downloading, wait for it to finish.

## Choose the right recognition mode

Open **Settings → Preferences → AI Spool Recognition → Recognition Mode**.

- **On-Device** — free, private, Apple devices only. Nothing leaves your phone.
- **Managed credits** — no setup, uses your included credits, photos processed in the cloud with location data removed first.
- **Google Gemini (BYOK)**, **Anthropic Claude (BYOK)**, **OpenAI (BYOK)** — use your own API key. You pay the provider directly. Your key stays in your device's secure storage.

If a BYOK scan fails with an invalid-key error, test the key from the same screen with the **Test** button.

## Tips for a clean scan

- Fill the frame with the label and shoot straight on.
- Avoid glare and shadows on glossy labels.
- Keep the camera steady.
- For batch scans, make sure the barcode is the brightest, sharpest thing in the photo.

## Related pages

- [An NFC tag will not read](/docs/troubleshooting/nfc-tag-wont-read/)
- [A purchase or credits are missing](/docs/troubleshooting/missing-purchase-or-credits/)
- [Contacting support](/docs/troubleshooting/contacting-support/)
`;export{e as default};
