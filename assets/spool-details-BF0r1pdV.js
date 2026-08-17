const e=`---\r
title: The spool detail screen\r
description: What you see when you open a spool, and everything you can do from there.\r
order: 2\r
status: published\r
updated: 2026-08-17\r
keywords:\r
  - spool detail\r
  - spool details\r
  - open a spool\r
  - remaining weight\r
  - usage history\r
  - print settings\r
  - color advisor\r
  - share spool\r
  - last dried\r
  - drying\r
  - dry record\r
  - transmission distance\r
  - td1 verified\r
  - add another spool\r
  - duplicate spool\r
  - scan barcode\r
platforms:\r
  - all\r
---\r
\r
Tap any spool card in the inventory list to open its detail screen. Everything about a single spool lives here: how much is left, what it costs, how to print with it, where it has been used, and what colors pair with it.\r
\r
## What is on the screen\r
\r
From top to bottom:\r
\r
- **Hero card** — the brand and material, a color ring in the spool's own color (or color sweep, for multicolor filament), the remaining weight, and a reference photo if you added one.\r
- **Remaining** card — the current weight in grams and an estimate of remaining filament length in meters (when density is known). Tap this card to correct the weight against a real scale; see [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/). On phone-width screens, where the hero card doesn't have room to show stock status itself, this card's ring instead turns green above 40% remaining, amber from 15%, and red below 15%.\r
- **Log Usage** and **Start Project** — quick actions for recording consumption or beginning a new print.\r
- **Location** and **Loaded on** — where the spool is stored and which printer has it loaded. Tap either to change it.\r
- **Print Settings** — the nozzle and bed temperatures, flow ratio, and K-factor, with an **Edit** button to tune them per printer.\r
- **Details** — purchase price and source, material, diameter, and other attributes, grouped under **Purchase & Lifecycle** and **Properties & Features**.\r
- **Color Suggestions** — color-pairing ideas drawn from the rest of your inventory. You can turn this off in Settings → Preferences → Color Advisor Suggestions.\r
- **Notes** — your notes, or an **Add a note** prompt if empty.\r
- **Used in Projects** — a rolled-up history of every project that has drawn from this spool.\r
\r
The hero card's ring always reflects the spool's own color — it never changes based on how much is left. Only the compact-layout **Remaining** card's ring is a stock-level indicator.\r
\r
## Actions\r
\r
The full action set — **Edit spool**, **Share**, **NFC Tag**, **Add another spool**, **Buy again**, **Mark depleted**, and **Delete spool** — is always reachable, but where it lives depends on screen width. On wide layouts the hero card shows dedicated favorite/edit/share buttons directly, with the rest tucked into a **More** (⋯) menu. On phone-width screens those buttons aren't shown on the hero itself; all actions instead live behind a single **More** button on the weight-action strip below it.\r
\r
- **Edit spool** — opens the same form used to add a spool.\r
- **Share** — creates a shareable image card for the spool. On iPhone, iPad, Mac, and Android it opens the system share sheet; on Windows it saves a PNG file.\r
- **NFC Tag** — write, link, or unlink a physical NFC tag, when your device supports NFC.\r
- **Add another spool** — create one or more duplicates of this spool. See [Add another spool](#add-another-spool) below.\r
- **Buy again** — open the purchase link, if you saved one.\r
- **Mark depleted** — zero out the weight and flag the spool as empty. You can undo this.\r
- **Delete spool** — remove the spool. See [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/).\r
\r
The heart icon adds the spool to your favorites — see [Favorites and low stock](/docs/inventory/favorites-and-low-stock/).\r
\r
## Add another spool\r
\r
**Add another spool** opens a dialog for creating duplicates of the current spool, rather than taking you straight to the add form:\r
\r
- **Quantity** — create up to ten identical duplicates in one go.\r
- **Price per new spool** — optional. Leave it blank to copy the source spool's price, or enter a different price to use for all the duplicates created this time.\r
- **Create as variant** — instead of duplicating immediately, this opens the add-spool form prefilled with the source spool's brand, material, spool size, and quantity, so you can review and change details before saving. Checking this hides the price field, since the form itself covers price.\r
\r
With **Create as variant** unchecked, tapping **Add** creates the duplicate(s) immediately with a full copy of the source spool's details — no review step. This is the fast path for restocking an identical spool; use **Create as variant** when the new spool differs in some way, such as a different color or purchase source.\r
\r
A grouped card's menu also has an **Add another spool** action. It works the same way, but leaves out **Purchase Source**, **Inventory Location**, **Notes**, and price — the fields most likely to differ between individual spools in the group — while still copying everything else, including diameter, spool size, and technical settings.\r
\r
## How usage and remaining weight relate\r
\r
**Remaining weight** is a stored value that drops each time you log usage against the spool. **Lifetime used** is the total of every usage log ever recorded for the spool, added up on demand. They are tracked separately: remaining weight is not computed by subtracting usage from the spool size.\r
\r
The **Used in Projects** list rolls usage logs up by project and day, so several prints in the same project on the same date appear as one entry showing the combined grams. Tap an entry to open that project. The list shows three entries by default with a **Show all** option when there are more.\r
\r
## Print settings\r
\r
The **Print Settings** card shows the nozzle temperature, bed temperature, flow ratio, and K-factor stored on the spool. These come from the values you entered when adding or editing the spool.\r
\r
When you assign the spool to a printer, you can also set per-printer overrides — for example, a slightly different nozzle temperature for one printer. The card shows which value applies and lets you tune it without changing the spool's defaults.\r
\r
## Transmission distance and the TD1 badge\r
\r
The **Details** card carries a **Transmission Distance** row with a scan button\r
next to it. Transmission distance describes how far light travels through the\r
filament, which is what HueForge and similar tools need in order to plan layered\r
color prints.\r
\r
When a value comes from a TD1 scan rather than being typed in, the row gets a\r
small **TD1** badge that reads **Confirmed by TD1 scan**. The **Color Hex Codes**\r
row gets the same badge. Once both are confirmed, a **TD1 verified** badge\r
appears at the top of the **Properties & Features** group, and the scan button\r
changes from **Scan TD1** to **Rescan TD1**.\r
\r
Editing either value by hand clears its badge, because the stored number no\r
longer matches what the scanner measured. See\r
[Scanning with a TD1](/docs/scanning/td1-scanner/).\r
\r
## Drying records\r
\r
**Last Dried** sits in the **Details** card under **Purchase & Lifecycle**, and\r
only appears once a date is set. Set it from **Edit spool** — the field is a date\r
picker, alongside **Date Opened**.\r
\r
Nothing dries filament for you and there is no reminder schedule; the date is a\r
record you keep. The Stats dashboard uses it though: the **Needs Attention** list\r
flags spools that have no dry record at all, so filling it in is what clears them\r
from that list. See [Statistics dashboard](/docs/insights/statistics-dashboard/).\r
\r
## Color suggestions\r
\r
The **Color Suggestions** card proposes color pairings based on color theory, using the spools you already own. Each suggestion shows the palette, your in-stock spools that fit, and colors you do not yet own. It draws only from materials compatible with this spool.\r
\r
This card is on by default. Turn it off in Settings → Preferences with the **Color Advisor Suggestions** toggle. It is available to everyone on every platform.\r
\r
## Related pages\r
\r
- [Adding a spool](/docs/inventory/adding-a-spool/)\r
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
- [Favorites and low stock](/docs/inventory/favorites-and-low-stock/)\r
- [Scanning with a TD1](/docs/scanning/td1-scanner/)\r
`;export{e as default};
