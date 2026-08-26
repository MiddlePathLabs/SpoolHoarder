const e=`---
title: Tracking remaining weight
description: The ways spool weight goes down, how to correct it against a real scale, and why it never goes negative.
order: 8
status: published
updated: 2026-08-26
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
  - filament only
  - total scale weight
  - tare
  - empty spool weight
platforms:
  - all
---

Remaining weight is the number Spool Hoarder uses for everything from the color ring on a card to low-stock warnings, so it helps to know how it moves and how to keep it honest.

## How weight goes down

Three things reduce remaining weight:

1. **Logging usage.** Whenever you record grams used against a project, that amount is subtracted from the spool. If a log would use more than the spool has left, Spool Hoarder stops it with a message such as "Only 120g remaining".
2. **Correcting it by hand.** Tap the **Remaining** card on the spool detail screen to type the real weight from a scale.
3. **Marking a spool used up.** **More** (⋯) → **Mark Used Up** zeroes the weight and sets the spool's status to used up in one step. Whatever was left is recorded on the spool first, and if any filament is still on it you are asked to confirm, with **Mark Discarded** offered as the alternative. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).

Adding a usage log also works in reverse: if you delete a log by mistake, its grams are added back onto the spool automatically. And when a usage log takes a spool to exactly zero, Spool Hoarder offers to mark it used up for you.

## Reconciling against a real scale

Filament can drift from what the app thinks — moisture loss, a messy first layer, or a spool that arrived part-used. To correct it, open the spool and tap the **Remaining** card (or the pencil icon beside it). The **Adjust remaining weight** dialog has a single field, **Remaining weight (g)**, where you type the number your scale shows. Tap **Save** and the spool updates.

The value you enter is capped between zero and the spool's full size, so you cannot accidentally set it higher than the spool could ever hold. When a spool is empty, the same dialog is how you record a refill — type the new weight to bring it back into use.

## Filament only vs. total scale weight

Settings → Appearance → **Weight Display** controls whether the weights Spool Hoarder shows and tracks include the empty spool itself:

- **Scale weight** (the default) — the number you'd read straight off a kitchen scale with the spool on it: filament plus the empty spool.
- **Filament only** — just the net filament, with the empty spool's weight (its tare) subtracted out.

This setting is global — it changes how weight is displayed and entered everywhere: spool cards, the **Remaining** card, low-stock thresholds, and usage logging all switch to the same basis at once.

### Switching to Filament only

The first time you switch to **Filament only**, Spool Hoarder needs to know how much of each existing spool's recorded weight is filament versus empty spool. If any of your spools don't already have that worked out, a **Set up filament weights** dialog walks you through it: pick a filament capacity for each one (a few common sizes are suggested, or enter your own), and Spool Hoarder works out the empty spool weight and converts the stored remaining weight to net filament. Nothing is changed until you confirm, and a spool with a scale reading that doesn't add up shows an error instead of saving a bad conversion.

New spools you add after switching don't need this — their spool size is already recorded on the basis you've selected.

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
