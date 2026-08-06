const e=`---
title: Scanning and your privacy
description: What leaves your device during a scan, and what never does.
order: 8
status: published
updated: 2026-08-04
keywords:
  - privacy
  - photo privacy
  - exif
  - what data is sent
  - on device
  - cloud scan
  - camera data
platforms:
  - all
---

Spool Hoarder is local-first. Your inventory lives on your device, and most scan
methods never send anything anywhere. This page explains exactly what each kind
of scan does with your photo and your data.

## Which scans never leave your device

- **Barcode scans** — barcode detection runs entirely on-device. The digits are
  looked up in the shared community catalog (a network request), but no photo is
  sent.
- **NFC tag reads** — the tag is read by your phone's NFC hardware. Nothing is
  uploaded.
- **On-Device AI scans** — the photo is processed on your Apple device using
  Apple Vision and Foundation Models. No data leaves your phone.

## What happens to a cloud scan photo

When you use **Managed credits** or a **bring-your-own-key** provider, the photo
is sent off-device for AI processing. Before it leaves, Spool Hoarder:

1. **Resizes it** to at most 1024×1024 pixels.
2. **Compresses** it to JPEG.
3. **Strips EXIF metadata** — location, camera, timestamps, and other embedded
   data are removed.
4. **Deletes the temporary camera file** after the scan (best effort).

Where the photo goes depends on the mode:

- **Managed credits** — to Spool Hoarder's cloud scan function, which forwards
  it to the AI model for processing.
- **Bring-your-own-key** — directly to the provider you configured (Google
  Gemini, Anthropic Claude, or OpenAI) under your own account.

## What Spool Hoarder keeps from a cloud scan

For included cloud scans, Spool Hoarder may keep account-linked operational
metadata — feature name, model and provider, token counts, credit changes,
timestamp, request source, parse status, and estimated cost. This supports
credit accounting, abuse prevention, and debugging.

The original photo and the raw extracted text are **not** intentionally stored.
What comes back is the structured result (brand, material, color, and so on),
which you review and choose to save.

## You are not charged twice for the same photo

Each cloud scan is tagged with a content digest of the image. If you scan the
same photo again within a short deduplication window, the server recognizes it
and does not charge a second credit.

## Community barcode catalog

When you scan a barcode, the code is checked against a shared catalog that all
users benefit from. When you save a confirmed scan, Spool Hoarder can contribute
the barcode-to-filament mapping back so the next person gets a fast lookup.

Only product identity is shared — brand, material, color, weight, and the like.
**Price and purchase information are never shared.** You can turn contribution
off in **Settings → Preferences → Community Barcode Catalog**; lookups still
work either way.

## Keys and accounts

- **Bring-your-own-key API keys** live in your device's secure storage and are
  never sent to Spool Hoarder.
- Cloud scans in Managed credits mode use your Spool Hoarder session for
  authentication, not an API key.

## Crash reporting

On iPhone, iPad, Android, and Mac release builds, the app uses Firebase
Crashlytics for crash and error reporting. Crash reporting is not enabled on
Windows. See the
[privacy policy](/privacy-policy/) for the full details.

## Related pages

- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Scan credits](/docs/scanning/scan-credits/)
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
`;export{e as default};
