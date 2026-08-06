const n=`---\r
title: Scanning a label with AI\r
description: Photographing one spool label and reviewing what the app pulls off it.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - ai scan\r
  - photo scan\r
  - scan label\r
  - camera scan\r
  - take picture of spool\r
  - vision scan\r
  - ocr\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - android\r
---\r
\r
AI photo scan reads a spool's label from a photo and fills in the add form for\r
you. Nothing is saved until you review the result and tap **Save**.\r
\r
You can use it when adding a new spool or editing an existing one. On iPhone and\r
Android you can take a new photo or pick one from your library; on Mac you pick\r
a photo from your files.\r
\r
## Before you start\r
\r
Photo scanning needs a recognition mode set in\r
**Settings → Preferences → AI Spool Recognition**. You have three options:\r
\r
- **On-Device** — free, runs on your Apple device (iPhone or iPad with iOS 26 or later, or Mac with macOS 26 or later and Apple Intelligence), nothing leaves your device.\r
- **Managed credits** — uses the cloud credits that come with Pro. No setup.\r
- A **bring-your-own-key** provider (Google Gemini, Anthropic Claude, or OpenAI)\r
  — uses your own API key.\r
\r
If no mode is set, the **Scan with AI** button will not appear. See\r
[AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/) for how\r
to choose and configure one.\r
\r
## Scanning one spool\r
\r
1. Open the add screen (the **+** button on the inventory) or edit an existing\r
   spool.\r
2. Tap **Scan with AI**.\r
3. Choose **Take Photo** or **Choose from Gallery**. (On Mac, pick a file.)\r
4. Hold steady while the label is read. You will see a status line such as\r
   **Analyzing image...** or, for on-device mode, **Running on-device OCR...**\r
   then **Parsing with on-device AI...**.\r
5. Spool Hoarder shows the fields it pulled off the label and asks you to\r
   confirm before anything is written to the form.\r
6. Review the filled-in fields, fix anything that is wrong, and tap **Save**.\r
\r
A short note under the button reminds you: **AI can make mistakes. Review\r
scanned details carefully before saving. We can't guarantee accuracy or\r
completeness.**\r
\r
## What it fills in\r
\r
The scan tries to read, when they are visible on the label:\r
\r
- Brand and material\r
- Product name and product line\r
- Color description, color family, and hex code\r
- Diameter and spool weight\r
- Price and the currency shown on the label\r
- Extruder and bed temperatures\r
- Special features (matte, silk, glow-in-the-dark, and so on)\r
\r
It leaves fields alone that it cannot read confidently, and it never overwrites\r
anything you have already typed. After the scan, the result is matched against\r
the public filament catalog to clean up brand and material spelling.\r
\r
## If it cannot read the label\r
\r
- **No text detected in image** — the label was unreadable. Retake the photo in\r
  better light, closer, and with the label flat.\r
- **Invalid API key** — for a bring-your-own-key provider, the saved key was\r
  rejected. Check it in **Settings → Preferences → AI Spool Recognition**.\r
- **No scan credits remaining** — you are on managed credits and your balance is\r
  zero. See [Scan credits](/docs/scanning/scan-credits/).\r
- **Network error** or **Request timed out** — check your connection and try\r
  again. Cloud scans need internet; on-device scans do not.\r
\r
For better results, see [Getting better scan results](/docs/scanning/improving-scan-accuracy/).\r
\r
## Nothing is saved without you\r
\r
The scan only fills the form. Spool Hoarder asks you to confirm the extracted\r
fields, applies them, and waits for you to tap **Save**. If you cancel, nothing\r
is kept.\r
\r
## Related pages\r
\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)\r
- [Getting better scan results](/docs/scanning/improving-scan-accuracy/)\r
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)\r
- [Camera and file permissions](/docs/troubleshooting/camera-and-file-permissions/)\r
`;export{n as default};
