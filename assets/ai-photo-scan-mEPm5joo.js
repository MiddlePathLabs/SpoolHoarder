const n=`---
title: Scanning a label with AI
description: Photographing one spool label and reviewing what the app pulls off it.
order: 2
status: published
updated: 2026-08-04
keywords:
  - ai scan
  - photo scan
  - scan label
  - camera scan
  - take picture of spool
  - vision scan
  - ocr
platforms:
  - ios
  - ipados
  - macos
  - android
---

AI photo scan reads a spool's label from a photo and fills in the add form for
you. Nothing is saved until you review the result and tap **Save**.

You can use it when adding a new spool or editing an existing one. On iPhone and
Android you can take a new photo or pick one from your library; on Mac you pick
a photo from your files.

## Before you start

Photo scanning needs a recognition mode set in
**Settings → Preferences → AI Spool Recognition**. You have three options:

- **On-Device** — free, runs on your Apple device, nothing leaves your phone.
- **Managed credits** — uses the cloud credits that come with Pro. No setup.
- A **bring-your-own-key** provider (Google Gemini, Anthropic Claude, or OpenAI)
  — uses your own API key.

If no mode is set, the **Scan with AI** button will not appear. See
[AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/) for how
to choose and configure one.

## Scanning one spool

1. Open the add screen (the **+** button on the inventory) or edit an existing
   spool.
2. Tap **Scan with AI**.
3. Choose **Take Photo** or **Choose from Gallery**. (On Mac, pick a file.)
4. Hold steady while the label is read. You will see a status line such as
   **Analyzing image...** or, for on-device mode, **Running on-device OCR...**
   then **Parsing with on-device AI...**.
5. Spool Hoarder shows the fields it pulled off the label and asks you to
   confirm before anything is written to the form.
6. Review the filled-in fields, fix anything that is wrong, and tap **Save**.

A short note under the button reminds you: **AI can make mistakes. Review
scanned details carefully before saving. We can't guarantee accuracy or
completeness.**

## What it fills in

The scan tries to read, when they are visible on the label:

- Brand and material
- Product name and product line
- Color description, color family, and hex code
- Diameter and spool weight
- Price and the currency shown on the label
- Extruder and bed temperatures
- Special features (matte, silk, glow-in-the-dark, and so on)

It leaves fields alone that it cannot read confidently, and it never overwrites
anything you have already typed. After the scan, the result is matched against
the public filament catalog to clean up brand and material spelling.

## If it cannot read the label

- **No text detected in image** — the label was unreadable. Retake the photo in
  better light, closer, and with the label flat.
- **Invalid API key** — for a bring-your-own-key provider, the saved key was
  rejected. Check it in **Settings → Preferences → AI Spool Recognition**.
- **No scan credits remaining** — you are on managed credits and your balance is
  zero. See [Scan credits](/docs/scanning/scan-credits/).
- **Network error** or **Request timed out** — check your connection and try
  again. Cloud scans need internet; on-device scans do not.

For better results, see [Getting better scan results](/docs/scanning/improving-scan-accuracy/).

## Nothing is saved without you

The scan only fills the form. Spool Hoarder asks you to confirm the extracted
fields, applies them, and waits for you to tap **Save**. If you cancel, nothing
is kept.

## Related pages

- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
- [Getting better scan results](/docs/scanning/improving-scan-accuracy/)
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)
`;export{n as default};
