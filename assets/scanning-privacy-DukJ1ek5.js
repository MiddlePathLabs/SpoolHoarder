const e=`---\r
title: Scanning and your privacy\r
description: What leaves your device during a scan, and what never does.\r
order: 9\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - privacy\r
  - photo privacy\r
  - exif\r
  - what data is sent\r
  - on device\r
  - cloud scan\r
  - camera data\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder is local-first. Your inventory lives on your device, and most scan\r
methods never send anything anywhere. This page explains exactly what each kind\r
of scan does with your photo and your data.\r
\r
## Which scans never leave your device\r
\r
- **Barcode scans** — barcode detection runs entirely on-device. The digits are\r
  looked up in the shared community catalog (a network request), but no photo is\r
  sent.\r
- **NFC tag reads** — the tag is read by your phone's NFC hardware. Nothing is\r
  uploaded.\r
- **On-Device AI scans** — the photo is processed on your Apple device using\r
  Apple Vision and Foundation Models. No data leaves your phone.\r
\r
## What happens to a cloud scan photo\r
\r
When you use **Managed credits** or a **bring-your-own-key** provider, the photo\r
is sent off-device for AI processing. Before it leaves, Spool Hoarder:\r
\r
1. **Resizes it** to at most 1024×1024 pixels.\r
2. **Compresses** it to JPEG.\r
3. **Strips EXIF metadata** — location, camera, timestamps, and other embedded\r
   data are removed.\r
4. **Deletes the temporary camera file** after the scan (best effort).\r
\r
Where the photo goes depends on the mode:\r
\r
- **Managed credits** — to Spool Hoarder's cloud scan function, which forwards\r
  it to the AI model for processing.\r
- **Bring-your-own-key** — directly to the provider you configured (Google\r
  Gemini, Anthropic Claude, or OpenAI) under your own account.\r
\r
## What Spool Hoarder keeps from a cloud scan\r
\r
For included cloud scans, Spool Hoarder may keep account-linked operational\r
metadata — feature name, model and provider, token counts, credit changes,\r
timestamp, request source, parse status, and estimated cost. This supports\r
credit accounting, abuse prevention, and debugging.\r
\r
The original photo and the raw extracted text are **not** intentionally stored.\r
What comes back is the structured result (brand, material, color, and so on),\r
which you review and choose to save.\r
\r
## You are not charged twice for the same photo\r
\r
Each cloud scan is tagged with a content digest of the image. If you scan the\r
same photo again within a short deduplication window, the server recognizes it\r
and does not charge a second credit.\r
\r
## Community barcode catalog\r
\r
When you scan a barcode, the code is checked against a shared catalog that all\r
users benefit from. When you save a confirmed scan, Spool Hoarder can contribute\r
the barcode-to-filament mapping back so the next person gets a fast lookup.\r
\r
Only product identity is shared — brand, material, color, weight, and the like.\r
**Price and purchase information are never shared.** You can turn contribution\r
off in **Settings → Preferences → Community Barcode Catalog**; lookups still\r
work either way.\r
\r
## Keys and accounts\r
\r
- **Bring-your-own-key API keys** live in your device's secure storage and are\r
  never sent to Spool Hoarder.\r
- Cloud scans in Managed credits mode use your Spool Hoarder session for\r
  authentication, not an API key.\r
\r
## Crash reporting\r
\r
On iPhone, iPad, Android, and Mac release builds, the app uses Firebase\r
Crashlytics for crash and error reporting. Crash reporting is not enabled on\r
Windows. See the\r
[privacy policy](/privacy-policy/) for the full details.\r
\r
## Related pages\r
\r
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Scan credits](/docs/scanning/scan-credits/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
`;export{e as default};
