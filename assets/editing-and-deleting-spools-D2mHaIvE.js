const e=`---\r
title: Editing and deleting spools\r
description: Change a spool after the fact, mark it depleted, and understand what delete really does.\r
order: 3\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - edit spool\r
  - change spool\r
  - delete spool\r
  - remove spool\r
  - depleted\r
  - empty spool\r
  - undo delete\r
  - recover spool\r
platforms:\r
  - all\r
---\r
\r
You can change or remove any spool from its detail screen. Two operations sometimes get confused — **mark depleted** and **delete** — and they do different things.\r
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
## Mark depleted\r
\r
**More** (⋯) → **Mark depleted** sets the spool to empty. It does two things at once: it zeroes the remaining weight and flags the spool as depleted. The spool stays in your inventory at 0g, and a message appears with an **Undo** option to restore the previous weight.\r
\r
A depleted spool is grayed out and sorts below active spools. Its **Log Usage** and **Start Project** buttons are disabled until you undo it or correct the weight.\r
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
Yes. The free tier allows up to **50 spools**, and that count is based on the spools currently in your inventory. Deleting one frees its slot so you can add another. A Pro subscription removes the limit everywhere. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/) for which platforms the cap applies on.\r
\r
### What happens to usage logs and projects\r
\r
Deleting a spool does not delete the usage logs recorded against it, and it does not recalculate any project totals. Those logs simply become invisible because they belong to a spool that no longer appears. If you later undo the delete, the logs reattach automatically.\r
\r
## Mark depleted or delete?\r
\r
- Use **Mark depleted** when a spool is genuinely finished and you want to keep its history visible — for example, to see what you printed with it.\r
- Use **Delete spool** when you want the spool gone entirely, such as a duplicate added by mistake.\r
\r
## Related pages\r
\r
- [Adding a spool](/docs/inventory/adding-a-spool/)\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
`;export{e as default};
