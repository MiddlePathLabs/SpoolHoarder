const e=`---
title: Tracking remaining weight
description: The ways spool weight goes down, how to correct it against a real scale, and why it never goes negative.
order: 8
status: published
updated: 2026-08-04
keywords:
  - remaining weight
  - weight
  - grams
  - deduct
  - weigh spool
  - kitchen scale
  - accuracy
  - refill
  - negative weight
platforms:
  - all
---

Remaining weight is the number Spool Hoarder uses for everything from the colour ring on a card to low-stock warnings, so it helps to know how it moves and how to keep it honest.

## How weight goes down

Three things reduce remaining weight:

1. **Logging usage.** Whenever you record grams used against a project, that amount is subtracted from the spool. If a log would use more than the spool has left, Spool Hoarder stops it with a message such as "Only 120g remaining".
2. **Correcting it by hand.** Tap the **Remaining** card on the spool detail screen to type the real weight from a scale.
3. **Marking a spool depleted.** This zeroes the weight and flags the spool as empty in one step.

Adding a usage log also works in reverse: if you delete a log by mistake, its grams are added back onto the spool automatically.

## Reconciling against a real scale

Filament can drift from what the app thinks — moisture loss, a messy first layer, or a spool that arrived part-used. To correct it, open the spool and tap the **Remaining** card (or the pencil icon beside it). The **Adjust remaining weight** dialog has a single field, **Remaining weight (g)**, where you type the number your scale shows. Tap **Save** and the spool updates.

The value you enter is capped between zero and the spool's full size, so you cannot accidentally set it higher than the spool could ever hold. When a spool is empty, the same dialog is how you record a refill — type the new weight to bring it back into use.

## Why weight never goes negative

Spool Hoarder guards remaining weight in several places so it can never drop below zero. Every deduction clamps the result at zero, the usage-log path refuses a log that would overdraw the spool, and the storage layer itself blocks any negative value from being written. You will see an error rather than a negative number.

## How "used" is calculated

Remaining weight is a stored value that changes as you log usage. "Used" is not stored — it is the total of every usage log recorded for the spool, added up on the fly. The two are independent: changing the spool size does not rewrite the remaining weight, and the remaining weight is not derived by subtracting usage from the size.

This is why correcting the weight by hand is safe: it brings the stored number in line with reality without affecting any past log.

## Related pages

- [The spool detail screen](/docs/inventory/spool-details/)
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)
- [Favourites and low stock](/docs/inventory/favorites-and-low-stock/)
`;export{e as default};
