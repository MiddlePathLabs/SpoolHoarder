const e=`---\r
title: Tracking remaining weight\r
description: The ways spool weight goes down, how to correct it against a real scale, and why it never goes negative.\r
order: 8\r
status: published\r
updated: 2026-08-26\r
keywords:\r
  - remaining weight\r
  - weight\r
  - grams\r
  - deduct\r
  - weigh spool\r
  - kitchen scale\r
  - accuracy\r
  - refill\r
  - negative weight\r
  - filament only\r
  - total scale weight\r
  - tare\r
  - empty spool weight\r
platforms:\r
  - all\r
---\r
\r
Remaining weight is the number Spool Hoarder uses for everything from the color ring on a card to low-stock warnings, so it helps to know how it moves and how to keep it honest.\r
\r
## How weight goes down\r
\r
Three things reduce remaining weight:\r
\r
1. **Logging usage.** Whenever you record grams used against a project, that amount is subtracted from the spool. If a log would use more than the spool has left, Spool Hoarder stops it with a message such as "Only 120g remaining".\r
2. **Correcting it by hand.** Tap the **Remaining** card on the spool detail screen to type the real weight from a scale.\r
3. **Marking a spool used up.** **More** (⋯) → **Mark Used Up** zeroes the weight and sets the spool's status to used up in one step. Whatever was left is recorded on the spool first, and if any filament is still on it you are asked to confirm, with **Mark Discarded** offered as the alternative. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).\r
\r
Adding a usage log also works in reverse: if you delete a log by mistake, its grams are added back onto the spool automatically. And when a usage log takes a spool to exactly zero, Spool Hoarder offers to mark it used up for you.\r
\r
## Reconciling against a real scale\r
\r
Filament can drift from what the app thinks — moisture loss, a messy first layer, or a spool that arrived part-used. To correct it, open the spool and tap the **Remaining** card (or the pencil icon beside it). The **Adjust remaining weight** dialog has a single field, **Remaining weight (g)**, where you type the number your scale shows. Tap **Save** and the spool updates.\r
\r
The value you enter is capped between zero and the spool's full size, so you cannot accidentally set it higher than the spool could ever hold. When a spool is empty, the same dialog is how you record a refill — type the new weight to bring it back into use.\r
\r
## Filament only vs. total scale weight\r
\r
Settings → Appearance → **Weight Display** controls whether the weights Spool Hoarder shows and tracks include the empty spool itself:\r
\r
- **Scale weight** (the default) — the number you'd read straight off a kitchen scale with the spool on it: filament plus the empty spool.\r
- **Filament only** — just the net filament, with the empty spool's weight (its tare) subtracted out.\r
\r
This setting is global — it changes how weight is displayed and entered everywhere: spool cards, the **Remaining** card, low-stock thresholds, and usage logging all switch to the same basis at once.\r
\r
### Switching to Filament only\r
\r
The first time you switch to **Filament only**, Spool Hoarder needs to know how much of each existing spool's recorded weight is filament versus empty spool. If any of your spools don't already have that worked out, a **Set up filament weights** dialog walks you through it: pick a filament capacity for each one (a few common sizes are suggested, or enter your own), and Spool Hoarder works out the empty spool weight and converts the stored remaining weight to net filament. Nothing is changed until you confirm, and a spool with a scale reading that doesn't add up shows an error instead of saving a bad conversion.\r
\r
New spools you add after switching don't need this — their spool size is already recorded on the basis you've selected.\r
\r
## Why weight never goes negative\r
\r
Spool Hoarder guards remaining weight in several places so it can never drop below zero. Every deduction clamps the result at zero, the usage-log path refuses a log that would overdraw the spool, and the storage layer itself blocks any negative value from being written. You will see an error rather than a negative number.\r
\r
## How "used" is calculated\r
\r
Remaining weight is a stored value that changes as you log usage. "Used" is not stored — it is the total of every usage log recorded for the spool, added up on the fly. The two are independent: changing the spool size does not rewrite the remaining weight, and the remaining weight is not derived by subtracting usage from the size.\r
\r
This is why correcting the weight by hand is safe: it brings the stored number in line with reality without affecting any past log.\r
\r
## Related pages\r
\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)\r
- [Favourites and low stock](/docs/inventory/favorites-and-low-stock/)\r
`;export{e as default};
