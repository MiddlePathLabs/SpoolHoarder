# Privacy Policy

**SpoolHoarder**  
**Last Updated:** May 6, 2026

## Introduction

SpoolHoarder ("the App") is a 3D printer filament inventory management application.

The App is designed **local-first**: your spool, project, and usage data is stored on your device. Some optional features use network services and may send data off-device, as described below.

## What Data We Process

### Data you enter in the App (local by default)

SpoolHoarder stores your inventory and project data locally, including:

- Spool details (brand, material, colors, weights, prices, temperatures, notes)
- Project details and usage logs
- Printer profiles and related settings
- Optional local photos you attach, such as project thumbnails and spool sample print photos
- On supported desktop platforms, Print Library metadata such as library root paths, indexed model/file paths, preview or cover image paths, notes, tags, and extracted file metadata
- Order import drafts and parsed order details when you choose to use order import features
- Preferences and app settings

On native platforms, the app uses SQLCipher keying with key material in secure storage for encrypted databases. Some legacy installs created before encryption support may still have plaintext local databases unless manually migrated. On web builds, storage uses browser-supported Drift/WASM storage.

### Account and cloud data (only when you use cloud features)

If you choose to sign in and use cloud-backed features, SpoolHoarder processes account and cloud data through Supabase, such as:

- Account identifiers (for example, email and auth user ID)
- Synced inventory/project/usage data
- Subscription and credit status
- Purchase validation metadata
- AI credit usage and operational metadata, such as feature name, provider/model, token counts, credit changes, timestamps, request source, parse status, and estimated processing cost
- Confirmed filament metadata synced across your devices, such as TD/hex measurements and related spool metadata

Cloud sync and cloud account features are optional and feature-flag dependent.

### Shared filament measurement contributions (optional)

If you enable "Share Confirmed TD/Hex Measurements," SpoolHoarder may submit TD1-confirmed filament measurement data to help improve filament data quality. Contributions may include:

- Brand, material, name, colors, product family, and diameter
- Transmission distance and/or color hex codes
- Confirmation method, source, measurement time, app version, and platform
- If you are signed in, your authenticated account ID may be associated with the contribution. If you are not signed in, contributions may be submitted without an account identifier.

Notes, prices, inventory locations, and general project data are not included in these measurement contributions.

### Feedback data (optional)

If you submit feedback from the in-app Contact form or website support form, we process:

- Your message
- Optional email address (if you provide one)
- App version and platform
- Optional diagnostic logs (if you choose to attach them)
- If you are signed in, your authenticated account ID may also be associated with the submission

If backend notifications are configured, feedback details may also be forwarded to a maintainer support inbox for review.

### Website usage

If you visit the SpoolHoarder website, standard website hosting logs may be processed by our hosting providers. The public website may also use privacy-respecting configuration of Google Analytics to understand aggregate page usage. The website support form sends the information you enter to the same feedback backend described above.

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

- Sign-in (email/password and supported OAuth providers such as Apple or Google)
- Data sync across devices
- Subscription/credit status checks
- Purchase validation, credit provisioning, and related account status updates
- Deletion of synced cloud records through current in-app account/data deletion controls

Some purchase flows may create or use an anonymous Supabase session when you are not otherwise signed in. This is used to validate receipts, attach subscription or credit records, and account for consumable AI credits.

### AI-powered spool scanning

SpoolHoarder supports multiple AI scan and import paths:

- **On-Device mode (Apple platforms):** OCR/parsing runs locally on-device.
- **Included cloud scan mode:** photo is sent through SpoolHoarder cloud function for processing.
- **Legacy BYOK provider mode (if configured):** photo may be sent directly to configured external AI provider APIs.
- **Order text import:** pasted order confirmation text is sent through a SpoolHoarder cloud function for AI parsing when you choose to use that feature.

For cloud scan paths:

- Images are compressed (up to 1024x1024 for scan flows)
- EXIF metadata is stripped before transmission
- Temporary image files are deleted after processing (best effort)

For included cloud AI features, SpoolHoarder may store account-linked operational usage metadata for credit accounting, abuse prevention, cost monitoring, and debugging. This can include token counts, model/provider names, credit changes, request source, timestamps, parse status, and estimated processing cost. It does not intentionally store the original image or pasted order text in the usage log, though AI responses returned for the active app workflow may contain extracted fields from the submitted content.

### Filament catalog (SpoolmanDB)

The App downloads public catalog data from SpoolmanDB for suggestions and normalization. This request does not include your inventory payload and is cached locally (refresh window up to 7 days).

### Optional self-hosted Spoolman server lookup

If you enable Spoolman QR lookup and configure a server URL, the App may query your configured Spoolman server to resolve tag/QR spool references.

### Contact/feedback submission

If you use Contact Us, the App sends feedback payloads to a Supabase Edge Function, including optional logs when selected.

### Order text import

If you use order import, the pasted order confirmation text is sent to a Supabase Edge Function and then to Google Gemini for parsing. Order text may include retailer names, product lines, quantities, prices, dates, discounts, shipping/tax lines, and any other text you paste. You should avoid pasting unrelated personal information that is not needed for filament import.

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

NFC permission is used for optional filament tag reading and writing features.

### Bluetooth, USB, and serial device access (where supported)

Bluetooth, USB, or serial device access may be used to discover and connect to compatible TD-1 filament devices for scanning and data transfer. Device names and connection events may appear in local diagnostic logs.

## Security and Storage

- **Local database:** SQLCipher keying is used on native encrypted databases, with key material in secure storage (legacy plaintext databases may exist on older installs).
- **Secure storage:** used for sensitive local secrets/tokens (for example, auth session persistence and API keys where applicable).
- **Preferences:** non-sensitive app settings are stored in platform preferences.
- **Log files:** diagnostic logs are stored locally and can be manually exported/shared by you; they may include technical app activity and error context.
- **AI usage records:** for included cloud AI features, account-linked usage records may be stored remotely for credit accounting, operations, and abuse prevention.

## Data Retention and Deletion

### Local data

- Data remains on your device until you delete it in-app or uninstall.

### Cloud data (if you used cloud features)

- Synced/account-linked data may be stored remotely while your account is active.
- Account-linked subscription, credit, receipt-validation, AI usage, and optional measurement-contribution records may be stored remotely while needed for account operations, fraud prevention, support, or compliance.
- Current in-app deletion controls are designed to delete synced cloud app data and sign you out. In some cases, the underlying authentication account itself may require separate backend or administrative deletion handling.
- If an authentication account is deleted, we may retain a minimal record that the account existed and was deleted (for example, an internal identifier or its one-way hash and a deletion timestamp) for security, fraud-prevention, operational integrity, or compliance purposes.
- Feedback submissions and uploaded attachments may be retained for support/debug workflows.

## Third-Party Services

SpoolHoarder may interact with:

- [Supabase](https://supabase.com/privacy) (auth, sync, edge functions, storage)
- [Firebase Crashlytics](https://policies.google.com/privacy) (crash/error reporting on supported platforms)
- [Google Gemini API](https://ai.google.dev/terms) (included cloud AI scan and order import paths)
- [OpenAI](https://openai.com/policies/privacy-policy) and [Anthropic](https://www.anthropic.com/privacy) (legacy BYOK AI provider paths, if configured)
- [Google Analytics](https://policies.google.com/privacy) (aggregate website analytics, if enabled on the public website)
- SpoolmanDB public catalog (GitHub Pages-hosted public dataset)
- Email delivery infrastructure used for feedback notifications, if configured by us

SpoolHoarder does **not** include advertising SDKs or ad-network tracking.

## Children's Privacy

SpoolHoarder is not directed to children under 13, and we do not knowingly collect personal information from children under 13.

## Changes to This Policy

We may update this Privacy Policy from time to time. Updates will be posted here with a revised "Last Updated" date.

## Contact

If you have questions about this Privacy Policy, please open an issue on our [GitHub repository](https://github.com/MiddlePathLabs/SpoolHoarder/issues).

---

*This Privacy Policy applies to SpoolHoarder on supported platforms, including iOS, Android, macOS, Windows, and Web builds where available.*
