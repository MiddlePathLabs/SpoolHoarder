const e=`---\r
title: Editing and deleting spools\r
description: Change a spool after the fact, mark it used up, remove it from inventory, and understand what delete really does.\r
order: 3\r
status: published\r
updated: 2026-08-26\r
keywords:\r
  - edit spool\r
  - change spool\r
  - delete spool\r
  - remove spool\r
  - depleted\r
  - used up\r
  - sold spool\r
  - gifted spool\r
  - discarded\r
  - spool status\r
  - restore to inventory\r
  - empty spool\r
  - undo delete\r
  - recover spool\r
platforms:\r
  - all\r
---\r
\r
You can change or remove any spool from its detail screen. Three operations sometimes get confused — **Mark Used Up**, **Remove from Inventory**, and **Delete spool** — and they do different things.\r
\r
## Editing a spool\r
\r
Open a spool and tap **More** (⋯) → **Edit spool**. You get the same form as [adding a spool](/docs/inventory/adding-a-spool/), already filled in.\r
\r
Edit mode has no **Save** button. Your changes save automatically when you back out of the screen. If something is stopping the save — a required field left blank, for example — Spool Hoarder asks whether to keep editing or discard the invalid changes. The trash icon in the top bar deletes the spool directly from the edit screen.\r
\r
### What edits do not change\r
\r
Editing a spool never rewrites the past. Usage logs you already recorded keep the per-gram price they had at the time, so changing a spool's price or spool size today affects only new logs, not old ones. Adjusting the remaining weight directly only changes the number on the spool; it does not create or edit any usage log.\r
\r
## Spool status\r
\r
Every spool has a status: **Active**, **Used up**, **Sold**, **Gifted**, or **Discarded**. Only **Active** spools count as current inventory — the other four are records of spools that have left, kept in full so your history, costs, and usage logs stay intact.\r
\r
A spool that is not active is still fully readable: it keeps its brand, color, price, notes, usage history, and the weight it had when it left inventory. What it cannot do is take new usage logs or start a project.\r
\r
## Mark Used Up\r
\r
**More** (⋯) → **Mark Used Up** flags the spool as finished and zeroes its remaining weight. Whatever was still on it is recorded on the spool as the weight it had when it was used up, so nothing is lost. A message appears with an **Undo** option.\r
\r
If filament is still on the spool when you do this, Spool Hoarder asks first, and offers **Discarded** as a one-tap alternative — a spool you threw away with 300 g left is a write-off, not a spool you printed to the end. You can still choose **Mark Used Up anyway**.\r
\r
The other direction is automatic: when a usage log takes a spool to exactly zero, the app offers to mark it used up for you.\r
\r
## Remove from Inventory\r
\r
**More** (⋯) → **Remove from Inventory** opens a submenu with three exits:\r
\r
- **Sold** — records that the spool left for money. The dialog optionally captures what you received, and if the spool never had a purchase price it asks for that too, so the sale can be compared against its cost. You can skip the amount and add it later.\r
- **Gifted** — the spool went to someone else.\r
- **Discarded** — the spool was thrown away, failed, or written off.\r
\r
All three keep the record — and, unlike **Mark Used Up**, they keep the remaining weight as it was, because that filament went out of the door with the spool. Each one can be undone from the message that appears, or reversed later with **Restore to Inventory**.\r
\r
## Restore to Inventory\r
\r
A spool that has left inventory shows **More** (⋯) → **Restore to Inventory**. It comes back as active and counts toward your inventory again.\r
\r
Restoring clears the exit details — the status note, the weight recorded at exit, and any sale amount — so Spool Hoarder asks you to confirm first. A spool you marked used up comes back at 0 g; use the **Remaining** card to set its real weight. If you only just made the change, the **Undo** link in the message is the better route: undo puts the spool back exactly as it was, remaining weight and printer assignment included.\r
\r
If your inventory is already at the free-tier limit, restoring is blocked and the message tells you what to do about it. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/).\r
\r
## Delete a spool\r
\r
**More** (⋯) → **Delete spool** removes the spool from your inventory. A confirmation asks you to confirm, then a message appears offering an **Undo**.\r
\r
Delete is a soft delete: the spool is hidden from every list, search, and count, but it is not erased from your device immediately. The undo link in the message restores it.\r
\r
### Undo is your only way back\r
\r
There is no trash bin or deleted-items screen. The **Undo** link in the message is the only way to recover a deleted spool, and it disappears after a few seconds. Once it is gone, the spool is no longer reachable anywhere in the app.\r
\r
### Does deleting free up a slot?\r
\r
Yes. The free tier allows up to **50 spools**, and that count is based on your current inventory only. Deleting one frees its slot — and so does marking one used up, sold, gifted, or discarded, because those records no longer count as current inventory. A Pro subscription removes the limit everywhere. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/) for which platforms the cap applies on.\r
\r
### What happens to usage logs and projects\r
\r
Deleting a spool does not delete the usage logs recorded against it, and it does not recalculate any project totals. Those logs simply become invisible because they belong to a spool that no longer appears. If you later undo the delete, the logs reattach automatically.\r
\r
## Which one do I want?\r
\r
- Use **Mark Used Up** when you printed the spool to the end.\r
- Use **Sold**, **Gifted**, or **Discarded** when the spool left your collection but you want to keep the record — including what it earned or cost you.\r
- Use **Delete spool** when the spool should never have existed, such as a duplicate added by mistake.\r
\r
## Related pages\r
\r
- [Adding a spool](/docs/inventory/adding-a-spool/)\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
- [Search, filter, and sort](/docs/inventory/search-filter-and-sort/)\r
`;export{e as default};
