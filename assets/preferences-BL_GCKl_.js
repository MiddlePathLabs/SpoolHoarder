const e=`---
title: Preferences
description: The behaviour settings — AI recognition, spool defaults, low-stock warnings, catalog sharing, and Spoolman.
order: 3
status: published
updated: 2026-08-04
keywords:
  - preferences
  - settings
  - defaults
  - low stock
  - spool size
  - color advisor
  - colour advisor
  - AI provider
  - BYOK
  - API key
  - credits
  - Spoolman
  - NFC
  - reporting currency
  - exchange rate
platforms:
  - all
---

Open **Settings → Preferences** for the settings that control how Spool Hoarder behaves day to day. The settings are grouped below by what they affect.

## Reporting currency

**Reporting currency** picks the currency used for informational conversions across the app. Your original prices stay stored in the currency you entered them in — choosing a new currency does not rewrite past entries. See [Units, currency, and language](/docs/settings/units-currency-and-language/) for how conversion works and where the rates come from.

## Spool defaults and low-stock warnings

- **Default spool size** — the size pre-filled when you add a new spool. Choices: **250g**, **500g**, **750g**, **1kg**, **2kg**, **3kg**.
- **Low stock warning threshold** — spools below this weight show a low-stock indicator. The warning also applies a floor of 10% of the spool's size, whichever is larger. Choices: **50g**, **100g**, **150g**, **200g**.

See [Low-stock alerts](/docs/insights/low-stock-alerts/).

## Suggestions and community data

- **Color Advisor Suggestions** — shows colour-theory pairing suggestions when adding filaments to a project. On by default.
- **Share Confirmed TD/Hex Measurements** — contributes your TD1-confirmed readings to improve filament data for everyone. Notes, prices, and locations are never shared.
- **Community Barcode Catalog** — recognises barcodes confirmed by other users and shares your confirmed scans. Prices and purchase info are never shared. On by default.

## NFC companion link (mobile only)

**Add Spool Hoarder companion link** — when writing an NFC tag, also writes a record that opens the spool directly in Spool Hoarder. Some OpenSpool readers may not support tags with extra records, and existing tags are left unchanged until you rewrite them. This toggle appears on Android and iOS only. See [NFC tags](/docs/scanning/nfc-tags/).

## AI spool recognition (Apple and Android)

The **AI Spool Recognition** section sets how photos are turned into spool data. **Recognition Mode** can be:

- **Managed credits** — no setup. Scans use your included credits and photos are processed in the cloud, with EXIF metadata stripped before sending.
- **On-Device** — on supported Apple devices, photos are processed entirely on-device using Apple Vision and Foundation Models. Nothing leaves your device.
- **Google Gemini (BYOK)**, **Anthropic Claude (BYOK)**, **OpenAI (BYOK)** — use your own API key. You manage the key, its cost, and rate limits; the key stays in your device's secure storage and photos go directly to that provider.
- **None** — turn recognition off.

For the BYOK providers you can **Save Key**, **Test** the connection, and **Clear Key**. If your device supports on-device AI, a status banner explains whether the model is ready or what it needs (for example, enabling Apple Intelligence or finishing a download).

This section appears on iOS, iPadOS, macOS, and Android. It is not shown on Windows or the web.

For the wider picture, see [Choosing a scan method](/docs/scanning/choosing-a-scan-method/) and [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/). Scan credits are covered in [Scan credits](/docs/scanning/scan-credits/).

## Spoolman QR lookup

**Spoolman QR Lookup** resolves \`SM:SPOOL=\` QR codes against your own Spoolman server. Turn it on, enter your **Server URL** (for example \`http://192.168.1.100:7912\`), and use the **Test connection** button to confirm it. Spool Hoarder contacts your server directly from your device.

## Related pages

- [Units, currency, and language](/docs/settings/units-currency-and-language/)
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
- [Scan credits](/docs/scanning/scan-credits/)
- [NFC tags](/docs/scanning/nfc-tags/)
- [Low-stock alerts](/docs/insights/low-stock-alerts/)
`;export{e as default};
