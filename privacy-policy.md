# Privacy Policy

**Spool Hoarder**  
**Last Updated:** September 7, 2026

## Operator and Scope

Middlepath Labs, LLC ("Middlepath Labs," "we," "us," or "our") operates Spool Hoarder and is the controller responsible for the personal information described in this policy.

This policy covers the Spool Hoarder application (the "App"), the public Spool Hoarder website, account and cloud features, and support requests.

Spool Hoarder is designed **local-first**. You can use its core inventory features without creating an account. Inventory, project, usage, and preference data is stored on your device unless you choose a feature that sends data off-device as described below.

## Information We Process

### Local App data

The App can store the following information locally:

- Spool details, including brand, material, colors, weights, prices, temperatures, locations, and notes
- Project details, filament requirements, and usage logs
- Printer profiles, cost settings, and related preferences
- Photos you attach, such as project thumbnails and spool sample photos
- On supported desktop platforms, Print Library paths, indexed model and file paths, preview paths, notes, tags, and extracted file metadata
- Order-import drafts and parsed order details
- App preferences and settings

On native platforms, current encrypted databases use SQLCipher keying with key material held in platform secure storage. Some older installations created before encryption support may still have a plaintext local database unless it has been migrated. Web builds use browser-supported Drift/WASM storage.

### Accounts and authentication

If you create an account or use cloud-backed functionality, Supabase processes identifiers such as your email address, authentication provider, authentication user ID, and session information. Supported sign-in methods can include email/password and Apple or Google sign-in.

Some purchase flows can create an anonymous Supabase account when you have not signed in. This allows a purchase, subscription, or AI-credit balance to be associated with an account without requiring an email address first.

### Cloud synchronization

If you enable cloud sync, Supabase processes the App records selected for synchronization, including inventory, projects, usage logs, printer information, settings, and supported photo or metadata records. Cloud sync is optional and depends on the App's build and runtime configuration.

### Subscriptions, purchase validation, and AI credits

When you buy, restore, or validate a subscription or credit pack, we can process:

- Storefront and platform
- Product and transaction identifiers
- Receipt or purchase-validation data
- Subscription status and entitlement dates
- AI-credit balance and credit changes
- Account identifiers needed to associate the purchase with you

Apple, Google, or Microsoft also processes purchases made through its storefront under its own terms and privacy policy.

For included cloud AI features, we can retain operational usage records needed for credit accounting, abuse prevention, cost monitoring, and troubleshooting. These records can include the feature, provider and model, token counts, credit changes, timestamps, request source, parse status, and estimated processing cost. They do not intentionally include the original image or pasted order text.

### Optional AI features

Network requests occur only when you choose a feature that requires them.

- **On-device processing:** Supported Apple and Android features can process information locally without sending it to an external AI provider.
- **Included cloud AI:** A selected image or pasted order text is sent through a Spool Hoarder Supabase Edge Function and then to the configured cloud AI provider, currently Google Gemini for included scan and order-import paths.
- **Bring-your-own-key providers:** If you configure a provider key, selected content can be sent directly to Google Gemini, OpenAI, or Anthropic, depending on your selection.

For cloud image scans, the App compresses images to the size used by the scan flow, removes EXIF metadata before transmission, and deletes temporary image files after processing on a best-effort basis. AI output can contain fields extracted from the content you submitted and is returned to the active App workflow for your review.

### Crash diagnostics

Release builds on iOS, Android, and macOS use Firebase Crashlytics. Crash reporting is not enabled on Windows or Web. Reports can include device and operating-system information, stack traces, timestamps, and technical App log context associated with an error.

### Support requests

If you contact us through the App or website, we process the request category, message, optional contact email, platform, App version, and submission time. Signed-in App submissions can also be associated with an account ID. App users can choose to attach diagnostic logs; the website form does not accept attachments.

Support requests are stored through Supabase. If notification email is configured, the request and contact information are forwarded to a Middlepath Labs support inbox through Amazon Simple Email Service (Amazon SES).

### Website analytics and hosting

The website uses Cloudflare Web Analytics for aggregate page and performance measurements. Cloudflare states that this service does not use cookies or local storage, does not fingerprint visitors, and does not collect or use visitors' personal data. We do not send email addresses, account identifiers, purchase identifiers, inventory information, uploaded-image metadata, or support-message contents as analytics properties.

The website is hosted through GitHub Pages. GitHub and network providers can process ordinary request and security logs, such as IP address, browser or device information, requested URL, referring page, and request time, as part of delivering and protecting the website.

Spool Hoarder does not use advertising SDKs, ad-network tracking, or cross-app behavioral tracking.

### Optional shared and community data

If you enable sharing of confirmed filament measurements, Spool Hoarder can submit information such as brand, material, product name, colors, diameter, transmission distance, color values, confirmation method, source, measurement time, App version, and platform. Notes, prices, inventory locations, and general project information are not included.

Signed-in contributions can initially be associated with your account. Signed-out contributions can be submitted without an account identifier. Shared UPC or filament contributions can remain after account deletion, but the account association is removed.

The App also downloads public catalog information from SpoolmanDB. Catalog-download requests do not include your inventory payload. If you configure your own Spoolman server, requests are sent to the server address you provide.

## Why We Process Information

Depending on the feature and applicable law, we rely on the following legal bases:

- **Contract:** Providing an account, synchronization, subscription, purchase restoration, AI credits, and other cloud functionality you request.
- **Legitimate interests:** Operating and securing the service, preventing fraud and abuse, responding to support requests, diagnosing crashes, maintaining service reliability, and understanding aggregate website performance. We use this basis only where those interests are not overridden by your rights.
- **Consent:** Submitting optional shared/community contributions and using optional cloud AI features where the App asks for consent. You can withdraw consent for future processing.
- **Legal obligation:** Keeping or disclosing information when applicable law requires it, including records needed for tax, accounting, consumer-protection, or lawful-request obligations.

The exact legal basis can depend on your location and how you use a feature.

## Retention

We use the following retention criteria rather than fixed periods where the repository does not establish a duration:

- **Local data:** Remains on your device until you delete it in the App, remove the relevant files, clear browser data, or uninstall the App.
- **Account and synchronized data:** Generally remains while your account is active and is removed through the account-deletion process described below.
- **Purchase, subscription, credit, and operational AI records:** Retained while needed to provide entitlements and credits, resolve disputes, prevent fraud or abuse, maintain accounting integrity, and meet legal obligations.
- **Support requests and attachments:** Retained while needed to respond, investigate the reported issue, protect the service, and meet legal obligations.
- **Crash reports and website/hosting logs:** Retention is controlled by the applicable provider settings and operational needs.
- **Shared contributions:** Can remain as de-identified community catalog data after any account association is removed.
- **Deletion record:** We retain a minimal deletion record indefinitely: a one-way hash of the former account ID, deletion time, and deletion-request metadata. It supports security, fraud prevention, operational integrity, and compliance and does not retain the former account ID or email address.

## Account and Data Deletion

You can delete your Spool Hoarder cloud account in the App:

1. Open **Settings**.
2. Open **Account & Cloud Sync**.
3. Select **Delete Account**.
4. Type **DELETE** and confirm.

This removes the cloud account and associated synchronized records, subscription and credit records, purchase-validation records, AI-usage records, and account-linked feedback and support attachments. Local data remains on your device.

Deleting a Spool Hoarder account does not cancel a subscription managed by Apple, Google, or Microsoft. Cancel the subscription through the storefront where you purchased it.

If you cannot use the App, see the [account-deletion page](https://spoolhoarder.com/delete-account/) or email [support@middlepathlabs.com](mailto:support@middlepathlabs.com?subject=Spool%20Hoarder%20Account%20Deletion%20Request).

Spool Hoarder does not currently offer a separate process that deletes all synchronized data while keeping the same cloud account active.

## Service Providers and Disclosures

We disclose information to service providers only as needed for the relevant feature:

- **Supabase:** Authentication, database, synchronization, storage, and Edge Functions
- **Firebase Crashlytics:** Crash and error reporting on supported platforms
- **Google Gemini:** Included cloud AI scanning and order-text import, plus optional bring-your-own-key use
- **OpenAI and Anthropic:** Optional bring-your-own-key AI processing
- **Cloudflare:** Aggregate website analytics and network delivery where configured
- **GitHub Pages:** Website hosting
- **Amazon SES:** Support-request notification email where configured
- **Apple, Google, and Microsoft:** Store purchases, subscriptions, and purchase validation
- **SpoolmanDB:** Public catalog downloads

We can also disclose information when required by law, to protect rights or service security, or as part of a business transaction subject to appropriate safeguards. We do not sell personal information or share it for cross-context behavioral advertising.

## International Transfers

Some service providers can process information outside the European Economic Area, including in the United States. The applicable processing location depends on the provider, account configuration, and feature used.

Specific transfer mechanisms and configured processing regions have not yet been verified for every provider. Contact us for current information before relying on a particular regional-hosting or transfer-safeguard claim.

## Security

We use technical and organizational measures intended to protect information, including encrypted local databases on current native installations, platform secure storage for sensitive local keys and tokens, access controls on cloud data, and restricted backend functions. No method of storage or transmission is completely secure.

## Your Privacy Rights

Depending on your location, you may have the right to:

- Request access to personal information we hold about you
- Correct inaccurate information
- Request deletion
- Restrict certain processing
- Receive portable data in an applicable format
- Object to processing based on legitimate interests
- Withdraw consent for future processing
- Complain to your local data-protection supervisory authority

These rights can be limited where an exception applies. We may need to verify your identity before acting on a request. Withdrawing consent does not affect processing that was lawful before withdrawal.

## Children's Privacy

Spool Hoarder is not directed to children under 13, and we do not knowingly collect personal information from children under 13. Additional age protections may apply in some locations.

## Changes to This Policy

We may update this policy as the product, providers, or legal requirements change. We will post the revised policy here and update the date above.

## Privacy Contact

For support and privacy requests, contact [support@middlepathlabs.com](mailto:support@middlepathlabs.com) or open an issue in the [Spool Hoarder GitHub repository](https://github.com/MiddlePathLabs/SpoolHoarder/issues).

---

*This policy applies to Spool Hoarder on supported platforms, including iOS, iPadOS, Android, macOS, Windows, and Web builds where available.*
