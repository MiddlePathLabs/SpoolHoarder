const e=`---\r
title: AI providers and API keys\r
description: Bringing your own key, or using the credits included with Pro.\r
order: 7\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - ai provider\r
  - recognition mode\r
  - api key\r
  - byok\r
  - bring your own key\r
  - gemini\r
  - claude\r
  - openai\r
  - apple intelligence\r
  - on-device\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - android\r
---\r
\r
Photo scanning runs the label through an AI model. You choose which one in\r
**Settings → Preferences → AI Spool Recognition**, under **Recognition Mode**.\r
There are four modes. Three need a key or credits; one is free and on-device.\r
\r
This setting only appears on iOS, iPadOS, macOS, and Android — the platforms\r
that support photo scanning.\r
\r
## The four recognition modes\r
\r
| Mode | What it is | What it costs | What leaves your device |\r
|---|---|---|---|\r
| **On-Device** | Apple Vision + Foundation Models, on your device | Free | Nothing |\r
| **Managed credits** | Spool Hoarder's included cloud scanner | Scan credits | A compressed, EXIF-stripped photo |\r
| **Google Gemini (BYOK)** | Your own Gemini account | Your Gemini bill | A compressed, EXIF-stripped photo, sent to Google |\r
| **Anthropic Claude (BYOK)** | Your own Claude account | Your Claude bill | A compressed, EXIF-stripped photo, sent to Anthropic |\r
| **OpenAI (BYOK)** | Your own OpenAI account | Your OpenAI bill | A compressed, EXIF-stripped photo, sent to OpenAI |\r
\r
Pick **None** to turn photo scanning off entirely.\r
\r
## On-Device\r
\r
Runs the whole scan on your Apple device using Apple Vision for text and\r
Foundation Models for parsing. No data leaves your phone, no key is needed, and\r
no credits are spent.\r
\r
It needs supported Apple hardware with Apple Intelligence turned on — iOS 26+ or\r
macOS 26+ on a qualifying device. The Settings screen tells you the exact\r
status:\r
\r
- **On-device model is ready** — you can scan on-device now.\r
- **Apple Intelligence is turned off** — enable it in\r
  **Settings › Apple Intelligence & Siri**.\r
- **The on-device model is still preparing** — wait a few minutes after turning\r
  Apple Intelligence on.\r
- **The on-device model is downloading** — it will be ready when the download\r
  finishes.\r
- **On-device AI is not available on this device** — the hardware does not meet\r
  the requirement. Use managed credits or a bring-your-own-key provider.\r
\r
If Apple Intelligence is not available on your device, the On-Device option does\r
not appear in the list.\r
\r
## Managed credits\r
\r
The simplest option. No key, no setup — scan and go. Each cloud scan spends one\r
credit from the balance that comes with Pro or the trial. The photo is\r
compressed, its EXIF metadata is stripped, and it is processed securely in the\r
cloud.\r
\r
When this mode is selected, the Settings screen and the add-spool screen both\r
show a chip with your current balance, like **18 credits remaining**. See\r
[Scan credits](/docs/scanning/scan-credits/) for how credits are granted and\r
refreshed.\r
\r
## Bring your own key (Google Gemini, Anthropic Claude, OpenAI)\r
\r
Use your own account with one of the supported providers. You supply the API\r
key, and you are responsible for that provider's billing, rate limits, and\r
uptime. The photo goes directly from your device to that provider — Spool\r
Hoarder never sees your key, and the scan does not spend your Spool Hoarder\r
credits.\r
\r
### Entering a key\r
\r
1. In **Recognition Mode**, pick a provider marked **(BYOK)**.\r
2. Type the key into the API key field. It is labeled with the provider's name —\r
   **Google Gemini API Key**, for instance. Use the eye icon to **Show API key**\r
   or **Hide API key**.\r
3. Tap **Save Key**. The chip updates to **Key saved**.\r
4. Optionally tap **Test** to confirm the key works. You will see\r
   **Connection successful!**, **Invalid API key.**, or a network error.\r
\r
Keys are stored in your device's secure storage (Keychain on Apple, Keystore on\r
Android, DPAPI on Windows) and are never sent to Spool Hoarder. **Clear Key**\r
removes the saved key after a confirmation.\r
\r
Each provider keeps its own key. If you switch providers, enter the key for the\r
new one.\r
\r
### Where to get a key\r
\r
Get a key from your provider's developer console. Spool Hoarder does not sell or\r
issue these keys, and support for billing on those accounts is between you and\r
the provider.\r
\r
## What gets sent\r
\r
For every cloud mode, the photo is first resized to at most 1024×1024 pixels,\r
compressed, and stripped of EXIF metadata (such as location or camera\r
information) before it is sent anywhere. Camera temporary files are deleted\r
after the scan. On-Device mode sends nothing at all.\r
\r
See [Scanning and your privacy](/docs/scanning/scanning-privacy/) for the full\r
picture.\r
\r
## Related pages\r
\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Scan credits](/docs/scanning/scan-credits/)\r
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
`;export{e as default};
