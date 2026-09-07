const e=`---\r
title: A purchase or credits are missing\r
description: Pro is not recognized, or your credit balance looks wrong.\r
order: 5\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - purchase missing\r
  - pro not unlocked\r
  - restore purchases\r
  - credits missing\r
  - credits wrong\r
  - billing problem\r
  - subscription not showing\r
  - trial not working\r
  - redeem code\r
  - already paid\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
Open **Settings → Account & Subscription** to see your plan, trial status, and credit balance. Most "missing purchase" problems clear up with a restore or a relaunch. Work through the list in order.\r
\r
## 1. Use the same store account\r
\r
Your subscription is tied to the Apple ID, Google account, or Microsoft account you bought it with. On iPhone, iPad, and Mac, confirm you are signed in to the same Apple ID in the App Store. On Android, check the Google account in the Play Store. On Windows, sign in to the same Microsoft account in the Microsoft Store.\r
\r
## 2. Restore your purchase\r
\r
### iPhone, iPad, Mac, and Android\r
\r
On the Account & Subscription screen, find **Already purchased?** and tap **Restore Purchases**. Spool Hoarder checks the store for your subscription and reapplies it.\r
\r
- Success shows **Purchases restored.**\r
- If nothing is found, you see **No restorable purchase was found.** This usually means the store account on the device does not match the one you bought with.\r
\r
### Windows\r
\r
There is no restore button on Windows. The app checks your Microsoft Store license every time it opens. If Pro is missing, fully quit the app and open it again. Receipt validation needs a Spool Hoarder account, so sign in from the Account & Subscription screen too.\r
\r
## 3. Sign in to your Spool Hoarder account\r
\r
Your subscription and credits also live in your cloud account. If you are not signed in, the app cannot see them.\r
\r
Sign in with Apple, Google, or email and password from the **Account & Cloud Sync** section. On Apple devices you can buy and restore without signing in, but signing in is what links a purchase to your account so it carries across devices and platforms.\r
\r
If you previously used a different sign-in method, link it under **Sign-in methods** so they all open the same account.\r
\r
## 4. Reopen the app\r
\r
Close the app completely and open it again. This forces a fresh check of both the store and your account, and it refreshes the credit balance.\r
\r
## Check your plan and credits\r
\r
The **Subscription** section shows one of these:\r
\r
- **Pro Annual** — active paid subscription.\r
- **Pro Annual (Redeemed)** — active Pro from a redeemed code.\r
- **Pro Access (No AI)** — Pro without the bundled AI credits.\r
- **1-Month Trial (N days left)** — trial active.\r
- **Pro Expired** — your subscription ended. Renew or redeem a code to restore Pro.\r
- **Free (Trial Available)** / **Free** — no active plan.\r
\r
Your credit balance reads **N scan credits remaining**. It appears on iPhone, iPad, Mac, and Android. On Windows the line is hidden, but the credits still exist on your account and apply when you scan on another device.\r
\r
## How credits work\r
\r
- A **free** account has no scan credits.\r
- A **trial** includes **5** credits, one time.\r
- A **Pro** subscription grants **20** credits each month.\r
- A **credit pack** adds **25** credits and costs **$0.99**.\r
\r
Credits are spent only when the recognition mode is set to **Managed credits**. On-device scans and scans that use your own API key do not use credits.\r
\r
To buy a pack, open Account & Subscription and tap **Buy 25 AI Credits**. Success shows **Credits added!** This is available on iPhone, iPad, Mac, and Android.\r
\r
## The free-tier limits\r
\r
Without Pro or an active trial, the free version supports up to **50 spools, 5 projects, and 1 printer profile**. If a purchase is not recognized and you hit one of these limits, restore or sign in before adding more.\r
\r
## Redeem a code\r
\r
Open Account & Subscription and choose **Redeem Code**. Redeemed codes attach complimentary Pro access to your signed-in account.\r
\r
- **Code redeemed. Pro access is now active.** — it worked.\r
- **That code was not recognized.** / **That code has already been redeemed.** / **That code has expired.** — check the code with whoever issued it.\r
\r
On iPhone or Mac, if offer-code redemption is unavailable, redeem the code in the App Store first, then return and tap **Restore Purchases**. On Android, redeem promo codes in the Play Store, then restore.\r
\r
## If it is still missing\r
\r
Gather these before you write:\r
\r
- The platform and app version from Settings.\r
- The store account you bought with (never send a full card number, password, or receipt token).\r
- Whether **Restore Purchases** returned **Purchases restored.** or **No restorable purchase was found.**\r
\r
Then [contact support](/docs/troubleshooting/contacting-support/).\r
\r
## Related pages\r
\r
- [Scan results are wrong or empty](/docs/troubleshooting/scan-results-are-wrong/)\r
- [Devices are out of sync](/docs/troubleshooting/sync-problems/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
