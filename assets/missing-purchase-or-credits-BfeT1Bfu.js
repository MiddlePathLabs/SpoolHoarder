const e=`---
title: A purchase or credits are missing
description: Pro is not recognized, or your credit balance looks wrong.
order: 5
status: published
updated: 2026-08-04
keywords:
  - purchase missing
  - pro not unlocked
  - restore purchases
  - credits missing
  - credits wrong
  - billing problem
  - subscription not showing
  - trial not working
  - redeem code
  - already paid
platforms:
  - ios
  - ipados
  - macos
  - windows
  - android
---

Open **Settings → Account & Subscription** to see your plan, trial status, and credit balance. Most "missing purchase" problems clear up with a restore or a relaunch. Work through the list in order.

## 1. Use the same store account

Your subscription is tied to the Apple ID, Google account, or Microsoft account you bought it with. On iPhone, iPad, and Mac, confirm you are signed in to the same Apple ID in the App Store. On Android, check the Google account in the Play Store. On Windows, sign in to the same Microsoft account in the Microsoft Store.

## 2. Restore your purchase

### iPhone, iPad, Mac, and Android

On the Account & Subscription screen, find **Already purchased?** and tap **Restore Purchases**. Spool Hoarder checks the store for your subscription and reapplies it.

- Success shows **Purchases restored.**
- If nothing is found, you see **No restorable purchase was found.** This usually means the store account on the device does not match the one you bought with.

### Windows

There is no restore button on Windows. The app checks your Microsoft Store license every time it opens. If Pro is missing, fully quit the app and open it again. Receipt validation needs a Spool Hoarder account, so sign in from the Account & Subscription screen too.

## 3. Sign in to your Spool Hoarder account

Your subscription and credits also live in your cloud account. If you are not signed in, the app cannot see them.

Sign in with Apple, Google, or email and password from the **Account & Cloud Sync** section. On Apple devices you can buy and restore without signing in, but signing in is what links a purchase to your account so it carries across devices and platforms.

If you previously used a different sign-in method, link it under **Sign-in methods** so they all open the same account.

## 4. Reopen the app

Close the app completely and open it again. This forces a fresh check of both the store and your account, and it refreshes the credit balance.

## Check your plan and credits

The **Subscription** section shows one of these:

- **Pro Annual** — active paid subscription.
- **Pro Annual (Redeemed)** — active Pro from a redeemed code.
- **Pro Access (No AI)** — Pro without the bundled AI credits.
- **1-Month Trial (N days left)** — trial active.
- **Pro Expired** — your subscription ended. Renew or redeem a code to restore Pro.
- **Free (Trial Available)** / **Free** — no active plan.

Your credit balance reads **N scan credits remaining**. It appears on iPhone, iPad, Mac, and Android. On Windows the line is hidden, but the credits still exist on your account and apply when you scan on another device.

## How credits work

- A **free** account has no scan credits.
- A **trial** includes **5** credits, one time.
- A **Pro** subscription grants **20** credits each month.
- A **credit pack** adds **25** credits and costs **$0.99**.

Credits are spent only when the recognition mode is set to **Managed credits**. On-device scans and scans that use your own API key do not use credits.

To buy a pack, open Account & Subscription and tap **Buy 25 AI Credits**. Success shows **Credits added!** This is available on iPhone, iPad, Mac, and Android.

## The free-tier limits

Without Pro or an active trial, the free version supports up to **50 spools, 5 projects, and 1 printer profile**. If a purchase is not recognized and you hit one of these limits, restore or sign in before adding more.

## Redeem a code

Open Account & Subscription and choose **Redeem Code**. Redeemed codes attach complimentary Pro access to your signed-in account.

- **Code redeemed. Pro access is now active.** — it worked.
- **That code was not recognized.** / **That code has already been redeemed.** / **That code has expired.** — check the code with whoever issued it.

On iPhone or Mac, if offer-code redemption is unavailable, redeem the code in the App Store first, then return and tap **Restore Purchases**. On Android, redeem promo codes in the Play Store, then restore.

## If it is still missing

Gather these before you write:

- The platform and app version from Settings.
- The store account you bought with (never send a full card number, password, or receipt token).
- Whether **Restore Purchases** returned **Purchases restored.** or **No restorable purchase was found.**

Then [contact support](/docs/troubleshooting/contacting-support/).

## Related pages

- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)
- [Contacting support](/docs/troubleshooting/contacting-support/)
`;export{e as default};
