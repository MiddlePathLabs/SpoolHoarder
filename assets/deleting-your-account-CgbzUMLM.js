const e=`---\r
title: Deleting your account\r
description: Permanently removing your account and cloud data, and what that does not delete.\r
order: 7\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - delete account\r
  - close account\r
  - erase data\r
  - remove my data\r
  - clear all data\r
  - wipe device\r
  - privacy\r
  - gdpr\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder keeps two separate copies of your library: the one on your device, and — if you use cloud sync — the one stored against your account. Removing them is two separate actions, and neither one does the other:\r
\r
- **Delete Account** removes your Spool Hoarder cloud account and the data held against it. It leaves this device's data alone.\r
- **Clear All Data** wipes the data on this device. It does not touch the cloud.\r
\r
If you want everything gone, do both. Both are permanent, and both make you type **DELETE** before they run.\r
\r
You do not need Pro to delete an account — the option appears whenever you are signed in.\r
\r
## Cancel your subscription first\r
\r
**Deleting your account does not cancel a subscription.** Pro is billed by the App Store or the Microsoft Store, not by Spool Hoarder, so a subscription keeps renewing and charging you after the account is gone. Cancel it in the store first, then come back and delete the account. [Managing or canceling](/docs/account/managing-or-cancelling/) shows where to do that on each platform.\r
\r
Spool Hoarder tries to catch this for you: if it can see an active subscription — or if it cannot check your subscription status at that moment — the confirmation dialog shows a warning in red before you continue.\r
\r
## Before you delete\r
\r
Cloud data is deleted with the account, so if you want an archive of it, take one first. **Settings → Data & Backup** can write an export you keep yourself; see [Exporting your data](/docs/data/exporting-your-data/).\r
\r
## Delete your account\r
\r
1. Open **Settings → Account & Subscription** and find the **Account & Cloud Sync** section. You have to be signed in — the option is not shown when you are signed out.\r
2. Choose **Delete Account** at the bottom of that section. If a sync is running, the option is unavailable and Spool Hoarder asks you to wait for the sync to finish.\r
3. Read the confirmation dialog. It lists what will be removed and, where it applies, the subscription warning above.\r
4. Type **DELETE** in the **Type DELETE to confirm** field. The red **Delete Account** button stays grayed out until you do.\r
5. Choose **Delete Account**. When it completes you get a confirmation that your Spool Hoarder cloud account has been deleted, and you are signed out on this device.\r
\r
There is no undo and no grace period. If you want to use cloud features again later, you sign up for a new account and start from the data on your device.\r
\r
If something goes wrong, Spool Hoarder tells you the deletion failed and the account is left as it was. Try again, and [contact support](/support.html) if it keeps failing.\r
\r
### What deleting the account removes\r
\r
- The account itself, along with every sign-in method linked to it — Apple, Google, and email and password.\r
- The cloud copy of your synced library: spools, projects and their filaments, usage logs, printers and their per-spool settings, storage locations, your barcode catalog entries, and confirmed filament details.\r
- Your subscription record, your AI scan credit balance and credit history, and any access-code grants held against the account.\r
- Support messages you sent while signed in, together with any log files or attachments uploaded with them.\r
\r
Other devices that were signed in to that account can no longer sync with it. Whatever is stored on those devices stays on them.\r
\r
### What deleting the account does not remove\r
\r
- **Anything on this device.** Your spools, projects, photos, preferences, backups, and any export files you saved are all local and are not touched.\r
- **Your store subscription**, as described above. An App Store or Microsoft Store purchase belongs to your store account rather than your Spool Hoarder account, so it can still be restored — see [Restoring purchases](/docs/account/restoring-purchases/).\r
- **Barcode and filament details you contributed to the shared catalog.** Those stay in the shared catalog for everyone else's benefit, no longer linked to your account.\r
- **Feedback you sent while signed out.** It was never attached to an account, so account deletion does not cover it. [Contact support](/support.html) if you want it removed.\r
\r
Spool Hoarder also keeps a minimal record that a deletion happened, for its own audit purposes. That record holds no email address, name, or inventory data.\r
\r
## Clear the data on this device\r
\r
This one is independent of accounts — you can do it whether or not you have ever signed in.\r
\r
1. Open **Settings → Data & Backup** and scroll to **Danger Zone**.\r
2. Choose **Clear All Data**.\r
3. If you have spools waiting in a scanning session, Spool Hoarder asks **Discard scanned spools?** and tells you how many would be lost. Continue or cancel.\r
4. In the **Clear All Data?** dialog, type **DELETE** in the **Type DELETE to confirm** field. The red **Clear All Data** button is disabled until you do.\r
5. Confirm. Spool Hoarder first tries to take a safety backup on the device; if that fails, it warns you and asks whether to clear anyway. You then get an **All data cleared** confirmation.\r
\r
This permanently deletes the spools, projects, usage logs, printers, storage locations, barcode catalog entries, and print library records held on this device. It cannot be undone from within the app, though the safety backup taken beforehand gives you a way back — see [Backup and restore](/docs/data/backup-and-restore/).\r
\r
Clearing local data does not delete anything in the cloud, and it does not delete your account. If you are signed in with sync on, the cleared records are not downloaded again afterward.\r
\r
Your backups live in this device's app storage and survive a clear, so the way to remove absolutely everything from a device is to clear the data and then uninstall Spool Hoarder.\r
\r
## If you only want to stop syncing\r
\r
Deleting the account is the heaviest option available, and it is rarely what you want if the goal is just to stop using the cloud. Instead:\r
\r
- **Sign out.** Use **Sign Out** in the same **Account & Cloud Sync** section. Nothing is deleted on either side — your device keeps its data and your cloud data stays with the account, ready to sync again when you sign back in.\r
- **Let Pro lapse.** Cloud sync pauses when a subscription ends, and everything on your device stays where it is.\r
\r
See [Cloud sync](/docs/data/cloud-sync/) for how syncing behaves in each case.\r
\r
## Related pages\r
\r
- [Managing or canceling](/docs/account/managing-or-cancelling/)\r
- [Signing in](/docs/account/signing-in/)\r
- [Cloud sync](/docs/data/cloud-sync/)\r
- [Backup and restore](/docs/data/backup-and-restore/)\r
- [Exporting your data](/docs/data/exporting-your-data/)\r
`;export{e as default};
