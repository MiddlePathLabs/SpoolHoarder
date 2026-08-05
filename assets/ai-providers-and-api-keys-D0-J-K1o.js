const e=`---
title: AI providers and API keys
description: Bringing your own key, or using the credits included with Pro.
order: 6
status: published
updated: 2026-08-04
keywords:
  - ai provider
  - recognition mode
  - api key
  - byok
  - bring your own key
  - gemini
  - claude
  - openai
  - apple intelligence
  - on-device
platforms:
  - ios
  - ipados
  - macos
  - android
---

Photo scanning runs the label through an AI model. You choose which one in
**Settings → Preferences → AI Spool Recognition**, under **Recognition Mode**.
There are four modes. Three need a key or credits; one is free and on-device.

This setting only appears on iOS, iPadOS, macOS, and Android — the platforms
that support photo scanning.

## The four recognition modes

| Mode | What it is | What it costs | What leaves your device |
|---|---|---|---|
| **On-Device** | Apple Vision + Foundation Models, on your device | Free | Nothing |
| **Managed credits** | Spool Hoarder's included cloud scanner | Scan credits | A compressed, EXIF-stripped photo |
| **Google Gemini (BYOK)** | Your own Gemini account | Your Gemini bill | A compressed, EXIF-stripped photo, sent to Google |
| **Anthropic Claude (BYOK)** | Your own Claude account | Your Claude bill | A compressed, EXIF-stripped photo, sent to Anthropic |
| **OpenAI (BYOK)** | Your own OpenAI account | Your OpenAI bill | A compressed, EXIF-stripped photo, sent to OpenAI |

Pick **None** to turn photo scanning off entirely.

## On-Device

Runs the whole scan on your Apple device using Apple Vision for text and
Foundation Models for parsing. No data leaves your phone, no key is needed, and
no credits are spent.

It needs supported Apple hardware with Apple Intelligence turned on — iOS 26+ or
macOS 26+ on a qualifying device. The Settings screen tells you the exact
status:

- **On-device model is ready** — you can scan on-device now.
- **Apple Intelligence is turned off** — enable it in
  **Settings › Apple Intelligence & Siri**.
- **The on-device model is still preparing** — wait a few minutes after turning
  Apple Intelligence on.
- **The on-device model is downloading** — it will be ready when the download
  finishes.
- **On-device AI is not available on this device** — the hardware does not meet
  the requirement. Use managed credits or a bring-your-own-key provider.

If Apple Intelligence is not available on your device, the On-Device option does
not appear in the list.

## Managed credits

The simplest option. No key, no setup — scan and go. Each cloud scan spends one
credit from the balance that comes with Pro or the trial. The photo is
compressed, its EXIF metadata is stripped, and it is processed securely in the
cloud.

When this mode is selected, the Settings screen and the add-spool screen both
show a chip with your current balance, like **18 credits remaining**. See
[Scan credits](/docs/scanning/scan-credits/) for how credits are granted and
refreshed.

## Bring your own key (Google Gemini, Anthropic Claude, OpenAI)

Use your own account with one of the supported providers. You supply the API
key, and you are responsible for that provider's billing, rate limits, and
uptime. The photo goes directly from your device to that provider — Spool
Hoarder never sees your key, and the scan does not spend your Spool Hoarder
credits.

### Entering a key

1. In **Recognition Mode**, pick a provider marked **(BYOK)**.
2. Type the key into the **{Provider} API Key** field. Use the eye icon to
   **Show API key** or **Hide API key**.
3. Tap **Save Key**. The chip updates to **Key saved**.
4. Optionally tap **Test** to confirm the key works. You will see
   **Connection successful!**, **Invalid API key.**, or a network error.

Keys are stored in your device's secure storage (Keychain on Apple, Keystore on
Android, DPAPI on Windows) and are never sent to Spool Hoarder. **Clear Key**
removes the saved key after a confirmation.

Each provider keeps its own key. If you switch providers, enter the key for the
new one.

### Where to get a key

Get a key from your provider's developer console. Spool Hoarder does not sell or
issue these keys, and support for billing on those accounts is between you and
the provider.

## What gets sent

For every cloud mode, the photo is first resized to at most 1024×1024 pixels,
compressed, and stripped of EXIF metadata (such as location or camera
information) before it is sent anywhere. Camera temporary files are deleted
after the scan. On-Device mode sends nothing at all.

See [Scanning and your privacy](/docs/scanning/scanning-privacy/) for the full
picture.

## Related pages

- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Scan credits](/docs/scanning/scan-credits/)
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
`;export{e as default};
