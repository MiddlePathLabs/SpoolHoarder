const e=`---\r
title: Devices are out of sync\r
description: When one device shows different data from another, and how sync resolves.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - sync not working\r
  - out of sync\r
  - devices different\r
  - data missing on other device\r
  - sync failed\r
  - sync conflict\r
  - lost edit\r
  - last sync\r
  - sync paused\r
platforms:\r
  - pro\r
---\r
\r
Cloud sync keeps your spools, projects, usage logs, printers, and storage locations the same across your devices. It is a Pro feature. Open **Settings → Account & Subscription** to manage it — the **Account & Cloud Sync** section appears when you are signed in.\r
\r
## Before anything else\r
\r
Sync needs three things. Check them in order.\r
\r
1. **You are signed in on both devices.** The status line must read **Signed in** with your email. Sync does not work without an account.\r
2. **You have an active Pro subscription.** A trial unlocks premium local features but **not** sync. If you see **Cloud sync starts once you become a paid Pro subscriber.**, sync is off until you subscribe.\r
3. **The same account on both devices.** Sign in with the same Apple, Google, or email login everywhere. You can link several sign-in methods to one account from **Sign-in methods** so they all open the same data.\r
\r
## Check the last sync time\r
\r
Next to **Sync Now**, the status line shows what last happened:\r
\r
- **Signed in · Not synced yet** — sync has never run on this device.\r
- **Signed in · Syncing...** — a sync is running right now.\r
- **Last sync MM/DD YYYY HH:MM · Pushed N, pulled N** — the last sync finished cleanly, with a count of records sent and received.\r
- **Signed in · Sync failed: ...** — the last run hit an error.\r
- **Sync issue: ...** — the run completed but something did not fully apply.\r
\r
Tap **Sync Now** to force a fresh run. On large libraries the first sync can take a while.\r
\r
Sync runs on a short cooldown. If nothing happens right after you tap, wait a moment — the app avoids hammering the server with back-to-back runs.\r
\r
## "Sync failed" or "An unexpected error occurred"\r
\r
Most failures are network problems. Check your connection and tap **Sync Now** again. The error text is deliberately generic, so the underlying cause is not shown. If it keeps failing, sign out and back in, then try once more.\r
\r
## An edit on one device did not appear on the other\r
\r
Sync resolves conflicts by **last-updated time**: the newer change wins, every time. There is no prompt and no warning. If you edited the same spool on two devices, the one saved most recently overwrites the other, and sync reports success.\r
\r
If an edit seems lost:\r
\r
1. Make sure both devices finished a sync (check the **Last sync** line).\r
2. Pull down to refresh the list on the device that looks stale.\r
3. If the edit is gone, it was the older of two conflicting saves. Re-enter it on the device you want to keep current, and sync again.\r
\r
To avoid this, sync before you start editing on a second device.\r
\r
## "Data on this device is linked to another account"\r
\r
This card appears when the local data on your device is bound to a different cloud account than the one you signed in with. Sync pauses until you choose:\r
\r
- **Link to this account** — keep this device's data and attach it to the signed-in account.\r
- **Review and replace data** — overwrite this device's data with what is in the cloud.\r
- **Sign Out** — stop and decide later.\r
\r
Read the options carefully. Replacing data discards whatever is on this device.\r
\r
## "Cloud sync is paused until currency is confirmed"\r
\r
If you have prices without a currency set, sync pauses until you confirm the currency. Set a currency on your spools (or accept the suggested one) and sync resumes.\r
\r
## What syncs, and what does not\r
\r
Sync covers spools, projects, project filaments, usage logs, printer profiles, spool-printer settings, UPC catalog entries, confirmed filament metadata, and storage locations. Deleting a spool is a soft delete — it is removed from your lists but preserved so the change can propagate to your other devices.\r
\r
## Sign-in keeps failing\r
\r
- **Sign-in failed. Please check your credentials.** — wrong email or password for email sign-in.\r
- **Apple Sign-In failed. Please try again.** / **Google Sign-In failed. Please try again.** — the system sign-in sheet was canceled or hit an error. Try again.\r
- If one method fails, try another you have linked to the same account.\r
\r
## Related pages\r
\r
- [A purchase or credits are missing](/docs/troubleshooting/missing-purchase-or-credits/)\r
- [Contacting support](/docs/troubleshooting/contacting-support/)\r
`;export{e as default};
