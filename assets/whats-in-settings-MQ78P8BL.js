const n=`---
title: What's in Settings
description: A map of every Settings entry and where each one is documented.
order: 1
status: published
updated: 2026-08-04
keywords:
  - settings
  - options
  - preferences
  - where is
  - configure
  - settings tab
  - account
  - subscription
  - data and backup
  - storage locations
  - equipment
  - printer profiles
  - print library
  - contact us
  - about
  - getting started
platforms:
  - all
---

The **Settings** tab holds most of the app's configuration, and much of it is explained on other pages. This is the map: every entry, in the order the app lists it, with a line on what it does and a link to the page that covers it properly.

If a trial is running, a banner sits above the list showing how long is left.

## The main list

- **Account & Subscription** — plan, sign-in, cloud sync, purchases, and scan credits.
  - Sign in, sign out, and what an account is for: [Signing in](/docs/account/signing-in/)
  - Turn on syncing between devices: [Cloud sync](/docs/data/cloud-sync/)
  - Your current plan, trial, and what each tier includes: [Free tier, trial, and limits](/docs/account/free-trial-and-limits/) and [Subscribing to Pro](/docs/account/subscribing-to-pro/)
  - **Manage Subscription**, which appears on iPhone, iPad, and Mac once you are subscribed: [Managing or canceling](/docs/account/managing-or-cancelling/)
  - **Restore Purchases** and **Redeem access code**: [Restoring purchases](/docs/account/restoring-purchases/)
  - Your remaining scan credits and how to top them up: [Buying scan credits](/docs/account/buying-scan-credits/)
  - **Delete Account** — permanently removes your account and everything stored in the cloud against it: [Deleting your account](/docs/account/deleting-your-account/)
- **Appearance** — theme, color palette, how the Inventory tab groups spools by default, and which fields show on a spool card. See [Appearance and themes](/docs/settings/appearance-and-themes/) and [Customizing spool cards](/docs/inventory/customizing-spool-cards/).
- **Preferences** — defaults, AI scanning, and integrations. See [Preferences](/docs/settings/preferences/).
  - Language and reporting currency: [Units, currency, and language](/docs/settings/units-currency-and-language/)
  - AI spool recognition and your own API key: [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
  - The low-stock threshold: [Low stock alerts](/docs/insights/low-stock-alerts/)
  - The Color Advisor toggle: [Color Advisor](/docs/planning/color-advisor/)
  - Spoolman integration: [Importing from other apps](/docs/data/importing-from-other-apps/)
- **Equipment** — printer profiles, so cost estimates use each machine's real power draw, price, and waste. See [Printer profiles](/docs/planning/printer-profiles/).
- **Storage Locations** — create, rename, merge, and reorder the shelves and bins your spools live in. See [Storage locations](/docs/organizing/storage-locations/).
- **Print Library** — choose the folder your model files live in, rescan it, and set which apps files open in. This entry appears on Mac and Windows only. See [Print library](/docs/organizing/print-library/).
- **Data & Backup** — everything that moves data in or out.
  - **Backup & Restore**: [Backup and restore](/docs/data/backup-and-restore/)
  - **Export Data**: [Exporting your data](/docs/data/exporting-your-data/)
  - **Import Order**, for pasting a shop order confirmation: [Importing from an order confirmation](/docs/data/order-import/)
  - **Export for HueForge**: [HueForge export](/docs/data/hueforge-export/)
  - **Import Data** and **Download CSV Template**: [Importing a CSV](/docs/data/importing-a-csv/)
  - **Restore Purchases**, on iPhone, iPad, and Mac: [Restoring purchases](/docs/account/restoring-purchases/)
  - **Refresh Filament Catalog** — pulls a fresh copy of the built-in filament catalog the app suggests brands and materials from.
  - **Clear All Data** in the **Danger Zone** — permanently deletes every spool and project on this device. Take a backup first. See [Deleting your account](/docs/account/deleting-your-account/), which covers this alongside cloud deletion.

## Support and General

Below the main list:

- **Contact Us** — send a bug report, feature request, or question, with diagnostic logs attached if you want. See [Contacting support](/docs/troubleshooting/contacting-support/).
- **About Spool Hoarder** — the app version, credits, open source licenses, and links to the [privacy policy](/privacy-policy/) and terms of use. Quote the version here when you write to us.
- **Getting Started** — reopens the setup walkthrough you saw on first launch. See [Install and first run](/docs/getting-started/install-and-first-run/).
- **Support Spool Hoarder** — an optional one-time tip. It buys us a spool and unlocks nothing; every feature works the same either way.

## What is not on every platform

Two entries come and go depending on the device:

- **Print Library** is on Mac and Windows only. Model files are not tracked on iPhone or iPad.
- **Restore Purchases** appears in **Data & Backup** on iPhone, iPad, and Mac. On Windows, purchases are handled by the Microsoft Store instead.

Everything else in the list is on every platform, though what a given entry offers can still differ — buying a credit pack, for instance, is currently available on iPhone, iPad, and Mac only, and will also come to Android when that version launches.

## Related pages

- [Tour of the app](/docs/getting-started/tour-of-the-app/)
- [Appearance and themes](/docs/settings/appearance-and-themes/)
- [Preferences](/docs/settings/preferences/)
- [Units, currency, and language](/docs/settings/units-currency-and-language/)
`;export{n as default};
