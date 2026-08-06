const e=`---\r
title: Preferences\r
description: The behavior settings — AI recognition, spool defaults, low-stock warnings, catalog sharing, and Spoolman.\r
order: 3\r
status: published\r
updated: 2026-08-06\r
keywords:\r
  - preferences\r
  - settings\r
  - defaults\r
  - low stock\r
  - spool size\r
  - color advisor\r
  - colour advisor\r
  - AI provider\r
  - BYOK\r
  - API key\r
  - credits\r
  - Spoolman\r
  - NFC\r
  - reporting currency\r
  - exchange rate\r
platforms:\r
  - all\r
---\r
\r
Open **Settings → Preferences** for the settings that control how Spool Hoarder behaves day to day. The settings are grouped below by what they affect.\r
\r
## Reporting currency\r
\r
**Reporting currency** picks the currency used for informational conversions across the app. Your original prices stay stored in the currency you entered them in — choosing a new currency does not rewrite past entries. See [Units, currency, and language](/docs/settings/units-currency-and-language/) for how conversion works and where the rates come from.\r
\r
## Spool defaults and low-stock warnings\r
\r
- **Default spool size** — the size pre-filled when you add a new spool. Choices: **250g**, **500g**, **750g**, **1kg**, **2kg**, **3kg**.\r
- **Low stock warning threshold** — spools below this weight show a low-stock indicator. The warning also applies a floor of 10% of the spool's size, whichever is larger. Choices: **50g**, **100g**, **150g**, **200g**.\r
\r
See [Low-stock alerts](/docs/insights/low-stock-alerts/).\r
\r
## Suggestions and community data\r
\r
- **Color Advisor Suggestions** — shows color-theory pairing suggestions when adding filaments to a project. On by default.\r
- **Share Confirmed TD/Hex Measurements** — contributes your TD1-confirmed readings to improve filament data for everyone. Notes, prices, and locations are never shared. See [Scanning with a TD1](/docs/scanning/td1-scanner/).\r
- **Community Barcode Catalog** — recognizes barcodes confirmed by other users and shares your confirmed scans. Prices and purchase info are never shared. On by default.\r
\r
## NFC companion link (mobile only)\r
\r
**Add Spool Hoarder companion link** — when writing an NFC tag, also writes a record that opens the spool directly in Spool Hoarder. Some OpenSpool readers may not support tags with extra records, and existing tags are left unchanged until you rewrite them. This toggle appears on Android and iOS only. See [NFC tags](/docs/scanning/nfc-tags/).\r
\r
## AI spool recognition (Apple and Android)\r
\r
The **AI Spool Recognition** section sets how photos are turned into spool data. **Recognition Mode** can be:\r
\r
- **Managed credits** — no setup. Scans use your included credits and photos are processed in the cloud, with EXIF metadata stripped before sending.\r
- **On-Device** — on supported Apple devices, photos are processed entirely on-device using Apple Vision and Foundation Models. Nothing leaves your device.\r
- **Google Gemini (BYOK)**, **Anthropic Claude (BYOK)**, **OpenAI (BYOK)** — use your own API key. You manage the key, its cost, and rate limits; the key stays in your device's secure storage and photos go directly to that provider.\r
- **None** — turn recognition off.\r
\r
For the BYOK providers you can **Save Key**, **Test** the connection, and **Clear Key**. If your device supports on-device AI, a status banner explains whether the model is ready or what it needs (for example, enabling Apple Intelligence or finishing a download).\r
\r
This section appears on iOS, iPadOS, macOS, and Android. It is not shown on Windows.\r
\r
For the wider picture, see [Choosing a scan method](/docs/scanning/choosing-a-scan-method/) and [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/). Scan credits are covered in [Scan credits](/docs/scanning/scan-credits/).\r
\r
## Spoolman QR lookup\r
\r
**Spoolman QR Lookup** resolves \`SM:SPOOL=\` QR codes against your own Spoolman server. Turn it on, enter your **Server URL** (for example \`http://192.168.1.100:7912\`), and use the **Test connection** button to confirm it. Spool Hoarder contacts your server directly from your device.\r
\r
## Related pages\r
\r
- [Units, currency, and language](/docs/settings/units-currency-and-language/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)\r
- [Scan credits](/docs/scanning/scan-credits/)\r
- [NFC tags](/docs/scanning/nfc-tags/)\r
- [Low-stock alerts](/docs/insights/low-stock-alerts/)\r
`;export{e as default};
