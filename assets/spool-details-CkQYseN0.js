const e=`---
title: The spool detail screen
description: What you see when you open a spool, and everything you can do from there.
order: 2
status: published
updated: 2026-08-04
keywords:
  - spool detail
  - spool details
  - open a spool
  - remaining weight
  - usage history
  - print settings
  - color advisor
  - share spool
platforms:
  - all
---

Tap any spool card in the inventory list to open its detail screen. Everything about a single spool lives here: how much is left, what it costs, how to print with it, where it has been used, and what colors pair with it.

## What is on the screen

From top to bottom:

- **Hero card** — the brand and material, a color ring in the spool's own color (or color sweep, for multicolor filament), the remaining weight, and a reference photo if you added one.
- **Remaining** card — the current weight in grams and an estimate of remaining filament length in meters (when density is known). Tap this card to correct the weight against a real scale; see [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/). On phone-width screens, where the hero card doesn't have room to show stock status itself, this card's ring instead turns green above 40% remaining, amber from 15%, and red below 15%.
- **Log Usage** and **Start Project** — quick actions for recording consumption or beginning a new print.
- **Location** and **Loaded on** — where the spool is stored and which printer has it loaded. Tap either to change it.
- **Print Settings** — the nozzle and bed temperatures, flow ratio, and K-factor, with an **Edit** button to tune them per printer.
- **Details** — purchase price and source, material, diameter, and other attributes, grouped under **Purchase & Lifecycle** and **Properties & Features**.
- **Color Suggestions** — color-pairing ideas drawn from the rest of your inventory. You can turn this off in Settings → Preferences → Color Advisor Suggestions.
- **Notes** — your notes, or an **Add a note** prompt if empty.
- **Used in Projects** — a rolled-up history of every project that has drawn from this spool.

The hero card's ring always reflects the spool's own color — it never changes based on how much is left. Only the compact-layout **Remaining** card's ring is a stock-level indicator.

## Actions

The full action set — **Edit spool**, **Share**, **NFC Tag**, **Add another spool**, **Buy again**, **Mark depleted**, and **Delete spool** — is always reachable, but where it lives depends on screen width. On wide layouts the hero card shows dedicated favorite/edit/share buttons directly, with the rest tucked into a **More** (⋯) menu. On phone-width screens those buttons aren't shown on the hero itself; all actions instead live behind a single **More** button on the weight-action strip below it.

- **Edit spool** — opens the same form used to add a spool.
- **Share** — creates a shareable image card for the spool. On iPhone, iPad, Mac, and Android it opens the system share sheet; on Windows it saves a PNG file.
- **NFC Tag** — write, link, or unlink a physical NFC tag, when your device supports NFC.
- **Add another spool** — start a new spool prefilled with this one's details.
- **Buy again** — open the purchase link, if you saved one.
- **Mark depleted** — zero out the weight and flag the spool as empty. You can undo this.
- **Delete spool** — remove the spool. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).

The heart icon adds the spool to your favorites — see [Favorites and low stock](/docs/inventory/favorites-and-low-stock/).

## How usage and remaining weight relate

**Remaining weight** is a stored value that drops each time you log usage against the spool. **Lifetime used** is the total of every usage log ever recorded for the spool, added up on demand. They are tracked separately: remaining weight is not computed by subtracting usage from the spool size.

The **Used in Projects** list rolls usage logs up by project and day, so several prints in the same project on the same date appear as one entry showing the combined grams. Tap an entry to open that project. The list shows three entries by default with a **Show all** option when there are more.

## Print settings

The **Print Settings** card shows the nozzle temperature, bed temperature, flow ratio, and K-factor stored on the spool. These come from the values you entered when adding or editing the spool.

When you assign the spool to a printer, you can also set per-printer overrides — for example, a slightly different nozzle temperature for one printer. The card shows which value applies and lets you tune it without changing the spool's defaults.

## Color suggestions

The **Color Suggestions** card proposes color pairings based on color theory, using the spools you already own. Each suggestion shows the palette, your in-stock spools that fit, and colors you do not yet own. It draws only from materials compatible with this spool.

This card is on by default. Turn it off in Settings → Preferences with the **Color Advisor Suggestions** toggle. It is available to everyone on every platform.

## Related pages

- [Adding a spool](/docs/inventory/adding-a-spool/)
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
- [Favorites and low stock](/docs/inventory/favorites-and-low-stock/)
`;export{e as default};
