const e=`---
title: Restoring purchases
description: Getting Pro back after a reinstall, a new device, or when entitlements do not appear.
order: 5
status: published
updated: 2026-08-04
keywords:
  - restore
  - purchases
  - reinstall
  - missing
  - recover
  - new device
  - pro not showing
  - redeem code
  - offer code
platforms:
  - ios
  - ipados
  - macos
  - windows
---

If Pro or your credits do not appear — after a reinstall, on a new device, or after switching accounts — you can restore them from **Settings → Account & Subscription**. Restore re-checks the store you bought from and re-applies your entitlements to this device.

## iPhone, iPad, and Mac

Tap **Restore Purchases**. Spool Hoarder contacts the App Store, re-validates your subscription and credit pack history, and reapplies them. If the restore finds a valid purchase you see a confirmation; if nothing is found, you are told no restorable purchase was available.

The same **Restore Purchase** action is also available inside the upgrade prompt.

### Redeem an Apple Offer Code

If you have an App Store offer code, tap **Redeem Apple Offer Code** to enter it. The code is validated through the App Store just like a purchase, after which your plan updates automatically.

## Windows

Windows checks your Microsoft Store subscription license automatically each time Spool Hoarder opens, so there is no separate restore button. If Pro is missing after a purchase or reinstall, simply reopen the app and your plan refreshes.

If you were given an access code, sign in and tap **Redeem access code** to apply it.

## If Pro still does not appear

Work through these steps in order:

1. Confirm the purchase actually completed in the App Store or Microsoft Store, and that you are signed in to the same store account.
2. Sign in to the same Spool Hoarder account you used when you subscribed, so the entitlement can be matched.
3. Run restore again (or reopen the app on Windows).
4. Check your connection — validation needs to reach the store and Spool Hoarder's servers.
5. Restart the app and try once more.

If a restore repeatedly fails, your subscription may be tied to a different store account. The store's own purchase history will show which account holds the subscription.

## Related pages

- [Subscribing to Pro](/docs/account/subscribing-to-pro/)
- [Signing in](/docs/account/signing-in/)
- [Managing or cancelling](/docs/account/managing-or-cancelling/)
`;export{e as default};
