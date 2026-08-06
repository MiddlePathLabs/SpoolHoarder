const n=`---
title: Scan credits
description: What a credit is, when one is spent, and how to get more.
order: 7
status: published
updated: 2026-08-04
keywords:
  - scan credits
  - credits
  - ai credits
  - how many credits
  - buy credits
  - credit pack
  - monthly credits
  - out of credits
platforms:
  - pro
---

Scan credits pay for cloud AI scans. One credit equals one successful cloud
photo scan of a spool label (or one AI order import). They are used only when
your recognition mode is **Managed credits**. On-Device scans and
bring-your-own-key scans never spend credits.

## How many you get

- **Trial** — a 30-day trial includes 5 credits.
- **Pro subscription** — 20 credits every month, included with Pro.
- **Credit pack** — a one-time purchase of 25 credits.

Unused credits sit in your account until they are spent. A credit is spent only
on a successful scan; if the same photo is scanned again within a short
deduplication window, it is not charged twice.

## Where the balance is shown

Open **Settings → Account & Subscription**. Your current balance appears under
your plan, for example **18 scan credits remaining**. The same balance shows as
a chip next to the **Scan with AI** button and on the recognition-mode setting
when **Managed credits** is selected.

The balance is shown on iPhone, iPad, Mac, and Android.

## What spends a credit

- A cloud photo scan in **Managed credits** mode — single or batch.
- An AI order import.
- An inventory assistant question that is too complex for the local and on-device
  tiers. The assistant always asks before sending a question to the cloud, so
  this only spends a credit once you confirm.

## What does not spend a credit

- **On-Device** scans (Apple devices with Apple Intelligence).
- Scans done with a **bring-your-own-key** provider — those bill your provider
  account directly.
- Barcode scans and NFC tag reads.
- Re-scanning a photo you just scanned, within the dedupe window.

## Running out

When your balance reaches zero, the next cloud scan is rejected with
**No scan credits remaining.** At that point you can:

- Switch recognition mode to **On-Device** (free, on supported Apple devices),
- Switch to a **bring-your-own-key** provider, or
- Get more credits.

## Getting more credits

There are three ways:

- **Subscribe to Pro** — 20 credits arrive with each monthly period, bundled
  with the rest of Pro. Start this from **Settings → Account & Subscription**.
- **Buy a credit pack** — 25 credits as a one-time purchase. On iPhone, iPad,
  and Mac, tap **Buy 25 AI Credits** in
  **Settings → Account & Subscription**. A credit pack buys credits only; it
  does not unlock Pro features.
- **Redeem a code** — if you have an access code, redeem it from
  **Settings → Account & Subscription**. On Windows and Android use
  **Redeem access code**; on Apple use **Redeem Apple Offer Code**; on Android
  you can also redeem a Google Play promo code and then **Restore Purchases**.

After buying or redeeming, **Restore Purchases** pulls the latest entitlement
onto the device if the balance does not refresh on its own.

## Related pages

- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [Scanning and your privacy](/docs/scanning/scanning-privacy/)
- [Buying scan credits](/docs/account/buying-scan-credits/)
`;export{n as default};
