const e=`---\r
title: Working offline\r
description: What keeps working without a connection, and the handful of things that need one.\r
order: 6\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - offline\r
  - no internet\r
  - no wifi\r
  - workshop\r
  - airplane mode\r
  - local\r
  - garage\r
  - no signal\r
  - works without internet\r
  - sync when back online\r
platforms:\r
  - all\r
---\r
\r
Your inventory lives in a database on your device, not on a server. Open Spool Hoarder in a garage with no signal or on a plane in airplane mode, and the app starts normally and behaves normally. Nothing you do offline is queued behind a login screen, and nothing is lost.\r
\r
A short list of features reaches out to the internet. This page names all of them, and tells you what you see when one is unavailable.\r
\r
## What works with no connection\r
\r
Everything you do to run your shelf:\r
\r
- **Spools** — add, edit, delete, photograph, favorite, tag, group, and change remaining weight.\r
- **Search, filter, and sort** — all of it runs against the local database.\r
- **Projects** — create them, add filaments, log usage, track costs, and complete them. **Quick Log** works too.\r
- **Stats** — the dashboard, consumption charts, cost breakdowns, and low-stock alerts are all calculated on the device.\r
- **Calculator**, **printer profiles**, **Color Advisor**, **Holiday Palette**, and shipping estimates. The shipping estimate uses a built-in rate table, so it quotes offline.\r
- **Storage locations** and **NFC tags** — writing and reading tags is a device-to-tag operation.\r
- **Barcode scanning** — detection runs on the camera, on your device. A code you have scanned before resolves instantly from your own catalog with no connection.\r
- **Brand, material, and color autocomplete** — the filament catalog is bundled with the app and cached on disk, so suggestions still appear offline.\r
- **Print Library** on Mac and Windows — it reads folders on your own disk.\r
- **Export, backup, restore, and CSV or ZIP import** — these read and write local files.\r
- **Import sample data** — falls back to a built-in set of demo spools when it cannot reach the catalog.\r
- **Appearance, preferences, units, and language.**\r
\r
## What needs a connection\r
\r
**Cloud sync.** Sync pushes your changes to your account and pulls in changes from your other devices, so it needs a connection. It is also a Pro feature — free and trial accounts do not sync at all. See [Cloud sync](/docs/data/cloud-sync/).\r
\r
**Cloud AI photo scan.** **Managed credits** and your own **BYOK** provider keys both send the photo to a service to be read. Offline, a scan stops with **The scanner could not reach the internet. Check your connection and try again.** or **Network error. Check your internet connection.**\r
\r
The exception is **On-Device** recognition. On Apple devices that support it, the whole scan — text recognition and parsing — happens on the device, so it works in airplane mode. If you scan a lot in a workshop with bad wifi, switch to **On-Device** under **Settings → Preferences**. See [Choosing a scan method](/docs/scanning/choosing-a-scan-method/).\r
\r
**Barcode lookups for codes you have never scanned.** Detection is local, but filling in brand, material, and color for an unfamiliar code checks a shared catalog online. Offline, the lookup is skipped silently and the scan falls through to whatever recognition mode you have set — which then needs a connection unless it is **On-Device**.\r
\r
**Import Order.** Pasting an order confirmation sends the text away to be parsed. Offline you get **Network error. Please check your connection.** See [Order import](/docs/data/order-import/).\r
\r
**Complex questions in the inventory assistant.** Straightforward searches are parsed on the device and answer offline, at no cost. A phrasing the app cannot resolve locally is handed to the on-device model where one is available, and to the cloud otherwise — the assistant asks you to confirm before sending anything to the cloud, and that fallback spends a scan credit. Offline, those harder queries do not resolve. See [Scan credits](/docs/scanning/scan-credits/).\r
\r
**Anything to do with your account.** Signing in or up, subscribing, **Restore Purchases**, redeeming an access code, buying scan credits, and deleting your account are all conversations with a server. See [Signing in](/docs/account/signing-in/).\r
\r
**Currency conversion.** Exchange rates are fetched once a day and cached, so conversions keep working offline on the last rates the app downloaded — amounts are labeled as stale once they are older than the expected publication date. If the app has never managed to download rates, converted totals read **Conversion unavailable**, and **Settings → Preferences → Reporting currency** explains **Rates unavailable. Choose any supported currency; conversion will be available when rates arrive.** You can still change a currency code by hand; only the conversion is unavailable. See [Units, currency, and language](/docs/settings/units-currency-and-language/).\r
\r
**The one-time account currency check.** If you are signed in and have prices recorded from before the app supported multiple currencies, Spool Hoarder confirms which currency they were in against your account. It cannot do that offline, so a banner appears reading **Account currency is unavailable offline**, and sync pauses until the check completes. Get back online and it clears itself. This is a one-time migration — once it has run, you will not see it again.\r
\r
**Sending feedback**, and **Buy** links that open a store page in your browser.\r
\r
**A Spoolman server.** If you have pointed Spool Hoarder at your own Spoolman server, scanning one of its QR codes fetches the spool from that server. It needs to be reachable on your network, though not necessarily over the internet — on the same local wifi it works with no internet at all.\r
\r
## Does Pro keep working on a plane?\r
\r
Yes, for a while. Spool Hoarder caches your subscription state after each successful check and trusts that cache for up to seven days when it cannot reach the server. Inside that window, Pro features stay unlocked offline exactly as they do online.\r
\r
Past seven days with no successful check, the app falls back to free-tier behavior until it can confirm your subscription again. Reconnecting restores Pro access on the next check — you do not need to buy anything again or restore a purchase.\r
\r
## Coming back online\r
\r
Nothing needs a button press. When sync is on, it runs again the next time you bring the app to the front, and shortly after you edit anything locally. A sync attempt that failed while you were offline does not count against the retry cooldown, so the app is not sitting out a timer when your connection returns.\r
\r
If you would rather not wait, **Sync Now** in **Settings → Account & Subscription** triggers it immediately.\r
\r
## Is anything lost by working offline?\r
\r
No. Every change you make offline is written straight to the local database, the same as when you are online. There is no in-memory queue that can be dropped by closing the app, and no edit that silently fails because a request did not go through.\r
\r
When sync next runs, your offline changes are pushed up and remote changes are pulled down. If the same spool was edited on two devices, the most recent edit wins. Deleting a spool offline is recorded as a deletion and propagates to your other devices on the next sync rather than quietly reappearing.\r
\r
## Related pages\r
\r
- [Cloud sync](/docs/data/cloud-sync/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)\r
- [Units, currency, and language](/docs/settings/units-currency-and-language/)\r
- [Free trial and limits](/docs/account/free-trial-and-limits/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
`;export{e as default};
