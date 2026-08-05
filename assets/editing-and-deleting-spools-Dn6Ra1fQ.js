const e=`---
title: Editing and deleting spools
description: Change a spool after the fact, mark it depleted, and understand what delete really does.
order: 3
status: published
updated: 2026-08-04
keywords:
  - edit spool
  - change spool
  - delete spool
  - remove spool
  - depleted
  - empty spool
  - undo delete
  - recover spool
platforms:
  - all
---

You can change or remove any spool from its detail screen. Two operations sometimes get confused — **mark depleted** and **delete** — and they do different things.

## Editing a spool

Open a spool and tap **More** (⋯) → **Edit spool**. You get the same form as [adding a spool](/docs/inventory/adding-a-spool/), already filled in.

Edit mode has no **Save** button. Your changes save automatically when you back out of the screen. If something is stopping the save — a required field left blank, for example — Spool Hoarder asks whether to keep editing or discard the invalid changes. The trash icon in the top bar deletes the spool directly from the edit screen.

### What edits do not change

Editing a spool never rewrites the past. Usage logs you already recorded keep the per-gram price they had at the time, so changing a spool's price or spool size today affects only new logs, not old ones. Adjusting the remaining weight directly only changes the number on the spool; it does not create or edit any usage log.

## Mark depleted

**More** (⋯) → **Mark depleted** sets the spool to empty. It does two things at once: it zeroes the remaining weight and flags the spool as depleted. The spool stays in your inventory at 0g, and a message appears with an **Undo** option to restore the previous weight.

A depleted spool is greyed out and sorts below active spools. Its **Log Usage** and **Start Project** buttons are disabled until you undo it or correct the weight.

## Delete a spool

**More** (⋯) → **Delete spool** removes the spool from your inventory. A confirmation asks you to confirm, then a message appears offering an **Undo**.

Delete is a soft delete: the spool is hidden from every list, search, and count, but it is not erased from your device immediately. The undo link in the message restores it.

### Undo is your only way back

There is no trash bin or deleted-items screen. The **Undo** link in the message is the only way to recover a deleted spool, and it disappears after a few seconds. Once it is gone, the spool is no longer reachable anywhere in the app.

### Does deleting free up a slot?

Yes. On iPhone, iPad, Mac, and Windows the free tier allows up to **50 spools**, and that count is based on the spools currently in your inventory. Deleting one frees its slot so you can add another. The web and Linux builds have no limit, and a Pro subscription removes the limit everywhere.

### What happens to usage logs and projects

Deleting a spool does not delete the usage logs recorded against it, and it does not recalculate any project totals. Those logs simply become invisible because they belong to a spool that no longer appears. If you later undo the delete, the logs reattach automatically.

## Mark depleted or delete?

- Use **Mark depleted** when a spool is genuinely finished and you want to keep its history visible — for example, to see what you printed with it.
- Use **Delete spool** when you want the spool gone entirely, such as a duplicate added by mistake.

## Related pages

- [Adding a spool](/docs/inventory/adding-a-spool/)
- [The spool detail screen](/docs/inventory/spool-details/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
`;export{e as default};
