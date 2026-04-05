# Privacy Policy

**SpoolHoarder**  
**Last Updated:** April 5, 2026

## Introduction

SpoolHoarder ("the App") is a 3D printer filament inventory management application.

The App is designed **local-first**: your spool, project, and usage data is stored on your device. Some optional features use network services and may send data off-device, as described below.

## What Data We Process

### Data you enter in the App (local by default)

SpoolHoarder stores your inventory and project data locally, including:

- Spool details (brand, material, colors, weights, prices, temperatures, notes)
- Project details and usage logs
- Preferences and app settings

On native platforms, the app uses SQLCipher keying with key material in secure storage for encrypted databases. Some legacy installs created before encryption support may still have plaintext local databases unless manually migrated. On web builds, storage uses browser-supported Drift/WASM storage.

### Account and cloud data (only when you use cloud features)

If you choose to sign in and use cloud-backed features, SpoolHoarder processes account and cloud data through Supabase, such as:

- Account identifiers (for example, email and auth user ID)
- Synced inventory/project/usage data
- Subscription and credit status
- Purchase validation metadata

Cloud sync and cloud account features are optional and feature-flag dependent.

### Feedback data (optional)

If you submit feedback from the in-app Contact form, we process:

- Your message
- Optional email address (if you provide one)
- App version and platform
- Optional diagnostic logs (if you choose to attach them)

## Crash and Error Reporting

On iOS, Android, and macOS release builds, the App uses **Firebase Crashlytics** for crash and error reporting. Crash reporting is not enabled on Windows or Web.

Crash/error reports can include technical diagnostics such as:

- Device and OS information
- Crash stack traces
- Error timestamps
- App log context associated with errors

For details, see [Google's Firebase Privacy Policy](https://policies.google.com/privacy).

## Optional Network Features

These features make network requests only when enabled/used.

### Cloud account, sync, and subscription services (Supabase)

When enabled and used, the App can connect to Supabase for:

- Sign-in (email/password and OAuth providers)
- Data sync across devices
- Subscription/credit status checks
- Account deletion of synced cloud records

### AI-powered spool scanning

SpoolHoarder supports multiple AI scan paths:

- **On-Device mode (Apple platforms):** OCR/parsing runs locally on-device.
- **Included cloud scan mode:** photo is sent through SpoolHoarder cloud function for processing.
- **Legacy BYOK provider mode (if configured):** photo may be sent directly to configured external AI provider APIs.

For cloud scan paths:

- Images are compressed (up to 1024x1024 for scan flows)
- EXIF metadata is stripped before transmission
- Temporary image files are deleted after processing (best effort)

### Filament catalog (SpoolmanDB)

The App downloads public catalog data from SpoolmanDB for suggestions and normalization. This request does not include your inventory payload and is cached locally (refresh window up to 7 days).

### Optional self-hosted Spoolman server lookup

If you enable Spoolman QR lookup and configure a server URL, the App may query your configured Spoolman server to resolve tag/QR spool references.

### Contact/feedback submission

If you use Contact Us, the App sends feedback payloads to a Supabase Edge Function, including optional logs when selected.

### In-app purchase validation and credit provisioning

On supported platforms, purchase validation and credit/subscription provisioning calls are made to backend endpoints.

## Permissions

### Camera and Photo Library

When granted, camera/gallery access is used for:

- AI spool scanning
- Project thumbnail photos
- Spool sample print photos

You can deny permissions, but related photo-based features will be unavailable.

### NFC (where supported)

NFC permission is used for optional filament tag reading features.

## Security and Storage

- **Local database:** SQLCipher keying is used on native encrypted databases, with key material in secure storage (legacy plaintext databases may exist on older installs).
- **Secure storage:** used for sensitive local secrets/tokens (for example, auth session persistence and API keys where applicable).
- **Preferences:** non-sensitive app settings are stored in platform preferences.
- **Log files:** diagnostic logs are stored locally and can be manually exported/shared by you; they may include technical app activity and error context.

## Data Retention and Deletion

### Local data

- Data remains on your device until you delete it in-app or uninstall.

### Cloud data (if you used cloud features)

- Synced/account-linked data may be stored remotely while your account is active.
- You can sign out and request account deletion from within the app's sync/account controls.
- Feedback submissions and uploaded attachments may be retained for support/debug workflows.

## Third-Party Services

SpoolHoarder may interact with:

- [Supabase](https://supabase.com/privacy) (auth, sync, edge functions, storage)
- [Firebase Crashlytics](https://policies.google.com/privacy) (crash/error reporting on supported platforms)
- [Google Gemini API](https://ai.google.dev/terms) (cloud vision in included cloud scan path)
- [OpenAI](https://openai.com/policies/privacy-policy) and [Anthropic](https://www.anthropic.com/privacy) (legacy BYOK AI provider paths, if configured)
- SpoolmanDB public catalog (GitHub Pages-hosted public dataset)

SpoolHoarder does **not** include advertising SDKs or ad-network tracking.

## Children's Privacy

SpoolHoarder is not directed to children under 13, and we do not knowingly collect personal information from children under 13.

## Changes to This Policy

We may update this Privacy Policy from time to time. Updates will be posted here with a revised "Last Updated" date.

## Contact

If you have questions about this Privacy Policy, please open an issue on our [GitHub repository](https://github.com/MiddlePathLabs/SpoolHoarder/issues).

---

*This Privacy Policy applies to SpoolHoarder on supported platforms, including iOS, Android, macOS, Windows, and Web builds where available.*
