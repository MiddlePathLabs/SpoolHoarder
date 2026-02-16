# Privacy Policy

**SpoolHoarder**
**Last Updated:** February 16, 2026

## Introduction

SpoolHoarder ("the App") is a 3D printer filament inventory management application. This Privacy Policy explains how information is collected, used, and protected when you use the App on iOS, Android, Windows, or Web.

SpoolHoarder is designed with a **local-first architecture**. Your inventory data is stored on your device and is not transmitted to any server unless you explicitly use optional features described below.

## Information We Collect

### Information You Provide

All data you enter into SpoolHoarder is stored **locally on your device**:

- Spool inventory details (brand, material, color, weight, price, temperatures, notes)
- Project names, weight usage, and usage logs
- Inventory location labels
- App preferences (theme, sort order, display settings)

**We do not collect, transmit, or have access to any of this data.**

### Information We Do Not Collect

- No personal information (name, email, phone number, address)
- No device identifiers or advertising IDs
- No usage analytics or telemetry
- No crash reports
- No location data
- No browsing history
- No contacts or calendar data

## Optional Features With Network Access

The following features make network requests only when you explicitly use them. None are required for core App functionality.

### AI-Powered Spool Scanning (User-Configured)

You may optionally configure AI vision to extract spool data from photos. This feature:

- Is **disabled by default** and requires you to provide your own API key from a supported provider (Google Gemini, Anthropic Claude, or OpenAI)
- Sends a compressed photo to your chosen AI provider **only when you explicitly tap "Scan"**
- **Strips all EXIF metadata** (GPS coordinates, camera model, timestamps) from photos before transmission
- Compresses images to a maximum of 1024x1024 pixels before sending
- Deletes temporary image files immediately after processing
- API keys are stored in your device's secure keychain/keystore (iOS Keychain, Android Keystore, or Windows DPAPI) and are never transmitted elsewhere

When you use this feature, the photo is subject to the privacy policy of your chosen AI provider:

- [Google Gemini API Privacy](https://ai.google.dev/terms)
- [Anthropic API Privacy](https://www.anthropic.com/privacy)
- [OpenAI API Privacy](https://openai.com/policies/privacy-policy)

### On-Device OCR (iOS and macOS Only)

On supported Apple devices, text recognition uses Apple's on-device Vision framework. **No data leaves your device** when using on-device OCR.

### Filament Catalog (SpoolmanDB)

The App downloads a public filament catalog from SpoolmanDB (a community-maintained open-source database hosted on GitHub Pages) to provide brand and material suggestions. This download:

- Sends no user data (read-only HTTP GET request)
- Downloads only public catalog data (brand names, material types, color codes)
- Caches locally and refreshes only if older than 7 days

### Google Fonts

The App uses the Google Fonts package, which may download font files from Google's servers on first use. No user data is transmitted during this process.

## Data Storage and Security

- **Local database:** Your inventory is stored in a SQLite database on your device. The database uses WAL mode for reliability and is not accessible to other apps.
- **Secure storage:** AI API keys are encrypted using platform-native secure storage (iOS Keychain, Android Keystore, Windows DPAPI).
- **Preferences:** Non-sensitive settings (theme, sort order) are stored in platform-standard preferences storage.
- **No cloud storage:** The public version of SpoolHoarder does not include cloud sync. All data remains on your device.

## Data Export

You can export your inventory data to CSV at any time using the in-app export feature. This gives you full control over your data.

## Camera and Photo Library Access

The App requests camera and photo library permissions **only** for the optional AI spool scanning feature. These permissions are:

- **Camera:** Used to photograph filament spools for data extraction
- **Photo Library:** Used to select existing spool photos for data extraction

If you do not use the AI scanning feature, you can deny these permissions without affecting any other App functionality.

## Children's Privacy

SpoolHoarder does not knowingly collect any personal information from anyone, including children under the age of 13. The App does not require account creation, does not collect personal data, and contains no advertising or tracking.

## Third-Party Services

SpoolHoarder does not include:

- Advertising SDKs or ad networks
- Analytics or telemetry services
- Crash reporting services
- Social media SDKs
- Data brokers or data-sharing partnerships

The only third-party network communication occurs through the optional features described above (AI vision APIs, SpoolmanDB catalog, Google Fonts), all of which are either user-initiated or involve no user data.

## Data Retention and Deletion

Since all data is stored locally on your device:

- **Retention:** Data persists on your device until you delete it within the App or uninstall the App.
- **Deletion:** Uninstalling the App removes all App data from your device. You can also delete individual spools, projects, or all data from within the App at any time.
- **No remote data:** There is no server-side data to delete, as we do not collect or store any data remotely.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the App after changes constitutes acceptance of the revised policy.

## Your Rights

Because SpoolHoarder does not collect personal data, there is no personal data to access, correct, or delete on our end. All your data is under your direct control on your device. You can export, modify, or delete it at any time through the App.

## Contact

If you have questions about this Privacy Policy, please open an issue on our [GitHub repository](https://github.com/MiddlePathLabs/SpoolHoarder/issues).

---

*This privacy policy applies to SpoolHoarder on all platforms: iOS, Android, Windows, and Web.*
