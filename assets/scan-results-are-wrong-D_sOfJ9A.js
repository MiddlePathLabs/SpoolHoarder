const e=`---\r
title: Scan results are wrong or empty\r
description: What to check when a scan misses fields, gets them wrong, or fails outright.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - scan failed\r
  - scan wrong\r
  - scan empty\r
  - scan not working\r
  - ai scan inaccurate\r
  - wrong brand\r
  - wrong color\r
  - no spool detected\r
  - out of credits\r
  - batch scan\r
  - barcode not found\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder has two ways to scan a spool, and they work differently. The fix depends on which one you used.\r
\r
- **Scan with AI** (on the Add Spool screen) takes a photo and reads the label with AI. It fills the empty fields on the form.\r
- **Scan Spools** (the batch scanner) reads the **barcode** on the label and looks it up in the spool catalog. It does not read the printed text with AI.\r
\r
If your batch scan found nothing, it is almost always because the photo had no readable barcode, not because the AI failed.\r
\r
## The scan found nothing\r
\r
### "No barcode found" (batch scan)\r
\r
The batch scanner needs a visible barcode in the frame. Move closer, improve the lighting, and make sure the barcode is flat and in focus. The message **No barcode found. Try moving closer or improving lighting.** means no barcode was detected at all.\r
\r
If the spool label has no barcode (some brands print only text), use **Scan with AI** on the Add Spool screen instead.\r
\r
### "No text detected in image" (AI scan)\r
\r
The on-device reader could not find any text. Take the photo straight on, fill the frame with the label, and avoid glare. The message **No text detected in image. Try a clearer photo.** appears when the on-device reader returns empty.\r
\r
## The brand or color is wrong\r
\r
AI scans fill only the fields that are empty on your form, and they never overwrite values you already typed. If the brand or color came through wrong, edit the field directly before you save.\r
\r
Spool Hoarder checks every scan against the filament catalog and scores the result. Brand and material carry the most weight. When the catalog cannot confirm the brand, the scan drops to a lower confidence and the row is flagged for review.\r
\r
Confidence shows in three bands:\r
\r
- **High confidence** — 80% or above. Catalog confirmed the key fields.\r
- **Review recommended** — 50% to 79%. Something did not match the catalog. Check before saving.\r
- **Needs review** — below 50%. Treat the result as a starting point and verify the fields.\r
\r
On the batch review screen, anything below high confidence is highlighted with a **Needs review** badge and a top banner reading **N scans needs your review**. Tap the spool to edit it.\r
\r
## "No scan credits remaining"\r
\r
This message means you ran out of the credits that come with the **Managed credits** recognition mode. You only spend credits when that mode is selected.\r
\r
To scan again:\r
\r
- Switch recognition mode to **On-Device** (Apple devices) or to a provider you supply your own key for. These do not use credits.\r
- Buy a 25-credit pack, or subscribe to Pro for 20 credits each month. See [A purchase or credits are missing](/docs/troubleshooting/missing-purchase-or-credits/).\r
\r
Re-scanning the **same photo** right after a failed scan does not charge you twice. The scan is keyed to the photo, so a quick retry after a network blip costs nothing extra.\r
\r
## The scan failed with an error\r
\r
| Message | What it means | What to do |\r
|---|---|---|\r
| **Network error. Check your internet connection.** | The phone could not reach the AI service. | Check your connection and try again. |\r
| **Request timed out. Please try again.** | The request took too long. | Retry. Cloud scans can take up to 90 seconds. |\r
| **The AI service is busy right now. Please try again in a moment.** | The provider is rate-limiting requests. | Wait a minute and retry. |\r
| **The AI service is temporarily unavailable. Try again later.** | The provider returned a server error. | Retry shortly. |\r
| **Image is too large. Try a smaller photo.** | The photo exceeded the size limit. | Move back and let the app scale the photo down. |\r
| **Invalid API key. Please check your key in Settings.** | Your own key was rejected. | Open **Settings → Preferences → AI Spool Recognition** and correct the key. |\r
| **Could not parse the AI response. Try again with a clearer photo.** | The result came back unreadable. | Retake the photo with better lighting and focus. |\r
| **Scan failed. Please try again.** | A catch-all for anything unexpected. | Retry. If it persists, report it. |\r
\r
In batch scan, network and busy errors are retryable. You get a **Scanner temporarily busy** panel with **Retry Scan**, **Retake**, and **Discard**. Your photo is kept until you decide.\r
\r
## Scanning is unavailable on my device\r
\r
### Photo scanning is unavailable on this platform\r
\r
AI photo scanning runs on Android, iOS, and macOS only. On Windows the **Scan with AI** section is hidden and you see **Photo scanning is available on Android, iOS, and macOS.**\r
\r
On Windows the batch scanner also has no live camera. Use **Upload spool image** to pick a photo from your files instead.\r
\r
### "On-device AI is unavailable on this device"\r
\r
On-device scanning needs iOS 26 or later or macOS 26 or later on supported Apple hardware. The message tells you to switch to managed credits or a provider with your own key.\r
\r
If Apple Intelligence is turned off, open the system **Settings → Apple Intelligence & Siri** and enable it. If the model is still downloading, wait for it to finish.\r
\r
## Choose the right recognition mode\r
\r
Open **Settings → Preferences → AI Spool Recognition → Recognition Mode**.\r
\r
- **On-Device** — free, private, Apple devices only. Nothing leaves your phone.\r
- **Managed credits** — no setup, uses your included credits, photos processed in the cloud with location data removed first.\r
- **Google Gemini (BYOK)**, **Anthropic Claude (BYOK)**, **OpenAI (BYOK)** — use your own API key. You pay the provider directly. Your key stays in your device's secure storage.\r
\r
If a BYOK scan fails with an invalid-key error, test the key from the same screen with the **Test** button.\r
\r
## Tips for a clean scan\r
\r
- Fill the frame with the label and shoot straight on.\r
- Avoid glare and shadows on glossy labels.\r
- Keep the camera steady.\r
- For batch scans, make sure the barcode is the brightest, sharpest thing in the photo.\r
\r
## Related pages\r
\r
- [An NFC tag will not read](/docs/troubleshooting/nfc-tag-wont-read/)\r
- [A purchase or credits are missing](/docs/troubleshooting/missing-purchase-or-credits/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
